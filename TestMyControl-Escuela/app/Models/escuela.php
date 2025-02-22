<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class escuela extends Model
{
    protected $fillable = ['nombre','direccion','email','foto','latitud','longitud','user_id'];
    protected $primaryKey = 'id_school'; // Especifica la clave primaria personalizada
}
