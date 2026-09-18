<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $fillable = [
        'key',
        'label',
        'short',
        'img',
        'order',
    ];

    public function templates()
    {
        return $this->hasMany(Template::class, 'cat', 'key');
    }
}
