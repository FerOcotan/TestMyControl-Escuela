<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grado extends Model
{
    protected $table = 'grados';             // Nombre de la tabla en la BD
    protected $fillable = [
        'nombre_grado',
    
      
    ];

    protected $primaryKey = 'id_grado'; // Especifica la clave primaria personalizada
}
