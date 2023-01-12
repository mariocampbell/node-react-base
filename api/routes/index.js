const express = require('express');
const homeRouter = require('./home.routes');

const routerApi = (app) => {
  const router = express.Router();
  app.use('/api/', router);
  router.use('/', homeRouter);
};

module.exports = routerApi;
