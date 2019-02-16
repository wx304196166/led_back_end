/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-02-16 17:12:08
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
  // 获取主商品信息
  async getMainProduct() {
    const columns = ['id', 'name','classification_id','brand_id','label_id','thumbnail','intro','specifications','product_id','is_main'];
    const res = await this.app.mysql.select('product_info', {
      where: {
        is_Main: 1
      },
      columns
    });
    this.success(res);
  }
}

module.exports = IntegrationController;