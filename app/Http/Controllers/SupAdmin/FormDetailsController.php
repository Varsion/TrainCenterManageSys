<?php

namespace App\Http\Controllers\SupAdmin;

use App\Http\Controllers\Controller;
use App\Models\Form;

use App\Http\Requests\SupAdmin\FormDetails\labBorDispalyInfoRequest;
use App\Http\Requests\SupAdmin\FormDetails\labBorSelectRequest;
use App\Http\Requests\SupAdmin\FormDetails\labEquipSelectRequest;
use App\Http\Requests\SupAdmin\FormDetails\labOpenDisplayInfoRequest;
use App\Http\Requests\SupAdmin\FormDetails\labOpenSelectRequest;
use App\Http\Requests\SupAdmin\FormDetails\labEquipDisplayInfoRequest;
use App\Http\Requests\SupAdmin\FormDetails\TeaRecordSelectRequest;
use App\Http\Requests\SupAdmin\FormDetails\TeaRecordDisplayInfoRequest;

use App\Models\LaboratoryLoan;
use App\Models\OpenLaboratoryLoan;
use App\Models\EquipmentBorrow;
use App\Models\TeachingInspectionInfo;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;


class FormDetailsController extends Controller
{
    /**
     * 实验室借用申请表页面展示
     * @author ChenMiao <github.com/Yidaaa-u>
     * @return json
     */
    Public function labBorDisplay(){
        $data=Form::cm_labBorDisplay();
        return $data?
            json_success('成功!',$data,200) :
            json_fail('失败!',null,100);
    }

    /**
     * 实验室借用申请表页面查看
     * @author ChenMiao <github.com/Yidaaa-u>
     * @param labBorDispalyInfoRequest $request
     * form_id 表单编号
     * @return json
     */
    //--------------------------------成功但没假数据测试
    Public function labBorDispalyInfo(labBorDispalyInfoRequest $request){
        $form_id = $request->input('form_id');
        $data = LaboratoryLoan::cm_labBorDispalyInfo($form_id);
          return $data ?
              json_success('成功!', $data, 200) :
              json_fail('失败!', null, 100);
    }

    /**
      * 实验室借用申请表页面搜索
      * @author ChenMiao <github.com/Yidaaa-u>
      * @param labBorSelectRequest $request
      * form_id 表单编号
      * @return json
      */
    Public function labBorSelect(Request $request){
            $page = $request -> page;
            $form_id = $request->input('form_id');
            $data=Form::cm_labBorSelect($form_id);
             return $data?
                 json_success('成功!',$data,200) :
                 json_fail('失败!',null,100);
        }

    /**
     * 开放实验室使用申请表页面展示
     * @author ChenMiao <github.com/Yidaaa-u>
     * @return json
     */
    Public function labOpenDisplay(){
        $data=Form::cm_labOpenDisplay();
        return $data?
            json_success('成功!',$data,200) :
            json_fail('失败!',null,100);
    }

    /**
     * 开放实验室使用申请表页面查看
     * @author ChenMiao <github.com/Yidaaa-u>
     * @param labOpenDisplayInfoRequest $request
     * form_id 表单编号
     * @return json
     */
    //---------------------------------成功但没假数据测试
    Public function labOpenDisplayInfo(labOpenDisplayInfoRequest $request){
        $form_id = $request->input('form_id');
        $data = OpenLaboratoryLoan::cm_labOpenDisplayInfo($form_id);
        return $data ?
            json_success('成功!', $data, 200) :
            json_fail('失败!', null, 100);
    }

    /**
     * 开放实验室使用申请表页面搜索
     * @author ChenMiao <github.com/Yidaaa-u>
     * @param labOpenSelectRequest $request
     * form_id 表单编号
     * @return json
     */
    Public function labOpenSelect(labOpenSelectRequest $request){
        $form_id = $request->input('form_id');
        $data=Form::cm_labOpenSelect($form_id);
        return $data?
            json_success('成功!',$data,200) :
            json_fail('失败!',null,100);
    }

    /**
     * 实验室仪器借用申请表页面展示
     * @author ChenMiao <github.com/Yidaaa-u>
     * @return json
     */
    Public function labEquipDisplay(){
        $data=Form::cm_labEquipDisplay();
        return $data?
            json_success('成功!',$data,200) :
            json_fail('失败!',null,100);
    }

    /**
     * 实验室仪器借用申请表页面查看
     * @author ChenMiao <github.com/Yidaaa-u>
     * @param labEquipDisplayInfoRequest $request
     * form_id 表单编号
     * @return json
     */
    Public function labEquipDisplayInfo(labEquipDisplayInfoRequest $request){
        $form_id = $request->input('form_id');
        $data =equipmentborrow::cm_labEquipDisplayInfo($form_id);
        return $data ?
            json_success('成功!', $data, 200) :
            json_fail('失败!', null, 100);
    }

    /**
     * 实验室仪器借用申请表页面搜索
     * @author ChenMiao <github.com/Yidaaa-u>
     * @param labEquipSelectRequest $request
     * form_id 表单编号
     * @return json
     */
    Public function labEquipSelect (labEquipSelectRequest $request){
        $form_id = $request->input('form_id');
        $data=Form::cm_labEquipSelect ($form_id);
        return $data?
            json_success('成功!',$data,200) :
            json_fail('失败!',null,100);
    }

    /**
     * 期末教学记录检查表页面展示
     * @author ChenMiao <github.com/Yidaaa-u>
     * @return json
     */
    Public function teaRecordDisplay(){
        $data=Form::cm_teaRecordDisplay();
        return $data?
            json_success('成功!',$data,200) :
            json_fail('失败!',null,100);
    }

    /**
     * 期末教学记录检查表页面查看
     * @author ChenMiao <github.com/Yidaaa-u>
     * @param teaRecordDisplayInfoRequest $request
     * form_id 表单编号
     * @return json
     */
    Public function teaRecordDisplayInfo(teaRecordDisplayInfoRequest $request){
        $form_id = $request->input('form_id');
        $data =TeachingInspectionInfo::cm_teaRecordDisplayInfo($form_id);
        return $data ?
            json_success('成功!', $data, 200) :
            json_fail('失败!', null, 100);
    }

    /**
     * 期末教学记录检查表页面搜索
     * @author ChenMiao <github.com/Yidaaa-u>
     * @param teaRecordSelectRequest $request
     * form_id 表单编号
     * @return json
     */
    Public function teaRecordSelect (teaRecordSelectRequest $request){
        $form_id = $request->input('form_id');
        $data=Form::cm_teaRecordSelect($form_id);
        return $data?
            json_success('成功!',$data,200) :
            json_fail('失败!',null,100);
    }


}
