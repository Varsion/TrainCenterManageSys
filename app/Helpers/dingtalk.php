<?php
 use EasyDingTalk\Application;

if (!function_exists('getDinginfo')) {
    /**
     * 获取钉钉用户信息
     * @param $code
     */
    function getDinginfo($code)
    {
        
       
$config = [
    /*
    |-----------------------------------------------------------
    | 【必填】企业 corpId
    |-----------------------------------------------------------
    */
    'corp_id' => 'dingd5aca511ee4b636bee0f45d8e4f7c288',

    /*
    |-----------------------------------------------------------
    | 【必填】应用 AppKey
    |-----------------------------------------------------------
    */
    'app_key' => 'dinguix1bonoeuxidewj',

    /*
    |-----------------------------------------------------------
    | 【必填】应用 AppSecret
    |-----------------------------------------------------------
    */
    'app_secret' => 'zcvde-L9F1rWXhgjXlxG_spFysVfhKrvqeTlow7tn7cmKGPxpO45RxV4_QsaGoLh',

    /*
    |-----------------------------------------------------------
    | 【选填】加解密
    |-----------------------------------------------------------
    | 此处的 `token` 和 `aes_key` 用于事件通知的加解密
    | 如果你用到事件回调功能，需要配置该两项
    */
    // 'token' => 'uhl3CZbtsmf93bFPanmMenhWwrqbSwPc',
    // 'aes_key' => 'qZEOmHU2qYYk6n6vqLfi3FAhcp9bGA2kgbfnsXDrGgN',

    /*
    |-----------------------------------------------------------
    | 【选填】后台免登配置信息
    |-----------------------------------------------------------
    | 如果你用到应用管理后台免登功能，需要配置该项
    */
    'sso_secret' => 'fkvCEOjEMc44P2ZgleYmpFAeXjDjXR3nraYy4YohbX4SqIeqmsHBkCW-hu88EPPn',

    /*
    |-----------------------------------------------------------
    | 【选填】第三方网站 OAuth 授权
    |-----------------------------------------------------------
    | 如果你用到扫码登录、钉钉内免登和密码登录第三方网站，需要配置该项
    */
    'oauth' => [
        /*
        |-------------------------------------------
         | `app-01` 为你自定义的名称，不要重复即可
         |-------------------------------------------
         | 数组内需要配置 `client_id`, `client_secret`, `scope` 和 `redirect` 四项
         |
         | `client_id` 为钉钉登录应用的 `appId`
         | `client_secret` 为钉钉登录应用的 `appSecret`
         | `scope`:
         |     - 扫码登录第三方网站和密码登录第三方网站填写 `snsapi_login`
         |     - 钉钉内免登第三方网站填写 `snsapi_auth`
         | `redirect` 为回调地址
         */
        'app-01' => [
            'client_id' => '970829952',
            'client_secret' => 'L9F1rWXhgjXlxG_spFysVfhKrvqeTlow7tn7cmKGPxpO45RxV4_QsaGoLh',
            'scope' => 'snsapi_login',
            'redirect' => 'https://easydingtalk.org/callback',
        ],
        /*
        |-------------------------------------------
         | 可配置多个 OAuth 应用，数组内内容同上
         |-------------------------------------------
         */
        'app-02' => [
            // ...
        ]
    ]
];

        $app = new Application($config);
        $datas = $app->user->getUserByCode($code);
        
        $userId = $datas["userid"];
        $userInfo = $app->user->get($userId, $lang = null);
        $roles = end($userInfo["roles"]);
        
        $info = json_encode([
            'name'=>$userInfo["name"],
            'tel' =>$userInfo["mobile"],
            'role'=>$roles["name"]
        ]);
        $data = json_decode($info);
        return $data;
    }
}
