<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class escuela extends Model
{
    protected $table = 'escuelas';       
    protected $fillable = ['nombre','direccion','email','foto','latitud','longitud'];
    protected $primaryKey = 'id_school'; // clave primaria personalizada
}
