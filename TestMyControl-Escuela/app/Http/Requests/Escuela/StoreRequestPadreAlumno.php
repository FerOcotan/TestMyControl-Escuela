<?php

namespace App\Http\Requests\Escuela;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreRequestPadreAlumno extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return Auth::check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
          
        
            
            'id_alumno' => ['required', 'integer', 'exists:alumnos,id_alumno'],
            'id_padre'  => ['required', 'integer', 'exists:padres,id_padre'],
            'parentesco' => ['required', 'string', 'max:255'],
         
        ];
    }
}
