<?php

namespace App\Http\Controllers;

use App\Models\PadreAlumno;
use App\Http\Controllers\Controller;
use App\Models\Alumnos;
use App\Models\Padres;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PadreAlumnoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
        $padreAlumno = PadreAlumno::with(['padres', 'alumnos'])->get();
        return Inertia::render('PadreAlumno/Index', compact('padreAlumno'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $alumnos = Alumnos::all(['id_alumno', 'nombre_completo']); // Selecciona ID y Nombre
        $padres = Padres::all(['id_padre', 'nombre']); // Selecciona ID y Nombre
    
        return Inertia::render('PadreAlumno/Create', [
            'alumnos' => $alumnos,
            'padres' => $padres
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(PadreAlumno $padreAlumno)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PadreAlumno $padreAlumno)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PadreAlumno $padreAlumno)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PadreAlumno $padreAlumno)
    {
        //
    }
}
