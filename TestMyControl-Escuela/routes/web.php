<?php

use App\Http\Controllers\AlumnosController;
use App\Http\Controllers\EscuelaController;
use App\Http\Controllers\GradoController;
use App\Http\Controllers\PadreAlumnoController;
use App\Http\Controllers\PadresController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SeccionController;
use App\Http\Controllers\UsuariosController;
use GuzzleHttp\Middleware;
use App\Http\Controllers\DashboardController; // Importa el DashboardController
use App\Http\Controllers\DashboardUserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Importa el RoleMiddleware para verificar el rol del usuario y controla tambien el acceso a las rutas que no existan
//junto a rolemiddleware se importa tambien el middleware de inertia

Route::fallback(function () {
    if (!Auth::check()) {
        return redirect()->route('login')->with('error', 'Debes iniciar sesión.');
    }

    return match (Auth::user()->role) {
        'admin' => redirect()->route('dashboard')->with('error', 'La página no existe.'),
        'usuario' => redirect()->route('DashboardUser')->with('error', 'La página no existe.'),
        default => redirect()->route('login')->with('error', 'Acceso denegado.'),
    };
});
//fin rollback


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::prefix('/dashboard')->middleware(['auth', 'role:administrador'])->group(function() {
    Route::get('/', [DashboardController::class, 'index'])
        ->middleware(['auth', 'verified'])
        ->name('dashboard');
});

Route::middleware(['auth', 'role:usuario'])->group(function () {
    Route::get('/dashboarduser', [DashboardUserController::class, 'index'])->name('DashboardUser');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('dashboard')->middleware(['auth', 'role:administrador'])->group(function(){
    Route::get('/usuarios', [UsuariosController::class, 'index'])->name('usuarios.index');
    Route::get('/usuarios/create', [UsuariosController::class, 'create'])->name('usuarios.create');
    Route::post('/usuarios', [UsuariosController::class, 'store'])->name('usuarios.store');
    Route::get('/usuarios/{usuarios}/edit', [UsuariosController::class, 'edit'])->name('usuarios.edit');
    Route::post('/usuarios/{usuarios}', [UsuariosController::class, 'update'])->name('usuarios.update');
    Route::delete('/usuarios/{usuarios}', [UsuariosController::class, 'destroy'])->name('usuarios.destroy');
});



Route::prefix('dashboard')->middleware(['auth', 'role:administrador'])->group(function(){
    Route::get('/escuela', [EscuelaController::class, 'index'])->name('escuela.index');
    Route::get('/escuela/create', [EscuelaController::class, 'create'])->name('escuela.create');
    Route::post('/escuela', [EscuelaController::class, 'store'])->name('escuela.store');
    Route::get('/escuela/{escuela}/edit', [EscuelaController::class, 'edit'])->name('escuela.edit');
    Route::post('/escuela/{escuela}', [EscuelaController::class, 'update'])->name('escuela.update');
    Route::delete('/escuela/{escuela}', [EscuelaController::class, 'destroy'])->name('escuela.destroy');
});

Route::prefix('dashboard')->middleware(['auth', 'role:administrador'])->group(function(){
    Route::get('/alumno', [AlumnosController::class, 'index'])->name('alumno.index');
    Route::get('/alumno/create', [AlumnosController::class, 'create'])->name('alumno.create');
    Route::post('/alumno', [AlumnosController::class, 'store'])->name('alumno.store');
    Route::get('/alumno/{alumno}/edit', [AlumnosController::class, 'edit'])->name('alumno.edit');
    Route::post('/alumno/{alumnos}', [AlumnosController::class, 'update'])->name('alumno.update');
    Route::delete('/alumno/{alumnos}', [AlumnosController::class, 'destroy'])->name('alumno.destroy');
});

Route::prefix('dashboard')->middleware(['auth', 'role:administrador'])->group(function(){
    Route::get('/padres', [PadresController::class, 'index'])->name('padres.index');
    Route::get('/padres/create', [PadresController::class, 'create'])->name('padres.create');
    Route::post('/padres', [PadresController::class, 'store'])->name('padres.store');
    Route::get('/padres/{padres}/edit', [PadresController::class, 'edit'])->name('padres.edit');
    Route::post('/padres/{padres}', [PadresController::class, 'update'])->name('padres.update');
    Route::delete('/padres/{padres}', [PadresController::class, 'destroy'])->name('padres.destroy');

 
});



Route::prefix('dashboard')->middleware(['auth', 'role:administrador'])->group(function(){
    Route::get('PadreAlumno', [PadreAlumnoController::class, 'index'])->name('PadreAlumno.index');
    Route::get('PadreAlumno/create', [PadreAlumnoController::class, 'create'])->name('PadreAlumno.create');
    Route::post('PadreAlumno', [PadreAlumnoController::class, 'store'])->name('PadreAlumno.store');
    Route::get('PadreAlumno/{padre_alumno}/edit', [PadreAlumnoController::class, 'edit'])->name('PadreAlumno.edit');
    Route::post('PadreAlumno/{padre_alumno}', [PadreAlumnoController::class, 'update'])->name('PadreAlumno.update');
    Route::delete('PadreAlumno/{padre_alumno}', [PadreAlumnoController::class, 'destroy'])->name('PadreAlumno.destroy');
    
});


Route::prefix('dashboard')->middleware(['auth', 'role:administrador'])->group(function(){

    Route::get('grado', [GradoController::class, 'index'])->name('grado.index');
    Route::get('grado/create', [GradoController::class, 'create'])->name('grado.create');
    Route::post('grado', [GradoController::class, 'store'])->name('grado.store');
    Route::get('grado/{grado}/edit', [GradoController::class, 'edit'])->name('grado.edit');
    Route::post('grado/{grado}', [GradoController::class, 'update'])->name('grado.update');
    Route::delete('grado/{grado}', [GradoController::class, 'destroy'])->name('grado.destroy');


});

Route::prefix('dashboard')->middleware(['auth', 'role:administrador'])->group(function(){

    Route::get('seccion', [SeccionController::class, 'index'])->name('seccion.index');
    Route::get('seccion/create', [SeccionController::class, 'create'])->name('seccion.create');
    Route::post('seccion', [SeccionController::class, 'store'])->name('seccion.store');
    Route::get('seccion/{seccion}/edit', [SeccionController::class, 'edit'])->name('seccion.edit');
    Route::post('seccion/{seccion}', [SeccionController::class, 'update'])->name('seccion.update');
    Route::delete('seccion/{seccion}', [SeccionController::class, 'destroy'])->name('seccion.destroy');

});




require __DIR__.'/auth.php';
