<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alumnos extends Model
{
    protected $fillable = ['nombre_completo','direccion','telefono','email','foto','genero','latitud','longitud'];
    protected $primaryKey = 'id_alumno'; // Especifica la clave primaria personalizada
}
