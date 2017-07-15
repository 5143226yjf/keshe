/**
 * Created by yjf on 2017/7/11.
 */
var regex={
    password:/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/
};
function register() {
    var name = document.getElementById('name').value;
    var pass = document.getElementById('pass').value;
    var rePass = document.getElementById('rePass').value;
    console.log(name);
    if(!regex.password.test(pass)){
        alert("密码格式错误");
    }
    else if(pass != rePass){
        alert("两次密码不一致");
    }
    else{
        fetch('/register',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                pass: pass
            })
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            alert(json.msg);
            if (json.code == 200) {
                location.href = '/login';
            }
        });
    }
}
