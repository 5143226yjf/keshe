/**
 * Created by yjf on 2017/7/11.
 */
var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var userOp = require('../operation/useOp')

router.get('/', function(req, res, next) {
    res.render('login');
});

router.post('/', function (req, res) {
    /*if(req.body.name === 'lethe' && req.body.pass === '123456') {
        res.json({
            code: 0,
            data: '登录成功'
        })
    }
    res.send('Got a POST request');*/
    userOp.selectUser(req, res);
})
module.exports = router;//对外提供router