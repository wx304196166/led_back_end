/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 15:39:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-02-03 20:57:49
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
  router.post('/master/queryPageList/:index', controller.master.crud.queryPageList);
  router.post('/master/create/:index', controller.master.crud.create);
  router.post('/master/update/:index', controller.master.crud.update);
  router.delete('/master/batchDelete/:index', controller.master.crud.destroy);

  

  // 公共接口
  router.post('/user/login', controller.common.login);
  router.post('/user/createCustomer', controller.common.createCustomer);
};