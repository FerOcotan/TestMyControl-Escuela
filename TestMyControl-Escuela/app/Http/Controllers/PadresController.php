<?php

namespace App\Http\Controllers;

use App\Models\Padres;
use App\Http\Controllers\Controller;
use App\Http\Requests\Escuela\StoreRequestPadres;
use App\Http\Requests\Escuela\UpdateRequestPadre;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PadresController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $padres = Padres::all();
        
        return Inertia::render('Padres/Index',compact('padres'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Padres/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequestPadres $request)
    {
        $data=$request->only('nombre','direccion','telefono');
        

        

        Padres::create($data);
        return to_route('padres.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Padres $padres)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id_padre)
    {
        $padres = Padres::findOrFail($id_padre);
        return Inertia::render('Padres/Edit',compact('padres'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequestPadre $request, Padres $padres)
    {
        $data=$request->only('nombre','direccion','telefono');
       

        $data['user_id']=Auth::user()->id;

        $padres->update($data);
        return to_route('padres.edit',$padres);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Padres $padres)
    {
        $padres->delete();
        return to_route('padres.index');
    }
}
