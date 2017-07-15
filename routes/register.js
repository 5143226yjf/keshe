/**
 * Created by yjf on 2017/7/11.
 */
var express = require('express');
var router = express.Router();
var userOp = require('../operation/useOp')

router.get('/', function(req, res) {
    res.render('register');
});

router.post('/', function (req, res) {
    // var name = req.body.name;
    // var pass = req.body.pass;
    // db.query("insert into users(name,age) values('"+name+"','"+ pass +"')",function(err,rows){
    //     if(err){
    //         res.send("新增失败"+err);
    //     }else {
    //         alert('注册成功');
    //         res.json({
    //             code: 0,
    //             data: '注册成功'
    //         });
    //     }
    // });
    /* if(name){
        res.json({
            code: 0,
            data: '注册成功'
        });
        res.send('Got a POST request');
    } */
     userOp.addUser(req, res)

})
module.exports = router;//对外提供router