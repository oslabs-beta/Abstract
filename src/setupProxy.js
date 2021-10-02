const { createProxyMIddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMIddleware(["/"], { target: "http://localhost:5000"})
  );
}