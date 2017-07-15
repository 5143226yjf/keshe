/**
 * Created by yjf on 2017/7/11.
 */
var user = {
    insert:'INSERT INTO users(useid, username, userpass) VALUES(?,?,?)',
    update:'update user set username=?, userpass=? where useid=?',
    delete: 'delete from users where id=?',
    queryById: 'select * from users where useid=?',
    queryAll: 'select * from users'
};

module.exports = user;