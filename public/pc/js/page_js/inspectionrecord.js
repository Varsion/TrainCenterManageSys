

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
flag = Request['flag']

$(document).ready(function () {
    $.get(SERVER_PATH + 'api/supadmin/tearecorddispalyinfo?form_id=' + form_id, function (data) {
        console.log(data)
        console.log(data.data.forminfo.length)
        let Str = ''
        let str = ''
        if (data.code === 200) {


            if (data.data.forminfo.length === 0) {
                Str += `
                       <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                 <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
               <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
               <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                     `
            }
            else {
                for (var i = 0; i < data.data.forminfo.length; i++) {
                    Str += `
                      <tr>
                    <td>${data.data.forminfo[i].laboratory_id}</td>
                    <td>${data.data.forminfo[i].laboratory_name}</td>
                    <td>${data.data.forminfo[i].class_name}</td>
                    <td>${data.data.forminfo[i].teacher}</td>
                    <td>${data.data.forminfo[i].teach_operating_condition}</td>
                    <td>${data.data.forminfo[i].operating_condition}</td>
                    <td>${data.data.forminfo[i].remark}</td>
                </tr>
                
                     `}
                for (var i = 0; i < 6 - data.data.forminfo.length; i++) {
                    Str += `
                        <tr >
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                        `
                }

            }



            for (var i = 0; i < data.data.reocrd_info.length; i++) {
                str = `
         <tr>
                <td colspan="7">
                    <div><p class="redr" >记录人:</p> <p id="recorder_name">${data.data.reocrd_info[0].applicant_name}</p></div>
                    <div ><p class="redrnum" >记录编号：</p><p id="recorder_id">${data.data.reocrd_info[0].form_id}</p> </div>
                </td>

            </tr>
         `
            }
        }


        $('#this').empty(Str);
        $('#this').append(Str);
        $('#this').append(str);

        if (flag == 1) {
            var target = document.getElementsByClassName("getHtml")[0];

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
                    var name = "期末实验室教学检查记录表"+form_id
                    pdf.save(name+".pdf");
                }
            })
        }

    })


})

// function getHtml(){
//     var html = document.querySelector(".getHtml");
//     console.log(html)
//     $.ajax({
//         type: "GET",
//         cache: false,
//         //contentType: "application/json;charset=UTF-8",
//         url: "127.0.0.1:8000/api/supadmin/demo",
//         data: {html: html},
//         dataType: 'json',
//         success:function (data){
//             if (data.code == 200){
//                 alert('导出成功')
//             }
//             if(data.code == 100){
//                 alert('导出失败')
//             }
//         },
//         error: function (){
//             alert('操作失败')
//         }
//     })
// }



// else {
//     Str +=`

// `
// }