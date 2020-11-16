// 引入 Dingtalk-jsapi 资源包 相关使用详见 /dingtalk/readme.md 或者 钉钉开发手册 https://ding-doc.dingtalk.com/doc#/dev/welcome-to-lark
// import * as dd from 'dingtalk-jsapi';

// dd.ready(function() {
//     // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
//     dd.runtime.permission.requestAuthCode({
//         corpId: "corpid",
//         onSuccess: function(result) {
//         /*{
//             code: 'hYLK98jkf0m' //string authCode
//         }*/
        
//         },
//         onFail : function(err) {}
  
//     });
// });
// function code(){
//     dd.ready(function() {
//         // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
//         dd.runtime.permission.requestAuthCode({
//             corpId: "corpid",
//             onSuccess: function(result) {
//             /*{
//                 code: 'hYLK98jkf0m' //string authCode
//             }*/
//             },
//             onFail : function(err) {}
      
//         });
//     });
// }
// 如何使用layui的代码进行事件监听
window.onload=function(){
 layui.use(["jquery"],function(){
     var $=layui.jquery;
     $("#dianji").click(function(){
       
  layer.msg('Hello World');
     })
 })
}