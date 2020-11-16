/**
 * 回显实验室借用申请单
 * @param [
 *    'form_id':表单编号
 *  ]
 *   @author yangsiqi <github.com/Double-R111>
 */
var url = window.location.href;
$(function () {
    $(document).ready(function () {
        var form_id = url.split('&&')[1];
        var status = url.split('&&')[2];
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
            ${data.data.other_information_ll[0].reason} `
                    }
                    $(".no_result").empty().append(result_str)
                    timeStr = `
<p> ${data.data.other_information_ll[0].status_name}</p>
             <p>实验室借用申请表单</p>
             <p>${data.data.laboratory_loan[0].created_at}</p>`
                    $(".labLoan_title").empty().append(timeStr)
                    str = `<form >
                        <table>
                            <tr>
                              <td>申请实验室名称</td>
                              <td>${data.data.laboratory_loan[0].laboratory_name}</td>
                            </tr>
                            <tr>
                              <td>实验室编号</td>
                              <td>${data.data.laboratory_loan[0].laboratory_id}</td>
                            </tr>
                            <tr>
                              <td>实验室课程名称</td>
                              <td>${data.data.laboratory_loan[0].course_name}</td>
                            </tr>
                            <tr>
                              <td>学习班级及人数</td>
                              <td>${data.data.laboratory_loan[0].class_name} ${data.data.laboratory_loan[0].number}人</td>
                            </tr>
                            <tr>
                              <td>实验目的</td>
                              <td>${data.data.laboratory_loan[0].purpose}</td>
                            </tr>
                            <tr>
                              <td>具体使用时间</td>
                              <td><span>${data.data.laboratory_loan[0].start_time}-${data.data.laboratory_loan[0].end_time}</span><br />
                                <span>第${data.data.laboratory_loan[0].start_class}至第${data.data.laboratory_loan[0].end_class}节课</span>
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
                              <td colspan="2">申请人：${data.data.laboratory_loan[0].applicant_name} 电话：${data.data.laboratory_loan[0].phone} ${data.data.laboratory_loan[0].created_at}</td>
                            </tr>
                      </table>
                    </form>`
                    console.log(str)
                    $('.labLoan_form').empty().append(str);
                }
                if (data.code === 100) {
                    console.log(data.msg);
                }
            }, error: function (data) {
                console.log("error")
            }
        })
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
