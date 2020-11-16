var SERVER_PATH = 'http://bread.varsion.cn/'
var url=location.search;
var group;
var flag;
var Request = new Object();
if(url.indexOf("?")!=-1)
{
    var str = url.substr(1);
    strs= str.split("&");
    for(var i=0;i<strs.length;i++)
    {
        Request[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
    }
}
group= Request["group"];
flag = Request['flag']

 $(document).ready(function (){
    $.get(SERVER_PATH+'api/supadmin/getlaball?group='+group,function (data){
        console.log(data)
        console.log(flag)
        if(data.code == 200){
            let Str = ''
           if(data.data.length == 0){
               Str = `
                <input type="text"> <span>年</span>
               `
               Str =`
                <tr>
                    <th>序号</th>
                    <th>周次</th>
                    <th>时间</th>
                    <th>专业班级（综合班）</th>
                    <th>教师</th>
                    <th>人数 </th>
                    <th>课程名称/实验项目</th>
                    <th>课程类型</th>
                    <th>设备运行情况</th>
                    <th>备注</th>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
                <tr>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                    <td> <input type="text" readonly></td>
                </tr>
               
               `
           }else{
               Str = `
               <tr>
                    <th>序号</th>
                    <th>周次</th>
                    <th>时间</th>
                    <th>专业班级（综合班）</th>
                    <th>教师</th>
                    <th>人数 </th>
                    <th>课程名称/实验项目</th>
                    <th>课程类型</th>
                    <th>设备运行情况</th>
                    <th>备注</th>
                </tr>
               `
               for (var i = 0; i < data.data.length;i++){
                   Str += `
                    <tr>
                    <td><input type="text" readonly value="${parseInt(i)+1}"></td>
                    <td><input type="text" readonly value="${data.data[i].week}" ></td>
                    <td><input type="text" readonly value="${data.data[i].time}" ></td>
                    <td><input type="text" readonly value="${data.data[i].class_id}" ></td>
                    <td><input type="text" readonly value="${data.data[i].teacher}" ></td>
                    <td><input type="text" readonly value="${data.data[i].number}" ></td>
                    <td><input type="text" readonly value="${data.data[i].class_name}" ></td>
                    <td><input type="text" readonly value="${data.data[i].class_type}" ></td>
                    <td><input type="text" readonly value="${data.data[i].situation}" ></td>
                    <td><input type="text" readonly value="${data.data[i].remark}" ></td>
                </tr>
                   `
               }
               for(var j = 0; j < 12 - data.data.length;j++){
                   Str +=`
                   <tr>
                    <td> <input type="text" readonly ></td>
                    <td> <input type="text" readonly ></td>
                    <td> <input type="text" readonly ></td>
                    <td> <input type="text" readonly ></td>
                    <td> <input type="text" readonly ></td>
                    <td> <input type="text" readonly ></td>
                    <td> <input type="text" readonly ></td>
                    <td> <input type="text" readonly ></td>
                    <td> <input type="text" readonly ></td>
                    <td> <input type="text" readonly ></td>
                </tr>
                   `
               }

           }
            $('#list_table').empty(Str);
            $('#list_table').append(Str);


            if (flag == 1){
                var target = document.getElementsByClassName("dc_pdf")[0];

                target.style.background = "#FFFFFF";

                html2canvas(target, {
                    onrendered:function(canvas) {
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
                        var imgHeight = 592.28/contentWidth * contentHeight;

                        var pageData = canvas.toDataURL('image/jpeg', 1.0);

                        var pdf = new jsPDF('', 'pt', 'a4');

                        //有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
                        //当内容未超过pdf一页显示的范围，无需分页
                        if (leftHeight < pageHeight) {
                            pdf.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight );
                        } else {
                            while(leftHeight > 0) {
                                pdf.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                                leftHeight -= pageHeight;
                                position -= 841.89;
                                //避免添加空白页
                                if(leftHeight > 0) {
                                    pdf.addPage();
                                }
                            }
                        }
                        var name = "实验室运行记录表"+group
                        pdf.save(name+".pdf");
                    }
                })
            }

        }



    })


})