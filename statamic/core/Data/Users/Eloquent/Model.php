<?php

namespace Statamic\Data\Users\Eloquent;

use Illuminate\Database\Eloquent\Model as EloquentModel;

class Model extends EloquentModel
{
    protected $table = 'users';

    protected $guarded = [];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'super' => 'boolean',
    ];

    public function mergeCastsFromFieldset($fieldset)
    {
        $this->casts = array_merge(
            array_get($fieldset->contents(), 'casts', []),
            $this->casts
        );
    }
}
