<?php

use App\Http\Controllers\AlumnosController;
use App\Http\Controllers\EscuelaController;
use App\Http\Controllers\GradoController;
use App\Http\Controllers\PadreAlumnoController;
use App\Http\Controllers\PadresController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SeccionController;
use GuzzleHttp\Middleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::prefix('dashboard')->middleware('auth')->group(function(){
    Route::get('/escuela', [EscuelaController::class, 'index'])->name('escuela.index');
    Route::get('/escuela/create', [EscuelaController::class, 'create'])->name('escuela.create');
    Route::post('/escuela', [EscuelaController::class, 'store'])->name('escuela.store');
    Route::get('/escuela/{escuela}/edit', [EscuelaController::class, 'edit'])->name('escuela.edit');
    Route::post('/escuela/{escuela}', [EscuelaController::class, 'update'])->name('escuela.update');
    Route::delete('/escuela/{escuela}', [EscuelaController::class, 'destroy'])->name('escuela.destroy');
});

Route::prefix('dashboard')->middleware('auth')->group(function(){
    Route::get('/alumno', [AlumnosController::class, 'index'])->name('alumno.index');
    Route::get('/alumno/create', [AlumnosController::class, 'create'])->name('alumno.create');
    Route::post('/alumno', [AlumnosController::class, 'store'])->name('alumno.store');
    Route::get('/alumno/{alumno}/edit', [AlumnosController::class, 'edit'])->name('alumno.edit');
    Route::post('/alumno/{alumnos}', [AlumnosController::class, 'update'])->name('alumno.update');
    Route::delete('/alumno/{alumnos}', [AlumnosController::class, 'destroy'])->name('alumno.destroy');
});

Route::prefix('dashboard')->middleware('auth')->group(function(){
    Route::get('/padres', [PadresController::class, 'index'])->name('padres.index');
    Route::get('/padres/create', [PadresController::class, 'create'])->name('padres.create');
    Route::post('/padres', [PadresController::class, 'store'])->name('padres.store');
    Route::get('/padres/{padres}/edit', [PadresController::class, 'edit'])->name('padres.edit');
    Route::post('/padres/{padres}', [PadresController::class, 'update'])->name('padres.update');
    Route::delete('/padres/{padres}', [PadresController::class, 'destroy'])->name('padres.destroy');

 
});

//no terminada por falta de tiempo...

Route::prefix('dashboard')->middleware('auth')->group(function(){
    Route::get('/PadreAlumno', [PadreAlumnoController::class, 'index'])->name('PadreAlumno.index');
    Route::get('/padrealumno/create', [PadreAlumnoController::class, 'create'])->name('padrealumno.create');
    Route::post('/padrealumno', [PadreAlumnoController::class, 'store'])->name('padrealumno.store');
    Route::get('/padrealumno/{padrealumno}/edit', [PadreAlumnoController::class, 'edit'])->name('padrealumno.edit');
    Route::post('/padrealumno/{padrealumno}', [PadreAlumnoController::class, 'update'])->name('padrealumno.update');
    Route::delete('/padrealumno/{padrealumno}', [PadreAlumnoController::class, 'destroy'])->name('padrealumno.destroy');
});


Route::prefix('dashboard')->middleware('auth')->group(function(){

    Route::get('grado', [GradoController::class, 'index'])->name('grado.index');
    Route::get('grado/create', [GradoController::class, 'create'])->name('grado.create');
    Route::post('grado', [GradoController::class, 'store'])->name('grado.store');
    Route::get('grado/{grado}/edit', [GradoController::class, 'edit'])->name('grado.edit');
    Route::post('grado/{grado}', [GradoController::class, 'update'])->name('grado.update');
    Route::delete('grado/{grado}', [GradoController::class, 'destroy'])->name('grado.destroy');


});

Route::prefix('dashboard')->middleware('auth')->group(function(){

    Route::get('seccion', [SeccionController::class, 'index'])->name('seccion.index');
    Route::get('seccion/create', [SeccionController::class, 'create'])->name('seccion.create');
    Route::post('seccion', [SeccionController::class, 'store'])->name('seccion.store');
    Route::get('seccion/{seccion}/edit', [SeccionController::class, 'edit'])->name('seccion.edit');
    Route::post('seccion/{seccion}', [SeccionController::class, 'update'])->name('seccion.update');
    Route::delete('seccion/{seccion}', [SeccionController::class, 'destroy'])->name('seccion.destroy');

});




require __DIR__.'/auth.php';
