<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Alumnos; // Asegúrate de que este sea el nombre correcto del modelo
use App\Models\Escuela;

class DashboardController extends Controller
{
    public function index()
    {
        // Obtener los datos de las tablas alumnos y escuelas
        $alumnos = Alumnos::select('id_alumno', 'nombre_completo', 'latitud', 'longitud')->get();
        $escuelas = Escuela::select('id_school', 'nombre', 'latitud', 'longitud')->get();

        // Pasar los datos al frontend
        return Inertia::render('Dashboard', [
            'alumnos' => $alumnos,
            'escuelas' => $escuelas,
        ]);
    }
}