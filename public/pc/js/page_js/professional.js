var SERVER_PATH = 'http://bread.varsion.cn/'

var totalPageasd = 2;

$.ajax({
    type: "get",
    cache: true,
    url: SERVER_PATH+"/api/supadmin/showclass",
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
        $.get(SERVER_PATH+"/api/supadmin/showclass?page="+num,function (data){
        let Str=``;

        for(let pre = 0 ; pre < data.data.data.length ; pre++){

            Str +=`
                        <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${data.data.data[pre].class_name}</td>
                            <td class="am-text-center am-text-middle">${data.data.data[pre].department_name}</td>
                            <td class="am-text-center am-text-middle">
                                <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#modify'}" onclick="modifyClass(${data.data.data[pre].class_id})">修改</button>
                                <button type="button" class="but-use" onclick="classDelete(${data.data.data[pre].class_id})">删除</button>
                            </td>
                        </tr>`
        }
        $('#table_list').empty();
        $('#table_list').append(Str);
        })
    }
});

///下拉框展示的系部
$(document).ready(function (){
    $.get(SERVER_PATH+'/api/supadmin/showdepartmentall',function (data){
        let Str=``;

        for (var i= 0;i<data.data.length;i++){
            Str += `
             <option value="${data.data[i].department_id}"  >&nbsp;&nbsp;${data.data[i].department_name} </option>    
            `
        }
        $('#add_class').empty();
        $('#add_class').append(Str);
    })
})
///实现增加班级
function classAdd() {
    var class_name=document.getElementById("add_name_class").value;
    var department_id=document.getElementById("add_class").value;
    console.log(class_name)
    console.log(department_id)
    $.ajax({
        type:"POST",
        url: SERVER_PATH+'/api/supadmin/addclass',
        data:{ class_name:class_name,department_id:department_id },
        success: function (data) {
            if(data.code == 200) {
                console.log("添加班级成功")
            }
            else if (data.code == 100){
                console.log("添加班级失败")
            }
            location.reload()
        }
    })
}
/////删除班级
function classDelete(id) {
    x = confirm("确定删除此班级吗？")
    if (x == true){
        $.ajax({
            type:"POST",
            url: SERVER_PATH+'/api/supadmin/deleteclass',
            data:{class_id:id},
            success: function (data) {
                if(data.code == 200) {
                    console.log("删除班级成功" )
                }
                else if (data.code == 100){
                    console.log("删除班级失败")
                }
                location.reload()
            }
        })
    }
}
//////修改班级
function classDedit() {
    var class_name=document.getElementById("modify_cla_name").value;
    var department_id=document.getElementById("modify_op_class").value;
    var class_id=document.getElementById("modify_class_id").value;

    $.ajax({
        type:"POST",
        url: SERVER_PATH+'/api/supadmin/modifyclass',
        data:{department_id:department_id , class_name:class_name , class_id:class_id},
        success: function (data) {
            if(data.code == 200) {
                location.reload();
                console.log("修改班级成功")
            }
            else if (data.code == 100){
                console.log("修改班级失败")
            }
        }
    })
}

/////点击修改后的弹窗的回显
function modifyClass(id){
    console.log(id)
    $.ajax({
        type:"GET",
        url: SERVER_PATH+'/api/supadmin/reshowclass',
        data:{class_id:id},
        success: function (data) {
            if(data.code == 200) {
////套娃套进来显示，实现下拉框里面的数据和数据库对应起来
                $.get(SERVER_PATH+'/api/supadmin/showdepartmentall',function (data){

                    let Str=``;
                    for (var i= 0;i<data.data.length;i++){
                        Str += `
             <option value="${data.data[i].department_id}"  >&nbsp;&nbsp;${data.data[i].department_name} </option>    
            `
                    }
                    $('#modify_op_class').empty();
                    $('#modify_op_class').append(Str);
                })
                let Str=``
                Str +=`
            <div class="am-modal-hd am-u-sm-centered ">修改</div>
            <div class="am-modal-bd am-u-sm-centered am-bd-1">
                <div class="am-g textam am-u-sm-centered">
                    <div class="am-u-sm-4 am-left">
                        <p class="am-text-center am-text-middle textp am-text-sm ">系部</p>
                    </div>
                    <div class="am-u-sm-8  am-left ">
                            <p class="am-text-center am-text-middle textp am-text-sm">
                                    <select  class="inputmovedd  inputmoveddd" id="modify_op_class" >
                                
                                  </select>
                               
                            </p>
                        </div>
                </div>
                <div class="am-g textam am-u-sm-centered">
                    <div class="am-u-sm-4 am-left ">
                        <p class="am-text-center am-text-middle textp am-text-sm">班级</p>
                    </div>
                    <div class="am-u-sm-8  am-left ">
                        <p class="am-text-center am-text-middle textp am-text-sm">
                            <input type="text" value="${data.data[0].class_name}" class="inputmovedd" id="modify_cla_name">
                            <input style="display: none" id="modify_class_id" value="${data.data[0].class_id}">
                        </p>
                    </div>
                </div>
               
            </div>
            <div class="am-modal-footer am-u-sm-centered">
                <div class="am-modal-btn footbtn" onclick="classDedit()">修改</div>
                <div class="am-modal-btn footbtn">取消</div>
            </div>
                `

                $('#movedalert1').empty();
                $('#movedalert1').append(Str);

                console.log(data)
            }
            else if (data.code == 100){
                console.log("回显班级失败")
            }
        }
    })
}



findClass();
/////查询系别管理
function findClass(){

    $(".icon-sousuo").click(function (){
        var name = $(this).siblings("#name").val()
        console.log(name)


        $.ajax({
            type: "get",
            cache: true,
            url: SERVER_PATH+"/api/supadmin/findclass",
            data:{class_name:name},
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
                $.get(SERVER_PATH+"/api/supadmin/findclass?class_name="+name+"&page="+num,function (data){
            let Str=``;

            for(let pre = 0 ; pre < data.data.data.length ; pre++){

                Str +=`
                        <tr class="am-text-center am-text-middle">
                            <td class="am-text-center am-text-middle">${data.data.data[pre].class_name}</td>
                            <td class="am-text-center am-text-middle">${data.data.data[pre].department_name}</td>
                            <td class="am-text-center am-text-middle">
                                <button type="button" class="btn-look" id="btn-look1" data-am-modal="{target: '#modify'}" onclick="modifyClass(${data.data.data[pre].class_id})">修改</button>
                                <button type="button" class="but-use" onclick="classDelete(${data.data.data[pre].class_id})">删除</button>
                            </td>
                        </tr>`
            }
            $('#table_list').empty();
            $('#table_list').append(Str);
                })
            }
        });

    })
}
