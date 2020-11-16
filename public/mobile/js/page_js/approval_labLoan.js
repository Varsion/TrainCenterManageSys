
/**
 * 实验室借用申请表审核
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
     * 实验室借用申请表审核不通过
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
                     form_id:$("#form_id").html(),
                     reason:$("#suggest").val(),
                 },
                 success: function (data) {
                     if (data.code === 200) {
                         console.log('实验室借用申请表审核不通过成功');
                         alert("审核不通过成功");
                         window.location.href ='approval_no.html'
                         $(".pop").hide()
                         $("#ok_dialog").hide()
                         app_status =1
                     } else if (data.code === 100) {
                         console.log("实验室借用申请表审核未通过");
                     }
                 },
                 error: function (data) {
                     console.log("error");
                     $(".pop").show()
                     $("#ok_dialog img").attr({"src":"../images/no.png"})
                     $(".ok_title").text("审批不通过提交失败")
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
     * 实验室借用申请表审核通过
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
             if (data.code === 200) {
                 console.log('实验室借用申请表审核通过');
                 $(".ok_btn").click(function(){
                     window.location.href ='approval_no.html'
                     $(".pop").hide()
                     $("#ok_dialog").hide()
                     app_status =1
                 })
             } else if (data.code === 100) {
                 console.log("实验室借用申请表审核未通过");
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
 * 回显实验室借用申请单
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
                var str = `<p>实验室借用申请单</p>
                    <p>${data.data[0].created_at}</p>`
                $(".labLoan_title").empty();
                $(".labLoan_title").append(str);
                str = `<form >
                        <table>
                            <tr>
                              <td>申请实验室名称</td>
                              <td>${data.data[0].laboratory_name}</td>
                            </tr>
                            <tr>
                              <td>实验室编号</td>
                              <td>${data.data[0].laboratory_id}</td>
                            </tr>
                            <tr>
                              <td>实验室课程名称</td>
                              <td>${data.data[0].course_name}</td>
                            </tr>
                            <tr>
                              <td>学习班级及人数</td>
                              <td>${data.data[0].class_name} ${data.data[0].number}人</td>
                            </tr>
                            <tr>
                              <td>实验目的</td>
                              <td>${data.data[0].purpose}</td>
                            </tr>
                            <tr>
                              <td>具体使用时间</td>
                              <td><span>${data.data[0].start_time}-${data.data[0].end_time}</span><br />
                                <span>第${data.data[0].start_class}至第${data.data[0].end_class}节课</span>
                              </td>
                            </tr>
                            <tr>
                              <td colspan="2"><br>
                                &nbsp;&nbsp;&nbsp;指导老师承诺：
                               1. 借用教师为借用期间实验室安全责任人，必须 
                                保证实验室的安全。切实履行实验室用电用水防
                                盗防火安全。对实验人员进行安全教育，保证实
                                验室人员人身安全。
                                <br>2. 对实验人员进行必要仪器使用和实验技能指导、
                                实验操作教育，保证实验操作规范及设备正常。
                                <br>3. 督促实验人员按时完成实验项目。我已阅知实验室安全责任要求，保证切实履行实验室安全责任。
                              </td>
                            <tr>
                              <td colspan="2">申请人：${data.data[0].applicant_name} 电话：${data.data[0].phone} ${data.data[0].created_at}</td>
                            </tr>
                      </table>
                    </form>`
                $('.labLoan_form').empty();
                $('.labLoan_form').append(str);
                str = `表单编号：${form_id}`;
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

