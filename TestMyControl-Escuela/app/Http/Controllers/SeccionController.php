<?php

namespace App\Http\Controllers;

use App\Models\Seccion;
use App\Http\Controllers\Controller;
use App\Http\Requests\Escuela\StoreRequest;
use App\Http\Requests\Escuela\StoreRequestSeccion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeccionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $seccion = Seccion::all();
        return Inertia::render('Seccion/Index',compact('seccion'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Seccion/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequestSeccion $request)
    {
        $data=$request->only('nombre_seccion');
        
        Seccion::create($data);
        return to_route('seccion.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Seccion $seccion)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Seccion $seccion)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Seccion $seccion)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seccion $seccion)
    {
        //
    }
}
