/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-02-14 18:56:34
 * @Description: 
 */
'use strict';

const Controller = require('../../core/base_controller');
const uuid = require('uuid/v4');
const tableName = 'integrate_info';
class IntegrationController extends Controller { 
  // 创建
  async submit() {
    const {
      ctx,
      service
    } = this;
    const recieve = ctx.request.body;
    recieve.id = uuid().replace(/\-/g, '');
   
    const res = await service.master.crud.create(tableName, recieve);
    if (res.success) {
      this.success(res.result);
    } else {
      this.fail(res.message);
    }
  }
  // 更新
  async update() {
    const {
      ctx,
      service
    } = this;
    const data = ctx.request.body;

    const tableName = ctx.params.index + '_info';
    data.modification_time = this.app.mysql.literals.now;
    /* const data = {}
    for (const key in recieve) {
      data[utils.toLine(key)] = recieve[key]
    } */
    const res = await service.master.crud.update(tableName, data);
    if (res.success) {
      this.success(res.result);
    } else {
      this.fail(res.message)
    }
  }
  // 删除
  async destroy() {
    const {
      ctx,
      service
    } = this;
    const recieve = ctx.request.body;
    const tableName = ctx.params.index + '_info';
    const res = await service.master.crud.destroy(tableName, recieve);
    if (res.success) {
      this.success(res.result);
    } else {
      this.fail(res.message);
    }
  }

}

module.exports = IntegrationController;