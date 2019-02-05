/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-02-05 17:13:17
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
    console.log(`username${username},password${password}`)
    tableName = type === 0 ? 'admin_user_table' : 'customer_user_info';
    let user = await app.mysql.get('admin_user_table', {
      username
    });
    if (!user) {
      return this.fail('账号不存在');
    } else if (user.password === password) {
      return this.fail('密码错误');
    }

    this.success(user.id);
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
      realName,
      phone,
      email,
      points: points || 0,
      grade: grade || 0,
      modification_user_id: modificationUserId || id,
      modification_ser_type: modificationUserType || 1,
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
}

module.exports = CommonController;