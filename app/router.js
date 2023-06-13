'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const _jwt = middleware.jwtErr(app.config.jwt.secret);
  router.post('/api/user/register', controller.user.register);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/edit_userinfo', _jwt, controller.user.editUserInfo); // 修改用户个性签名
  router.post('/api/upload', controller.upload.upload); //
  router.post('/api/bill/add', _jwt, controller.bill.add);
  router.post('/api/bill/update', _jwt, controller.bill.update);
  router.post('/api/bill/delete', _jwt, controller.bill.delete);
  router.get('/api/user/verifyUser', _jwt, controller.user.verifyUser);
  router.get('/api/user/get_userinfo', _jwt, controller.user.getUserInfo); // 获取用户信息
  router.get('/api/bill/list', _jwt, controller.bill.list);
  router.get('/api/bill/detail', _jwt, controller.bill.detial);
  router.get('/api/bill/data', _jwt, controller.bill.data); // 获取图标数据
  router.get('/api/type/list', _jwt, controller.type.list); // 获取类型
};
