<?php

namespace App\Http\Controllers\SupAdmin;

use App\Http\Controllers\Controller;
use App\Models\Laboratory;
use App\Models\LaboratoryOperationRecord;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;


class MainpageController extends Controller
{

    /**

     * 根据下拉框中的数据回显所有信息

     * @param Request $request

     * @return \Illuminate\Http\JsonResponse

     */

    public function  getLabOperationRecords(Request $request){



        $lab_name = $request['lab_name'];

        $data2 = Laboratory::tsy_selectByName($lab_name);

        $lab_id = $data2['laboratory_id'];

        $data1 = LaboratoryOperationRecord::tsy_getLabOperationRecords($lab_id);

        $j = 0;



        for ($i =0;$i<count($data1);$i++){

            if (($i+1)%12==0){

                $head=$i-10;

                $end=$i+1;

                $data[$j]["group"]=$head."-".$end;

                $data[$j]['created_at']=$data1[$i]['created_at']->format('Y-m-d H:m:s');

                $j++;

            }

        }

        if (count($data1)>12){

            $head=floor(count($data1)/12)*12+1;

        }else{

            $head=1;

        }



        $end=count($data1);

        $data[$j]["group"]=$head."-".$end;

        $data[$j]['created_at']=$data1[count($data1)-1]['created_at']->format('Y-m-d H:m:s');

        $perPage = 6;

        if ($request->has('page')) {                  // 请求是第几页，如果没有传page数据，则默认为1

            $current_page = $request->input('page');

            $current_page = $current_page <= 0 ? 1 :$current_page;

        } else {

            $current_page = 1;

        }

        $item = array_slice($data, ($current_page-1)*$perPage, $perPage);

        $total = count($data);

        $paginator =new LengthAwarePaginator($item, $total, $perPage, $current_page, array(

            'path' => Paginator::resolveCurrentPath(),                // 注释2

            'pageName' => 'page',

        ));

        return response()->json(['result'=>$paginator]);

    }



    /**

     * 显示组内的所有信息

     * @author tangshengyou

     * @param Request $request

     * @return \Illuminate\Http\JsonResponse

     */

    public function  getLabALL(Request $request){

        $group = $request['group'];

        $arr = preg_split("/(-)/",$group);

        $head = $arr[0];

        $end = $arr[1];

        $lab_name = $request['lab_name'];

        if ($lab_name == null){

            $data1 = LaboratoryOperationRecord::tsy_getLab();

        }else{

            $data2 = Laboratory::tsy_selectByName($lab_name);

            $lab_id = $data2['laboratory_id'];

            $data1 = LaboratoryOperationRecord::tsy_getLabOperationRecords($lab_id);

            if($data2 == null){

                return json_fail("查找失败",null,100);

            }

        }

        if($data1 == null){

            return json_fail("查找失败",null,100);

        }

        $j = 0;

        for ($i =$head-1;$i<$end;$i++){

            $data[$j] = $data1[$i];

            $j++;

        }

        return $data ?  json_fail("查找成功",$data,200):

            json_fail("查找失败",$data,100);

    }



    /**

     * 回显所有信息

     * @author tangshengyou

     * @param Reque st $request

     * @return \Illuminate\Http\JsonResponse

     */

    public function  getLabAllInfo(Request $request){

        $data1 = LaboratoryOperationRecord::tsy_getLab();

        $j = 0;

        for ($i =0;$i<count($data1);$i++){

            if (($i+1)%12==0){

                $head=$i-10;

                $end=$i+1;

                $data[$j]["group"]=$head."-".$end;

                $data[$j]['created_at']=$data1[$i]['created_at']->format('Y-m-d H:m:s');

                $j++;

            }

        }

        if (count($data1)>12){

            $head=floor(count($data1)/12)*12+1;

        }else{

            $head=1;

        }

        $end=count($data1);

        $data[$j]["group"]=$head."-".$end;

        $data[$j]['created_at']=$data1[count($data1)-1]['created_at']->format('Y-m-d H:m:s');

        if ($data==null){

            return json_fail("查找失败",null,100);

        }

        $perPage = 6;

        if ($request->has('page')) {                  // 请求是第几页，如果没有传page数据，则默认为1

            $current_page = $request->input('page');

            $current_page = $current_page <= 0 ? 1 :$current_page;

        } else {

            $current_page = 1;

        }

        $item = array_slice($data, ($current_page-1)*$perPage, $perPage);

        $total = count($data);

        $paginator =new LengthAwarePaginator($item, $total, $perPage, $current_page, array(

            'path' => Paginator::resolveCurrentPath(),                // 注释2

            'pageName' => 'page',

        ));

        return response()->json(['result'=>$paginator]);

    }



    /**

     * 返回所有的实验室名

     * @author tangshengyou <TangSYc.github>

     * @return array

     */

    public function GetLab(){

        $data1 = Laboratory::tsy_select();

        for ($i=0;$i<count($data1);$i++){

            $data[$i]=$data1[$i]['laboratory_name'];

        }

        return $data ?

            json_fail("查找成功",$data,200):

            json_fail("查找失败",$data,100);

    }



    public function Select(Request $request){

        $num = $request['num'];

        $head = $num%12;

        $head = $num - $head;

        $end = $head + 12;

        $lab_name = $request['lab_name'];

        if ($lab_name==null){

            $data1 = LaboratoryOperationRecord::tsy_getLab();

        }else{

            $data2 = Laboratory::tsy_selectByName($lab_name);

            $lab_id = $data2['laboratory_id'];

            $data1 = LaboratoryOperationRecord::tsy_getLabOperationRecords($lab_id);

        }

        if (count($data1)<$end){

            $end = count($data1);

        }

        if ($end<$head){

            return json_fail("没有找到",null,200);

        }

        $head = $head+1;

        $data['group']=$head . "-" .$end;

        $data['created_at']=$data1[$end-1]['created_at']->format('Y-m-d H:m:s');

        return $data ?

            json_fail("查找成功",$data,200):

            json_fail("查找失败",null,100);

    }

}
