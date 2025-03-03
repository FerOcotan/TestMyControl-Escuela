<!DOCTYPE html>
<html>

<head>
    <title>Reporte de Escuela</title>
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
    <h1>Listado de Escuelas</h1>

    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Emblema</th>
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
                            class="foto-escuela">
                        @else
                        <span class="sin-foto">Sin foto</span>
                        @endif
                    </td>
                    <td>{{ $escuela->nombre }}</td>
                    <td>{{ $escuela->direccion }}</td>
                    <td>{{ $escuela->email }}</td>
                    <td>{{ $totalAlumnos }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

</html>