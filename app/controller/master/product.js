/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 18:56:28
 * @LastEditTime: 2019-02-20 09:18:59
 * @Description: 
 */
'use strict';

const Controller = require('../../core/base_controller');
const path = require('path');
const fs = require('fs');

class ProductController extends Controller {
  // 删除
  async destroy() {
    const {
      ctx,
      service
    } = this;
    const {
      id,
      imgs
    } = ctx.request.body;
    const tableName = ctx.params.index + '_info';
    const res = await service.master.crud.del(tableName, id);

    if (res.success) {
      const publicPath = path.join(this.config.baseDir, '/app/public/upload/product/');
      for (const item of imgs) {
        fs.unlink(publicPath + item,err=>{
          if(err){
            throw err;
          }
        });
      }
      this.success(res.result);
    } else {
      this.fail(res.message)
    }
  }

}

module.exports = ProductController;