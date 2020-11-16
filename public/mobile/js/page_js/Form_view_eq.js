window.onload = function () {
function  jujement (a,b){
    
    for (let i = 0; i <status - a; i++) {
        $(".lablinear").eq(i).addClass("app_pass");
        $(".labcircle").eq(i).addClass("app_pass");
    }
    $(".lablinear").eq(status - b).removeClass("app_pass");
    $(".labcircle").eq(status - b).removeClass("app_pass");
    $(".lablinear").eq(status - b).addClass("not_completed");
    $(".labcircle").eq(status - b).addClass("not_completed");

}

    //解析参数
    var url=location.search;
    var formid;
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
    formid= Request["form_id"];
    var SERVER_PATH = 'http://bread.varsion.cn/'

    // var a = "C2010284621";
    // var b = "A2011024937"
    // console.log(a)



    //    页面初始化

    $.ajax({
        type: "get",
        url: SERVER_PATH + "/api/fill/seeview",
        data: { form_id:  formid },// 将json数据转化为字符串
        success: function (data) {
            console.log(data)
            //成功函数回显
            console.log(data.data.borrow_department)
            console.log(data.data.equipment_array[0].equipment_name)
            if (data.code == 200) {
                //内容显示

                var strhead = `  <tr>
                    <td >借用部门</td>
                    <td colspan="3">${data.data.borrow_department}</td>      
                </tr>
                <tr>
                    <td >设备借用</td>
                    <td colspan="3">${data.data.borrow_application}</td>      
                </tr>
                <tr>
                    <td >使用时间</td>
                    <td colspan="3">${data.data.borrower_name}</td>      
                </tr>
                <tr>
                    <td >借用人</td>
                    <td >${data.data.borrower_name}</td> 
                    <td>电话</td>
                    <td>${data.data.borrower_phone}</td>     
                </tr>
                <tr>
                    <td colspan="4">设备清单</td>
                </tr>
                <tr>
                    <td>借用部门</td>
                    <td>型号</td>
                    <td>数量</td>
                    <td>附件</td>
                </tr>`;

                $("#forminformation").append(strhead)
                console.log("成功了"),
                    console.log(data)



                //清单循环
                console.log(data.data.equipment_array.length)
                var str = ``;
                for (let i = 0; i < data.data.equipment_array.length; i++) {
                    str += `   <tr>
                <td>${data.data.equipment_array[i].equipment_name}</td>
                <td>${data.data.equipment_array[i].model}</td>
                <td>${data.data.equipment_array[i].equipment_number}</td>
                <td>${data.data.equipment_array[i].annex}</td>
            </tr> `

                }
                $("#formtableinfo").append(str)
                // if(data.data.form_status==1){
                //  console.log("123")
                // }
                //流程图判断
                status =data.data.form_status
                console.log(status)

                if (status == 3) {
                    for (let i = 0; i < status - 1; i++) {

                        $(".lablinear").eq(i).addClass("app_pass");
                        $(".labcircle").eq(i).addClass("app_pass");

                    }
                }
                else if (status ==2) {
                 
                    for (let i = 0; i <status - 1; i++) {

                        $(".lablinear").eq(status-2 ).addClass("not_completed");
                        $(".labcircle").eq(status-2 ).addClass("not_completed");


                    }

                }
                else if (status == 1) {

                    for (let i = 0; i < status ; i++) {


                        $(".lablinear").eq(i).addClass("app_pass");
                        $(".labcircle").eq(i).addClass("app_pass");

                    }

                }
                else if (status==4) {
                
                    jujement(2,3)
                }else if(status==5) {
                    for (let i = 0; i < status - 2; i++) {

                        $(".lablinear").eq(i).addClass("app_pass");
                        $(".labcircle").eq(i).addClass("app_pass");

                    }
                }
                else if(status==6){    
                    jujement(3,4)

                }
                else if(status==7){
                    for (let i = 0; i < status - 3; i++) {

                        $(".lablinear").eq(i).addClass("app_pass");
                        $(".labcircle").eq(i).addClass("app_pass");

                    }
                }
                else if(status=8){
                    jujement(4,5)
                }

       
            } else {
                console.log(data)
                alert("提交失败")
            }

            //循环遍历表格


        },
        error: function (data) {
    
            console.log(data)
        }
    })



}
