<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seccion extends Model
{
    use HasFactory;

    protected $table = 'secciones'; // Confirma el nombre de la tabla

    protected $primaryKey = 'id_seccion'; // Asegura que coincida con la clave primaria en la BD


    protected $fillable = ['nombre_seccion'];
}
