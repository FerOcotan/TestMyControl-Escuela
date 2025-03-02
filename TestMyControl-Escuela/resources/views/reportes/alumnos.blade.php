<!DOCTYPE html>
<html>
<head>
    <title>Reporte de Alumnos - {{ $escuela->nombre }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        h1 {
            color: #333;
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1>Reporte de Alumnos - {{ $escuela->nombre }}</h1>
    <table>
        <thead>
            <tr>
                <th>Nombre Completo</th>
                <th>Dirección</th>
                <th>Género</th>
                <th>Grado</th>
                <th>Sección</th>
                <th>Padre/Madre</th>
                <th>Parentesco</th>
            </tr>
        </thead>
        <tbody>
        @foreach ($alumnos as $alumno)
    <tr>
        <td>{{ $alumno->nombre_completo }}</td>
        <td>{{ $alumno->direccion }}</td>
        <td>{{ $alumno->genero }}</td>
        <td>{{ $alumno->grado->nombre_grado }}</td> <!-- Acceder a la relación grado -->
        <td>{{ $alumno->seccion->nombre_seccion }}</td> <!-- Acceder a la relación seccion -->
        <td>
            @foreach ($alumno->padres as $padre)
                {{ $padre->nombre }}<br> <!-- Acceder a la relación padres -->
            @endforeach
        </td>
        <td>
            @foreach ($alumno->padres as $padre)
                {{ $padre->pivot->parentesco }}<br> <!-- Acceder al campo pivot -->
            @endforeach
        </td>
    </tr>
@endforeach
        </tbody>
    </table>
</body>
</html>