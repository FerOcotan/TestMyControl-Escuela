<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Alumnos;

class Usuarios extends Model
{
    protected $table = 'users'; 
    protected $fillable = ['name', 'email', 'password', 'role']; 
    protected $primaryKey = 'id';

    // Relación con Alumnos
    public function alumno()
    {
        return $this->hasOne(Alumnos::class, 'user_id', 'id');
    }
}
