var SERVER_PATH = 'http://bread.varsion.cn/'
$code = '111';  //该JS需要code
$(function () {
    $('#btn').on('click', function () {
        if ($('#op-week input').val() === '' || $('#op-week').val() == null) {
            // alert('申请实验室名称不得为空');
            $('#op-week p').html('周次不得为空')
        } else {
            $('#op-week p').html('');
        }

        if ($('#op-class select').val() === '' || $('#op-class select').val() == null) {
            $('#op-class p').html('专业班级不得为空')
        } else {
            $('#op-class p').html('')
        }

        if ($('#op-num input').val() === '' || $('#op-num input').val() == null) {
            $('#op-num p').html('人数不得为空')
        } else {
            $('#op-num p').html('')
        }

        if ($('#op-project input').val() === '' || $('#op-project input').val() == null) {
            // alert(11)
            $('#op-project p').html('课程名称/实验项目不得为空')
        } else {
            $('#op-project p').html('')
        }

        if ($('#op-teacher input').val() === '' || $('#op-teacher input').val() == null) {
            $('#op-teacher p').html('任课教师不得为空')
        } else {
            $('#op-teacher p').html('')
        }

        if ($('#op-equipment input').val() === '' || $('#op-equipment input').val() == null) {
            // alert(11)
            $('#op-equipment p').html('设备运行情况不得为空')
        } else {
            $('#op-equipment p').html('')
        }

        if ($('input').val() !== '' && $('input').val() != null) {
            $('.layui-layer-page').show();
            $('.mask').show();
        }

    })
    $('.cancel').on('click', function () {
        $('.mask').hide();
        $('.site').hide();
    })
    $(".determine").on('click', function () {
        $('.success-alert').hide();
        $('.mask').hide();
    })

    $('.determine').on('click',function (){
        $('.no-alert').hide();
        $('.mask').hide();
    })

    /**
     * 方法作用 班级下拉框
     * 请求接口 api/report/classdrop
     * @author lizhongzheng <github.com/bixuande>
     */
    $.ajax({
        url: SERVER_PATH+"api/report/classdrop",
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data.code)
            let str = ``;
            for (var i = 0; i < data.data.length; i++) {
                $(data.data[i]).each(function () {
                    str += `
                  <option value="${i}" class="class_name">${data.data[i].class_name}</option>
                   `
                })
                $("#c_name").append(str);
            }

            if (data.code === 200) {
                console.log(data.msg);
            } else if (data.code === 100) {
                console.log(data.msg);
            }


        },
        error: function (data) {
            console.log(data)
        }
    })

    /**
     * 方法作用 学生姓名
     * 请求接口 api/report/nameview
     * @author lizhongzheng <github.com/bixuande>
     */
    $.ajax({
        url: SERVER_PATH+"api/report/nameview",
        type: 'get',
        data:{code:$code},
        dataType: 'json',
        success: function (data) {
            console.log(data)
            $("#stu_name").val(data.data)
            if (data.code === 200) {
                console.log(data.msg);
            } else if (data.code === 100) {
                console.log(data.msg);
            }
        },
        error: function (data) {
            console.log(data.msg);
        }
    })

    /**
     * 方法作用 实验室名称下拉框
     * 请求接口 api/report/laboratorydrop
     * @author lizhongzheng <github.com/bixuande>
     */
    $.ajax({
        url: SERVER_PATH+"api/report/laboratorydrop",
        type: 'get',
        dataType: 'json',
        success: function (data) {
            console.log(data.code)
            let str = ``;
            for (var i = 0; i < data.data.length; i++) {
                $(data.data[i]).each(function () {
                    str += `
                  <option value="${data.data[i].laboratory_name}" class="la_name">${data.data[i].laboratory_name}</option>
                   `
                })
                $("#la_name").append(str);
            }

            if (data.code === 200) {
                console.log(data.msg);
            } else if (data.code === 100) {
                console.log(data.msg);
            }


        },
        error: function (data) {
            console.log(data.msg);
        }
    })

    /**
     * 方法作用 表单提交
     * 请求接口 api/report/operationreport
     * @author lizhongzheng <github.com/bixuande>
     */
    $("#btn").click(function (){
        var sel=document.getElementById('c_name');

        var sid=sel.selectedIndex;
        var ssel=document.getElementById('cl_type');

        var ssid=ssel.selectedIndex;

        console.log("表单按钮了")
        $.ajax({
            url: SERVER_PATH+"api/report/operationreport",
            type: 'post',
            data: {
                laboratory_name:$('#la_name').val(),
                week:$('#op').val(),
                class_name:sel[sid].innerHTML,
                applicant_name:$('#stu_name').val(),
                number:$('#num').val(),
                clas_name:$('#cl_name').val(),
                class_type:ssel[ssid].innerHTML,
                teacher:$('#te').val(),
                situation:$('#sit').val(),
                remark:$('#rem').val()
            },
            dataType: 'json',
            success: function (data) {
                data:decodeURIComponent(jQuery("#la_from").serialize()),

                console.log(data)
                if (data.code === 200) {
                    console.log(data.msg);
                    $('.success-alert').show();
                    $('.mask').show();
                } else{
                    console.log(data.msg);
                    $('.no-alert').show();
                    $('.mask').show();
                }

            },
            error: function (data) {
                console.log(data.msg);
                $('.no-alert').show();
                $('.mask').show();
            }
        })
    })


});

/**
 * 方法作用 实验室借用填报成功跳转
 * @author huweichen <github.com/nathaniel-kk>
 */
function sucJumpLaborBor(){
    window.location.href = 'experimental-training-center.html'
}