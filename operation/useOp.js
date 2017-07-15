/**
 * Created by yjf on 2017/7/14.
 */
var mysql = require('mysql');
var $conf = require('../db/DBConfig');
// var $util = require('../util/util');
var $sql = require('../db/usersql');

// 使用连接池，提升性能
var pool  = mysql.createPool($conf.mysql);

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};
var useIdCount = 101;
module.exports = {
    addUser: function (req, res) {
        console.log(2222222);
        console.log(req.body.name);
        pool.getConnection(function (err, connection) {
            // 获取前台页面传过来的参数

            // 建立连接，向表中插入值
            // 'INSERT INTO user(id, name, age) VALUES(0,?,?)',
            connection.query($sql.insert, [useIdCount, req.body.name, req.body.pass], function (err, result) {
                if (result) {
                    result = {
                        code: 200,
                        msg: '增加成功'
                    };
                }
                console.log(err);

                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                // 释放连接
                connection.release();
                useIdCount = useIdCount + 1;
            });
        });
        return useIdCount;
    },
    selectUser: function (req, res) {
        pool.getConnection(function (err, connection) {
           connection.query($sql.queryAll, function (err, result) {
               result.forEach(function (val) {
                   if(val.username === req.body.name && val.userpass === req.body.pass){
                       result = {
                           code: 0,
                           data: '登录成功'
                       }
                   }
               });
               console.log(err);
               jsonWrite(res, result);
               connection.release();
           });
        });
    }

};