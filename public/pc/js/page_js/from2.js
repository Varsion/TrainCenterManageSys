var SERVER_PATH = 'http://bread.varsion.cn/'
var url = location.search;
var form_id;
var flag;
var Request = new Object();
if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
}
form_id = Request["form_id"];
flag = Request["flag"]
console.log(form_id);

/**
 * 方法作用 将时间戳转化为年月日
 * @author chenmiao <github.com/Yidaaa-u>
 */
const transformTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const Y = date.getFullYear();
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    const D = date.getDate();
    const h = date.getHours() + ':';
    const m = date.getMinutes();
    // const s = date.getSeconds(); // 秒
    const dateString = Y + '  年 ' + M + '  月 ' + D + '  日  ';
    return dateString;
}

/**
 * 方法作用 实验室仪器设备借用单查看
 * 请求接口 api/supadmin/labequipdisplayinfo
 * @author chenmiao <github.com/Yidaaa-u>
 */
$.ajax({
    type: "GET",
    cache: true,
    url: SERVER_PATH + "api/supadmin/labequipdisplayinfo",
    data: { form_id: form_id },
    dataType: 'json',
    async: false,
    success: function (data) {

        var updated_at = transformTimestamp(data.data.frominfo[0].updated_at);
        let str = `
            <tr>
            <td>借用部门负责人签字</td>
            <td colspan="4">${data.data.frominfo[0].borrowing_department_name}</td>
        </tr>
        <tr>
            <td>实验室借用管理员签字</td>
            <td colspan="4">${data.data.frominfo[0].borrowing_manager_name}</td>
        </tr>
        <tr>
            <td>实验中心主任签字</td>
            <td colspan="4">${data.data.frominfo[0].center_director_name}</td>
        </tr>
        <tr>
            <td>设备管理员出库签字</td>
            <td>${data.data.frominfo[0].device_administrator_out_name}</td>
            <td>借用出库签字</td>
            <td colspan="2">${data.data.frominfo[0].borrower_name}</td>
        </tr>
        <tr>
            <td rowspan="2">归还记录</td>
            <td colspan="4" rowspan="2" style="text-align: left;">
                <p>归还日期：${updated_at}</p> <br>
                <p> 验收：</p><br>
                <p>通过/不通过（原因）：${data.data.frominfo[0].reason}</p>
                <br>
                <p> 验收人签字：${data.data.frominfo[0].device_administrator_acceptance_name} </p> <br>
                <p> 归还人签字：${data.data.frominfo[0].borrower_name}</p>
            </td>

        </tr>
            `
        $("#formfoot").append(str)
        $('#department').append(data.data.frominfo[0].borrow_department);
        $('#application').append(data.data.frominfo[0].borrow_application);
        $('#start_time').append(transformTimestamp(data.data.frominfo[0].destine_start_time));
        $('#expect_time').append(transformTimestamp(data.data.frominfo[0].destine_end_time));
        $('#borrow_name').append(data.data.frominfo[0].borrower_name);
        $('#phone').append(data.data.frominfo[0].borrower_phone);

        var Str = ``;
        var equiplist = data.data.equiplist;
        for (let index = 0; index < equiplist.length; index++) {
            Str += `                
            <tr class="asd">
            <td rowspan="1"></td>
            <td>${equiplist[index].equipment_name}</td>
            <td>${equiplist[index].model}</td>
            <td>${equiplist[index].equipment_number}</td>
            <td>${equiplist[index].annex}</td>
        </tr>`;
        }
        if (equiplist.length < 7) {
            for (let index = 0; index < 7 - equiplist.length; index++) {
                Str += `                
                <tr class="asd">
                <td rowspan="1"></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>

            </tr>`;
            }
        }
        $('#forminfo').empty().append(Str);
        if (flag == 1) {
            var target = document.getElementsByClassName("dc_dpf2")[0];

            target.style.background = "#FFFFFF";
            html2canvas(target, {
                onrendered: function (canvas) {
                    var contentWidth = canvas.width;
                    var contentHeight = canvas.height;

                    //一页pdf显示html页面生成的canvas高度;
                    var pageHeight = contentWidth / 592.28 * 841.89;
                    //未生成pdf的html页面高度
                    var leftHeight = contentHeight;
                    //页面偏移
                    var position = 0;
                    //a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高
                    var imgWidth = 595.28;
                    var imgHeight = 592.28 / contentWidth * contentHeight;

                    var pageData = canvas.toDataURL('image/jpeg', 1.0);

                    var pdf = new jsPDF('', 'pt', 'a4');

                    //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                    //当内容未超过pdf一页显示的范围，无需分页
                    if (leftHeight < pageHeight) {
                        pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
                    } else {
                        while (leftHeight > 0) {
                            pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                            leftHeight -= pageHeight;
                            position -= 841.89;
                            //避免添加空白页
                            if (leftHeight > 0) {
                                pdf.addPage();
                            }
                        }
                    }

                        var name = "实验室仪器设备借用单"+form_id
                    pdf.save(name+".pdf");

                }
            })
        }


    },
    error: function (e) {
        alert('操作失败')
    }
})