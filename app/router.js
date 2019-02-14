/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 15:39:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-02-15 01:37:50
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
  /* -----------------前台应用接口----------------- */
  router.post('/api/v1/customer/integration/submit', controller.customer.integration.submit);

  /* -----------------后台管理接口---------------- */
  // 共用
  router.get('/api/v1/master/queryAll/:index', controller.master.crud.queryAll);
  router.post('/api/v1/master/queryMany/:index', controller.master.crud.queryMany);
  router.post('/api/v1/master/queryNumber', controller.master.crud.queryNumber);


  router.post('/api/v1/master/queryPageList/:index', controller.master.crud.queryPageList);
  router.post('/api/v1/master/create/:index', controller.master.crud.create);
  router.post('/api/v1/master/update/:index', controller.master.crud.update);
  router.delete('/api/v1/master/batchDelete/:index', controller.master.crud.destroy);
  // product
  router.delete('/api/v1/master/product/:index', controller.master.product.destroy);



  // 公共接口
  router.post('/api/v1/common/queryAllByList', controller.common.queryAllByList);
  router.post('/api/v1/common/queryAllByCondition', controller.common.queryAllByCondition);

  router.post('/api/v1/common/login', controller.common.login);
  router.post('/api/v1/common/getUserInfo', controller.common.getUserInfo);

  router.get('/api/v1/common/check', controller.common.check);
  router.post('/api/v1/common/createCustomer', controller.common.createCustomer);
  router.post('/api/v1/common/resetPassword', controller.common.resetPassword);

  router.post('/api/v1/common/upload/:index', controller.common.upload);
};