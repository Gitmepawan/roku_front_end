const express = require('express');
const router = express.Router();
const { createProxyMiddleware} = require('http-proxy-middleware');
// by default, you cant access to the websites and the internal contents  if you are not a part of that sote(have the same origin).
// This is a default browser behaviour in the web- web spaces like locaked-down buidings. you need special access to retrieve apis, services etc. the http-proxy-middleware library is a swipe card 
// that gives you that access with a bit of configuration- it tells the third party(in the case of our node DB service) To allow to retrieve data, use of its services etc.

router.use('/', createProxyMiddleware({
    target:  'http://localhost:3000',
    headers: {
        accept: 'application/json, application/x-www-form-urlencoded'
    },
    changeOrigin: true
}))

module.exports = router;