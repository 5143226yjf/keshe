/**
 * Created by yjf on 2017/7/14.
 */
var inOut = {
    insert:'INSERT INTO su(cucn, sut, sunum, suout) VALUES(?,?,?,?)',
    update:'update su sunum=? where cucn=?',
    delete: 'delete from su where cucn=?',
    queryById: 'select * from su where cucn=?',
    queryAll: 'select * from su'
};

module.exports = inOut;