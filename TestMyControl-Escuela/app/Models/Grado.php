<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grado extends Model
{
    protected $table = 'grados';           
    protected $fillable = [
        'nombre_grado',
    
      
    ];

    protected $primaryKey = 'id_grado'; //  clave primaria personalizada
}
