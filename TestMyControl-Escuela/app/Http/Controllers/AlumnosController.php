<?php

namespace App\Http\Controllers;

use App\Models\Alumnos;
use App\Http\Controllers\Controller;
use App\Http\Requests\Escuela\StoreRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlumnosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Alumno/Index', [
            'alumnos' => Alumnos::all()
        ]);
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Alumno/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data=$request->only('nombre_completo','direccion','telefono','email','genero','latitud','longitud');
        if($request->hasFile('foto')){
            $file=$request->file('foto');
            $routeImage = $file->store('fotos',['disk'=>'public']);
            $data['foto']=$routeImage;
        }

        Alumnos::create($data);
        return to_route('alumno.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Alumnos $alumnos)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Alumnos $alumnos)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Alumnos $alumnos)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Alumnos $alumnos)
    {
        //
    }
}
