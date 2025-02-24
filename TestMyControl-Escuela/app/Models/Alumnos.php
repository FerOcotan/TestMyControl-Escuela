<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alumnos extends Model
{
    protected $fillable = ['nombre_completo','direccion','telefono','email','foto','genero','latitud','longitud','id_school','id_seccion','id_grado']; // Especifica los campos que se pueden asignar masivamente
    protected $primaryKey = 'id_alumno'; // Especifica la clave primaria personalizada
}
