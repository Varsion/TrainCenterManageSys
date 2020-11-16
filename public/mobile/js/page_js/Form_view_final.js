var SERVER_PATH = 'http://bread.varsion.cn/'
// 引入 Dingtalk-jsapi 资源包 相关使用详见 /dingtalk/readme.md 或者 钉钉开发手册 https://ding-doc.dingtalk.com/doc#/dev/welcome-to-lark
// import * as dd from 'dingtalk-jsapi';

// dd.ready(function() {
//     // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
//     dd.runtime.permission.requestAuthCode({
//         corpId: "corpid",
//         onSuccess: function(result) {
//         /*{
//             code: 'hYLK98jkf0m' //string authCode
//         }*/

//         },
//         onFail : function(err) {}

//     });
// });
// function code(){
//     dd.ready(function() {
//         // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
//         dd.runtime.permission.requestAuthCode({
//             corpId: "corpid",
//             onSuccess: function(result) {
//             /*{
//                 code: 'hYLK98jkf0m' //string authCode
//             }*/
//             },
//             onFail : function(err) {}

//         });
//     });
// }
// 如何使用layui的代码进行事件监听

/**
 * 方法作用 详细展示表单信息
 * 请求接口 api/fill/showone
 * @author caiwenpin <github.com/codercwp>
 */
window.onload = function () {
    layui.use(["jquery", "layer"], function () {
        var layer = layui.layer;
        var $ = layui.jquery;
        appearance = function (id) {
            // let a="123"

            // $(".detailed_page>form").append(a)
            layer.open({
                type: 1,
                content: $(".detailed_page"),
                area: ['350px', '500px'],
                btn: ['确定'],
                yes: function (index, layero) {
                    layer.close(index);
                    $(".detailed_page").css('display', 'none')
                },
                btnAlign: 'c'
            });

            $.ajax({
                url: SERVER_PATH + "api/fill/showone",
                type: 'get',
                data: {laboratory_id: id},
                dataType: 'json',
                success: function (data) {
                    console.log(data.data)
                    let str1 = ``
                    str1 += `
                  <input type="text" name="" id="" disabled value="实验室编号">
                  <input type="text" name="" id="" disabled value="${data.data[0].laboratory_id}">
                  <input type="text" name="" id="" disabled value="实验室">
                  <input type="text" name="" id="" disabled value="${data.data[0].laboratory_name}">
                  <input type="text" name="" id="" disabled value="课程">
                  <input type="text" name="" id="" disabled value="${data.data[0].class_name}">
                  <input type="text" name="" id="" disabled value="教师">
                  <input type="text" name="" id="" disabled value="${data.data[0].teacher}">
                  <input type="text" name="" id="" disabled value="教学运行情况">
                  <input type="text" name="" id="" disabled value="${data.data[0].teach_operating_condition}">
                  <input type="text" name="" id="" disabled value="实验室进行情况">
                  <input type="text" name="" id="" disabled value="${data.data[0].operating_condition}">
                  <input type="text" name="" id="" disabled value="备注">
                  <input type="text" name="" id="" disabled value="${data.data[0].remark}">
                `
                    $("#form_view_id").empty().append(str1);
                    if (data.code == 200) {
                        console.log(data)
                        console.log(data.msg);
                    }
                }
            })
        }

    })
}


/**
 * 方法作用 粗略展示表单信息
 * 请求接口 api/fill/showall
 * @author caiwenpin <github.com/codercwp>
 */
var url = window.location.href;
$(document).ready(function () {
    var str = url.split("=")[1]
    console.log(str)
    $.ajax({
        url: SERVER_PATH + "api/fill/showall",
        type: 'get',
        data: {form_id: str},
        dataType: 'json',
        success: function (data) {
            let str = ``;
            for (var i = 0; i < data.data.length; i++) {
                $(data.data[i]).each(function () {
                    str = `<tr>
                    <td class="Fid">${data.data[i].laboratory_id}</td>
                    <td>....</td>
                    <td>${data.data[i].teach_operating_condition}</td>
                    <td>${data.data[i].operating_condition}</td>
                    <td><span class="layui-btn layui-btn-radius layui-btn-normal layui-btn-xs " onclick="appearance(${data.data[i].laboratory_id})">详情</span></td>
                    </tr>`
                })
                //$('tbody').empty();
                $('tbody').append(str);
            }
            if (data.code === 200) {
                console.log(data);
            } else if (data.code === 100) {
                console.log(data);
            }
        }
    })
})



