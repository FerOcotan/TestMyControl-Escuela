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

    // 🔹 Relación correcta con la tabla users
    public function usuario()
    {
        return $this->belongsTo(Usuarios::class, 'user_id', 'id');
    }

    public function grado()
    {
        return $this->belongsTo(Grado::class, 'id_grado', 'id_grado');
    }

    public function seccion()
    {
        return $this->belongsTo(Seccion::class, 'id_seccion', 'id_seccion');
    }

    public function escuela()
    {
        return $this->belongsTo(Escuela::class, 'id_school', 'id_school');
    }
}
