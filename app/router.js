/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 15:39:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-01-06 20:04:51
 * @Description: 路由
 */

'use strict';

module.exports = app => {
  const {
    router,
    controller
  } = app;
  const {
    user
  } = controller;

  router.options('*', async ctx => {
    ctx.body = 'ok';
  });
  // 测试页面
  // router.get('/test', testHtml.index);
  // 后台管理服务
  router.post('/user/login', user.common.login);

  router.post('/user/createCustomer', user.common.createCustomer);

  // router.post('/user/logout', user.common.logout);
};