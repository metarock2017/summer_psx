/**
 * 获取请求地址
 * @param  {[type]} key [description]
 * @return {[type]}     [URL]
 */
function getApi(key){

    var apis = {};

    apis['LOGIN'] = '/login';
    apis['REGISTER'] = '/register';

    return apis[key]

}


/**
 * 封装一个请求对象
 * @param  {[type]} key       [URL MAP 对应的KEY值]
 * @param  {[type]} method    [post/get]
 * @param  {[type]} urlParams [URL参数]
 * @param  {[type]} payload   [POST/PUT 请求体]
 * @return {[type]}           [请求对象]
 */
function packReq(key, method, urlParams, payload){

    var req = {
        url: getApi(key),
        method: method,
        payload: payload
    };

    var paramMap = req.url.split("$"); 
    
    //URL参数组装
    if (paramMap.length > 1) {

        req.url = '';
        $.each(paramMap, function(index, val) {

            if (paramMap.length-1 === index) {return};

            req.url += (val + urlParams[index]);

        });

    };

    return req;

}

/**
 * 异步请求
 * @param  {[type]} req [请求对象]
 * @param  {[type]} callback [回调函数]
 */
function request(req, callback){

    $.ajax({
        url: req.url,
        type: req.method,
        data: req.payload,
        success: function(data) {
            if (data.status == 0) {
                alert(data.message)
                return;
            }
            callback(data);
        }
    })

}