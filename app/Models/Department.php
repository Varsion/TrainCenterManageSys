<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $table = "department";
    public $timestamps = true;
    protected $guarded = [];

    /**
     * 展示系部页面,无分页
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_showDepartmentAll()
    {
        try{
            $date=department::select('*')
                ->get();
            return $date;
        }catch (Exception $e){
            logger::Error('系部界面无分页展示失败',[$e->getMessage()]);
        }
    }


    /**
     * 展示系部页面
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_showDepartment()
    {
        try{
            $date=department::select('*')
                ->paginate(5);
              return $date;
        }catch (Exception $e){
            logger::Error('系部界面展示失败',[$e->getMessage()]);
        }
    }



    /**
     * 回显当前数据的系部
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_reShowDepartment($department_id)
    {
        try{
            $date=department::where('department_id',$department_id)
                ->get();

            return $date;
        }catch (Exception $e){
            logger::Error('系部界面展示失败',[$e->getMessage()]);
        }
    }
    /**
     * 删除系部
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_deleteDepartment($department_id)
    {
        try{
            $date=department::where('department_id',$department_id)
                ->delete();

            return $date;
        }catch (Exception $e){
            logger::Error('删除失败',[$e->getMessage()]);
        }
    }

    /**
     * 增加系部
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_addDepartment($tby)
    {
        try{

            $date=department::create([
                'department_name'=>$tby['department_name']
            ]);

            return true;
        }catch (Exception $e){
            logger::Error('增加失败',[$e->getMessage()]);
        }
    }

    /**
     * 修改系部
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_modifyDepartment($tby)
    {
        try{
            $date=department::where('department_id',$tby['department_id'])
                ->update([
                'department_name'=>$tby['department_name']
            ]);
            return true;
        }catch (Exception $e){
            logger::Error('修改失败',[$e->getMessage()]);
        }
    }

    /**
     * 查询系部
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_findDepartment($tby)
    {
        try{
            $date=department::where('department_name','like','%'.$tby['department_name'].'%')
                ->paginate(5);
            return $date;
        }catch (Exception $e){
            logger::Error('系部查询界面展示失败',[$e->getMessage()]);
        }
    }

}
