/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-02-14 19:56:46
 * @Description: 
 */
'use strict';

const md5 = require('md5');
const uuid = require('uuid/v4');
const fs = require('mz/fs');
const Controller = require('../core/base_controller');
const path = require('path');
class CommonController extends Controller {
  // 上传文件
  async upload() {
    const {
      ctx
    } = this;
    const index = ctx.params.index;
    const id = ctx.request.body.id || uuid().replace(/\-/g, '');
    const type = ctx.request.body.type;
    if (!type) {
      this.fail('上传文件必须包含type');
      return;
    }
    const baseDir = this.config.baseDir;
    let arr = [];
    for (let i = 0; i < ctx.request.files.length; i++) {
      const file = ctx.request.files[i];
      const filename = `${type}_${id}_${i}${path.extname(file.filename)}`
      const filepath = path.join(baseDir, `/app/public/upload/${index}/${filename}`);
      const data = await fs.readFile(file.filepath);

      let err;
      try {
        err = await fs.writeFile(filepath, data);
      } finally {
        // 需要删除临时文件
        await fs.unlink(file.filepath);
      }
      if (err) {
        console.log(err);
        this.fail('文件写入失败');
        return;
      }
      arr.push(filename);
    }
    this.success({
      imgList: arr,
      productId: id
    });

  }
  // 查询多个表返回 id/名称 映射
  async queryAllByList() {
    const {
      ctx,
      service
    } = this;
    const tableNames = ctx.request.body;
    const map = {
      classification_id: {},
      brand_id: {},
      label_id: {},
      product_id: {},
      modification_user_id: {}
    }
    const userMap = {
      customer_user: 'modification_user'
    }
    for (const tableName of tableNames) {
      const res = await service.master.crud.queryAll(tableName + '_info');
      if (res.success) {
        for (const item of res.result) {
          const name = userMap[tableName] || tableName
          map[`${name}_id`][item.id] = item.name || item.username;
        }
      } else {
        this.fail('查询失败');
        return;
      }
    }
    this.success(map);
  }
  // 条件精确查询全表

  async queryAllByCondition() {

    const {
      name,
      condition
    } = this.ctx.request.body
    const tableName = name+'_info';
    const result = await this.app.mysql.select(tableName, {where:condition});
    this.success(result);
  }
  // 登录
  async login() {
    const {
      ctx,
      app
    } = this;
    const {
      username,
      password,
      type
    } = ctx.request.body;
    const tableName = type === 0 ? 'admin_user_info' : 'customer_user_info';
    const user = await app.mysql.get(tableName, {
      username
    });
    if (!user) {
      return this.fail('账号不存在');
    } else if (user.password !== md5(password)) {
      return this.fail('密码错误');
    }
    this.setInfo(type, user);

  }
  // 检测用户名重复
  async check() {
    const {
      ctx,
      app
    } = this;
    const {
      username,
      type
    } = ctx.query;
    tableName = type === 0 ? 'admin_user_info' : 'customer_user_info';

    let user = await app.mysql.get(tableName, {
      username
    });
    if (user) {
      this.fail('用户名已存在')
    } else {
      this.success('ok')
    }
  }
  // 获取用户信息
  async getUserInfo() {
    const {
      ctx,
      app
    } = this;
    const {
      token,
      type
    } = ctx.request.body;
    const tableName = type === 0 ? 'admin_user_info' : 'customer_user_info';

    const user = await app.mysql.get(tableName, {
      id: token
    });
    this.setInfo(type, user);
  }
  // 注册客户
  async createCustomer() {
    const {
      ctx,
      app
    } = this;
    const {
      username,
      password,
      realName,
      real_name,
      phone,
      email,
      points,
      grade,
      modificationUserId,
      modification_user_id,
      modificationUserType,
      modification_user_type,
    } = ctx.request.body;

    let user = await app.mysql.get('customer_user_info', {
      username
    });
    if (user) {
      return this.fail('User name already exists')
    }
    const id = uuid().replace(/\-/g, '');

    const data = {
      id,
      username,
      password: md5(password),
      real_name: realName || real_name,
      phone,
      email,
      points: points || 0,
      grade: grade || 0,
      modification_user_id: modificationUserId || id,
      modification_user_type: modificationUserType || 1,
      modification_time: this.app.mysql.literals.now,
      create_time: this.app.mysql.literals.now,
      create_user_id: modificationUserId || id,
      create_user_type: modificationUserType || 1,
    };
    if (modification_user_id !== undefined && modification_user_type !== undefined) {
      data.modification_user_id = modification_user_id;
      data.modification_user_type = modification_user_type;
      data.create_user_id = modification_user_id;
      data.create_user_type = modification_user_type;
    }

    const result = await app.mysql.insert('customer_user_info', data);
    const flag = result.affectedRows === 1;

    if (flag) {
      this.success(id);
    } else {
      this.fail(result.message);
    }

  }
  // 修改密码
  async resetPassword() {
    const {
      ctx,
      app
    } = this;
    const recieve = ctx.request.body;
    recieve.modification_time = this.app.mysql.literals.now;
    if (recieve.modificationUserType) {
      const user = await app.mysql.get('customer_user_info', {
        id: recieve.id,
        password: recieve.password,
        modification_time: recieve.modification_time,
        modification_user_id: recieve.modification_user_id,
        modification_user_type: recieve.modification_user_type
      });
      if (user) {
        const result = await app.mysql.update('customer_user_info', {
          id: recieve.id,
          password: md5(recieve.newPassword)
        })
        const flag = result.affectedRows === 1;
        if (flag) {
          this.success('Reset Success!');
        } else {
          this.fail(result.message);
        }
      }
    } else {
      if (recieve.password === '') {
        delete recieve.password;
      }
      if (recieve.password) {
        recieve.password = md5(recieve.password);
      }
      const result = await app.mysql.update('customer_user_info', recieve)
      const flag = result.affectedRows === 1;
      if (flag) {
        this.success('Reset Success!');
      } else {
        this.fail(result.message);
      }
    }
  }
  // 客户用户注销登录
  /* logout() {
    
  } */
  // 私有方法
  async setInfo(type, user) {
    let info
    if (type === 0) {
      info = {
        username: user.username,
        type
      }
    } else {
      info = {
        username: user.username,
        realName: user.real_name,
        phone: user.phone,
        email: user.email,
        type
      }
    }
    this.success({
      token: user.id,
      info
    });
  }
}

module.exports = CommonController;