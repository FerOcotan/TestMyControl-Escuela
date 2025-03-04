<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Padres extends Model
{
    use HasFactory;

    protected $table = 'padres';
    protected $primaryKey = 'id_padre';

    protected $fillable = [
        'nombre', 'telefono', 'email', 'direccion'
    ];

    // 🔹 Relación muchos a muchos con la tabla alumnos (a través de la tabla intermedia padre_alumnos)
    public function alumnos()
    {
        return $this->belongsToMany(Alumnos::class, 'padre_alumnos', 'id_padre', 'id_alumno')
            ->withPivot('parentesco'); //   "parentesco" de la tabla intermedia
    }
}