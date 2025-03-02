<!DOCTYPE html>
<html>
<head>
    <title>Reporte de Escuela</title>
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
        .foto-escuela {
            width: 100px; /* Ancho fijo */
            height: auto; /* Altura automática para mantener la proporción */
        }
    </style>
</head>
<body>
    <h1>Reporte de Escuela</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Foto</th>
                <th>Nombre</th>
                <th>Dirección</th>
                <th>Email</th>
                <th>Total de Alumnos</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $escuela->id_school }}</td>
                <td>
                    @if ($escuela->foto)
                        <img 
                            src="{{ storage_path('app/public/' . $escuela->foto) }}" 
                            alt="Foto de la escuela" 
                            class="foto-escuela" 
                        >
                    @else
                        Sin foto
                    @endif
                </td>
                <td>{{ $escuela->nombre }}</td>
                <td>{{ $escuela->direccion }}</td>
                <td>{{ $escuela->email }}</td>
                <td>{{ $totalAlumnos }}</td>
            </tr>
        </tbody>
    </table>
</body>
</html>