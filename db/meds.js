/**
 * Created by yjf on 2017/7/14.
 */
var meds = {
    insert:'INSERT INTO nu(cucn, nuname, nuf, nudt, nut, nuuse, nuch, nunum, nup) VALUES(?,?,?,?,?,?,?,?,?)',
    update:'update nu set nuname=?, nuf=?, nudt=?, nut=?, nuuse=?, nuch=?, nunum=?, nup=? where cucn=?',
    delete: 'delete from nu where cucn=?',
    queryById: 'select * from nu where cucn=?',
    queryAll: 'select * from nu'
};

module.exports = meds;