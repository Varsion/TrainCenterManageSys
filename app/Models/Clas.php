<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Clas extends Model
{
    protected $table = "class";
    public $timestamps = true;
    protected $guarded = [];

    /**
     * 展示班级页面
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_showClass()
    {
        try{
            $date=clas::join('department','department.department_id','class.department_id')
                ->select('*')
                ->paginate(5);
            return $date;
        }catch (Exception $e){
            logger::Error('班级界面展示失败',[$e->getMessage()]);
        }
    }

    /**
     * 回显展示班级页面
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_reShowClass($tby)
    {
        try{
            $date=clas::join('department','department.department_id','class.department_id')
                ->where('class_id',$tby['class_id'])
                ->get();
            return $date;
        }catch (Exception $e){
            logger::Error('班级回显界面展示失败',[$e->getMessage()]);
        }
    }

    /**
     * 删除班级
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_deleteClass($tby)
    {
        try{
            $date=clas::where('class_id',$tby['class_id'])
                ->delete();
            return true;
        }catch (Exception $e){
            logger::Error('班级删除失败',[$e->getMessage()]);
        }
    }


    /**
     * 增加班级
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_addClass($tby)
    {
        try{
            $date=clas::create([
                'department_id'=>$tby['department_id'],
                'class_name'=>$tby['class_name']
            ]);
            return true;
        }catch (Exception $e){
            logger::Error('班级增加失败',[$e->getMessage()]);
        }
    }


    /**
     * 修改班级
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_modifyClass($tby)
    {
        try{
            $date=clas::where('class_id',$tby['class_id'])
                ->update([
                    'class_name'=>$tby['class_name'],
                    'department_id'=>$tby['department_id']
                ]);
            return true;
        }catch (Exception $e){
            logger::Error('班级修改失败',[$e->getMessage()]);
        }
    }



    /**
     * 查询班级
     * @author tangbangyan <github.com/doublebean>
     * @return mixed
     */
    public static function tby_findClass($tby)
    {
        try{
            $date=clas::join('department','department.department_id','class.department_id')
                ->where('class_name','like','%'.$tby['class_name'].'%')
                ->paginate(5);
            return $date;
        }catch (Exception $e){
            logger::Error('班级修改失败',[$e->getMessage()]);
        }
    }
}
