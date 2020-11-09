<?php

namespace App\Http\Controllers\SupAdmin;

use App\Http\Controllers\Controller;

use App\Http\Requests\SupAdmin\Equipment\AddDeviceRequest;
use App\Http\Requests\SupAdmin\Equipment\ExitNewRequest;
use App\Http\Requests\SupAdmin\Equipment\GoBackRequest;
use App\Http\Requests\SupAdmin\Equipment\RmNewRequest;
use App\Http\Requests\SupAdmin\Equipment\SearchNewRequest;
use App\Models\Equipment;

class EquipmentController extends Controller
{
    /**
     * 新增设备
     * @author ZhangJinJin <github.com/YetiSui>
     * @param AddDeviceRequest $request
     * model int 设备型号
     * equipment_name string 设备名称
     * number int 数量
     * annex string 附件
     * @return json
     */
    Public function addDevice(AddDeviceRequest $request)
    {
        $model = $request['model'];
        $equipment_name = $request['equipment_name'];
        $number = $request['number'];
        $annex = $request['annex'];
        $data = Equipment::addDevice($model,$equipment_name,$number,$annex);
        return $data?
            json_success('成功添加设备',null,'200'):
            json_fail('添加设备失败',null,'100');
    }

    /**
     * 查询设备
     * @author ZhangJinJIn <github.com/YetiSui>
     * @param SearchNewRequest $request
     * model int 设备型号
     * @return json
     */
    Public function searchNew(SearchNewRequest $request)
    {
        $model = $request['model'];
        $data = Equipment::searchNew($model);
        return $data?
            json_success('成功查询设备信息',$data,'200'):
            json_fail('查询设备失败',null,'100');
    }

    /**
     * 回显
     * @author ZhangJinJin <github.com/YetiSui
     * @param GoBackRequest $request
     * equipment_name string 设备名称
     * @return json
     */
    Public function goBack(GoBackRequest $request)
    {
        $equipment_id = $request['equipment_id'];
        $data = Equipment::goBack($equipment_id);
        return $data?
            json_success('成功查询信息',$data,'200'):
            json_fail('查询信息错误',null,'100');
    }

    /**
     * 修改
     * @author ZhangJinJin <github.com/YetiSui>
     * @param ExitNewRequest $request
     * equipment_id int 设备编号
     * model int 设备型号
     * equipment_name string 设备名称
     * number int 数量
     * annex string 附件
     * @return json
     */
    Public function exitNew(ExitNewRequest $request)
    {
        $equipment_id = $request['equipment_id'];
        $model = $request['model'];
        $equipment_name = $request['equipment_name'];
        $number = $request['number'];
        $annex = $request['annex'];
        $data = Equipment::exitNew($equipment_id,$model,$equipment_name,$number,$annex);
        return $data?
            json_success('成功修改设备信息',$data,'200'):
            json_fail('修改设备信息失败',null,'100');
    }

    /**
     * 删除
     * @author ZhangJinJin <github.com/YetiSui>
     * @param RmNewRequest $request
     * equipment_id int 设备编号
     * equipment_name string 设备名称
     * model int 设备型号
     * number int 数量
     * annex string 附件
     * @return json
     */

    Public function rmNew(RmNewRequest $request)
    {
        $equipment_id = $request['equipment_id'];
        $model = $request['model'];
        $equipment_name = $request['equipment_name'];
        $number = $request['number'];
        $annex = $request['annex'];
        $data = Equipment::rmNew($equipment_id,$model,$equipment_name,$number,$annex);
        return $data?
            json_success('成功修改设备信息',$data,'200'):
            json_fail('修改设备信息失败',null,'100');
    }

    /**
     * 设备管理页面展示
     * @author ZhangJinJin <github.com/YetiSui>
     * @param
     * equipment_name string 设备名称
     * model int 设备型号
     * number int 数量
     * annex string 附件
     * @return json
     */
    Public function showNew()
    {
        $data = Equipment::showNew();

        return $data?
            json_success('成功获取设备展示信息',$data,'200'):
            json_fail('获取设备展示信息失败',null,'100');
    }
}
