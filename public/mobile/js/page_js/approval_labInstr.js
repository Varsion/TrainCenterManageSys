
/**
 * 实验室仪器设备借用单审核
 * @author DuJingWen<github.com/DJWKK>
 */
var SERVER_PATH = 'http://bread.varsion.cn/'
    // 点击“审批不通过”按钮：蒙版+审批意见 显现
    $(".no_app").click(function(){
        $(".pop").show()
        $("#no_dialog").show()
    })

    // ”审批不通过“弹出框:点击“取消”按钮
    $(".no_cancel_btn").click(function(){
        $(".pop").hide()
        $("#no_dialog").hide()
    })

    /**
     * 实验室仪器设备借用单审核不通过
     * @api api/approval/noPass
     * @param[
     *      'code':钉钉code
     *      'form_id':表单编号
     *      'reason':审批不通过原因
     * ]
     * @author DuJingWen<github.com/DJWKK>
     */
    // 设定一个判断值,1为通过，2为不通过
    var app_status =0
     // ”审批不通过“弹出框:点击“确定”按钮
     $(".no_ok_btn").click(function(){
         if($("#suggest").val() ==""){
             alert("审批意见为空噢~~~请输入")
         }
         else{
             $.ajax({
                 url: SERVER_PATH + 'api/approval/noPass',
                 type: 'POST',
                 dataType: 'json',
                 data:{
                     code:200,
                     form_id:$(".table_no").html(),
                     reason:$("#suggest").val(),
                 },
                 success: function (data) {
                     if (data.code === 200) {
                         console.log('实验室仪器设备借用单审核不通过成功');
                         alert("审核不通过成功");
                         window.location.href ='approval_no.html'
                         $(".pop").hide()
                         $("#ok_dialog").hide()
                         app_status =1
                     } else if (data.code === 100) {
                         console.log("实验室仪器设备借用单审核未通过");
                     }
                 },
                 error: function (data) {
                     console.log("error");
                     $(".pop").show()
                     $("#ok_dialog img").attr({"src":"../images/no.png"})
                     $(".ok_title").text("审批提交失败")
                     $("#ok_dialog").show()
                     $(".ok_btn").click(function(){
                         $(".pop").hide()
                         $("#ok_dialog").hide()
                         app_status =1
                     })
                 }
             })
             $(".pop").hide()
        $("#no_dialog").hide()
         }
        app_status=2
    })


    /**
     * 实验室仪器设备借用单审核通过
     * @api api/approval/pass
     * @param[
     *      'code':钉钉code
     *      'form_id':表单编号
     * ]
     * @author DuJingWen<github.com/DJWKK>
     */
 // 点击“审批通过”按钮：蒙版+审批意见 显现
 $(".ok_app").click(function(){
     $.ajax({
         url: SERVER_PATH + 'api/approval/pass',
         type: 'GET',
         dataType: 'json',
         data:{
             code:200,
             form_id:$("#form_id").html(),
         },
         success: function (data) {
             alert((".table_no").html());
             if (data.code === 200) {
                 console.log('实验室仪器设备借用单审核通过');
                 $(".ok_btn").click(function(){
                     window.location.href ='approval_no.html'
                     $(".pop").hide()
                     $("#ok_dialog").hide()
                     app_status =1
                 })
             } else if (data.code === 100) {
                 console.log("实验室仪器设备借用单审核未通过");
             }
         },
         error: function (data) {
             console.log("error");
             $(".pop").show()
             $("#ok_dialog img").attr({"src":"../images/no.png"})
             $(".ok_title").text("审批提交失败")
             $("#ok_dialog").show()
             $(".ok_btn").click(function(){
                 $(".pop").hide()
                 $("#ok_dialog").hide()
                 app_status =1
             })
         }
     })
    $(".pop").show()
    $("#ok_dialog").show()
})

var url = window.location.href;
/**
 * 回显实验室仪器设备借用单
 * @param [
 *	'form_id':表单编号
 *  ]
 */
$(document).ready(function (){
    var form_id = url.split('?')[1];
    console.log(form_id);
    $.ajax({
        type: "GET",
        url:"http://bread.varsion.cn/api/approval/reshow?form_id=" + form_id,
        success:function (data){
            console.log(data.data);
            if(data.code === 200) {
                var str = `<form>
                            <table>
                                <tr>
                                    <td colspan="2">借用部门</td>
                                    <td colspan="2">${data.data.equ_bro[0].borrow_department}</td>
                                </tr>
                                <tr>
                                    <td colspan="2">设备用途</td>
                                    <td colspan="2">${data.data.equ_bro[0].borrow_application}</td>
                                </tr>
                                <tr>
                                    <td colspan="2">使用时间</td>
                                    <td colspan="2"><span>${data.data.equ_bro[0].destine_start_time}-${data.data.equ_bro[0].destine_end_time}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">借用人</td>
                                    <td colspan="2">${data.data.equ_bro[0].borrower_name}</td>
                                </tr>
                                <tr>
                                    <td colspan="2">电话</td>
                                    <td  colspan="2">${data.data.equ_bro[0].borrower_phone}</td>
                                </tr>
                                <tr>
                                    <td colspan="4">设备清单</td>
                                </tr>
                                <tr>
                                    <td>设备名称</td>
                                    <td>型号</td>
                                    <td>数量</td>
                                    <td>附件</td>
                                </tr>`
                               for(var i = 0;i < data.data.equ_bro_list.length;i++){
                                    str += `<tr>
                                                <td>${data.data.equ_bro_list[0].equipment_name}</td>
                                                <td>${data.data.equ_bro_list[0].model}</td>
                                                <td>${data.data.equ_bro_list[0].number}</td>
                                                <td>${data.data.equ_bro_list[0].annex}</td>
                                             </tr>`
                               }
                               str += `</table></form>`
                $('.labLoan_form').empty();
                $('.labLoan_form').append(str);
                str = `表单编号：${form_id}`
                $('.table_no').empty();
                $('.table_no').append(str);
                $("#form_id").append(form_id);
            }
            if(data.code === 100) {
                console.log(data.msg);
            }
        }, error: function (data) {
            console.log("error")
        }
    })
})
