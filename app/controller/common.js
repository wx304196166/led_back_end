/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-01-06 20:12:22
 * @Description: 
 */
'use strict';

// const md5 = require('md5');
const Controller = require('../../core/base_controller');
const uuid = require('uuid/v4');
class UserCommonController extends Controller {

  // 登录
  async login() {
    const {
      ctx,
      app
    } = this;
    const {
      userName,
      password
    } = ctx.request.body;
    console.log(`userName${userName},password${password}`)
    let user = await app.mysql.get('admin_user_table', {
      username: userName,
      password
    });
    if (!user) {
      return this.fail(ctx.ERROR_CODE, '账号或密码错误');
    }
    this.success('有该用户');
  }
  // 创建客户
  async createCustomer() {
    const {
      ctx,
      app
    } = this;
    const {
      userName,
      password
    } = ctx.request.body;

    let user = await app.mysql.get('admin_user_table', {
      username: userName
    });
    if (user) {
      return this.fail(ctx.ERROR_CODE, '用户名已存在')
    }
    let id = uuid().replace(/\-/g, '');
    let res = await app.mysql.insert('admin_user_table', {
      id,
      username: userName,
      password
    });
    if (!res) {
      return this.fail(ctx.ERROR_CODE, '创建失败');
    }
    this.success('创建成功');
  }
  // 客户用户注销登录
  logout() {
    this.ctx.removeToken();
    this.success();
  }
}

module.exports = UserCommonController;