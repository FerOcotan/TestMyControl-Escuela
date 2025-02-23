<?php

namespace App\Http\Controllers;

use App\Models\Grado;
use App\Http\Controllers\Controller;
use App\Http\Requests\Escuela\StoreRequestGrado;
use App\Http\Requests\Escuela\StoreRequestSeccion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GradoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $grado = Grado::all();
        return Inertia::render('Grado/Index',compact('grado'));
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Grado/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequestGrado $request)
    {
        $data=$request->only('nombre_grado');
        
        Grado::create($data);
        return to_route('grado.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Grado $grado)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Grado $grado)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Grado $grado)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Grado $grado)
    {
        //
    }
}
