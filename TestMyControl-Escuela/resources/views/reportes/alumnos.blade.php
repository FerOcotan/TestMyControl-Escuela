<!DOCTYPE html>
<html>

<head>
    <title>Reporte de Alumnos - {{ $escuela->nombre }}</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: rgb(255, 255, 255);
            margin: 0;
            padding: 20px;
            text-align: center;
        }

        h1 {
            font-size: 1.5rem;
            /* Equivalente a text-7xl */
            font-weight: 700;
            /* Equivalente a font-bold */
            color: #2D3748;
            /* Equivalente a text-gray-800 */
            margin-bottom: 1.5rem;
            /* Equivalente a mb-6 */
            font-style: italic;
        }

        .table-container {
            max-width: 900px;
            margin: 0 auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            overflow-x: auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            border-radius: 8px;
            overflow: hidden;
        }

        th,
        td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }

        th {
            background-color: #2D3748;
            color: white;
            text-transform: uppercase;
            font-size: 14px;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #eaeaea;
            transition: 0.2s ease-in-out;
        }

        .foto-escuela {
            width: 100px;
            height: auto;

            border-radius: 8px;
            box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }

        .sin-foto {
            font-style: italic;
            color: #777;
            display: block;
            text-align: center;
        }

        .logo {
            width: 280px;

            height: auto;
            display: block;
            margin: 0 auto 20px;

        }
    </style>
</head>

<body>
    <img src="{{ public_path('storage/images/logopdf.jpg') }}" alt="Logo" class="logo">

    <h1>Reporte de Alumnos - {{ $escuela->nombre }}</h1>
    <table>
        <thead>
            <tr>
                <th>Nombre Completo</th>
                <th>Género</th>
                <th>Grado</th>
                <th>Sección</th>
                <th>Responsable</th>
                <th>Parentesco</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($alumnos as $alumno)
            <tr>
                <td>{{ $alumno->nombre_completo }}</td>
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