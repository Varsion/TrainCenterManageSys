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
    console.log(formid);
        var SERVER_PATH = 'http://bread.varsion.cn/'
    

    
    
    
        //    页面初始化
    
        $.ajax({
            type: "get",
            url: SERVER_PATH + "/api/fill/viewopenlabuse",
            data: { form_id:formid },// 将json数据转化为字符串
            success: function (data) {
                console.log(data)
                //成功函数回显
                console.log(data.data.borrow_department)
                console.log(data.data.reason)
                if (data.code == 200) {
                    //内容显示
    
                    var strhead = `   <tr>
                    <td colspan="4" style="height: 200px;" ><span style="margin-bottom: 20px;">不通过原因</span> <br>${data.data.reason}</td>
                </tr>
                <tr>
                   <td >使用原因</td>
                   <td colspan="3">${data.data.reason_use}</td>
                </tr>
                  <td >项目名称</td>
                    <td colspan="3">${data.data.porject_name}</td>
                 </tr>
                 <tr>
                    <td >使用时间</td>
                    <td colspan="3">${data.data. start_time}至${data.data.end_time}</td>
                 </tr>
             
            
                <tr>
                    <td colspan="4" >申请人名单 </td>
                </tr>
                <tr>
                    <td >姓名</td>
                    <td>学号</td>
                    <td>联系电话</td>
                    <td>承担工作</td>
                </tr>`;
                
    
                    $("#formtable").append(strhead)
                    console.log("成功了"),
                        console.log(data)
    
    
    
                //     清单循环
                 
                    var str = ``;
                    for (let i = 0; i < data.data.equipment_array.length; i++) {
                        str += `   <tr>
                    <td>${data.data.equipment_array[i].student_name}</td>
                    <td>${data.data.equipment_array[i].student_id}</td>
                    <td>${data.data.equipment_array[i].phone}</td>
                    <td>${data.data.equipment_array[i].work}</td>
                </tr> `
    
                    }
                    $("#forminfo").append(str)
          

                    //流程图判断
                    console.log(data.data.status_id);
                    status =data.data.status_id
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
    