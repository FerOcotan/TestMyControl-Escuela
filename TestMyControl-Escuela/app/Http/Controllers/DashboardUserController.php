<?php

namespace App\Http\Controllers;

use App\Models\Escuela; // Asegúrate de importar el modelo
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardUserController extends Controller
{
    public function index()
    {
        $escuelas = Escuela::all();


        // Pasar los datos a la vista de Inertia
        return Inertia::render('DashboardUser/Index', [
            'escuelas' => $escuelas, // Enviar las escuelas a la vista
        ]);
    }
}
