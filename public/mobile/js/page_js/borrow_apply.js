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
    $('.button_f button').click(function (){
        $('.nav2 input').each(function (){
            val = $(this).val();
            if (val === ""){
                td = 1;
                alert('表单不能为空');
                return false;
            }
        })
    })

    $('.success_eject2 button').click(function (){
        $('.success_eject2').hide();
        $('.mask').hide();
    })

    
    $('.success_eject3 button').click(function() {
        $('.success_eject3').hide();
        $('.mask').hide();
    })

    $('.add_bu button').click(function (){
        // if (td === 1){
            var value = $("#select_equipment option:selected");
            var td1 = value.text();
            var td2 = $('.td_nav2 input').eq(0).val();
            var td3 = $('.td_nav2 input').eq(1).val();
            var td4 = $('.td_nav2 input').eq(2).val();
            var tr = "<tr class='text'><td>"+td1+"</td><td>"+td2+"</td><td>"+td3+"</td><td>"+td4+"</td></tr>";
            $("#tbody").append(tr);
        // }
    })
})
var SERVER_PATH = 'http://bread.varsion.cn/';
var code = "asdfasdklfa";

/**
 * 方法作用 获取所有的设备的编号和名字，回显在下拉框中
 * 请求接口 /api/fill/checkboxequipment
 * @author tangshengyou <github.com/TangSYc>
 */
$(document).ready(function(){
$.get(SERVER_PATH+"/api/fill/checkboxequipment",function(data){
    Str =`<select id="select_equipment" onchange="category_name()" >
    <option value="请选择">--请选择--</option>`
    for(var i = 0;i<data.data.length;i++){
        Str +=`<option value="${data.data[i].equipment_id}">${data.data[i].equipment_name}</option>`
    }
    Str +=`</select>`;
    $('#equipment_name').empty();
    $('#equipment_name').append(Str);
})
})
/**
 * 方法作用 根据设备的id获取具体的设备信息
 * 请求接口 /api/fill/selectequipment
 * @author tangshengyou <github.com/TangSYc>
 * @param [
 *			'equipment_id':设备编号
 *                          }
 *  ]
 */

function category_name(){
    var type = $("#select_equipment option:selected");
    var type_name = type.val();
    console.log(type_name);
    $.get(SERVER_PATH+"/api/fill/selectequipment?equipment_id="+type_name,function(data){
        console.log(data)
        Str=`
            <input type="text" value=${data.data.model}>
            `
    $('#model').empty();
    $('#model').append(Str);
    Str=`
            <input type="text" value=${data.data.number}>
            `
    $('#number').empty();
    $('#number').append(Str);
    Str=`
            <input type="text" value=${data.data.annex}>
            `
    $('#annex').empty();
    $('#annex').append(Str);
    });
}

/**
 * 方法作用 实验室仪器借用填报
 * 请求接口 api/fill/equipmentborrowing
 * @author tangshengyou <github.com/TangSYc>
 * @param [
 *			'code':钉钉code
 *          'borrow_department':借用部门
 *          ’borrow_applocation‘:设备用途
 *          ‘destine_start_time’:借用开始时间
 *          ‘destine_end_time’:借用结束时间
 *          'equipment_array'{:设备数组
 *                  equipment_name:设备名称
 *                  number:数量
 *                          }
 *  ]
 */
function btn1(){
    var tr = $("#tbody tr"); // 获取table中每一行内容
        var result = []; // 数组
        for (var i = 0; i < tr.length; i++) {// 遍历表格中每一行的内容
            var tds = $(tr[i]).find("td");
            if (tds.length >= 0) {
                result.push({
                    "equipment_name": $(tds[0]).text(),
                    "number": $(tds[2]).text(),
                })
            }
        }
        var  vdata = {
            borrow_department:$("#borrow_department").val(),
            borrow_application:$("#borrow_application").val(),
            destine_start_time:$("#destine_start_time").val(),
            destine_end_time:$("#destine_end_time").val(),
            code:code,
            equipment_array:result
        }
    $.ajax({
            type: "post",
            url: SERVER_PATH+'api/fill/equipmentborrowing',
            data: vdata,
            dataType: "json",
            success: function (data) {
                    if(data.code == 200){
                        $('.success_eject2').show();
                    }else{
                        console.log(data);
                        $('.success_eject3').show();
                    }
            },
            error: function (XMLHttpRequest, textStatus, readyState) {
                alert("数据不正确");
                $('.success_eject3').show();
                $('.mask').show();
                console.log(XMLHttpRequest.status);
                console.log(XMLHttpRequest.readyState);
                console.log(textStatus);
            }
    })
}
