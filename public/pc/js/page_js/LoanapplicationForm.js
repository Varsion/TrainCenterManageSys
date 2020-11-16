var SERVER_PATH = 'http://bread.varsion.cn/'
var url = location.search;
var form_id;
var Request = new Object();
var flag;
if (url.indexOf("?") != -1) {
    var str = url.substr(1);
    strs = str.split("&");
    for (var i = 0; i < strs.length; i++) {
        Request[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
}
form_id = Request["form_id"];
flag = Request['flag']
console.log(form_id)


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
 * 方法作用 将时间戳转化为月日
 * @author chenmiao <github.com/Yidaaa-u>
 */
const transformTime = (timestamp) => {
    const date = new Date(timestamp);
    const Y = date.getFullYear();
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    const D = date.getDate();
    const h = date.getHours() + ':';
    const m = date.getMinutes();
    // const s = date.getSeconds(); // 秒
    const dateString = M + '  月 ' + D + '  日  ';
    return dateString;
}

/**
 * 方法作用 实验室借用申请单查看
 * 请求接口 api/supadmin/labbordispalyinfo
 * @author chenmiao <github.com/Yidaaa-u>
 */
$.ajax({
    type: "GET",
    cache: true,
    url: SERVER_PATH + "api/supadmin/labbordispalyinfo",
    data: { form_id: form_id },
    dataType: 'json',
    async: false,
    success: function (data) {
        console.log(data)
            $('#lab_name').append(data.data[0].laboratory_name);
            $('#lab_id').append(data.data[0].laboratory_id)
            $('#date').append(transformTimestamp(data.data[0].created_at));
            var test = new Date(data.data[0].created_at);
            console.log(test.getDate())
            $('#start_time').append(transformTimestamp(data.data[0].start_time))
            $('#end_time').append(transformTime(data.data[0].end_time))
            $('#start_class').append(data.data[0].start_class)
            $('#end_class').append(data.data[0].end_class)
            $('#class_name').append(data.data[0].course_name)
            $('#class').append(data.data[0].class_name)
            $('#number').append(data.data[0].number)
            $('#laboratory_purpose').append(data.data[0].purpose)

            $('#teacher_name').append(data.data[0].applicant_name)
            $('#phone').append(data.data[0].phone)
            $('#updated_at').append(transformTimestamp(data.data[0].created_at))

            $('#name1').append(data.data[0].borrowing_department_name)
            $('#name2').append(data.data[0].borrowing_manager_name)
            $('#name3').append(data.data[0].center_director_name)

            if (flag == 1) {
                var target = document.getElementsByClassName("dc_pdf")[0];
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
                        var name = "实验室借用申请"+form_id
                        pdf.save(name+".pdf");
                    }
                })
            }


    },
    error: function (e) {
        alert('操作失败')
    }
})

