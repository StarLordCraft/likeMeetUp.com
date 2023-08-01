<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'content',
        'image',
        'user_id'
    ];

    protected $guarded = [];

    public function owner()
    {
        return $this->hasOne('App\Models\User');
    }
 
    public function likes()
    {
        return $this->hasMany('App\Models\User');
    }
}
