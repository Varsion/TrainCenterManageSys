/**
 * 回显开放实验室使用申请单
 * @param [
 *    'form_id':表单编号
 *  ]
 *  @author yangsiqi <github.com/Double-R111>
 */
var url = window.location.href;
$(document).ready(function () {
    var form_id = url.split('&&')[1];
    var status = url.split('&&')[2];
    console.log(status)
    $.ajax({
        type: "GET",
        url: "http://bread.varsion.cn/api/approval/reshowall?code=xxxx&" + form_id,
        success: function (data) {
            if (data.code === 200) {
                let timeStr = ``
                let result_str = ``
                if (status == 1) {
                    result_str += `审批通过`
                } else {
                    result_str += `不通过原因:
            ${data.data.other_information_oll[0].reason} `
                }
                $(".no_result").empty().append(result_str)
                timeStr = `
<p> ${data.data.other_information_oll[0].status_name}</p>
                                    <p>开放实验室借用单</p>
                                    <p>${data.data.open_laboratory_loan[0].created_at}</p>`
                $(".labLoan_title").empty().append(timeStr)
                var str = `<form>
                              <table>
                                <tr>
                                  <td colspan="2">使用原因</td>
                                  <td colspan="2">${data.data.open_laboratory_loan[0].reason_use}</td>
                                </tr>
                                <tr>
                                  <td colspan="2">项目名称</td>
                                  <td colspan="2">${data.data.open_laboratory_loan[0].porject_name}</td>
                                </tr>
                                <tr>
                                    <td colspan="2">具体使用时间</td>
                                    <td colspan="2"><span>${data.data.open_laboratory_loan[0].start_time}-${data.data.open_laboratory_loan[0].end_time}</span><br />
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
                for (var i = 0; i < data.data.open_laboratory_student_list.length; i++) {
                    str += `<tr>
                                <td>${data.data.open_laboratory_student_list[i].student_name}</td>
                                <td>${data.data.open_laboratory_student_list[i].student_id}</td>
                                <td>${data.data.open_laboratory_student_list[i].phone}</td>
                                <td>${data.data.open_laboratory_student_list[i].work}</td>
                              </tr>`
                    $('.labLoan_form').empty().append(str);
                }
            }
            if (data.code === 100) {
                console.log(data.msg);
            }
        }, error: function (data) {
            console.log("error")
        }
    })
})
$(function () {
// 获取状态status
    var status = url.charAt(url.length - 1)
    if (status == 1) {
        $(".hty_ok").show()
    } else {
        $(".hty_no").show()
    }

})