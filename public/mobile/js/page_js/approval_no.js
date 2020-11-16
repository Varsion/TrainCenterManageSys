var SERVER_PATH = 'http://bread.varsion.cn/'
var code = '121';
/**
 * 模糊查询
 * @param [
 *	'code':钉钉code
 *  'data':表单编号 || 申请人
 *  ]
 */
function select(){
    var data = $('.seacher_input').val();
    $('.seacher_input').val("");
    $('.seacher_select').val("0");
    if(data == ""){
        alert("输入不能为空")
        return;
    }
    $.ajax({
        type: "GET",
        url:SERVER_PATH + "api/approval/select?code=" + code + "&data=" + data,
        success:function (data) {
            console.log(data);
            if(data.code === 200){
                let str = ``;
                for(let i = 0;i < data.data.length ;i++){
                    str += `<tr>
                    <td>${data.data[i].form_id}</td>
                    <td>${data.data[i].type_name}</td>
                    <td>${data.data[i].applicant_name}</td>
                    `;
                    if(data.data[i].type_name == "实验室借用申请表单"){
                        str += `<td class="btn"><a href="approval_labInstr.html?${data.data[i].form_id}" class="app_lk_btn"">查看</a></td>
                  </tr>`
                    }else if(data.data[i].type_name == "实验室仪器设备借用单"){
                        str += `<td class="btn"><a href="approval_labLoan.html?${data.data[i].form_id}"class="app_lk_btn"">查看</a></td>
                  </tr>`
                    }else if(data.data[i].type_name == "开放实验室使用申请单"){
                        str += `<td class="btn"><a  href="approval_labOpen.html?${data.data[i].form_id}" class="app_lk_btn">查看</a></td>
                  </tr>`
                    }
                }
                $('.form_approval').empty().append(str);
            }
            if (data.code === 100) {
                console.log(data.msg);
            }
        }, error: function (data) {
            console.log("error")
        }
    })
}

/**
 * 分类查询
 * @param [
 *	'code':钉钉code
 *  'type_id':表单种类
 *  ]
 */
$('.seacher_select').change(function (){
    var type_id = $('.seacher_select').val();
    $('.seacher_input').val("");
    var type_name="";
    console.log(type_id);
    switch (type_id){
        case "0":
            window.location.reload();
            return;
        case "1":
            type_name="实验室借用申请表单";
            break;
        case "2":
            type_name="开放实验室使用申请单";
            break;
        case "3":
            type_name="实验室仪器设备借用单";
            break;
    }
    console.log(type_name);
    $.ajax({
        type:"GET",
        url:"http://bread.varsion.cn/api/approval/classify?code=xxx&type_name=" + type_name,
        // url:"http://bread.varsion.cn/api/approval/classify?code=" + code + "&type_name=" + type_name,
        success:function (data){
            console.log(data);
            if(data.code === 200){
                let str = ``;
                for(let i = 0;i < data.data.length ;i++){
                    str += `<tr>
                    <td>${data.data[i].form_id}</td>
                    <td>${data.data[i].type_name}</td>
                    <td>${data.data[i].applicant_name}</td>
                    `;
                    if(data.data[i].type_name == "实验室借用申请表单"){
                        str += `<td class="btn"><a href="approval_labLoan.html?${data.data[i].form_id}" class="app_lk_btn"">查看</a></td>
                  </tr>`
                    }else if(data.data[i].type_name == "实验室仪器设备借用单"){
                        str += `<td class="btn"><a href="approval_labInstr.html?${data.data[i].form_id}"class="app_lk_btn"">查看</a></td>
                  </tr>`
                    }else if(data.data[i].type_name == "开放实验室使用申请单"){
                        str += `<td class="btn"><a  href="approval_labOpen.html?${data.data[i].form_id}" class="app_lk_btn">查看</a></td>
                  </tr>`
                    }
                }
                $('.form_approval').empty().append(str);
            }
            if (data.code === 100) {
                console.log(data.msg);
            }
        }, error: function (data) {
            console.log("error")
        }
    })
});

/**
 * 表单展示
 * @param [
 *	'code':钉钉code
 *  ]
 */
$(document).ready(function (){

    $.ajax({
        type:"GET",
        url:"http://bread.varsion.cn/api/approval/show?code=xxx",
        // url:"http://bread.varsion.cn/api/approval/show?code=" + code,
        success:function (data){
            console.log(data);
            if(data.code === 200){
                let str = ``;
                for(let i = 0;i < data.data.length ;i++){
                    str += `<tr>
                    <td>${data.data[i].form_id}</td>
                    <td>${data.data[i].type_name}</td>
                    <td>${data.data[i].applicant_name}</td>
                    `;
                    if(data.data[i].type_name == "实验室借用申请表单"){
                        str += `<td class="btn"><a href="approval_labLoan.html?${data.data[i].form_id}" class="app_lk_btn"">查看</a></td>
                  </tr>`
                    }else if(data.data[i].type_name == "实验室仪器设备借用单"){
                        str += `<td class="btn"><a href="approval_labInstr.html?${data.data[i].form_id}"class="app_lk_btn"">查看</a></td>
                  </tr>`
                    }else if(data.data[i].type_name == "开放实验室使用申请单"){
                        str += `<td class="btn"><a  href="approval_labOpen.html?${data.data[i].form_id}" class="app_lk_btn">查看</a></td>
                  </tr>`
                    }
                }
                $('.form_approval').empty();
                $('.form_approval').append(str);
            }
            if (data.code === 100) {
                console.log(data.msg);
            }
        }, error: function (data) {
            console.log("error")
        }
    })
})

