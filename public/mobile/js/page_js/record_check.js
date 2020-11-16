var SERVER_PATH = 'http://bread.varsion.cn/'


/**
 * 方法作用 期末教学记录检查实验室名称展示
 * 请求接口 api/fill/teachback
 * @author caiwenpin <github.com/codercwp>
 */
$(function () {
    $(".img_fa img").click(function () {
        $('.add_eject').show();
        $('.mask').show();
        $.ajax({
            url: SERVER_PATH + "api/fill/teachback",
            type: 'get',
            dataType: 'json',
            success: function (data) {
                console.log('新增回想');

                let str = ``;
                for (var i = 0; i < data.data.length; i++) {
                    $(data.data[i]).each(function () {
                        str += `
                        <option value="${data.data[i].laboratory_name}">${data.data[i].laboratory_name}</option>
                        `;
                    });
                }
                $("#laboratory_name").append(str);
                $(".laboratory_name").nextAll().remove();
                $(".laboratory_name").after(str);
                $(".re-one").empty();
                $(".re-one").append(str);
                if (data.code === 200) {
                    console.log(data);
                } else if (data.code === 100) {
                    console.log(data);
                }
            },
            error: function (data) {
                console.log('新增回显失败');
                console.log(data.code + 'code');
                console.log(data.data + '值');
            }
        })
    })


    var v_index = 0;
    var index;
    $('.add_bu button').on("click", function () {
        $('.add_eject').hide();
        $('.mask').hide(); //确认新增
        var d1 = $('.sec1').val();
        var d2 = $('.sec2').val();
        var d3 = $('.kecheng').val();
        var d4 = $('.jiaoshi').val();
        var d5 = $('.sec3').val();
        var d6 = $('.sec4').val();
        var d7 = $('.beizhu').val();
        var tr = "<tr><td class='none done'>" + d1 + "<td class='td-one dtow'>" + d2 + "</td><td>" + "..." + "</td><td class='none dthree'>" + d3 + "</td><td class='none dfour'>" + d4 + "</td><td class='dfive'>" + d5 + "</td><td class='dsix'>" + d6 + "</td><td class='none dseven'>" + d7 + "</td><td> <button type='button' class='button'>修&nbsp;改</button>" + "</td></tr>";
        $("#tbody").append(tr);

        console.log(d1 + 'd1')

        // 修改
        $('.button').on("click", function () {
            console.log('修改进来了');
            $(".from_eject").show();
            $('.mask').show();

            // 实验室名称
            var mc = $(this).parents('td').siblings('.done').text();
            console.log(mc + '实验室名称');
            $(this).parents('.box-r').siblings('.form-alert').find('.re-one').val(mc);

            // 实验室编号
            var bh = $(this).parents('td').siblings('.dtow').text();
            console.log(bh + '实验室编号');
            $(this).parents('.box-r').siblings('.form-alert').find('.re-tow').val(bh);

            // 课程
            var kc = $(this).parents('td').siblings('.dthree').text();
            console.log(kc + '课程');
            $(this).parents('.box-r').siblings('.form-alert').find('.re-three').val(kc);

            // 教师
            var js = $(this).parents('td').siblings('.dfour').text();
            console.log(js + '教师');
            $(this).parents('.box-r').siblings('.form-alert').find('.re-four').val(js);

            // 教学情况
            var jxqk = $(this).parents('td').siblings('.dfive').text();
            console.log(jxqk + '教学情况');
            $(this).parents('.box-r').siblings('.form-alert').find('.re-five').val(jxqk);

            // 运营情况
            var yyqj = $(this).parents('td').siblings('.dsix').text();
            console.log(yyqj + '运营情况');
            $(this).parents('.box-r').siblings('.form-alert').find('.re-six').val(yyqj);

            // 备注
            var bz = $(this).parents('td').siblings('.dseven').text();
            console.log(bz + '备注');
            $(this).parents('.box-r').siblings('.form-alert').find('.re-seven').val(bz);


            index = $(this).parents("#tbody tr").index();
            v_index = index;
            console.log(index);
            console.log($(this).parents('.box-r').siblings('.form-alert').find('.re-tow').text() + '获得弹框');


            // 确定
            $(this).parents('.box-r').siblings('.form-alert').find('.bu_two button').on('click', function () {
                $('.from_eject').hide();
                $('.mask').hide();
                var sle = $(this).parents('.bu').siblings('table').find('#lab_id').val();
                $("#tbody tr").eq(index).find("td").eq(1).text(sle)


                var sle4 = $(this).parents('.bu').siblings('table').find('.re-five').val();
                $("#tbody tr").eq(index).find("td").eq(5).text(sle4)

                var sle5 = $(this).parents('.bu').siblings('table').find('.re-six').val();
                $("#tbody tr").eq(index).find("td").eq(6).text(sle5)
            })
            // $('.bu_two button').click(function () {
            //     $('.from_eject').hide();
            //     $('.mask').hide();
            //     $(this).parents('tr').find('.re-tow').val();
            //     console.log($(this).parents('.bu').siblings('table').find('.re-tow').val());
            // })
        })

    })

    // $('.button_fa button').on('click', function () {
    //     $('.success_eject').show();
    //     $('.mask').show();
    // })
    $('.success_eject button').click(function () {
        $('.success_eject').hide();
        $('.mask').hide();
    })


    $('.bu_one button').on("click", function () {
        $('.from_eject').hide();
        $('.mask').hide();
        $('#tbody tr').eq(index).remove();
    })
    $('.add_eject img').click(function () {
        $('.add_eject').hide();
        $('.mask').hide();
    })
    $('.from_eject img').click(function () {
        $('.from_eject').hide();
        $('.mask').hide();
    })

    $('.no_eject button').click(function () {
        $('.no_eject').hide();
        $('.mask').hide();
    })
})


/**
 * 方法作用 添加期末教学记录检查实验室名称与编号联动
 * 请求接口 api/fill/teachmove
 * @author caiwenpin <github.com/codercwp>
 */
function cwp_getLaboratory_name() {

    var name = document.querySelector("#laboratory_name");
    var number = name.selectedIndex
    var laboratory_name = name[number].innerHTML
    console.log(laboratory_name)
    $.get(SERVER_PATH + 'api/fill/teachmove?laboratory_name=' + laboratory_name, function (data) {
        console.log(data)
        $('#laboratory_id').val(data.data[0].laboratory_id)
    })
}



/**
 * 方法作用 修改期末教学记录检查实验室名称与编号联动
 * 请求接口 api/fill/teachmove
 * @author caiwenpin <github.com/codercwp>
 */
function cwp_getLab_name() {

    var name = document.querySelector("#lab_name");
    var number = name.selectedIndex
    var laboratory_name = name[number].innerHTML
    console.log(laboratory_name)
    $.get(SERVER_PATH + 'api/fill/teachmove?laboratory_name=' + laboratory_name, function (data) {
        console.log(data)
        $('#lab_id').val(data.data[0].laboratory_id)
    })
}



/**
 * 方法作用 填报实验室借用申请
 * 请求接口 api/fill/teachadd
 * @author caiwenpin <github.com/codercwp>
 * @param
 *     "data":[
 *     {
 *    "laboratory_id":实验室编号,
 *    "laboratory_name":实验室名称,
 *    "class_name":课程,
 *    "teacher":老师姓名,
 *    "teach_operating_condition"：教学运行情况,
 *    "operating_condition":运行情况,
 *     "remark"：备注,
 *     }
 *    ]
 *
 */
function cwp_teachadd() {
    var infor = [];
    var tb = document.getElementById('tbody');    // table 的 id
    var rows = tb.rows;   // 获取表格所有行
    for (var i = 0; i < rows.length; i++) {
        var num = new Object()
        for (var j = 0; j < rows[i].cells.length; j++) {    // 遍历该行的 td
            //alert("第"+i+"行"+"第"+j+"列"+rows[i].cells[j].innerHTML)
            switch (j) {
                case 0:
                    num.laboratory_name = rows[i].cells[j].innerHTML
                    break
                case 1:
                    num.laboratory_id= rows[i].cells[j].innerHTML
                    break
                case 3:
                    num.class_name = rows[i].cells[j].innerHTML
                    break
                case 4:
                    num.teacher = rows[i].cells[j].innerHTML
                    break
                case 5:
                    num.teach_operating_condition = rows[i].cells[j].innerHTML
                    break
                case 6:
                    num.operating_condition = rows[i].cells[j].innerHTML
                    break
                case 7:
                    num.remark = rows[i].cells[j].innerHTML
                    break
                default:
                    break
            }
        }
        infor.push(num)
    }
    var data = infor;

    $.ajax({
        async: false,
        type: "POST",
        url: SERVER_PATH + 'api/fill/teachadd',
        data: {data: data},
    //    contentType: "application/x-www-form-urlencoded; charset=utf-8",
        dataType: "json",
        success: function (data) {
            if (data.code == 200) {
                console.log(data)
                $('.success_eject').show();
                $('.mask').show();
            } else {
                console.log(data)
                $('.no_eject').show();
                $('.mask').show();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log(data + '失败') ;
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