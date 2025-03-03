<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Escuela; 

use App\Models\Alumnos;
use App\Models\PadreAlumno;
use Barryvdh\DomPDF\Facade\Pdf; 

class ReportController extends Controller
{
  
    public function index()
    {
     
        $escuelas = Escuela::all();

    
        return Inertia::render('Reportes/Index', [
            'escuelas' => $escuelas,
        ]);
    }


    
    
    public function generarReporteTodasEscuelas()
    {
     
        $escuelas = Escuela::all();
    
        
        $escuelas->each(function ($escuela) {
            $escuela->totalAlumnos = Alumnos::where('id_school', $escuela->id_school)->count();
        });
    
     
        $pdf = Pdf::loadView('reportes.todas_escuelas', [
            'escuelas' => $escuelas,
        ]);
        
    

        return $pdf->stream('reporte_todas_escuelas.pdf');
    }

   
    public function generarReporteAlumnos($id_school)
    {

        $escuela = Escuela::findOrFail($id_school);



       
        $alumnos = Alumnos::where('id_school', $id_school)
            ->with(['grado', 'seccion', 'padres']) // Cargar relaciones
            ->get();

        
        $pdf = Pdf::loadView('reportes.alumnos', [
            'escuela' => $escuela,
            'alumnos' => $alumnos,
        
        ]);

       
        return $pdf->stream('reporte_alumnos_' . $escuela->id_school . '.pdf');
    }
}