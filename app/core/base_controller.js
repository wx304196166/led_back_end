'use strict';

const {
  Controller
} = require('egg');

/**
 * BaseController
 * @class
 * @author ruiyong-lee
 */
class BaseController extends Controller {

  success(data) {
    this.ctx.body = {
      code: 0,
      data
    };
    this.ctx.status = 200;
  }

  fail(message) {
    this.ctx.body = {
      code: 1,
      message
    };
    this.ctx.status = 200;
  }

  notFound(msg) {
    msg = msg || 'not found';
    this.ctx.throw(404, msg);
  }
}

module.exports = BaseController;