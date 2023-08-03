const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8080',//	# 프론트에서 /api로 요청을 보내면 백 8080으로 요청이 도착하게
      changeOrigin: true,
    })
  );
};