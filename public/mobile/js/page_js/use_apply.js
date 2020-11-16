var SERVER_PATH = 'http://bread.varsion.cn/'
var code = '123456' //该js需要code
$(function (){
    var val = "";
    var td = "";
    var text = "";
    var i = 0;
    $('.img').on("click",function (){
        $('.add_eject2').show();
        $('.mask').show();
        $('.add_bu button').click(function (){
            $('.td_nav2 input').each(function (){
                val = $(this).val();
                if (val === ""){
                    alert('表单不能为空');
                    return false;
                }else {
                    $('.add_eject2').hide();
                    $('.mask').hide();
                    td = 1;
                    return td;
                }
            })
        })
    })
    $('.add_eject2 img').click(function (){
        $('.add_eject2').hide();
        $('.mask').hide();
    })
    $('.success_eject2 button').click(function (){
        $('.success_eject2').hide();
        $('.mask').hide();
    })
    $('.button_f button').click(function (){
        $('.nav2 input').each(function (){
            val = $(this).val();
            if (val === ""){
                td = 1;
                alert('表单不能为空');
                return false;
            }
        })
        $('.text td').each(function (){
            text += $(this).text();
            if (text === ""){
                alert('表格至少有一行不能为空');
                return false;
            }
            else {
                $('.promise_eject').show();
                $('.mask').show();
            }
        })

    })
    $('.bu_one button').click(function (){
        $('.promise_eject').hide();
        $('.mask').hide();
    })
    $('.add_bu button').click(function (){
        if (td === 1){
            var td1 = $('.td_nav2 input').eq(0).val();
            var td2 = $('.td_nav2 input').eq(1).val();
            var td3 = $('.td_nav2 input').eq(2).val();
            var td4 = $('.td_nav2 input').eq(3).val();
            var tr = "<tr class='text'><td>"+td1+"</td><td>"+td2+"</td><td>"+td3+"</td><td>"+td4+"</td></tr>";
            $("#tbody").append(tr);

        }
    })
})

/**
 * 方法作用 填报实验室借用申请
 * @api api/fill/filllabborrow
 * @param [
 *		 code:钉钉code
 *       reason_use   string	 使用原因
 *      porject_name  string	 实验目的
 *     start_time	 date	开始使用时间
 *     end_time  	 date	结束使用时间
 *     "infor":[
 *     {
 *    "student_name":学生姓名,
 *    "student_id":学生学号,
 *    "phone":电话号码",
 *    "work":承担工作
 *     }
 *    ]
 *  ]
 */
function openLabAppSub(){
    var reason_use = document.getElementById('reason_use').value;
    var porject_name = document.getElementById('porject_name').value;
    var start_time = document.getElementById('start_time').value;
    var end_time = document.getElementById('end_time').value;
    var data = [];
    var tb = document.getElementById('tbody');    // table 的 id
    var rows = tb.rows;                           // 获取表格所有行
    for(var i = 0; i<rows.length; i++ ){
        var num =  new Object();
        for(var j = 0; j<rows[i].cells.length; j++ ){    // 遍历该行的 td
            switch (j){
                case 0:
                    num.student_name = rows[i].cells[j].innerHTML
                    break
                case 1:
                    num.student_id = rows[i].cells[j].innerHTML
                    break
                case 2:
                    num.phone = rows[i].cells[j].innerHTML
                    break
                case 3:
                    num.work = rows[i].cells[j].innerHTML
                    break
            }
        }
        data.push(num)
    }
    var infor = data;
    $.ajax({
        async: false,
        type: "POST",
        url:SERVER_PATH+'/api/fill/openlabusebor',
        data: {code : code, reason_use : reason_use, porject_name : porject_name, start_time : start_time, end_time : end_time, infor:infor},
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log($('#infor').serialize())
            console.log(data.data)
            if(data.code == 200){
                    $('.promise_eject').hide();
                    $('.success_eject2').show();
            } else {
                console.log($('#infor').serialize())
                $('.promise_eject').hide();
                $('.success_eject3').show();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $(".failure-alert").show();
            $('.mask').show();
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
}

/**
 * 方法作用 开放实验室使用手机号验证
 * @author huweichen <github.com/nathaniel-kk>
 */
function verPhoneNumber(phone){
    var re = /^1\d{10}$/      //以1开始后面加10位数字
    if (re.test(phone)) {

    } else {
        alert("手机号格式错误！");
        window.location.href = 'use_apply.html'
    }
}

/**
 * 方法作用 开放实验室使用填报成功跳转
 * @author huweichen <github.com/nathaniel-kk>
 */
function OpenLabSuc(){
    window.location.href = 'experimental-training-center.html'
}

/**
 * 方法作用 开放实验室使用填报失败跳转
 * @author huweichen <github.com/nathaniel-kk>
 */
function OpenLabFailed(){
    window.location.href = 'use_apply.html'
}