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
        Schema::create('padre_alumnos', function (Blueprint $table) {
            $table->bigIncrements('id_padre_alumno');

        
           
        
            $table->unsignedBigInteger('id_padre');
            $table->foreign('id_padre')->references('id_padre')->on('padres')->onDelete('cascade');

            $table->unsignedBigInteger('id_alumno');
            $table->foreign('id_alumno')->references('id_alumno')->on('alumnos')->onDelete('cascade');
            

        
            $table->string('parentesco');
        
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('padre_alumnos');
    }
};
