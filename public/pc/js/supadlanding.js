// 验证工号

var verificationidd=document.getElementById("verificationid");
var verificationpasswordd=document.getElementById("verificationpassword");
console.log(verificationidd.placeholder)
console.log(verificationidd.value)
var classidd =document.getElementById("classid");
var classpasswordd=document.getElementById("classpassword");
console.log(classid)
console.log(classpasswordd)
var status1 = 0;
var status2 = 0;
function isnumber(obj){
    var reg = /^[0-9]+$/;
    if(obj!=""&&!reg.test(obj))
    {
        classidd.style.border="2px solid red";
        alert('请输入数字！');
        status1 = 0
        return false;
    }
    if(verificationidd.value.length ===11)
    {
        classidd.style.border="2px solid #2F7BEB";
    }
    if (verificationidd.value.length !=11 )
    { 
        classidd.style.border="2px solid red";
        alert('请输入11位学号');
        status1 = 0
        return false;
    }
    status1 = 1
}

// 验证密码
function checkZmOrNum(zmnum)
{
    var zmnumReg=/^[A-Za-z0-9]+$/;
    // if(zmnum!=""&&!zmnumReg.test(zmnum))
    // {
    //     alert("请输入字母和数字的组合");
    //     classpassword.style.border="2px solid red";        
    // }
    if(verificationpasswordd.value.length >=20 )
    {
        alert("密码不能超过20位");
        classpassword.style.border="2px solid red";
        status2 = 0;
        return false;
    }
    if(verificationpasswordd.value.length <=7 )
    {
        alert("密码不能少于8位");
        classpassword.style.border="2px solid red";
        status2 = 0;
        return false;
    }
    if(zmnum = zmnumReg.test(zmnum))
    {
        classpassword.style.border="2px solid #2F7BEB";
    }
    status2 = 1;
    console.log(status)


}
function  onclic(){
    if (status1==1&&status2==1){
        console.log($("#form").serialize())
       // document.getElementById("submit").disabled = true
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
                url : "http://blog.coderth.cn/api/oAuth/sAdmin/login",
                //数据，json字符串
                data : $("#form").serialize(),
                 dataType:'json',
                //请求成功
                success : function(result) {
                    console.log(result.code==200);
                    if (result.code==200){
                        const token = result.data.token

                        window.localStorage.setItem('yq_token', token)
                        var userToken = window.localStorage.getItem("yq_token");
                        alert("登陆成功")
                        window.location.href="Super_Admin_Home.html"
                    }else {
                        alert("用户名或者密码错误！")
                    }

                },
                //请求失败，包含具体的错误信息
                error : function(e){
                    console.log(e.status);
                    console.log(e.responseText);
                    alert()
                }
            });
            return false
        });
    }else {
        console.log(status1)
        console.log(status2)
        alert("请输入正确格式的账号与密码！")
        return false
    }
}
// 