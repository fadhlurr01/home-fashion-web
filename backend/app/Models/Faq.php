<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Faq extends Model
{
    protected $fillable = [
        'question_id',
        'question_en',
        'answer_id',
        'answer_en',
        'order',
    ];
}
