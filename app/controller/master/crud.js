/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-02-15 10:49:10
 * @Description: 
 */
'use strict';

const Controller = require('../../core/base_controller');
const uuid = require('uuid/v4');
// const utils = require('../../utils')
class CrudController extends Controller {
  // 查询表条数
  async queryNumber() {
    const {
      ctx,
      service
    } = this;
    const tableNames = ctx.request.body;
    const res = await service.master.crud.queryNumber(tableNames);
    if (res.success) {
      this.success(res.result);
    } else {
      this.fail(res.message)
    }
  }
  // 查询全表
  async queryAll() {
    const {
      ctx,
      service
    } = this;
    const tableName = ctx.params.index + '_info';
    const res = await service.master.crud.queryAll(tableName);
    if (res.success) {
      this.success(res.result);
    } else {
      this.fail(res.message)
    }
  }
  
  // 查询多条数据
  async queryMany() {
    const {
      ctx,
      service
    } = this;
    const {
      ids,
      range
    } = ctx.request.body;
    const r = range === 'all' ? '*' : null;
    const tableName = ctx.params.index + '_info';
    const res = await service.master.crud.queryMany(tableName, ids, r);
    if (res.success) {
      this.success(res.result);
    } else {
      this.fail(res.message)
    }
  }
  // 模糊查询+分页列表
  async queryPageList() {
    const {
      ctx,
      service
    } = this;
    const {
      size,
      current,
      map
    } = ctx.request.body;
    const tableName = ctx.params.index + '_info';
    const res = await service.master.crud.queryPageList(tableName, size, current, map);

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
    const recieve = ctx.request.body;
    const tableName = ctx.params.index + '_info';

    recieve.id = recieve.id || uuid().replace(/\-/g, '');
    /* const data = {}
    for (const key in recieve) {
      data[utils.toLine(key)] = recieve[key]
    } */
    const res = await service.master.crud.create(tableName, recieve);
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
      this.fail(res.message)
    }
  }

}

module.exports = CrudController;