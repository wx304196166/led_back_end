/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-02-06 22:38:08
 * @Description: 
 */
'use strict';

// const md5 = require('md5');
const Controller = require('../core/base_controller');
const uuid = require('uuid/v4');
class CommonController extends Controller {

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
    const tableName = type === 0 ? 'admin_user_table' : 'customer_user_info';
    const user = await app.mysql.get(tableName, {
      username
    });

    if (!user) {
      return this.fail('账号不存在');
    } else if (user.password !== password) {
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
    tableName = type === 0 ? 'admin_user_table' : 'customer_user_info';

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
    const tableName = type === 0 ? 'admin_user_table' : 'customer_user_info';

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
      phone,
      email,
      points,
      grade,
      modificationUserId,
      modificationUserType
    } = ctx.request.body;

    let user = await app.mysql.get('customer_user_info', {
      username
    });
    if (user) {
      return this.fail('用户名已存在')
    }
    const id = uuid().replace(/\-/g, '');

    const data = {
      id,
      username,
      password,
      real_name: realName,
      phone,
      email,
      points: points || 0,
      grade: grade || 0,
      modification_user_id: modificationUserId || id,
      modification_user_type: modificationUserType || 1,
      modification_time: new Date()
    };


    let result = await app.mysql.insert('customer_user_info', data);
    const flag = result.affectedRows === 1;

    if (flag) {
      this.success(id);
    } else {
      this.fail('注册失败');
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