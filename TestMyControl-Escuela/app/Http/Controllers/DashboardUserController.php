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
        // Obtener todas las escuelas del usuario autenticado
        $escuelas = Escuela::where('user_id', Auth::id())->get();

        // Pasar los datos a la vista de Inertia
        return Inertia::render('DashboardUser/Index', [
            'escuelas' => $escuelas, // Enviar las escuelas a la vista
        ]);
    }
}
