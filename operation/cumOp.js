/**
 * Created by yjf on 2017/7/14.
 */
var mysql = require('mysql');
var $conf = require('../db/DBConfig');
// var $util = require('../util/util');
var cumsql = require('../db/customer');

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

module.exports = {
    addCum: function (req, res) {
        pool.getConnection(function(err, connection) {
            var cums = req.body.outMedInfo;
            // 建立连接，向表中插入值
            connection.query(cumsql.insert, [cums.cusId, cums.cusName, cums.cusTel, cums.outTime, cums.count,cums.id], function(err, result) {
                if(result) {
                    result = {
                        code: 0,
                        msg:'增加成功'
                    };
                }

                console.log(result);
                // 以json形式，把操作结果返回给前台页面
                jsonWrite(res, result);

                // 释放连接
                connection.release();
            });
        });
    },
    delete: function (req, res) {
        // delete by Id
        pool.getConnection(function(err, connection) {
            var id = +req.body.delId;
            connection.query(cumsql.delete, id, function(err, result) {
                if(result.affectedRows > 0) {
                    result = {
                        code: 0,
                        msg:'删除成功'
                    };
                } else {
                    result = void 0;
                }
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res) {
        // update by id
        var cums = req.body.cums;
        if(cums.cumsId === null) {
            jsonWrite(res, undefined);
            return;
        }

        pool.getConnection(function(err, connection) {
            connection.query(cumsql.update, [ cums.cumsName, cums.cumsTel, cums.cumsTime, cums.cumsCount,cums.medId, +cums.cumsId], function(err, result) {
                // 使用页面进行跳转提示
                if(result.affectedRows > 0) {
                    res.render('suc', {
                        result: result
                    }); // 第二个参数可以直接在jade中使用
                } else {
                    res.render('fail',  {
                        result: result
                    });
                }

                connection.release();
            });
        });

    },
    queryById: function (req, res) {
        var id = +req.body.cumsId; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query(cumsql.queryById, id, function(err, result) {
                if(result){
                    result = {
                        code: 0,
                        data: result
                    }
                }
                console.log(err);
                jsonWrite(res, result);
                connection.release();

            });
        });
    },
    queryAll: function (req, res) {
        pool.getConnection(function(err, connection) {
            connection.query(cumsql.queryAll, function(err, result) {
                if(result){
                    result = {
                        code: 0,
                        data: result
                    }
                }
                console.log(err);
                jsonWrite(res, result);
                connection.release();
            });
        });
    }

};