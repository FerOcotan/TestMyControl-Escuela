<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Escuela; // Asegúrate de importar el modelo Escuela
use App\Models\Alumno;  // Asegúrate de importar el modelo Alumno
use App\Models\Alumnos;
use App\Models\PadreAlumno; // Asegúrate de importar el modelo PadreAlumno
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

    // Método para generar el reporte en PDF con los datos de la escuela
    public function generarReporteEscuela($id_school)
    {
        // Obtener la escuela y sus datos
        $escuela = Escuela::findOrFail($id_school);
        $totalAlumnos = Alumnos::where('id_school', $id_school)->count();

        // Cargar la vista del reporte en PDF
        $pdf = Pdf::loadView('reportes.pdf', [
            'escuela' => $escuela,
            'totalAlumnos' => $totalAlumnos,
        ]);

        // Mostrar el PDF en el navegador (para incrustar en un iframe)
        return $pdf->stream('reporte_escuela_' . $escuela->id_school . '.pdf');
    }

    // Método para generar el reporte en PDF con el listado de alumnos
    public function generarReporteAlumnos($id_school)
    {
        // Obtener la escuela y sus datos
        $escuela = Escuela::findOrFail($id_school);



        // Obtener los alumnos vinculados a la escuela
        $alumnos = Alumnos::where('id_school', $id_school)
            ->with(['grado', 'seccion', 'padres']) // Cargar relaciones
            ->get();

        // Cargar la vista del reporte en PDF
        $pdf = Pdf::loadView('reportes.alumnos', [
            'escuela' => $escuela,
            'alumnos' => $alumnos,
        
        ]);

        // Mostrar el PDF en el navegador (para incrustar en un iframe)
        return $pdf->stream('reporte_alumnos_' . $escuela->id_school . '.pdf');
    }
}