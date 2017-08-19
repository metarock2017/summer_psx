//注册
function reg() {
    var userValue = document.querySelector('.username').value;
    var pwdValue = document.querySelector('.password').value;
    console.log(userValue);
    if (userValue.length > 8 || userValue.length < 4) {
        alert('请输入4~8长度的用户名')
    } else if (pwdValue == '') {
        alert('密码不能为空');
    } else {
        var data = {
            "username": userValue,
            "password": pwdValue
        };
        $.ajax({
            url: '/reg',
            type: 'POST',
            data: data,
            success: function(data) {
                alert(data);
                location.href = '/';
            }
        })
    }
}

//登录
function login() {
    var userValue = document.querySelector('.username').value;
    var pwdValue = document.querySelector('.password').value;
    var data = {
        "username": userValue,
        "password": pwdValue
    };
    $.ajax({
        url: '/login',
        type: 'POST',
        data: data,
        success: function(data) {
            location.href = '/chat';
            alert(data);
        }
    })
}
