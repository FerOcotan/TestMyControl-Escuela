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
use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Users;

class AlumnosController extends Controller
{
    /**
     * Display a listing of the resource.
     */


    public function index()
    {
        
       // $alumnos = Alumnos::where('user_id', Auth::user()->id)->get();
       $alumnos = Alumnos::with(['grado', 'seccion', 'escuela', 'usuario'])->get();

        
        return Inertia::render('Alumno/Index',compact('alumnos'));
    }
    

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $escuelas = escuela::all(['id_school', 'nombre']);
        $grados = Grado::all(['id_grado', 'nombre_grado']);
        $secciones = Seccion::all(['id_seccion', 'nombre_seccion']);
    
        //  usuarios que NO tienen un alumno vinculado y que NO son administradores
        $users = Usuarios::whereDoesntHave('alumno')
                         ->where('role', '!=', 'administrador')
                         ->get(['id', 'email']);
    
        return Inertia::render('Alumno/Create', [
            'grados' => $grados,
            'secciones' => $secciones,
            'escuelas' => $escuelas,
            'users' => $users
        ]);
    }
    
    /**
     * Store a newly created resource in storage.
     */

     // Se cambia el tipo de request a StoreRequest
    public function store(StoreRequest $request)
    {
        $data=$request->only('nombre_completo','direccion','telefono','email','genero','latitud','longitud','id_school','id_seccion','id_grado','user_id');


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


    public function edit($id_alumno)
    {
        $escuelas = escuela::all(['id_school', 'nombre']);
        $grados = Grado::all(['id_grado', 'nombre_grado']);
        $secciones = Seccion::all(['id_seccion', 'nombre_seccion']);
    
        
        $alumnos = Alumnos::findOrFail($id_alumno);
    
        // usuarios que no tienen un alumno vinculado o que sean el usuario actual del alumno
        $users = Usuarios::where(function ($query) use ($alumnos) {
                    $query->whereDoesntHave('alumno')
                          ->orWhere('id', $alumnos->user_id);
                })
                ->where('role', '!=', 'administrador')
                ->get(['id', 'email']);

    
        return Inertia::render('Alumno/Edit', [
            'grados' => $grados,
            'secciones' => $secciones,
            'escuelas' => $escuelas,
            'alumnos' => $alumnos,
            'users' => $users
        ]);
    }
    


    /**
     * Update the specified resource in storage.
     */

     // Se cambia el tipo de request a UpdateRequestAlumno

    public function update(UpdateRequestAlumno $request, Alumnos $alumnos)
    {
        $data=$request->only('nombre_completo','direccion','telefono','email','genero','latitud','longitud','id_school','id_seccion','id_grado','user_id');
        if($request->hasFile('foto')){
            $file=$request->file('foto');
            $routeImage = $file->store('fotos',['disk'=>'public']);
            $data['foto']=$routeImage;
            if($alumnos->foto){
                Storage::disk('public')->delete($alumnos->foto);
            }

        }

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
