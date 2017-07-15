/**
 * Created by yjf on 2017/7/14.
 */
var workers = {
    insert:'INSERT INTO sa(said, saname, sex, senum, sac) VALUES(?,?,?,?,?)',
    update:'update sa set saname=?, sex=?, senum=?, sac=? where cucn=?',
    delete: 'delete from sa where said=?',
    queryById: 'select * from sa where said=?',
    queryAll: 'select * from sa'
};

module.exports = workers;