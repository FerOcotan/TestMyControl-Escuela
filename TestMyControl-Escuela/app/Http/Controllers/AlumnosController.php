<?php

namespace App\Http\Controllers;

use App\Models\Alumnos;
use App\Http\Controllers\Controller;
use App\Http\Requests\Escuela\StoreRequest;
use App\Http\Requests\Escuela\UpdateRequest;
use App\Http\Requests\Escuela\UpdateRequestAlumno;
use App\Models\escuela;
use App\Models\Grado;
use App\Models\Seccion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AlumnosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
       // $alumnos = Alumnos::where('user_id', Auth::user()->id)->get();
        $alumnos = Alumnos::all();
        
        return Inertia::render('Alumno/Index',compact('alumnos'));
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        $escuelas = escuela::all(['id_school', 'nombre']); // Selecciona ID y Nombre
        $grados = Grado::all(['id_grado', 'nombre_grado']); // Selecciona ID y Nombre
        $secciones = Seccion::all(['id_seccion', 'nombre_seccion']); // Selecciona ID y Nombre

        return Inertia::render('Alumno/Create', [
            'grados' => $grados,
            'secciones' => $secciones,
            'escuelas' => $escuelas
           
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequest $request)
    {
        $data=$request->only('nombre_completo','direccion','telefono','email','genero','latitud','longitud','id_school','id_seccion','id_grado');
        if($request->hasFile('foto')){
            $file=$request->file('foto');
            $routeImage = $file->store('fotos',['disk'=>'public']);
            $data['foto']=$routeImage;
        }

     $data['user_id']=Auth::user()->id;

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
    public function edit($id_alumno)
    {
        $escuelas = escuela::all(['id_school', 'nombre']); // Selecciona ID y Nombre
        $grados = Grado::all(['id_grado', 'nombre_grado']); // Selecciona ID y Nombre
        $secciones = Seccion::all(['id_seccion', 'nombre_seccion']); // Selecciona ID y Nombre

        $alumnos = Alumnos::findOrFail($id_alumno);
       

        return Inertia::render('Alumno/Edit', [
            'grados' => $grados,
            'secciones' => $secciones,
            'escuelas' => $escuelas,
            'alumnos' => $alumnos,
           
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequestAlumno $request, Alumnos $alumnos)
    {
        $data=$request->only('nombre_completo','direccion','telefono','email','genero','latitud','longitud','id_school','id_seccion','id_grado');
        if($request->hasFile('foto')){
            $file=$request->file('foto');
            $routeImage = $file->store('fotos',['disk'=>'public']);
            $data['foto']=$routeImage;
            if($alumnos->foto){
                Storage::disk('public')->delete($alumnos->foto);
            }

        }

        $data['user_id']=Auth::user()->id;

        $alumnos->update($data);
        return to_route('alumno.edit',$alumnos);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Alumnos $alumnos)
    {
        if($alumnos->foto){
            Storage::disk('public')->delete($alumnos->foto);
        }

        $alumnos->delete();
        return to_route('alumno.index');
    }
}
