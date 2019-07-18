<?php

namespace Statamic\Http\Requests;

class StoreAssetFolder extends Request
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
            'basename' => 'required|alpha_dash'
        ];
    }

    /**
     * Set custom attributes for validator errors.
     *
     * @return array
     */
    public function attributes()
    {
        return [
            'basename' => strtolower(t('asset_folder_basename')),
        ];
    }
}
