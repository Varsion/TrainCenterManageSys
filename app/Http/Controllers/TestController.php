<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test(){
        $code = 'xxxxx';
        $res  = getDinginfo($code);
        $tel  =  $res->tel;
    }

    public function dingcode(Request $request){
            $code = $request->code;
            $res = getDinginfo($code);
            
          


            return json_success("钉钉code测试",$res,200);
    }
}
