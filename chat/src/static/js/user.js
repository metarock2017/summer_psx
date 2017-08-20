//登录
function login() {
    var userValue = document.querySelector('.username').value;
    var pwdValue = document.querySelector('.password').value;
    var data = {
        "username": userValue,
        "password": pwdValue
    };

    // 登陆请求对象
    var req = packReq('LOGIN', 'POST', null, data);
    request(req, function(result){

        window.location.href = '/chat';

    })

}


//注册 
function register(){

    var userValue = document.querySelector('.username').value;
    var pwdValue = document.querySelector('.password').value;

    if (userValue.length > 8 || userValue.length < 4) {
        alert('请输入4~8长度的用户名')
        return;
    }
    if (pwdValue == '') {
        alert('密码不能为空');
        return;
    } 

    var data = {
        "username": userValue,
        "password": pwdValue
    };

    // 登陆请求对象
    var req = packReq('REGISTER', 'POST', null, data);
    request(req, function(result){

        window.location.href = '/login';

    })

}