<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('alumnos', function (Blueprint $table) {
            $table->bigIncrements('id_alumno');
            $table->string('nombre_completo');
            $table->string('direccion');
            $table->string('telefono', 15); // Definir longitud máxima para evitar datos excesivos
            $table->string('email')->unique(); // Evita duplicados en correos electrónicos
            $table->string('foto')->nullable();
            $table->enum('genero', ['masculino', 'femenino']);
            $table->decimal('latitud'); // Mejor usar DECIMAL para precisión geoespacial
            $table->decimal('longitud');
            $table->foreignId('id_grado');
            $table->foreignId('id_seccion');
            $table->foreignId('id_school');
            $table->timestamps();
        
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('alumnos');
    }
};
