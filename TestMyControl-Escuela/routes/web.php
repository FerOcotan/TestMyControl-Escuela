<?php

use App\Http\Controllers\AlumnosController;
use App\Http\Controllers\EscuelaController;
use App\Http\Controllers\PadresController;
use App\Http\Controllers\ProfileController;
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
    Route::get('/padres/{padre}/edit', [PadresController::class, 'edit'])->name('padres.edit');
    Route::post('/padres/{padre}', [PadresController::class, 'update'])->name('padres.update');
    Route::delete('/padres/{padre}', [PadresController::class, 'destroy'])->name('padres.destroy');

 
});

require __DIR__.'/auth.php';
