<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PadreAlumno extends Model
{
    protected $fillable = ['parentesco', 'id_alumno', 'id_padre'];
    protected $primaryKey = 'id_padre_alumno';

    public function alumnos()
    {
        return $this->belongsTo(Alumnos::class, 'id_alumno', 'id_alumno');
    }

    public function padres()
    {
        return $this->belongsTo(Padres::class, 'id_padre', 'id_padre');
    }
}
