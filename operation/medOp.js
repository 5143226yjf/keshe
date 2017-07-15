/**
 * Created by yjf on 2017/7/14.
 */
/**
 * Created by yjf on 2017/7/14.
 */
/**
 * Created by yjf on 2017/7/14.
 */
var mysql = require('mysql');
var $conf = require('../db/DBConfig');
// var $util = require('../util/util');
var medsql = require('../db/meds');

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
    addMed: function (req, res) {
        pool.getConnection(function(err, connection) {
            var param = req.body.medInfo;
            console.log(param,'df');
            // 建立连接，向表中插入值
            connection.query(medsql.insert, [param.id, param.product, param.name, param.date, param.release, param.use, param.price, param.count, param.salalor], function(err, result) {
                if(result) {
                    result = {
                        code: 200,
                        msg:'增加成功'
                    };
                }

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
            connection.query(medsql.delete, id, function(err, result) {
                if(result.affectedRows > 0) {
                    result = {
                        code: 200,
                        msg:'删除成功'
                    };
                } else {
                    result = void 0;
                }
                console.log(result);
                jsonWrite(res, result);
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        // update by id
        var param = req.body.medInfo;
        if(param.id === null) {
            jsonWrite(res, undefined);
            return;
        }

        pool.getConnection(function(err, connection) {
            connection.query(medsql.update, [ param.product, param.name, param.date, param.release, param.use, param.price, param.count, param.salalor, +param.id], function(err, result) {
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
        var id = req.body.medId; // 为了拼凑正确的sql语句，这里要转下整数
        console.log(id);
        pool.getConnection(function(err, connection) {
            connection.query(medsql.queryById, id, function(err, result) {
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
            connection.query(medsql.queryAll, function(err, result) {
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