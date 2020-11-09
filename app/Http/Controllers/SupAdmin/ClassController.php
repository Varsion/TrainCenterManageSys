<?php

namespace App\Http\Controllers\SupAdmin;

use App\Http\Controllers\Controller;
use App\Http\Requests\SupAdmin\ClassController\AddClassRequest;
use App\Http\Requests\SupAdmin\ClassController\AddDepRequest;
use App\Http\Requests\SupAdmin\ClassController\DelClassRequest;
use App\Http\Requests\SupAdmin\ClassController\DeleteDepartmentRequest;
use App\Http\Requests\SupAdmin\ClassController\FindClassRequest;
use App\Http\Requests\SupAdmin\ClassController\FindDepRequest;
use App\Http\Requests\SupAdmin\ClassController\ModifyDepRequest;
use App\Http\Requests\SupAdmin\ClassController\ReshowClassRequest;
use App\Http\Requests\SupAdmin\ClassController\ReshowDepartmentRequest;
use Illuminate\Http\Request;
use App\Models\Department;
use App\Models\clas;

class ClassController extends Controller
{
    /**
     *系部页面展示数据
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function showDepartment()
    {

        $date = department::tby_showDepartment();

        if($date!=null){
            return json_success('系部展示成功',$date,200);
        }
        return json_fail('系部展示失败',$date,100);
    }

    /**
     *系部页面展示数据,无分页
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function showDepartmentAll()
    {

        $date = department::tby_showDepartmentAll();

        if($date!=null){
            return json_success('系部无分页展示成功',$date,200);
        }
        return json_fail('系部无分页展示失败',$date,100);
    }

    /**
     *回显当前数据的系部
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function reShowDepartment(ReshowDepartmentRequest $request)
    {

        $date = department::tby_reShowDepartment($request['department_id']);

        if($date!=null){
            return json_success('系部展示成功',$date,200);
        }
        return json_fail('系部展示失败',$date,100);
    }

    /**
     *删除当前系部
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function deleteDepartment(DeleteDepartmentRequest $request)
    {

        $date = department::tby_deleteDepartment($request['department_id']);

        if($date!=null){
            return json_success('系部删除成功',$date,200);
        }
        return json_fail('系部删除失败',$date,100);
    }


    /**
     *增加系部
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function addDepartment(AddDepRequest $request)
    {
        $tby=$request;
        $date = department::tby_addDepartment($tby);

        if($date!=null){
            return json_success('系部增加成功',$date,200);
        }
        return json_fail('系部增加失败',$date,100);
    }

    /**
     *修改系部
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function modifyDepartment(ModifyDepRequest $request)
    {
        $tby=$request;
        $date = department::tby_modifyDepartment($tby);

        if($date!=null){
            return json_success('系部修改成功',$date,200);
        }
        return json_fail('系部修改失败',$date,100);
    }

    /**
     *查询系部
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function findDepartment(FindDepRequest $request)
    {
        $tby=$request;
        $date = department::tby_findDepartment($tby);

        if($date!=null){
            return json_success('系部查询成功',$date,200);
        }
        return json_fail('系部查询失败',$date,100);
    }

    /**
     *班级页面展示数据
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function showClass()
    {

        $date = clas::tby_showClass();

        if($date!=null){
            return json_success('班级展示成功',$date,200);
        }
        return json_fail('班级展示失败',$date,100);
    }

    /**
     *班级回显展示数据
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function reShowClass(ReshowClassRequest $request)
    {
        $tby = $request;
        $date = clas::tby_reShowClass($tby);

        if($date!=null){
            return json_success('班级回显成功',$date,200);
        }
        return json_fail('班级回显失败',$date,100);
    }


    /**
     *删除班级
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function deleteClass(DelClassRequest $request)
    {
        $tby = $request;
        $date = clas::tby_deleteClass($tby);

        if($date!=null){
            return json_success('班级删除成功',$date,200);
        }
        return json_fail('班级删除失败',$date,100);
    }


    /**
     *增加班级
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function addClass(AddClassRequest $request)
    {
        $tby = $request;
        $date = clas::tby_addClass($tby);

        if($date!=null){
            return json_success('班级增加成功',$date,200);
        }
        return json_fail('班级增加失败',$date,100);
    }


    /**
     *修改班级
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function modifyClass(AddClassRequest $request)
    {
        $tby = $request;
        $date = clas::tby_modifyClass($tby);

        if($date!=null){
            return json_success('班级修改成功',$date,200);
        }
        return json_fail('班级修改失败',$date,100);
    }

    /**
     *查询班级
     * @author tangbangyan <github.com/doublebean>
     * @return json
     */
    public function findClass(FindClassRequest $request)
    {
        $tby = $request;
        $date = clas::tby_findClass($tby);

        if($date!=null){
            return json_success('班级查询成功',$date,200);
        }
        return json_fail('班级查询失败',$date,100);
    }
}
