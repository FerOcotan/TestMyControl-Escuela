<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Padres extends Model
{
    //

    protected $fillable = [
        'nombre',
        'direccion',
        'telefono',
      
    ];

    protected $primaryKey = 'id_padre'; // Especifica la clave primaria personalizada
}
