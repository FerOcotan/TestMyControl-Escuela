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
            $table->string('telefono', 15);
            $table->string('email');
            $table->string('foto')->nullable();
            $table->enum('genero', ['masculino', 'femenino']);
            $table->decimal('latitud');
            $table->decimal('longitud');

            // 🔗 Claves foráneas correctamente referenciadas
            $table->unsignedBigInteger('id_school');
            $table->foreign('id_school')->references('id_school')->on('escuelas')->onDelete('cascade');

            $table->unsignedBigInteger('id_grado');
            $table->foreign('id_grado')->references('id_grado')->on('grados')->onDelete('cascade');

            $table->unsignedBigInteger('id_seccion');
            $table->foreign('id_seccion')->references('id_seccion')->on('secciones')->onDelete('cascade');

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
