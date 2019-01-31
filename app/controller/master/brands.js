/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-01-31 13:47:51
 * @Description: 
 */
'use strict';

// const md5 = require('md5');
const Controller = require('../../core/base_controller');
const tableName = 'brand_info';

class BrandsCommonController extends Controller {
  // 获取分页列表
  async index() {
    const {
      ctx,
      service
    } = this;
    const {
      current,
      limit
    } = ctx.request.body;
    const res = service.master.crud.index(tableName, current, limit);
    if (res.success) {
      this.success(res.result);
    } else {
      this.fail(res.message)
    }
  }
  // 创建
  async create() {
    const {
      ctx,
      service
    } = this;
    const {
      data
    } = ctx.request.body;
    const res = service.master.crud.create(tableName, data);
    if (res.success) {
      this.success(res.result);
    } else {
      this.fail(res.message)
    }
  }
  // 更新
  async update() {
    const {
      ctx,
      service
    } = this;
    const {
      data
    } = ctx.request.body;
    const res = service.master.crud.update(tableName, data);
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
    const {
      id
    } = ctx.request.body;
    const res = service.master.crud.destroy(tableName, id);
    if (res.success) {
      this.success(res.result);
    } else {
      this.fail(res.message)
    }
  }

}

module.exports = BrandsCommonController;