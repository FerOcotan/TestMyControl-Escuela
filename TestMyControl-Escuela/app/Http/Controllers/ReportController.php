<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Escuela; // Asegúrate de importar el modelo Escuela
use App\Models\Alumno;  // Asegúrate de importar el modelo Alumno
use App\Models\Alumnos;
use Barryvdh\DomPDF\Facade\Pdf; // Importa DomPDF

class ReportController extends Controller
{
    // Método para mostrar la vista de reportes
    public function index()
    {
        // Obtener todas las escuelas
        $escuelas = Escuela::all();

        // Pasar las escuelas a la vista
        return Inertia::render('Reportes/Index', [
            'escuelas' => $escuelas,
        ]);
    }

    // Método para generar el reporte en PDF
    public function generarReporte($id_school)
    {
        // Obtener la escuela y sus datos
        $escuela = Escuela::findOrFail($id_school);

        // Obtener el total de alumnos asociados a la escuela
        $totalAlumnos = Alumnos::where('id_school', $id_school)->count();

        // Cargar la vista del reporte en PDF
        $pdf = Pdf::loadView('reportes.pdf', [
            'escuela' => $escuela,
            'totalAlumnos' => $totalAlumnos,
        ]);

        // Mostrar el PDF en el navegador (para incrustar en un iframe)
        return $pdf->stream('reporte_escuela_' . $escuela->id_school . '.pdf');
    }
}