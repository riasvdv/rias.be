<?php

namespace Statamic\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\JsonResponse;

class StoreAssetContainerRequest extends Request
{
    /**
     * Authorize the request
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
            'title'  => 'required',
            'handle' => 'required|handle_exists',  // Move the 'exists' validation here.
            'driver' => 'required',

            'local.path' => 'required_if:driver,local',
            'local.url'  => 'required_if:driver,local',

            's3.key'    => 'required_if:driver,s3',
            's3.secret' => 'required_if:driver,s3',
            's3.bucket' => 'required_if:driver,s3',
            's3.region' => 'required_if:driver,s3',
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array
     */
    public function messages()
    {
        return [
            'handle.handle_exists' => translate('cp.handle_exists'),

            'local.path.required_if' => translate('validation.required', ['attribute' => 'path']),
            'local.url.required_if'  => translate('validation.required', ['attribute' => 'URL']),

            's3.key.required_if'    => translate('validation.required', ['attribute' => 'access key ID']),
            's3.secret.required_if' => translate('validation.required', ['attribute' => 'secret access key']),
            's3.bucket.required_if' => translate('validation.required', ['attribute' => 'bucket']),
            's3.region.required_if' => translate('validation.required', ['attribute' => 'region']),
        ];
    }

    /**
     * {@inheritdoc}
     */
    protected function formatErrors(Validator $validator)
    {
        return [
            'success' => false,
            'errors'  => $validator->errors()->all(),
        ];
    }

    /**
     * We're overriding the method because the default HTTP response returned
     * when the validation fails is 422, unprocessable entry.
     *
     * Now, we can either modify the component to read the error and assign the
     * errors, (which is file), or just return a 200 response.
     *
     * @return JsonResponse
     */
    public function response(array $errors)
    {
        return new JsonResponse($errors, 200);
    }
}
