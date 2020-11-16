var SERVER_PATH = 'http://bread.varsion.cn/';
var code = "asdfasdklfa";


/**
 * 方法作用 根据用户的权限 显示对应的可以填报的表单
 * 请求接口 api/fill/forminfo
 * @author tangshengyou <github.com/TangSYc>
 * @param [
 *			'code':钉钉code
 *  ]
 */
$(document).ready(function() {
    $.get(SERVER_PATH+"api/fill/forminfo?code="+code,function(data){
        let Str = '';
        if(data.data.length == 5){
            Str += `<div class="row">
            <div>
                <a href="./site-borrowing-application-form.html">
                    <div class="img"><img src="../images/sj.png" alt=""></div>
                    <p>实验室借用申请</p>
                </a>
            
            </div>
            <div>
                <a href="./use_apply.html">
                    <div class="img"><img src="../images/pjsq.png" alt=""></div>
                    <p>开放实验室使用申请</p>
                </a>
            </div>
            </div>
            <div class="row">
            <div>
                <a href="./borrow_apply.html">
                    <div class="img"><img src="../images/zgsh.png" alt=""></div>
                    <p>实验室仪器借用申请</p>
                </a>
            </div>
            <div>
                <a href="./record_check.html">
                    <div class="img"><img src="../images/jszc.png" alt=""></div>
                    <p>期末教学记录检查</p>
                </a>
            </div>
            </div>
            <div class="row">
            <div>
                <a href="./operation-record-inspection.html">
                    <div class="img"><img src="../images/zx.png" alt=""></div>
                    <p>实验室运行记录检查</p>
                </a>
            </div>
            <div>
                <div class="img"><img src="../images/gxbg.png" alt=""></div>
                <p>敬请期待</p>
            </div>
            </div>`;
        }else if(data.data.length = 3){
            Str = `<div>
            <a href="./site-borrowing-application-form.html">
                <div class="img"><img src="../images/sj.png" alt=""></div>
                <p>实验室借用申请</p>
            </a>
        
        </div>
        <div>
            <a href="./use_apply.html">
                <div class="img"><img src="../images/pjsq.png" alt=""></div>
                <p>开放实验室使用申请</p>
            </a>
        </div>
        </div>
        <div class="row">
        <div>
            <a href="./borrow_apply.html">
                <div class="img"><img src="../images/zgsh.png" alt=""></div>
                <p>实验室仪器借用申请</p>
            </a>
        </div>
        <div>
        <div>
        <div class="img"><img src="../images/gxbg.png" alt=""></div>
        <p>敬请期待</p>
    </div>
        </div>
        </div>`
        }
        $('.main').empty();
        $('.main').append(Str);
    })
}
);