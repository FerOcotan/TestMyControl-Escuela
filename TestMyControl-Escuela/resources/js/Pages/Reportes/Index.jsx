import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ReportesIndex() {
   //escuelas pasadas desde el controlador
    const { escuelas } = usePage().props;

    // Estado para almacenar la escuela seleccionada
    const [selectedEscuela, setSelectedEscuela] = useState('');

    // Función para manejar la generación del reporte
    const handleGenerarReporte = () => {
        if (selectedEscuela) {
            // Redirigir a la ruta que genera el PDF
            window.location.href = `/reportes/generar/${selectedEscuela}`;
        } else {
            alert('Por favor, seleccione una escuela.');
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Reportes de Escuelas
                </h2>
            }
        >
            <Head title="Reportes" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Select para elegir la escuela */}
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Seleccione una escuela
                                </label>
                                <select
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                                    value={selectedEscuela}
                                    onChange={(e) => setSelectedEscuela(e.target.value)}
                                >
                                    <option value="">Seleccione una escuela...</option>
                                    {escuelas.map((escuela) => (
                                        <option key={escuela.id_school} value={escuela.id_school}>
                                            {escuela.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Botón para generar el reporte */}
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                onClick={handleGenerarReporte}
                            >
                                Generar Reporte
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}