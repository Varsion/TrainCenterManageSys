var SERVER_PATH = 'http://bread.varsion.cn/';
var code = "asdfasdklfa";  //该js需要code


/**
 * 方法作用 根据用户选中的下拉框中的选项 显示该用的填报的表单
 * 请求接口 api/fill/selectionform
 * @author tangshengyou <github.com/TangSYc>
 * @param [
 *		'code':钉钉code
 *      ’type_name‘:表单类型
 *      ‘form_status’表单状态
 *  ]
 */
function category(){
        var type = $("#city option:selected")
        var form = $("#status option:selected")
        var type_name = type.val();
        var form_status = form.val();
        console.log(type_name,form_status);
        console.log(SERVER_PATH+"api/fill/selectionform?code="+code+"&type_name="+type_name+"&form_status="+form_status);
        $.get(SERVER_PATH + "api/fill/selectionform?code="+code+"&type_name="+type_name+"&form_status="+form_status,function(data){
            let Str=``;
            console.log(data.data);
            if(data.data == null){
                $('#form').empty();
                $('#form').append(Str);
            }else{
                for(var i = 0;i<data.data.length;i++){
                 if(data.data[i].type_id == "实验室借用申请表单"){
                    var url = "Form_view_lab.html?form_id="+data.data[i].form_id;
                }else if(data.data[i].type_id == "期末实验教学检查记录表"){
                    var url ="Form_view_final.html?form_id="+data.data[i].form_id;
                }else if(data.data[i].type_id == "实验室仪器设备借用单"){
                    var url ="Form_view_eq.html?form_id="+data.data[i].form_id
                }else if(data.data[i].type_id == "实验室运行记录"){
                    var url ="Lab_operation_records.html?form_id="+data.data[i].form_id
                }else if(data.data[i].type_id == "开放实验室使用申请单"){
                    var url ="Form_view_open.html?form_id="+data.data[i].form_id;
                }
                    if(data.data[i].form_status == "审批中"){
                        var color = "nopass";
                    }else if(data.data[i].form_status == "已通过"){
                        var color = "pass"
                    }else if(data.data[i].form_status == "未通过"){
                        var color = "approval"
                    }
                    Str +=`<tr>
                    <td>${data.data[i].form_id}</td>
                    <td>${data.data[i].type_id}</td>
                    <td><span class=${color}>${data.data[i].form_status}</span></td>
                    <td><a href=${url}><span class="layui-btn layui-btn-radius layui-btn-normal layui-btn-xs chakan">查看</span></a></td>
                  </tr>`
                }
                $('#form').empty();
                $('#form').append(Str);
            }
            
        })

}

/**
 * 方法作用 进入页面回显所有表单
 * 请求接口 api/fill/selectionform
 * @author tangshengyou <github.com/TangSYc>
 * @param [
 *		'code':钉钉code
 *      ’type_name‘:表单类型
 *      ‘form_status’表单状态
 *  ]
 */
$(document).ready(function() {
    var type = $("#city option:selected")
    var form = $("#status option:selected")
    var type_name = type.val();
    var form_status = form.val();
    $.get(SERVER_PATH + "api/fill/selectionform?code="+code+"&type_name="+type_name+"&form_status="+form_status,function(data){
        let Str=``;
        
        console.log(data.data[0]);
        if(data.data == null){
            $('#form').empty();
            $('#form').append(Str);
        }else{
        for(var i = 0;i<data.data.length;i++){
            if(data.data[i].type_id == "实验室借用申请表单"){
                var url = "Form_view_lab.html?form_id="+data.data[i].form_id;
            }else if(data.data[i].type_id == "期末实验教学检查记录表"){
                var url ="Form_view_final.html?form_id="+data.data[i].form_id;
            }else if(data.data[i].type_id == "实验室仪器设备借用单"){
                var url ="Form_view_eq.html?form_id="+data.data[i].form_id;
            }else if(data.data[i].type_id == "实验室运行记录"){
                var url ="Lab_operation_records.html?form_id="+data.data[i].form_id;
            }else if(data.data[i].type_id == "开放实验室使用申请单"){
                var url ="Form_view_open.html?form_id="+data.data[i].form_id;
            }
            if(data.data[i].form_status == "审批中"){
                var color = "nopass";
            }else if(data.data[i].form_status == "已通过"){
                var color = "pass"
            }else if(data.data[i].form_status == "未通过"){
                var color = "approval"
            }
            Str +=`<tr>
            <td>${data.data[i].form_id}</td>
            <td>${data.data[i].type_id}</td>
            <td><span class=${color}>${data.data[i].form_status}</span></td>
            <td><a href=${url}><span class="layui-btn layui-btn-radius layui-btn-normal layui-btn-xs chakan">查看</span></a></td>
          </tr>`
        }
        $('#form').empty();
        $('#form').append(Str);
    }
    })
})
/**
 * 方法作用 根据form id 搜索对应的表单
 * 请求接口 api/fill/selectform
 * @author tangshengyou <github.com/TangSYc>
 * @param [
 *		'code':钉钉code
 *      ’form_id‘:表单编号
 *  ]
 */
window.onclick = function(){
    var btnObj = document.getElementById('btn01');
    btnObj.onclick = function(){
        var form_id = $('#import').val();
        $.get(SERVER_PATH +"/api/fill/selectform?form_id="+ form_id + "&code=" + code,function(data){
            Str = ``;
            console.log(data.data);
            if(data.data == null){
                $('#form').empty();
                $('#form').append(Str);
            }else {
                if (data.data.type_id == 1) {
                    var name = "实验室借用申请表单";
                    var url = "Form_view_lab.html?form_id=" + data.data.form_id;
                } else if (data.data.type_id == 2) {
                    var name = "期末实验教学检查记录表";
                    var url = "Form_view_final.html?form_id=" + data.data.form_id;
                } else if (data.data.type_id == 3) {
                    var name = "实验室仪器设备借用单";
                    var url = "Form_view_eq.html?form_id=" + data.data.form_id;
                } else if (data.data.type_id == 4) {
                    var name = "实验室运行记录?form_id=" + data.data.form_id;
                    var url = "Lab_operation_records.html"
                } else if (data.data.type_id == 5) {
                    var name = "开放实验室使用申请单";
                    var url = "Form_view_open.html?form_id=" + data.data.form_id;
                }
                if (data.data.form_status == "审批中") {
                    var color = "nopass";
                } else if (data.data.form_status == "已通过") {
                    var color = "pass"
                } else if (data.data.form_status == "未通过") {
                    var color = "approval"
                }
                Str += `<tr>
            <td>${data.data.form_id}</td>
            <td>${name}</td>
            <td><span class=${color}>${data.data.form_status}</span></td>
            <td><a href=${url}><span class="layui-btn layui-btn-radius layui-btn-normal layui-btn-xs chakan">查看</span></a></td>
          </tr>`;
                console.log(Str);
                $('#form').empty();
                $('#form').append(Str);
            }
        })
    }
}
