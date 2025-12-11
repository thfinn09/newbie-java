const testRouter = require('./test');
const siteRouter = require('./site');
function route(app) {
  app.use('/test', testRouter);

  app.use('/', siteRouter);
}

module.exports = route;
