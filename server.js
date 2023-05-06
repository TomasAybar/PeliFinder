require('dotenv').config();

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use((req, res, next) => {
    res.header(process.env.USE_HEADER_1, "*");
    res.header(process.env.USE_HEADER_2, process.env.USE_HEADER_3);
    next();
});


const apiProxy = createProxyMiddleware('/api', {
    target: process.env.PROXY_TARGET,
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/api'
    }
});

app.use('/api', apiProxy);

app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => console.log(`Servidor iniciado en el puerto ${app.get('port')}`))
