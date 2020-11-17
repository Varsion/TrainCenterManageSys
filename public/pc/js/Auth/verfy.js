function getCookie(c_name){
    //判断document.cookie对象里面是否存有cookie
    if (document.cookie.length>0){
      c_start=document.cookie.indexOf(c_name + "=")
        //如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回空字符串
      if (c_start!=-1){
        c_start=c_start + c_name.length+1
        c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
        }
      }
    return ""
    }

function delCookie(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        // 这里需要判断一下cookie是否存在
        var c = getCookie(name);
        if (c != null){
            document.cookie = name + "=" + c + ";expires=" + exp.toGMTString();
        }
    }

$().ready(function(){
    var token = getCookie("token")
    if(!token){
        alert("当前未登陆，请先登陆")
        location.href="/pc/html/Super_admin_landing.html"
    }
});


    /**
     * 注销
     */
function logout() {
    delCookie('token');
    alert('注销成功');
    location.href = "/pc/html/Super_admin_landing.html";
}