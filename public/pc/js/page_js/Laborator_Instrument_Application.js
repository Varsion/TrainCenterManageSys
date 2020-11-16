var SERVER_PATH = 'http://bread.varsion.cn/'

/**
 * 方法作用 获取展示的总页数
 * 请求接口 api/supadmin/labequipdisplay
 * @author chenmiao <github.com/Yidaaa-u>
 */
$.ajax({
    type: "get",
    cache: true,
    url: SERVER_PATH + "api/supadmin/labequipdisplay",
    dataType: 'json',
    async: false,
    success: function (data) {
        totalPageasd = data.data.last_page
        console.log(data.data.last_page)
    },
    error: function (e) {
    }
});

/**
 * 方法作用 根据获取到的展示总页数分页展示
 * 请求接口 api/supadmin/labequipdisplay
 * @author chenmiao <github.com/Yidaaa-u>
 */
$.jqPaginator('#pagination2', {
    totalPages: totalPageasd,
    visiblePages: 8,
    currentPage: 1,
    first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
    prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
    next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
    last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
    page: '<li class="page"><a href="javascript:;"class=pagecur>{{page}}</a></li>',
    onPageChange: function (num) {
        $.get(SERVER_PATH + "api/supadmin/labequipdisplay?page=" + num, function (data) {
            var str = '';
            console.log(data.code)
            for (var i = 0; i < data.data.data.length; i++) {
                str += ` <tr class="am-text-center am-text-middle">
                                 <td class="am-text-center am-text-middle">${data.data.data[i].form_id}</td>
                                 <td class="am-text-center am-text-middle">${data.data.data[i].applicant_name}</td>
                                 <td class="am-text-center am-text-middle">${data.data.data[i].updated_at}</td>
                                 <td class="am-text-center am-text-middle">
                                     <button type="button" class="btn-look" id="btn-look1" onclick="see(this)">查看</button>
                                     <button type="button" class="but-use" onclick="see3(this)">导出</button>
                                 </td>
                             </tr>`
            }

            $('#table_list').empty();
            $('#table_list').append(str);
            $('.pagecur').on('click', function () {
                $('.pagecurrent').removeClass('current');
                $(this).addClass('current');
            })
        })
    }
});


/**
 * 方法作用 对搜索结果分页
 * 请求接口 api/supadmin/labequipselect
 * @author chenmiao <github.com/Yidaaa-u>
 */
function select() {

    var a = document.getElementById("name").value;
    console.log(a);
    //获取搜索的总页数
    $.ajax({
        type: "GET",
        cache: true,
        //contentType: "application/json;charset=UTF-8",
        url: SERVER_PATH + "api/supadmin/labequipselect",
        data: { form_id: a },
        dataType: 'json',
        async: false,
        success: function (data) {
            totalPageasd1 = data.data.last_page
            console.log(data.data.last_page)

        },
        error: function (e) {
            alert('操作失败')
        }
    })

    //根据获取到的搜索总页数分页展示
    $.jqPaginator('#pagination2', {
        totalPages: totalPageasd1,
        visiblePages: 8,
        currentPage: 1,
        first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
        last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
        page: '<li class="page"><a href="javascript:;" class=pagecur1>{{page}}</a></li>',
        onPageChange: function (num) {
            $.get(SERVER_PATH + "api/supadmin/labequipselect?form_id=" + a + "&page=" + num, function (data) {
                var str = '';
                console.log(totalPageasd1)

                for (var i = 0; i < data.data.data.length; i++) {
                    str += ` <tr class="am-text-center am-text-middle">
                                 <td class="am-text-center am-text-middle">${data.data.data[i].form_id}</td>
                                 <td class="am-text-center am-text-middle">${data.data.data[i].applicant_name}</td>
                                 <td class="am-text-center am-text-middle">${data.data.data[i].updated_at}</td>
                                 <td class="am-text-center am-text-middle">
                                     <button type="button" class="btn-look" id="btn-look1" onclick="see(this)">查看</button>
                                     <button type="button" class="but-use" onclick="see3(this)">导出</button>
                                 </td>
                             </tr>`
                }

                $('#table_list').empty();
                $('#table_list').append(str);
                $('.pagecur1').on('click', function () {
                    $('.pagecurrent').removeClass('current');
                    $(this).addClass('current');
                })
            })
        }
    });

}

/**
 * 方法作用 查看跳转页面
 * @author chenmiao <github.com/Yidaaa-u>
 */
function see(a) {

    var form_id = $(a).parent().parent().children().eq(0).text();
    window.location.href = "from2.html?form_id=" + form_id;

}
function see3(a) {
    var form_id = $(a).parent().parent().children().eq(0).text();
    window.location.href = "from2.html?form_id=" + form_id + "&&" + "flag=" + 1;
}