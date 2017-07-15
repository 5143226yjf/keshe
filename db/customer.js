/**
 * Created by yjf on 2017/7/14.
 */
var cums = {
    insert:'INSERT INTO cu(cuid, cuname, cul, cut, cunum, cucn) VALUES(?,?,?,?,?,?)',
    update:'update cu set cuname=?, cul=?, cut=?, cunum=?, cucn=? where cuid=?',
    delete: 'delete from cu where cuid=?',
    queryById: 'select * from cu where cuid=?',
    queryAll: 'select * from cu'
};

module.exports = cums;