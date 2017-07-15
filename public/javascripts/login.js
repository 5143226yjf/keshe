/**
 * Created by yjf on 2017/7/11.
 */
var regex={
    password:/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/
};
function login() {
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    if(!regex.password.test(password)){
        alert("密码格式错误");
    }
    else {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                pass: password
            })
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            console.log(json);
            if (json.code == 0) {
                alert(json.data);
                location.href = '/users/home';
            }
            else{
                alert('您没注册，请先注册！')
            }
        });
    }
}