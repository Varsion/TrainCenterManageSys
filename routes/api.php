<?php

use Illuminate\Http\Request;

use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


/**
 * @author caiwenpin <github.com/codercwp>
 */
Route::prefix('/fill')->namespace('Fill')->group(function () {

    Route::get('showall','CheckController@showAll');  //粗略展示一张表单中所有期末教学记录检查
    Route::get('showone','CheckController@showOne');  //期末教学记录检查其中的某条详情
    Route::get('teachback','WriteController@teachBack'); //把所有实验室名称给前端
    Route::get('teachmove','WriteController@teachMove'); //把所有实验室名称给前端
    Route::post('teachadd','WriteController@teachAdd'); //添加期末教学记录检查

});

/**
 * @author tangshengyou
 * 填报 功能耶，表单列表的的回显
 */
Route::group(['namespace'=>'Fill','prefix'=>'fill'],function(){
    //登陆后根据权限显示可填写的表单
    Route::get('forminfo','ShowController@FormInfo');
    //根据类型 状态回显对应的表单列表
    Route::get('selectionform','ShowController@SelectionForm');
    //根据id查找对应的表单
    Route::get('selectform','ShowController@SelectForm');
    //点击查看按钮后 根据查看的form表单编号回显对应的表单
    Route::get('seeview','ShowController@SeeView');
    //设备借用 中下拉框中选中了对应的设备后回显数据
    Route::get('selectequipment','ShowController@SelectEquipment');
    //下拉框中回显所有的仪器
    Route::get('checkboxequipment','ShowController@CheckBoxEquipment');
    //设备借用填报
    Route::post('equipmentborrowing','DealFromController@EquipmentBorrowing');
});



Route::prefix('report')->namespace('Fill')->group(function(){
    Route::post('operationreport','OperationReportController@operationReport');//实验室运行记录填报
    Route::get('nameview','OperationReportController@nameView');//申请人回显
    Route::get('classdrop','OperationReportController@classDrop');//专业班级下拉框
    Route::get('laboratorydrop','OperationReportController@laboratoryDrop');//实验室下拉框
});

/**
 * @author Dujingwen <github.com/DJWKK>
 */
Route::prefix('/approval')->namespace('Approval')->group(function(){
    Route::get('pass','ExamController@pass');//审核通过
    Route::post('noPass','ExamController@noPass');//审核不通过

});


Route::prefix('view')->namespace('Fill')->group(function(){
    Route::get('formview','OperationReportController@formView');//实验室运行记录填报
});

/**
 * @author HuWeiChen <github.com/nathaniel-kk>
 */
Route::prefix('fill')->namespace('Fill')->group(function () {
    Route::get('filllabborlink', 'FillLabBorController@fillLabBorLink'); //填报实验室借用申请实验室名称编号联动
    Route::get('filllabnamedis', 'FillLabBorController@fillLabNameDis'); //填报实验室借用申请实验室名称展示
    Route::get('filllabclassdis', 'FillLabBorController@fillLabClassDis'); //填报实验室借用申请学生班级展示
    Route::post('filllabborrow', 'FillLabBorController@fillLabBorrow'); //填报实验室借用申请
    Route::get('viewlabborrow', 'FillLabBorController@viewLabBorrow'); //实验室借用申请展示
});

/**
 * @author HuWeiChen <github.com/nathaniel-kk>
 */
Route::prefix('fill')->namespace('Fill')->group(function () {
    Route::post('openlabusebor', 'OpenLabUseController@openLabUseBor'); //开放实验室使用申请填报
    Route::get('viewopenlabuse', 'OpenLabUseController@viewOpenLabUse'); //开放实验室使用申请表单展示
    Route::get('viewopenlabmanuse', 'OpenLabUseController@viewOpenLabManUse'); //开放实验室使用申请人员名单展示
});




Route::prefix('supadmin')->namespace('SupAdmin')->group(function (){
    /**
     * 唐盛友
     */
    Route::get('getlaboperationrecords','MainpageController@getLabOperationRecords');//运行实验室记录展示
    Route::get('getlab','MainpageController@getLab');//下拉框回显所有实验室
    Route::get('getlaball','MainpageController@getLabAll');//查看详情 显示所有的数据
    Route::get('getlaballinfo','MainpageController@getLabAllInfo');//查看详情 显示所有的数据
    Route::get('select','MainpageController@Select');//搜索

    /*
     * 丁晨
     */
    Route::get('showinfo','LocationController@showInfo');//场地管理页面展示
    Route::post('addinfo','LocationController@addInfo');//新增场地
    Route::get('findinfo','LocationController@findInfo');//查询
    Route::get('returninfo','LocationController@returnInfo');//回显修改信息
    Route::post('exitinfo','LocationController@exitInfo');//修改信息
    Route::get('rminfo','LocationController@rmInfo');//删除
});




Route::prefix('supadmin')->namespace('SupAdmin')->group(function () {
    /**
    *陈淼
    */
    Route::get('labbordisplay', 'FormDetailsController@labBorDisplay'); //实验室借用申请表页面展示
    Route::get('labbordispalyinfo', 'FormDetailsController@labBorDispalyInfo'); //实验室借用申请表页面查看
    Route::get('labborselect', 'FormDetailsController@labBorSelect'); //实验室借用申请表页面搜索

    Route::get('labopendisplay', 'FormDetailsController@labOpenDisplay'); //开放实验室使用申请表页面展示
    Route::get('labopendisplayinfo', 'FormDetailsController@labOpenDisplayInfo'); //开放实验室使用申请表页面查看
    Route::get('labopenselect', 'FormDetailsController@labOpenSelect'); //开放实验室使用申请表页面搜索

    Route::get('labequipdisplay', 'FormDetailsController@labEquipDisplay'); //实验室仪器借用申请表页面展示
    Route::get('labequipdisplayinfo', 'FormDetailsController@labEquipDisplayInfo'); //实验室仪器借用申请表页面查看
    Route::get('labequipselect', 'FormDetailsController@labEquipSelect'); //实验室仪器借用申请表页面搜索

    Route::get('tearecorddisplay', 'FormDetailsController@TeaRecordDisplay'); //期末教学记录检查表页面展示

    Route::get('tearecorddispalyinfo', 'FormDetailsController@TeaRecordDisplayInfo'); //期末教学记录检查表页面查看
    Route::get('tearecordselect', 'FormDetailsController@TeaRecordSelect'); //期末教学记录检查表页面搜索

  /**
  *唐邦彦
  */
    Route::get('showdepartment','ClassController@showdepartment');//系部管理页面展示
    Route::get('showdepartmentall','ClassController@showdepartmentall');//系部管理页面展示,无分页
    Route::get('reshowdepartment','ClassController@reshowdepartment');//回显当前数据的系部
    Route::post('deletedepartment','ClassController@deletedepartment');//删除系部
    Route::post('adddepartment','ClassController@adddepartment');//增加系部
    Route::post('modifydepartment','ClassController@modifydepartment');//修改系部
    Route::get('finddepartment','ClassController@finddepartment');//查询系部
    Route::get('showclass','ClassController@showclass');//班级管理页面展示
    Route::get('reshowclass','ClassController@reshowclass');//回显当前数据的班级和系部
    Route::post('deleteclass','ClassController@deleteclass');//删除班级
    Route::post('addclass','ClassController@addclass');//增加班级
    Route::post('modifyclass','ClassController@modifyclass');//修改班级
    Route::get('findclass','ClassController@findclass');//查询班级

  /**
  *张巾巾
  */
    Route::post('adddevice', 'EquipmentController@addDevice'); //新增设备
    Route::get('searchnew', 'EquipmentController@searchNew'); //查询设备
    Route::get('goback', 'EquipmentController@goBack'); //回显
    Route::post('exitnew', 'EquipmentController@exitNew'); //修改设备信息
    Route::post('rmnew', 'EquipmentController@rmNew'); //删除设备信息
    Route::get('shownew', 'EquipmentController@showNew'); //设备管理页面展示
});



/**
 * @author yuanshuxin <github.com/CoderYsx>
 */
Route::prefix('site')->namespace('DataScreen')->group(function (){
    Route::get('/showxibu','SiteScreenController@xibuborrow');
    Route::get('/usingsite','SiteScreenController@usingsite');
    Route::get('/siteranking','SiteScreenController@siteranking');
    Route::get('/sitenumber','SiteScreenController@sitenumber');
    Route::get('/openlab','SiteScreenController@openlab');

});

/**
 * @author yuanshuxin <github.com/CoderYsx>
 */
Route::prefix('check')->namespace('DataScreen')->group(function (){
    Route::get('/safecheck','CheckController@SafeCheck');
    Route::get('/checkcount','CheckController@checkcount');
    Route::get('/checkstatis','CheckController@checkStatistics');
});


/**
 * @author zhuxianglin <github.com/lybbor>
 */
Route::prefix('eqlen')->namespace('DataScreen')->group(function(){
    Route::get('recentwait','EquipmentLendController@recentWait');
    Route::get('recentlend','EquipmentLendController@recentLend');
    Route::get('isoverdue','EquipmentLendController@isOverdue');
    Route::get('facultylend','EquipmentLendController@facultyLend');
    Route::get('recentlendnum','EquipmentLendController@recentLendNum');
    Route::get('recentlendsum','EquipmentLendController@recentLendSum');

});

/**
 * @author zhuxianglin <github.com/lybbor>
 */
Route::prefix('check')->namespace('DataScreen')->group(function(){
    Route::get('checkedlab','EquipmentLendController@checkedLab');
    Route::get('teachercheck','EquipmentLendController@teacherCheck');
});

/**
 * @author yangsiqi <github.com/Double-R111>
 */
Route::prefix('approval')->namespace('Approval')->group(function () {//审批历史路由组
    Route::get('showall', 'ApproveHistoryController@showAll');//展示所有审批过的表单
    Route::get('searchform', 'ApproveHistoryController@searchForm');//根据表单编号和申请人姓名模糊查询表单
    Route::get('selecttype', 'ApproveHistoryController@selectType');//通过表单类型查询表单
    Route::get('reshowall', 'ApproveHistoryController@reshowAll');//回显表单详情
});

/*
 * @auther ZhongChun <github.com/RobbEr929>
 */
Route::prefix('approval')->namespace('Approval')->group(function () {//审批展示路由组
    Route::get('show','ApprovalController@show');//展示所有待审批表单
    Route::get('classify','ApprovalController@classify');//分类查询待审批表单
    Route::get('select','ApprovalController@select');//根据表单编号和姓名模糊查询表单
    Route::get('reshow','ApprovalController@reShow');//分类回显
});


//钉钉code测试
Route::get('dingcode','TestController@dingcode');

//钉钉权限分离
Route::get('rolesdiscrete','DingCode\DingController@rolesDiscrete');
