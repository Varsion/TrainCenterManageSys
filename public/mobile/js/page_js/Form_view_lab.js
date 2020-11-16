window.onload=function(){

    var SERVER_PATH = 'http://bread.varsion.cn/'
    // var a="C2010283959";
    // var b="A2011024937"
    // console.log(a)
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
      console.log(formid)
    
    //    页面初始化


        $.ajax({
            type: "get",
            url : SERVER_PATH+"/api/fill/viewlabborrow",
            data: {form_id:formid},// 将json数据转化为字符串
            success: function (data) {
                console.log(data)
              
                if(data.code==200){
             
               var date=`${data.data[0].created_at}`;
               $(".formdate").append( date)

        
                    var strhead=` 
                <tr>
                <td >申请实验室名称</td>
                <td >${data.data[0].laboratory_name}</td>      
            </tr>
            <tr>
            <td >实验室编号</td>
            <td >${data.data[0].laboratory_id}</td>      
        </tr>
        <tr>
            <td >学习班级</td>
            <td >${data.data[0].class_name}</td>      
        </tr>
        <tr>
            <td >人数</td>
            <td >${data.data[0].number}</td>      
        </tr>
        <tr>
            <td >实验目的</td>
            <td >${data.data[0].purpose}</td>      
        </tr>
        <tr>
            <td >具体使用时间</td>
            <td >${data.data[0].start_time}<br>第${data.data[0].start_class}节课至第${data.data[0].end_class}节课</td>      
        </tr>
        <tr>
            <td >实验室课程名称</td>
            <td >${data.data[0].course_name}</td>      
        </tr>
            <tr>
                <td colspan="3" >指导老师（申请人）承诺：<br>
                    1. 借用教师为借用期间实验室安全责任人，
                    必须保证实验室的安全。切实履行实验室用
                    电用水防盗防火安全。对实验人员进行安全
                    教育，保证实验室人员人身安全。<br>
                    2. 对实验人员进行必要仪器使用和实验技能
                    指导实验操作教育，保证实验操作规范及设
                    备正常。<br>
                    3. 督促实验人员按时完成实验项目。
                    
                       我已阅知实验室安全责任要求，保证切实履
                    行实验室安全责任。<br>
                    申请人：${data.data[0].applicant_name}  <br> 电话：${data.data[0].phone} <br>  ${data.data[0].created_at} </td>
            </tr>`;
                $("#forminfo").append( strhead)

        //流程图判断
        status =data.data[0].status_id
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
        //判断结束
     


                    
                    console.log("成功了"),
                    console.log( data)
                    
                }else{
                    console.log(data)
                    alert("提交失败")
                }
          
            },
            error: function (data) {
    
                console.log(data)
            }
        })

    

}
   