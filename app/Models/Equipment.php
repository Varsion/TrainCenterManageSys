<?php

namespace App\Models;

use App\Http\Controllers\SupAdmin\EquipmentController;
use Illuminate\Support\Facades\DB;
use http\Exception;
use Illuminate\Database\Eloquent\Model;

class Equipment extends Model
{
    protected $table = "equipment";
    public $timestamps = true;
    protected $guarded = [];

    /**

     * 增加设备
     * @author ZhangJinJin <github.com/YetiSui>
     * @param $model $equipment_name $number $annex
     * @return null
     */
    Public static function addDevice($model,$equipment_name,$number,$annex)
    {
        try{
            $res=self::insert([
                'model' => $model,
                'equipment_name' => $equipment_name,
                'number' => $number,
                'annex' => $annex,
                'created_at' => now()
            ]);
            return $res;
        }catch (\Exception $e) {
            logError('新增设备信息失败',[$e->getMessage()]);
        }
    }
/*
     * 获取所有的设备信息
     * @author tangshengyou
     * @return array
     */
    public static function tsy_equipmentAll(){
        try{
            $data= self::select('equipment_id','equipment_name')
                ->get();
            return $data;
        }catch (Exception $e){
            logError("获取所有的设备信息失败",[$e->getMessage()]);
            return null;

        }
    }

    /**
     * 查询设备
     * @author ZhangJinJin <github.com/YetiSui>
     * @param $model
     * @return $model $equipment_name $number $annex
     */
    Public static function searchNew($model)
    {
        try{
            $res = self::where('model','=',$model)
                ->select('model','equipment_name','number','annex','equipment_id')
                ->orderby('model','asc')
                ->paginate(8);
            return $res;
    }catch (\Exception $e) {
            logError('查询设备信息错误',[$e->getMessage()]);
    }
    }

    /**
     * 回显
     * @author ZhangJinJin <github.com/YetiSui>
     * @param $equipment_name
     * @return $equipment_name $model $number $annex
     */
    Public static function goBack($equipment_id)
    {
        try{
            $res = self::where('equipment_id','=',$equipment_id)
                ->select('equipment_id','model','equipment_name','number','annex')
                ->first();
            return $res;
        }catch (\Exception $e) {
            logError('查询信息错误',[$e->getMessage()]);
        }
    }

    /**
     * 修改
     * @author ZhangJinJin <github.com/YetiSui>
     * @param $equipment_id
     * @return null
     */
    Public static function exitNew($equipment_id,$equipment_name,$model,$number,$annex)
    {
        try{
            $res = self::where('equipment_id','=',$equipment_id)
                ->update([
                    'equipment_name'=>$equipment_name,
                    'model'=>$model,
                    'number'=>$number,
                    'annex'=>$annex,
                ]);
            return $res;
        }catch (\Exception $e) {
            logError('查询信息错误',[$e->getMessage()]);
        }
    }

    /**
     * 删除
     * @author ZhangJinJin <github.com/YetiSui>
     * @param equipment_id
     * @return null
     */
    Public static function rmNew($equipment_id)
    {
        try{
            $res = self::where('equipment_id','=',$equipment_id)
                ->delete();
            return $res;
        }catch (\Exception $e){
            logError('删除设备失败',[$e->getMessage()]);
        }
    }


    /**
     * 通过设备id获取对应设备的详细信息
     * @author tangshengyou
     * @param
     *  $equipment_id string 设备id
     * @return array
     */
    public static function tsy_equipmentSelect($equipment_id){
        try{
            $data = self::where('equipment_id',$equipment_id)
                ->select("equipment_name",'model','annex')
                ->first();
            return $data;
        }catch (Exception $e){
            logError("查找对应的设备失败",[$e->getMessage()]);
            return null;
        }
    }
    /**
     * 通过设备id获取对应设备的详细信息
     * @author tangshengyou
     * @param
     *  $equipment_id string 设备id
     * @return array
     */
    public static function tsy_SelectById($equipment_id){
        try{
            $data = self::where('equipment_id',$equipment_id)
                ->select("equipment_name",'model','annex','number','equipment_id')
                ->first();
            return $data;
        }catch (Exception $e){
            logError("查找对应的设备失败",[$e->getMessage()]);
            return null;

        }
    }

    /**

     * 设备管理页面展示
     * @author ZhangJinJin <github.com/YetiSui>
     * @param
     * @return $equipment_name $model $number $annex
     */
    Public static function showNew()
    {
        try{
            $res = self::select('equipment_id','equipment_name','model','number','annex')
                ->orderby('model','asc')
                ->paginate(8);
            return $res;
        }catch (\Exception $e) {
            logError('获取设备展示信息失败',[$e->getMessage()]);
        }
    }

    /**
     * 通过设备name获取对应设备的详细信息
     * @author tangshengyou
     * @param
     *  $equipment_id string 设备id
     * @return array
     */
    public static function tsy_SelectIdByName($equipment_name){
        try{
            $data = self::where('equipment_name',$equipment_name)
                ->select('equipment_id')
                ->first();
            return $data;
        }catch (Exception $e){
            logError("查找对应的设备失败",[$e->getMessage()]);
            return null;

        }
    }
}
