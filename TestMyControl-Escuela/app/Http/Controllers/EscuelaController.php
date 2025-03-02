<?php

namespace App\Http\Controllers;

use App\Models\escuela;
use App\Http\Controllers\Controller;
use App\Http\Requests\Escuela\StoreRquest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class EscuelaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {


        $escuelas = Escuela::all();

 

       
       return Inertia::render('Escuela/Index',compact('escuelas'));


    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Escuela/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRquest $request)
    {
        $data=$request->only('nombre','direccion','email','latitud','longitud');
        if($request->hasFile('foto')){
            $file=$request->file('foto');
            $routeImage = $file->store('fotos',['disk'=>'public']);
            $data['foto']=$routeImage;
        }

        

        escuela::create($data);
        return to_route('escuela.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(escuela $escuela)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id_school)
    {
        $escuela = Escuela::findOrFail($id_school);
        return Inertia::render('Escuela/Edit', compact('escuela'));
    }
    
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, escuela $escuela)
    {
       $data=$request->only('nombre','direccion','email','latitud','longitud');
        if($request->hasFile('foto')){
            $file=$request->file('foto');
            $routeImage = $file->store('fotos',['disk'=>'public']);
            $data['foto']=$routeImage;
            if($escuela->foto){
                Storage::disk('public')->delete($escuela->foto);
            }
        }



        $escuela->update($data);
        return to_route('escuela.edit',$escuela);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(escuela $escuela)
    {
        if($escuela->foto){
            Storage::disk('public')->delete($escuela->foto);
        }

        $escuela->delete();
        return to_route('escuela.index');
    }
}
