// AJAX 异步方法
function syncAction(method, data, url, callback) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // xmlhttp.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            callback(xmlhttp.responseText);
        }
    }
    xmlhttp.open(method, url, true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (method == 'post' || method == 'put') {
        var x = makePostData(data);
        console.log(x);
        xmlhttp.send(x);
    } else {
        xmlhttp.send();
    }
}

// 生成POST数据
function makePostData(obj) {
    var str = "";
    for (var prop in obj) {
        str += prop + "=" + obj[prop] + "&"
    }
    return str.substr(0, str.length - 1);
}