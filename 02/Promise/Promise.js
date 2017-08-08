// 生成POST数据
function makePostData(obj) {
    var str = "";
    for (var prop in obj) {
        str += prop + "=" + obj[prop] + "&"
    }
    return str.substr(0, str.length - 1);
}

//Ajax方法
function Ajax({
    method = 'get',
    url = '/',
    async = 'true',
    data,
}) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var promise = new Promise(function(resolve, reject) {
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                console.log(xmlhttp.responseText1)
                resolve(xmlhttp.responseText);
            }
        }
        xmlhttp.open(method, url, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        if (method == 'GET') {
            xmlhttp.send()
        } else if (method == 'POST') {
            var x = makePostData(data);
            xmlhttp.send(x);
        }
    })
    return promise;
}   

