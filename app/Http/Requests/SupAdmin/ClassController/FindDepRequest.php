<?php

namespace App\Http\Requests\SupAdmin\ClassController;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class FindDepRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'department_name'=>'required'
        ];
    }

    /**
     * @param Validator $validator
     */
    protected  function failedValidation(Validator $validator)
    {
        throw (new HttpResponseException(json_fail(422, '参数错误',$validator->errors()->all(),422)));
    }
}
