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
    </style>
</head>
<body>
    <h1>Reporte de Escuela</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Dirección</th>
             
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{ $escuela->id_school }}</td>
                <td>{{ $escuela->nombre }}</td>
                <td>{{ $escuela->direccion }}</td>
           
            </tr>
        </tbody>
    </table>
</body>
</html>