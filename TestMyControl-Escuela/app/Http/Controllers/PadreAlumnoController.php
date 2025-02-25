<?php

namespace App\Http\Controllers;

use App\Models\PadreAlumno;
use App\Http\Controllers\Controller;
use App\Http\Requests\Escuela\StoreRequestPadreAlumno;
use App\Http\Requests\Escuela\UpdateRequestPadreAlumno;
use App\Models\Alumnos;
use App\Models\Padres;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PadreAlumnoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
        $padreAlumno = PadreAlumno::with(['padres', 'alumnos'])->get();
    return Inertia::render('PadreAlumno/Index', [
        'padreAlumno' => $padreAlumno
    ]);
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
    public function store(StoreRequestPadreAlumno $request)
    {
        $data=$request->only('parentesco', 'id_alumno', 'id_padre');
        PadreAlumno::create($data);

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
    public function edit($padreAlumno)
{
    
        $alumnos = Alumnos::all(['id_alumno', 'nombre_completo']); // Selecciona ID y Nombre
        $padres = Padres::all(['id_padre', 'nombre']); // Selecciona ID y Nombre

        $padreAlumno = PadreAlumno::findOrFail($padreAlumno);
       

        return Inertia::render('PadreAlumno/Edit', [
            'alumnos' => $alumnos,
            'padres' => $padres,
            'padreAlumno' => $padreAlumno
            
           
        ]);
}


    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequestPadreAlumno $request, PadreAlumno $padreAlumno)
    {
        
        $data=$request->only('parentesco','id_padre','id_alumno');
        

        $data['user_id']=Auth::user()->id;

        $padreAlumno->update($data);
        return to_route('PadreAlumno.edit',$padreAlumno->id_padre_alumno);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PadreAlumno $padreAlumno)
    {
        //
    }
}
