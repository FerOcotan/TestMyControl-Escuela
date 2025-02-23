<?php

namespace App\Http\Requests\Escuela;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class StoreRequest extends FormRequest
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
            'nombre_completo' => ['required', 'string', 'max:255'],
            'direccion' => ['required', 'string', 'max:255'],
            'telefono' => ['required', 'string', 'string', 'max:20'],
            'email' => ['required', 'string', 'email', 'max:255'],
            'genero' => ['required', 'string', 'in:Masculino,Femenino'],
            'foto' => ['nullable', 'mimes:png,jpg,jpeg', 'max:2040'],
            'latitud' => ['required', 'string', 'max:255'],
            'longitud' => ['required', 'string', 'max:255'],
        ];
    }
}
