$(document).ready(function() {

    var userToken = window.localStorage.getItem("yq_token");
    if (userToken==0){
        alert("当前未登陆，请先登陆！")
        window.location.href="Super_admin_landing.html"
    }
})
