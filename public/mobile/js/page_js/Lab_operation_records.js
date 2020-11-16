var SERVER_PATH = 'http://bread.varsion.cn/';
/**
 * 方法作用 表单显示
 * 请求接口 api/view/formview
 * @author lizhongzheng <github.com/bixuande>
 */
var url = window.location.href;
$(document).ready(function() {
    console.log(url)
    var form_id = url.split("?")[1]
    console.log(form_id)
    $.get(SERVER_PATH+'api/view/formview?'+form_id,function (data){
        var Str=``;
        console.log(data.data[0].teacher);
        for(var i = 0 ; i < data.data.length ; i++){
            console.log(data.data[i]);
            Str +=`
                <input type="text" name=""  disabled value="周次" readonly>
                <input type="text" name=""  disabled value="${data.data[i].week}" readonly>
                <input type="text" name=""  disabled value="专业班级" readonly>
                <input type="text" name=""  disabled value="${data.data[i].classname}" readonly>
                <input type="text" name=""  disabled value="学生姓名" readonly>
                <input type="text" name=""  disabled value="${data.data[i].applicant_name}" readonly>
                <input type="text" name=""  disabled value="人数" readonly>
                <input type="text" name=""  disabled value="${data.data[i].number}" readonly>
                <input type="text" name=""  disabled value="课程名称/实验项目" readonly>
                <input type="text" name=""  disabled value="${data.data[i].class_name}" readonly>
                <input type="text" name=""  disabled value="任课教师" readonly>
                <input type="text" name=""  disabled value="${data.data[i].teacher}" readonly>
                <input type="text" name=""  disabled value="设备运行情况" readonly>
                <input type="text" name=""  disabled value="${data.data[i].situation}" readonly>
                <input type="text" name=""  disabled value="备注" readonly>
                <input type="text" name=""  disabled value="${data.data[i].remark}" readonly>
              `
        }
        console.log(Str)
        $('#lab_form').empty();
        $('#lab_form').append(Str);
    })
})