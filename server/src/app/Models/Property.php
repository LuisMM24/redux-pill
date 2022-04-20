<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $fillable = [
        'street',
        'number',
        'city',
        'province',
        'country',
        "image",
        'status',
        'type',
        'description',
        'contact_mail',
        'contact_phone',
        'condition',
        'room',
        'bath',
        'size',
        'price',
        'pet',
        'garden',
        'air_conditioning',
        'swimming_pool',
        'terrace',
        'publication_date'
    ];
  // protected cast [booleans]
    protected $casts = [
        "garden"=>"boolean",
        "pet"=>"boolean",
        "terrace"=>"boolean",
        "air_conditioning"=>"boolean",
        "swimming_pool"=>"boolean",
    ];
    public $timestamps = false;

    public function users() {

        /*
        *  This is a many to many relationship
        *  between the property and the user
        *  Params: Related Model, Pivot Table, Foreign Key of the Current Model, Foreign Key of the Related Model
        */
        return $this->belongsToMany(User::class,'favourites','property_id','user_id');
    }

}
