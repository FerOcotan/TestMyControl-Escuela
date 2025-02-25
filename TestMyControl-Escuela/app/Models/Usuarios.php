<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuarios extends Model
{
    protected $table = 'users';           // (Opcional, Laravel lo infiere en plural, pero es mejor definirlo)
    protected $fillable = ['name','email','password','role']; // Especifica los campos que se pueden asignar masivamente
    protected $primaryKey = 'id'; // Especifica la clave primaria personalizada
}
