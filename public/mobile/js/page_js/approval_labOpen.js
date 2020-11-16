
/**
 * 开放实验室使用申请单审核
 * @author DuJingWen<github.com/DJWKK>
 */
// var SERVER_PATH = 'http://bread.varsion.cn/'
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
     * 开放实验室使用申请单审核不通过
     * @api api/approval/noPass
     * @param[
     *      'code':钉钉code
     *      'form_id':表单编号
     *      'reason':审批不通过原因
     * ]
     * @author DuJingWen<github.com/DJWKK>
     */
    // 设定一个判断值,1为通过，2为不通过
    var app_status = 0
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
                 data: {
                     code: 200,
                     form_id: $("#form_id").html(),
                     reason: $("#suggest").val(),
                 },
                 success: function (data) {
                     if (data.code === 200) {
                         console.log('开放实验室使用申请单审核不通过成功');
                         alert("审核不通过成功");
                         window.location.href = 'approval_no.html'
                         $(".pop").hide()
                         $("#ok_dialog").hide()
                         app_status =1
                     } else if (data.code === 100) {
                         console.log("开放实验室使用申请单审核未通过");
                     }
                 },
                 error: function (data) {
                     console.log("error");
                     $(".pop").show()
                     $("#ok_dialog img").attr({"src": "../images/no.png"})
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
     * 开放实验室使用申请单审核通过
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
         data: {
             code: 200,
             form_id: $("#form_id").html(),
         },
         success: function (data) {
             if (data.code === 200) {
                 console.log('开放实验室使用申请单审核通过');
                 $(".ok_btn").click(function(){
                     window.location.href ='approval_no.html'
                     $(".pop").hide()
                     $("#ok_dialog").hide()
                     app_status =1
                 })
             } else if (data.code === 100) {
                 console.log("开放实验室使用申请单审核未通过");
             }
         },
         error: function (data) {
             console.log("error");
             $(".pop").show()
             $("#ok_dialog img").attr({"src": "../images/no.png"})
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
 * 回显开放实验室使用申请单
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
            console.log(data);
            if(data.code === 200) {
                var str = `<form>
                              <table>
                                <tr>
                                  <td colspan="2">使用原因</td>
                                  <td colspan="2">${data.data.open_lab[0].reason_use}</td>
                                </tr>
                                <tr>
                                  <td colspan="2">项目名称</td>
                                  <td colspan="2">${data.data.open_lab[0].porject_name}</td>
                                </tr>
                                <tr>
                                    <td colspan="2">具体使用时间</td>
                                    <td colspan="2"><span>${data.data.open_lab[0].start_time}-${data.data.open_lab[0].end_time}</span><br />
                                      <span>每天8:20-22:00</span>
                                    </td>
                                </tr>
                                <tr>
                                  <td colspan="4">申请人员名单
                                  </td>
                                </tr>
                                <tr>
                                    <td>姓名</td>
                                    <td>学号</td>
                                    <td>联系电话</td>
                                    <td>承担工作</td>
                                  </tr>`
                for(var i = 0;i < data.data.open_lab_list.length;i++){
                    str += `<tr>
                                <td>${data.data.open_lab_list[i].student_name}</td>
                                <td>${data.data.open_lab_list[i].student_id}</td>
                                <td>${data.data.open_lab_list[i].phone}</td>
                                <td>${data.data.open_lab_list[i].work}</td>
                              </tr>`
                    $('.labLoan_form').empty();
                    $('.labLoan_form').append(str);
                    $("#form_id").append(form_id);
                }
            }
            if(data.code === 100) {
                console.log(data.msg);
            }
        }, error: function (data) {
            console.log("error")
        }
    })
})

