<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use App\Models\Alumnos;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardUserController extends Controller
{
    public function index()
    {
        $user = Auth::user();
    
        if (!$user) {
            return redirect()->route('login')->with('message', 'Usuario no autenticado.');
        }
    
        $alumno = Alumnos::where('user_id', $user->id)
            ->with(['escuela', 'grado', 'seccion'])
            ->first();
    
        if (!$alumno) {
            return Inertia::render('DashboardUser/Index', [
                'message' => 'No hay información registrada para este usuario, contacta a soporte.',
            ]);
        }
    
        return Inertia::render('DashboardUser/Index', [
            'alumno' => [
                'id_alumno' => $alumno->id_alumno,
                'nombre_completo' => $alumno->nombre_completo,
                'foto' => $alumno->foto,
                'escuela' => $alumno->escuela ? [
                    'nombre' => $alumno->escuela->nombre,
                    'direccion' => $alumno->escuela->direccion,
                    'latitud' => $alumno->escuela->latitud,
                    'longitud' => $alumno->escuela->longitud,
                    'foto' => $alumno->escuela->foto, // Aquí agregamos la foto sin sobrescribir
                ] : null,
                'grado' => $alumno->grado ? ['nombre_grado' => $alumno->grado->nombre_grado] : null,
                'seccion' => $alumno->seccion ? ['nombre_seccion' => $alumno->seccion->nombre_seccion] : null,
         
            ],
        ]);
    }
    
}
