<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Package extends Model
{
    protected $fillable = [
        'tier',
        'name_id',
        'name_en',
        'price',
        'desc_id',
        'desc_en',
        'features_id',
        'features_en',
        'is_featured',
    ];

    protected $casts = [
        'features_id' => 'array',
        'features_en' => 'array',
        'is_featured' => 'boolean',
    ];
}
