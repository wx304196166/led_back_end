/*
 * @Author: Mario X Wang
 * @Date: 2019-01-05 15:39:45
 * @LastEditTime: 2019-02-03 19:22:50
 * @Description: 总配置文件
 */
'use strict';

module.exports = appInfo => {
  const config = {}
  // 单数据库信息配置
  config.mysql = {
    client: {
      // host
      host: '127.0.0.1',
      // 端口号
      port: '3306',
      // 用户名
      user: 'root',
      // 密码
      password: '201805',
      // 数据库名
      database: 'led_db',
    },
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  config.static = {
    prefix: '/'
  };
  return config;
}