function upload() { 
    var file = document.querySelector('.file').files[0];
    console.log(file);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e) {
        var content = this.result;
        $('.result').html('<img src=' + content + '>');
        var size = file.size;
        var name = file.name;
        //每次上传的大小
        var each = 10240;
        var start = 0;
        var end = each;
        //总上传次数
        var times = Math.ceil(size / each);
        console.log(times)
        var i = 0;
        //每一次请求上传
        function upload(){
            //i == 总次数时退出递归
            console.log(i);
            if(i == times){
                return;
            }  
            //改变分割文件的起点
            start = each * i;
            //改变分割文件的终点
            end = each * (i + 1)
            //每一次上传的文件的内容
            eachContent = content.slice(start, end)
            //上传一次的百分比
            var percent = 100 / times;
            var val = (i + 1) * percent;
            //改变进度条
            $('.pro').attr({
                value: val,
            });
            var id = i + 1; 
            $.ajax({
                type: 'POST',
                url: '/upload',
                data: {
                    'content': eachContent,
                    'size': size,
                    'name': name,
                    'id': id
                },
                //成功后递归
                success: function(){
                    i++;
                    // setTimeout(upload, 1000);
                    upload()
                },
            })
        }
        upload();
    }

}