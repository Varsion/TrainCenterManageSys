//获取url参数
function getQueryString(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    };
    return false;
 }
 
function getCookie(c_name){
    //判断document.cookie对象里面是否存有cookie
    if (document.cookie.length>0){
      c_start=document.cookie.indexOf(c_name + "=")
        //如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回false
      if (c_start!=-1){
        c_start=c_start + c_name.length+1
        c_end=document.cookie.indexOf(";",c_start)
        if (c_end==-1) c_end=document.cookie.length
        return unescape(document.cookie.substring(c_start,c_end))
        }
      }
    return false;
}

function setCookie (name, value){
    //设置名称为name,值为value的Cookie
    var expdate = new Date();   //初始化时间
    expdate.setTime(expdate.getTime() + 60 * 1000 *30);   //设置30分钟过期
    document.cookie = name+"="+value+";expires="+expdate.toGMTString()+";path=/";

   //即document.cookie= name+"="+value+";path=/";  时间默认为当前会话可以不要，但路径要填写，因为JS的默认路径是当前页，如果不填，此cookie只在当前页面生效！
}

$(document).ready(function(){
    var code = getQueryString("code");
    console.log("Login...");
    if(code){
        console.log(code);
        setCookie("token",code);
        console.log("Login Success");
        setTimeout(function() { 
            location.href = "/pc/html/Super_Admin_Home.html";
        }, 2000);
    }
});
