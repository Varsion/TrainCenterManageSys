<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    //logInfo('网站部署成功');
    //return json_success('TrainCenterManageSys项目部署成功','Success',200);
    return redirect('pc-index.html');
});
