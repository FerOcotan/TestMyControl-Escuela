<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Maneja una solicitud entrante.
     */
    public function handle(Request $request, Closure $next, $role)
    {
        if (!Auth::check() || Auth::user()->role !== $role) {
            // Redirige al dashboard (o a cualquier otra ruta)
            return redirect()->route('dashboard')->with('error', 'No tienes permiso para acceder a esta página.');
        }

        return $next($request);
    }
}