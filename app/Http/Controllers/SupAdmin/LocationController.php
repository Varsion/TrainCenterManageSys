<?php

namespace App\Http\Controllers\SupAdmin;

use App\Http\Controllers\Controller;

use App\Http\Requests\SupAdmin\LocationController\addInfoRequest;
use App\Http\Requests\SupAdmin\findInfoRequest;
use App\Models\Laboratory;
use Illuminate\Http\Request;

class LocationController extends Controller
{


    /**
     * 场地管理页面展示
     * */
    public function showInfo(){
        $rs = Laboratory::dc_getFormInfo();
        return $rs?
            json_success("展示信息成功",$rs,200):
            json_fail("展示信息失败",null,100);

    }

    /**
     * @param Request $request
     * 新增场地
     */
    public function addInfo(addInfoRequest $request){

        $rs = Laboratory::dc_addInfo($request);
        return $rs?
            json_success("添加信息成功",null,200):
            json_fail("添加信息失败",null,100);
    }

    /**
     * @param Request $request
     *查询
     */
    public function findInfo(Request $request){
        $rs = Laboratory::dc_selectInfo($request);
        return $rs?
            json_success("搜索信息成功",$rs,200):
            json_fail("搜索信息失败",null,100);

    }

    /**
     * @param Request $request
     * 修改回显
     */
    public function returnInfo(Request $request){
        $rs = Laboratory::dc_getInfoByID($request);
        return $rs?
            json_success("回显信息成功",$rs,200):
            json_fail("回显信息失败",null,100);
    }

    /**
     * @param Request $request
     * 修改信息
     */
    public function exitInfo(Request $request){

        $rs = Laboratory::dc_exitInfo($request);
        return $rs?
            json_success("修改信息成功",null,200):
            json_fail("修改信息失败",null,100);
    }

    /**
     * @param Request $request
     * 删除
     */
    public function rmInfo(Request $request){

        $rs = Laboratory::dc_rmInfo($request);
        return $rs?
            json_success("修改信息成功",null,200):
            json_fail("修改信息失败",null,100);
    }

}
