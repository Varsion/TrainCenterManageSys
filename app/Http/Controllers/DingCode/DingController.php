<?php

namespace App\Http\Controllers\DingCode;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DingController extends Controller
{
    public function rolesDiscrete(Request $request){
        $code = $request->code;
        $info = getDinginfo($code);
        $role = $info->role;
        
        return  $role == "普通用户" ?
            json_success("当前登陆为普通用户","experimental-training-center.html",200) :
            json_success("当前登陆为管理员","approval_no.html",200)  ;
    }
}
