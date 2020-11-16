function logout(){
    var userToken = window.localStorage.getItem("yq_token");
    $(function(){
        //请求参数

        //
        $.ajax({
            //请求方式
            type : "POST",
            cache:false,
            //请求的媒体类型
            //contentType: "application/json;charset=UTF-8",
            //请求地址
            url : "http://blog.coderth.cn/api/oAuth/sAdmin/logout",
            //数据，json字符串
            data : {token:userToken},
            dataType:'json',
            //请求成功
            success : function(result) {
                window.localStorage.setItem('yq_token', 0)
                console.log(window.localStorage.getItem("yq_token"))
                alert("注销成功！")
                window.location.href="Super_admin_landing.html"
            },
            //请求失败，包含具体的错误信息
            error : function(e){
                alert("注销失败！")
            }
        });
        return false
    })
}

