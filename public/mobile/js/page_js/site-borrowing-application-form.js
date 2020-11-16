var SERVER_PATH = 'http://bread.varsion.cn/'
var code = '123456'  //该js需要code
$(function () {
    $('#btn').on('click', function () {
        if ($('#site-name input').val() == '' || $('#site-name').val() == null) {
            // alert('申请实验室名称不得为空');
            $('#site-name p').html('申请实验室名称不得为空')
        } else {
            $('#site-name p').html('');
        }

        if ($('#site-num input').val() == '' || $('#site-num input').val() == null) {
            $('#site-num p').html('实验室编号不得为空')
        } else {
            $('#site-num p').html('')
        }

        if ($('#site-subject input').val() == '' || $('#site-subject input').val() == null) {
            $('#site-subject p').html('实验室课程名称不得为空')
        } else {
            $('#site-subject p').html('')
        }

        if ($('#site-class select').val() == '' || $('#site-class select').val() == null) {
            // alert(11)
            $('#site-class p').html('学生班级不得为空')
        } else {
            $('#site-class p').html('')
        }

        if ($('#site-purpose input').val() == '' || $('#site-purpose input').val() == null) {
            $('#site-purpose p').html('实验目的不得为空')
        } else {
            $('#site-purpose p').html('')
        }

        if ($('#site-range input').val() == '' || $('#site-range input').val() == null || $('#time input').val() == '' || $('#time input').val() == null) {
            $('#time p').html('具体使用时间不得为空')
        } else {
            $('#time p').html('')
        }

        if ($('input').val() != '' && $('input').val() != null) {
            $('.mask').show();
            $('.site').show();
        }

    })
    $('.cancel').on('click', function () {
        $('.mask').hide();
        $('.site').hide();
    })
    $('.nocancel').on('click', function () {
        $('.site').hide();
        // $('.success-alert').show();
        // $('.mask').show();
    })
    $(".determine").on('click', function () {
        $('.success-alert').hide();
        $('.failure-alert').hide();
        $('.mask').hide();
    })


})

/**
 * 方法作用 填报实验室借用申请实验室名称展示
 * 请求接口 api/fill/filllabnamedis
 * @author huweichen <github.com/nathaniel-kk>
 */
$.get(SERVER_PATH + 'api/fill/filllabnamedis', function (data) {
    console.log(data)
    let Str = '';
    for (var i = 0; i < data.data.length; i++) {
        $(data.data[i]).each(function () {
            Str += `
                   <option value="${i}">${data.data[i].laboratory_name}</option>
                `;
        });
    }
    $('#laboratory_name').append(Str);
})

/**
 * 方法作用 填报实验室借用申请实验室名称编号联动
 * 请求接口 api/fill/filllabborlink
 * @author huweichen <github.com/nathaniel-kk>
 */
function hwc_getLaboratory_name() {
    var name = document.getElementById("laboratory_name");
    var number = name.selectedIndex
    var laboratory_name = name[number].innerHTML
    console.log(laboratory_name)
    $.get(SERVER_PATH+'api/fill/filllabborlink?laboratory_name='+laboratory_name, function (data) {
        console.log(data)
        $('#laboratory_id').val(data.data[0].laboratory_id)
    })
}

/**
 * 方法作用 填报实验室借用申请学生班级展示
 * 请求接口 api/fill/filllabclassdis
 * @author huweichen <github.com/nathaniel-kk>
 */
$.get(SERVER_PATH + 'api/fill/filllabclassdis', function (data) {
    console.log(data)
    let Str = '';
    for (var i = 0; i < data.data.length; i++) {
        $(data.data[i]).each(function () {
            Str += `
                   <option value="${i}">${data.data[i].class_name}</option>
                `;
        });
    }
    $('#class_name').append(Str);
})

/**
 * 方法作用 填报实验室借用申请
 * @api api/fill/filllabborrow
 * @param [
 *		 code:钉钉code
 *      laboratory_id	int	    实验室编号
 *       course_name   string	 课程名称
 *       class_name	  string	学生班级名称
 *       number	      int	  学生人数
 *      purpose	    string	 实验目的
 *     start_time	date	开始使用时间
 *     end_time  	date	结束使用时间
 *     start_class	int	   开始使用时间（第几节课）
 *     end_class	int	   结束使用时间（第几节课）
 *  ]
 */
function hwc_LaboratoryLoan(){
    var laboratory_id = document.getElementById('laboratory_id').value;
    var course_name = document.getElementById('course_name').value;
    var number = document.getElementById('number').value;
    var purpose = document.getElementById('purpose').value;
    var start_time = document.getElementById('start_time').value;
    var end_time = document.getElementById('end_time').value;
    var start_class = document.getElementById('start_class').value;
    var end_class = document.getElementById('end_class').value;
    var name = document.getElementById("class_name");
    var num = name.selectedIndex
    var class_name = name[num].innerHTML
    $.ajax({
        async: false,
        type: "POST",
        url:SERVER_PATH+'api/fill/filllabborrow',
        data: {code : code, laboratory_id : laboratory_id, course_name : course_name, class_name : class_name, number : number, purpose : purpose,
            start_time : start_time, end_time : end_time,start_class : start_class,end_class : end_class},
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function (data) {
            console.log(data.data)
            if(data.code == 200){
                $('.success-alert').show();
                $('.mask').show();
            }else{
                $(".failure-alert").show();
                $('.mask').show();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $(".failure-alert").show();
            $('.mask').show();
            console.log(XMLHttpRequest.status);
            console.log(XMLHttpRequest.readyState);
            console.log(textStatus);
        }
    });
}

/**
 * 方法作用 实验室借用填报成功跳转
 * @author huweichen <github.com/nathaniel-kk>
 */
function sucJumpLaborBor(){
    window.location.href = 'experimental-training-center.html'
}

/**
 * 方法作用 实验室借用填报失败跳转
 * @author huweichen <github.com/nathaniel-kk>
 */
function faiJumpLaborBor(){
    window.location.href = 'site-borrowing-application-form.html'
}

