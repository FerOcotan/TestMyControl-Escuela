<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AlumnoResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id_alumno' => $this->id_alumno,
            'nombre_completo' => $this->nombre_completo,
            'foto' => $this->foto,
            'escuela' => $this->escuela ? [
                'nombre' => $this->escuela->nombre,
                'direccion' => $this->escuela->direccion,
                'latitud' => $this->escuela->latitud,
                'longitud' => $this->escuela->longitud,
            ] : null,
            'grado' => $this->grado ? ['nombre_grado' => $this->grado->nombre_grado] : null,
            'seccion' => $this->seccion ? ['nombre_seccion' => $this->seccion->nombre_seccion] : null,
        ];
    }
}
