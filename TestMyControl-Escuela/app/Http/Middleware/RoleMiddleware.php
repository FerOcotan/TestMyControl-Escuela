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
        // Verifica si el usuario está autenticado
        if (!Auth::check()) {
            return redirect()->route('login')->with('error', 'Debes iniciar sesión.');
        }

        // Verifica el rol del usuario
        $userRole = Auth::user()->role;

        if ($userRole !== $role) {
            return $this->redirectByRole($userRole);
        }

        return $next($request);
    }

    /**
     * Redirige al usuario según su rol.
     */
    private function redirectByRole($role)
    {
        return match ($role) {
            'admin' => redirect()->route('dashboard')->with('error', 'No tienes permiso para acceder a esta página.'),
            'usuario' => redirect()->route('DashboardUser')->with('error', 'No tienes permiso para acceder a esta página.'),
            default => redirect()->route('login')->with('error', 'Acceso denegado.')
        };
    }
}