/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 15:39:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-01-30 11:09:10
 * @Description: 路由
 */

'use strict';

module.exports = app => {
  const {
    router,
    controller
  } = app;

  router.options('*', async ctx => {
    ctx.body = 'ok';
  });

  // 后台管理服务
  router.resources('brands', 'master/products/brands', controller.master.products.brands);
  router.resources('classifications', 'master/products/classifications', controller.master.products.classifications);
  router.resources('labels', 'master/products/labels', controller.master.products.labels);
  router.resources('products', 'master/products/products', controller.master.products.products);

  router.resources('integration', 'master/integration', controller.master.integration);
  router.resources('maintenance', 'master/maintenance', controller.master.maintenance);
  router.resources('users', 'master/users', controller.master.users);

  // 公共接口
  router.post('/user/login', controller.common.login);
  router.post('/user/createCustomer', controller.common.createCustomer);
};