<?php

namespace App\Http\Controllers;

use App\Models\Usuarios;
use App\Http\Controllers\Controller;
use App\Http\Requests\Escuela\StoreRequest;
use App\Http\Requests\Escuela\StoreRequestUsuarios;
use App\Http\Requests\Escuela\UpdateRequest;
use App\Http\Requests\Escuela\UpdateRequestUsuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $usuarios = Usuarios::all();
        return Inertia::render('Usuarios/Index',compact('usuarios'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

        return Inertia::render('Usuarios/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreRequestUsuarios $request)
    {
        $data = $request->only('name', 'email', 'password', 'role');

        // Hashear la contraseña antes de guardar
        $data['password'] = Hash::make($data['password']);
    
        Usuarios::create($data);
    
        return to_route('usuarios.index');

    }

    /**
     * Display the specified resource.
     */
    public function show(Usuarios $usuarios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Usuarios $usuarios)
    {
       
        return Inertia::render('Usuarios/Edit',compact('usuarios'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRequestUsuarios $request, Usuarios $usuarios)
    {
        $data=$request->only('name','email','password','role');
        $data['password'] = Hash::make($data['password']);
        $usuarios->update($data);
        return to_route('usuarios.edit',$usuarios);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Usuarios $usuarios)
    {
        $usuarios->delete();
        return to_route('usuarios.index');
    }
}
