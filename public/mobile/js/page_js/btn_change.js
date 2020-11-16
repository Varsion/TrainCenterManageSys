$(function(){
    $(".app_btn a").click(function(){
        $(this).addClass("change_btn_1")
        $(this).siblings().removeClass("change_btn_1")
        $(this).siblings().addClass("change_btn_2")
    })
  $(".back_btn").click(function(){
      location.href="../html/approval_no.html"
  })
})