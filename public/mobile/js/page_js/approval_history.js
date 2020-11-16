$(function () {
    searchForm();
    selectType();
    /**
     * 展示初始化页面
     */
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "http://bread.varsion.cn/api/approval/showall?code=xxx",
            success: function (data) {
                if (data.code === 200) {
                    let str = ``;
                    for (let i = 0; i < data.data.length; i++) {
                        if (data.data[i].status_name == "通过") {
                            var flag = 1;
                        } else {
                            flag = 0;
                        }
                        if (data.data[i].type_name == "实验室借用申请表单") {
                            str += `<tr onclick ="location.href='Hty_labLoan.html?&&form_id=${data.data[i].form_id}&&status=${flag}'">
                  `
                        } else if (data.data[i].type_name == "实验室仪器设备借用单") {
                            str += `<tr onclick ="location.href='Hty_labInstr.html?&&form_id=${data.data[i].form_id}&&status=${flag}'">
                                `
                        } else if (data.data[i].type_name == "开放实验室使用申请单") {

                            str += `<tr onclick ="location.href='Hty_labOpen.html?&&form_id=${data.data[i].form_id}&&status=${flag}'">
                                `
                        }

                        str += `
                    <td>${data.data[i].form_id}</td>
                    <td>${data.data[i].type_name}</td>
                    <td>${data.data[i].applicant_name}</td>
                    <td class="status_name">${data.data[i].status_name}</td>
                    </tr>
                    `;
                    }
                    $('#form_history').empty();
                    $('#form_history').append(str);
                }
                if (data.code === 100) {
                    console.log(data.msg);
                }
            },
            error: function (data) {
                console.log("error")
            }
        })
    })

    /**
     * 通过表单编号和申请人姓名查询表单
     * @author yangsiqi <github.com/Double-R111>
     */
    function searchForm() {
        $(".search_icon").click(function () {
            var value = $('.seacher_input').val();
            var code = 'xxxxxx';
            $.ajax({
                type: "GET",
                datatype: "json",
                data: {
                    code: code,
                    form_id: value
                },
                url: "http://bread.varsion.cn/api/approval/searchform", //通过表单编号和申请人姓名查询表单
                error: function (data, type, err) {
                    console.log("ajax错误类型：" + data);
                    console.log(err);
                },
                success: function (data) {
                    console.log(data)
                    var str = ``;
                    if (data.code === 100) {
                        // alert(data.msg);
                        console.log(data);
                    }
                    if (data.code === 200) {
                        console.log(data)
                    }
                    for (var i = 0; i < data.data.length; i++) {
                        $(data.data[i]).each(function () {
                            if (data.data[i].status_name == "通过") {
                                var flag = 1;
                            } else {
                                flag = 0;
                            }
                            if (data.data[i].type_name == "实验室借用申请表单") {
                                str += `<tr onclick="location.href='Hty_labLoan.html?form_id=${data.data[i].form_id}&&status=${flag}'" class="show">`
                            } else if (data.data[i].type_name == "实验室仪器设备借用单") {
                                str += `<tr onclick="location.href='Hty_labInstr.html?form_id=${data.data[i].form_id}&&status=${flag}'" class="show">`
                            } else if (data.data[i].type_name == "开放实验室使用申请单") {
                                str += `<tr onclick="location.href='Hty_labOpen.html?form_id=${data.data[i].form_id}&&status=${flag}'" class="show">`
                            }
                        })         
                str += `
                  <td>${data.data[i].form_id}</td>  
                  <td>${data.data[i].type_name}</td>
                  <td>${data.data[i].applicant_name}</td>
                  <td>${data.data[i].status_name}</td>
                  </tr>
                `;
                    }
                    $('#form_history').empty().append(str);
                }
            })
        })
    }

    /**
     * 通过表单类型查询表单
     *  @author yangsiqi <github.com/Double-R111>
     */
    function selectType() {

        $(".seacher_select").change(function () {
            var choose = $(".seacher_select").val();
            var code = "xxxxx";
            var type_name = "";
            switch (choose) {
                case "0":
                    window.location.reload();
                    return;
                case "1":
                    type_name = "实验室借用申请表单";
                    break;
                case "2":
                    type_name = "开放实验室使用申请单";
                    break;
                case "3":
                    type_name = "实验室仪器设备借用单";
                    break;
            }
            $.ajax({
                type: "GET",
                datatype: "json",
                data: {
                    type_name: type_name,
                    code: code
                },
                url: "http://bread.varsion.cn/api/approval/selecttype", //通过表单类型查询表单
                error: function (data, type, err) {
                    console.log("ajax错误类型：" + type);
                    console.log(err);
                },
                success: function (data) {
                    var str = ``;
                    if (data.code === 100) {
                        // alert(data.msg);
                        console.log(data);
                    }
                    if (data.code === 200) {
                        console.log(data)
                    }
                    for (var i = 0; i < data.data.length; i++) {
                        $(data.data[i]).each(function () {
                            // str += `<tr>
                            //        <td>${data.data[i].form_id}</td>
                            //        <td>${data.data[i].type_name}</td>
                            //        <td>${data.data[i].applicant_name}</td>
                            //       `;
                            if (data.data[i].type_name == "实验室借用申请表单") {
                                str += `
                                <tr onclick="location.href='Hty_labLoan.html?&&form_id=${data.data[i].form_id}'">
                                `
                            } else if (data.data[i].type_name == "实验室仪器设备借用单") {
                                str += `
                                <tr onclick="location.href='Hty_labInstr.html?&&form_id=${data.data[i].form_id}'">
                                `
                            } else if (data.data[i].type_name == "开放实验室使用申请单") {
                                str += `
                                <tr onclick="location.href='Hty_labOpen.html?&&form_id=${data.data[i].form_id}'">
                                `
                            }
                        })
                                str += `
                                   <td>${data.data[i].form_id}</td>
                                   <td>${data.data[i].type_name}</td>
                                   <td>${data.data[i].applicant_name}</td>
                                   <td>${data.data[i].status_name}</td>
                                   </tr>
                                  `;
                                $('#form_history').empty().append(str);
                    }
                }
            })
        })
    }
})
