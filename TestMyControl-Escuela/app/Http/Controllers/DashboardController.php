<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Alumnos; 
use App\Models\Escuela;

class DashboardController extends Controller
{
    public function index()
    {
        // datos de las tablas alumnos y escuelas
        $alumnos = Alumnos::select('id_alumno', 'nombre_completo', 'latitud', 'longitud','foto')->get();
        $escuelas = Escuela::select('id_school', 'nombre', 'latitud', 'longitud','foto')->get();

        // Pasar los datos al frontend
        return Inertia::render('Dashboard', [
            'alumnos' => $alumnos,
            'escuelas' => $escuelas,
        ]);
    }
}