<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumnos extends Model
{
    use HasFactory;

    protected $table = 'alumnos';
    protected $primaryKey = 'id_alumno';

    protected $fillable = [
        'nombre_completo', 'direccion', 'telefono', 'email', 'foto', 'genero', 
        'latitud', 'longitud', 'id_school', 'id_seccion', 'id_grado', 'user_id'
    ];

    // 🔹 Relación con la tabla users
    public function usuario()
    {
        return $this->belongsTo(Usuarios::class, 'user_id', 'id');
    }

    // 🔹 Relación con la tabla grados
    public function grado()
    {
        return $this->belongsTo(Grado::class, 'id_grado', 'id_grado');
    }

    // 🔹 Relación con la tabla secciones
    public function seccion()
    {
        return $this->belongsTo(Seccion::class, 'id_seccion', 'id_seccion');
    }

    // 🔹 Relación con la tabla escuelas
    public function escuela()
    {
        return $this->belongsTo(Escuela::class, 'id_school', 'id_school');
    }

    // 🔹 Relación muchos a muchos con la tabla padres (a través de la tabla intermedia padre_alumnos)
    public function padres()
    {
        return $this->belongsToMany(Padres::class, 'padre_alumnos', 'id_alumno', 'id_padre')
            ->withPivot('parentesco'); // Incluir el campo "parentesco" de la tabla intermedia
    }
}