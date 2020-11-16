
var SERVER_PATH = 'http://bread.varsion.cn/'
$(function (){
    showInfo();
})

//场地页面管理展示
function  showInfo(){
    $.ajax({
        type:"get",
        dataType:"json",
        url: SERVER_PATH+"api/supadmin/showinfo",
        error:function(data,type,err){
            console.log("ajax错误类型:"+type);
            console.log(err);
        },
        success:function(data){
            var str = "";
            if(data.code===100){
                alert(data.msg);
                console.log(data);
            }
            if(data.code===200){
                console.log(data);
                console.log(data.msg);
            }
            for(let i=0;i<data.data.data.length;i++){
                if(data.data.data[i].type=="1"){
                    var status ="layui-form-onswitch"
                }
                else {
                    status= "layui-form-switch"
                }
                str+=`
                 <tr class="am-text-center am-text-middle">
                    <td hidden><input type="text" value=${data.data.data[i].laboratory_id} id="lab_id" hidden ></td>
                    <td class="am-text-center am-text-middle">${data.data.data[i].laboratory_name}
                    <td class="am-text-center am-text-middle"><span class="thcom">${data.data.data[i].place}</span></td>
                    <td class="am-text-center am-text-middle layui-input-block">
                                 <div class="layui-form-item">
                                 <input type="checkbox" name="xxx" lay-skin="switch">
                                 <div class="layui-unselect layui-form-switch ${status}" lay-skin="_switch"><em></em><i></i></div>
                                 </div>
                    </td>
                    <td class="am-text-center am-text-middle">
                    <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}" onclick="returnInf(${data.data.data[i].laboratory_id})">修改</button>
                    <button type="button" class="but-use  " onclick="rmInfo(${data.data.data[i].laboratory_id})" >删除</button>
                    </td>
                  </tr>
                `
            }
            $('#table_list').empty().append(str);
            exitInfo();
        }
    })
}

//新增场地
function addInfo(){
    // console.log($('#laboratory_name').val(),$('#address').val(),$('#inputmoveddd').val())
    $.ajax({
        type:"POST",
        url: SERVER_PATH+"api/supadmin/addinfo",
        dataType:"json",
        data:{
            laboratory_name:$('#laboratory_name').val(),
            place:$('#address').val(),
            type:$('#inputmoveddd').val()
        },
        success:function (data){
            if(data.code===200){
                console.log(data.msg)
            }
            location.reload();
        },
        error:function(data){

            console.log("error");
        }

    })
}

//删除
function rmInfo(id){
    console.log(123);
    // $(".site_delete").click(function (){
    //     var id = $(this).parent().siblings().children("#lab_id").val();
        $.ajax({
            type:"get",
            data:{laboratory_id:id},
            dataType:"json",
            url:SERVER_PATH+'api/supadmin/rminfo',
            success:function (data){
                if(data.code==200){
                    console.log(data.msg)
                }
                location.reload();
            }

        })
}

//修改
function  exitInfo(id){
    $(".site_update").click(function(){
            // console.log(id,$('#u_name').val(),$('#u_address').val(),$('#u_type').val())
            $.ajax({
                type:'POST',
                data:{
                    laboratory_id:id,
                    laboratory_name:$('#u_name').val(),
                    place:$('#u_address').val(),
                    type:$('#u_type').val()
                },
                dataType:"json",
                url:SERVER_PATH+"api/supadmin/exitinfo",
                success:function (data){
                    console.log(data)
                    if(data.code==200){
                        console.log(data.msg)
                    }
                    location.reload();
                }
            })

        }
    )
}
//回显
function returnInf(id) {
    $.ajax({
        type: "get",
        data: {laboratory_id: id},
        dataType: "json",
        url: SERVER_PATH+"api/supadmin/returninfo",
        success: function (data) {
            console.log(data)
            var select_value = data.data[0].type
            console.log(select_value);
            var str = ``;
            str += ` 
               <div class="am-modal-hd am-u-sm-centered ">修改</div>
               <div class="am-modal-bd am-u-sm-centered am-bd-1" id="return">
               <div class="am-g textam">
               <div class="am-u-sm-4 am-left ">
                    <p class="am-text-center am-text-middle textp am-text-sm">场地名称</p>
               </div>
               <div class="am-u-sm-7 am-u-sm-offset-1 am-left ">
                    <p class="am-text-center am-text-middle textp am-text-sm">
                    <input type="text" value="&nbsp;&nbsp;${data.data[0].laboratory_name}" class="inputmovedd" id="u_name">
                    </p>
               </div>
               </div>
               <div class="am-g textam">
               <div class="am-u-sm-4 am-left">
                    <p class="am-text-center am-text-middle textp am-text-sm">地址</p>
               </div>
               <div class="am-u-sm-7 am-u-sm-offset-1 am-left ">
                    <p class="am-text-center am-text-middle textp am-text-sm">
                    <input type="text" value="&nbsp;&nbsp;${data.data[0].place}" class="inputmovedd" id="u_address">
                    </p>
               </div>
               </div>
               <div class="am-g textam">
               <div class="am-u-sm-4 am-left ">
                    <p class="am-text-center am-text-middle textp am-text-sm">类型</p>
               </div>
               <div class="am-u-sm-7 am-u-sm-offset-1 am-left ">
                    <p class="am-text-center am-text-middle textp am-text-sm">
                                <select  class="inputmovedd" value =${select_value} id="u_type" >
                                    <option value="0">&nbsp;未开放实验室</option>
                                    <option value="1" selected>&nbsp;开放实验室</option>
                               </select>

                    </p>
               </div>
               </div>
               </div>
            <div class="am-modal-footer am-u-sm-centered">
            <div class="am-modal-btn footbtn site_update"  onclick="exitInfo(${id})">修改</div>
            <div class="am-modal-btn footbtn">取消</div>
            </div> 
                    `
            $('#movedalert1').empty().append(str);

        },
        error: function (data) {
            console.log('失败' + data);
        }
    })

}

//查询分页
function findInfo(){
    var value=document.getElementById("name").value;
    //获取展示的总页数
    $.ajax({
        type: "get",
        cache: true,
        url: SERVER_PATH+"api/supadmin/findinfo",
        data:{laboratory_name: value},
        dataType: 'json',
        async: false,
        success: function (data) {
            totalPageasd = data.data.last_page
            console.log(data.data.last_page)
        },
        error: function (e) {
        }

    });
//根据获取到的展示总页数分页展示
    $.jqPaginator('#pagination2', {
        totalPages: totalPageasd,
        visiblePages: 8,
        currentPage: 1,
        first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
        prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
        next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
        last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
        page: '<li class="page"><a href="javascript:;" class="pagecurrent1">{{page}}</a></li>',
        onPageChange: function (num,data) {
            $.get(SERVER_PATH+"api/supadmin/findinfo?laboratory_name="+value+"&page=" + num, function (data) {
                var str = '';
                // console.log(data.code)
                for (let i = 0; i < data.data.data.length; i++) {
                    if (data.data.data[i].type == "1") {
                        var status = "layui-form-onswitch"
                    } else {
                        status = "layui-form-switch"
                    }
                    str+=`
                 <tr class="am-text-center am-text-middle">
                    <td hidden><input type="text" value=${data.data.data[i].laboratory_id} id="lab_id" hidden ></td>
                    <td class="am-text-center am-text-middle">${data.data.data[i].laboratory_name}
                    <td class="am-text-center am-text-middle"><span class="thcom">${data.data.data[i].place}</span></td>
                    <td class="am-text-center am-text-middle layui-input-block">
                                 <div class="layui-form-item">
                                 <input type="checkbox" name="xxx" lay-skin="switch">
                                 <div class="layui-unselect layui-form-switch ${status}" lay-skin="_switch"><em></em><i></i></div>
                                 </div>
                    </td>
                    <td class="am-text-center am-text-middle">
                    <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}" onclick="returnInf(${data.data.data[i].laboratory_id})">修改</button>
                    <button type="button" class="but-use  site_delete" onclick="rmInfo(${data.data.data[i].laboratory_id})" >删除</button>
                    </td>
                  </tr>
                `
                    $('#table_list').empty().append(str);
                    $('.pagecurrent1').on('click', function () {
                        $('.pagecurrent').removeClass('current');
                        $(this).addClass('current');
                    })
                }
            })
        },

    });

}


//获取展示的总页数
$.ajax({
    type: "get",
    cache: true,
    url: SERVER_PATH+"api/supadmin/showinfo",
    dataType: 'json',
    async: false,
    success: function (data) {
        totalPageasd = data.data.last_page
        // console.log(data.data.last_page)
    },
    error: function (e) {
    }
});
//根据获取到的展示总页数分页展示
$.jqPaginator('#pagination2', {
    totalPages: totalPageasd,
    visiblePages: 8,
    currentPage: 1,
// <li class="page" jp-role="page" jp-data="2"><a href="javascript:;">2</a></li>
    first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
    prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
    next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
    last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
    page: '<li class="page"><a href="javascript:;" class="pagecurrent">{{page}}</a></li>',
    onPageChange: function (num) {
        $.get(SERVER_PATH+"" +
            "api/supadmin/showinfo?page=" + num, function (data) {
            var str = '';
            for(let i=0;i<data.data.data.length;i++){
                if(data.data.data[i].type=="1"){
                    var status ="layui-form-onswitch"
                }
                else {
                    status= "layui-form-switch"
                }
                str+=`
           <tr class="am-text-center am-text-middle">
                    <td hidden><input type="text" value=${data.data.data[i].laboratory_id} id="lab_id" hidden ></td>
                    <td class="am-text-center am-text-middle">${data.data.data[i].laboratory_name}
                    <td class="am-text-center am-text-middle"><span class="thcom">${data.data.data[i].place}</span></td>
                    <td class="am-text-center am-text-middle layui-input-block">
                                 <div class="layui-form-item">
                                 <input type="checkbox" name="xxx" lay-skin="switch">
                                 <div class="layui-unselect layui-form-switch ${status}" lay-skin="_switch"><em></em><i></i></div>
                                 </div>
                    </td>
                    <td class="am-text-center am-text-middle">
                    <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}" onclick="returnInf(${data.data.data[i].laboratory_id})">修改</button>
                    <button type="button" class="but-use  " onclick="rmInfo(${data.data.data[i].laboratory_id})" >删除</button>
                    </td>
                  </tr>
                `
            }
            $('#table_list').empty();
            $('#table_list').append(str);
            $('.pagecurrent').on('click', function () {
                $('.pagecurrent').removeClass('current');
                $(this).addClass('current');
            })

        })
    }
});


