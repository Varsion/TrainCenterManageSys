var SERVER_PATH = 'http://bread.varsion.cn/'


var totalPageasd = 2;

$.ajax({
    type: "get",
    cache: true,
    url: SERVER_PATH+"/api/supadmin/showdepartment",
    dataType: 'json',
    async: false,
    //请求成功
    success: function(data) {
        totalPageasd = data.data.last_page
        console.log(data.data.last_page);
    },
    //请求失败，包含具体的错误信息
    error: function(e) {
    }
});
$.jqPaginator('#pagination2', {
    totalPages: totalPageasd,
    visiblePages: 8,
    currentPage: 1,
    first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
    prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
    next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
    last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
    page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
    onPageChange: function(num) {
    $.get(SERVER_PATH+"/api/supadmin/showdepartment?page="+num,function (data){
                let Str=``;
        for(let pre = 0 ; pre < data.data.data.length ; pre++){
            Str +=`
                        <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${data.data.data[pre].department_name}</td>
                            <td class="am-text-center am-text-middle">
                                <!-- 修改按钮 -->
                                <!-- <button type="button" class="btn-look">修改</button> -->
                                <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}" onclick="modifyDpartment(${data.data.data[pre].department_id})">修改</button>
                                <button type="button" class="but-use" onclick="departmentDelete(${data.data.data[pre].department_id})">删除</button>
                            </td>
                        </tr>
                                    <!-- 分页 -->
            <div class="am-container am-u-sm-centered layui-col-md3 " id="laypagation">
            </div>
           `
            console.log(data.data.data[pre]);
        }
        $('#table_list').empty();
        $('#table_list').append(Str);
    })
    }
});


///实现增加系部
function departmentAdd() {
    var department_name=document.getElementById("add_dep_name").value;

    console.log(department_name)

    $.ajax({
        type:"POST",
        url: SERVER_PATH+'/api/supadmin/adddepartment',
        data:{department_name:department_name},
        success: function (data) {
            if(data.code == 200) {
                console.log("添加系部成功" )
            }
            else if (data.code == 100){
                console.log("添加系部失败")
            }
            location.reload()
        }
    })
}

/////删除系部
function departmentDelete(id) {
    x = confirm("确定删除此系部吗？")
    if (x == true){
        $.ajax({
            type:"POST",
            url: SERVER_PATH+'/api/supadmin/deletedepartment',
            data:{department_id:id},
            success: function (data) {
                if(data.code == 200) {
                    console.log("删除系部成功" )
                }
                else if (data.code == 100){
                    console.log("删除系部失败")
                }
                location.reload()
            }
        })
    }
}

//////修改系部
function departmentDedit() {
    var department_name=document.getElementById("xg_dep_name").value;
    var department_id=document.getElementById("xg_dep_id").value;

    $.ajax({
        type:"POST",
        url: SERVER_PATH+'/api/supadmin/modifydepartment',
        data:{department_id:department_id , department_name:department_name},
        success: function (data) {
            if(data.code == 200) {
                location.reload();
                console.log("修改系部成功")
            }
            else if (data.code == 100){
                console.log("修改系部失败")
            }
        }
    })
}

/////点击修改后的弹窗的回显
function modifyDpartment(id){
    console.log(id)
    $.ajax({
        type:"GET",
        url: SERVER_PATH+'/api/supadmin/reshowdepartment',
        data:{department_id:id},
        success: function (data) {
            if(data.code == 200) {
                let Str=``
                Str +=`
            <div class="am-modal-hd am-u-sm-centered ">修改</div>
            <div class="am-modal-bd am-u-sm-centered am-bd-1">
               
                <div class="am-g textam">
                    <div class="am-u-sm-4 am-left ">
                        <p class="am-text-center am-text-middle textp am-text-sm">系部</p>
                    </div>
                    <div class="am-u-sm-7 am-u-sm-offset-1 am-left ">
                        <p class="am-text-center am-text-middle textp am-text-sm">
                            <input type="text" value="${data.data[0].department_name}" class="inputmovedd"  id="xg_dep_name">                
                            <input style="display: none" id="xg_dep_id" value="${data.data[0].department_id}">
                        </p>
                    </div>
                </div>
                    
            </div>
            <div class="am-modal-footer am-u-sm-centered">
                <div class="am-modal-btn footbtn" onclick="departmentDedit()">修改</div>
                <div class="am-modal-btn footbtn">取消</div>

            </div>
                `
                $('#movedalert1').empty();
                $('#movedalert1').append(Str);

                console.log(data)
            }
            else if (data.code == 100){
                console.log("回显系部失败")
            }
        }
    })
}

findDepartment();
/////查询系别管理
function findDepartment(){
    $(".icon-sousuo").click(function (){
        var name = $(this).siblings("#name").val()
        console.log(name)

        $.ajax({
            type: "get",
            cache: true,
            url: SERVER_PATH+"/api/supadmin/finddepartment",
            data:{department_name:name},
            dataType: 'json',
            async: false,
            //请求成功
            success: function(data) {
                totalPageasd = data.data.last_page
                console.log(data.data.last_page);
            },
            //请求失败，包含具体的错误信息
            error: function(e) {
            }
        });
        $.jqPaginator('#pagination2', {
            totalPages: totalPageasd,
            visiblePages: 8,
            currentPage: 1,
            first: '<li class="first"><a href="javascript:void(0);">首页</a></li>',
            prev: '<li class="prev"><a href="javascript:;">前一页</a></li>',
            next: '<li class="next"><a href="javascript:void(0);">下一页</a></li>',
            last: '<li class="last"><a href="javascript:void(0);">尾页</a></li>',
            page: '<li class="page"><a href="javascript:;">{{page}}</a></li>',
            onPageChange: function(num) {
                $.get(SERVER_PATH+"/api/supadmin/finddepartment?department_name="+name+"&page="+num,function (data){
            let Str=``;

            for(let pre = 0 ; pre < data.data.data.length ; pre++){
                Str +=`
                        <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${data.data.data[pre].department_name}</td>
                            <td class="am-text-center am-text-middle">
                                <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#movedalert'}" onclick="modifyDpartment(${data.data.data[pre].department_id})">修改</button>
                                <button type="button" class="but-use" onclick="departmentDelete(${data.data.data[pre].department_id})">删除</button>
                            </td>
                        </tr>`
                console.log(data.data.data[pre]);
            }

            $('#table_list').empty();
            $('#table_list').append(Str);
                })
            }
        });
    })
}
