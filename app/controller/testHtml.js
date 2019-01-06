/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 15:39:45
 * @LastEditTime: 2019-01-06 19:31:48
 * @Description: 
 */
'use strict';
const fs = require('fs');
const Controller = require('../core/base_controller');

class testHtmlController extends Controller {
  async index() {
    const ctx = this.ctx;
    const _this=this;
    /* fs.readFile('./test.html', (err, data) => {
      if (err) {
        return _this.fail(ctx.ERROR_CODE, '无此页面');
      } else {
        _this.success(data);
      }
    }) */
    // _this.success('succ')
  }
}

module.exports = testHtmlController;