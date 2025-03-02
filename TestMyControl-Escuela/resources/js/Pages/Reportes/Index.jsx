import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

export default function ReportesIndex() {
    // Obtener las escuelas pasadas desde el controlador
    const { escuelas } = usePage().props;

    // Estado para almacenar la escuela seleccionada
    const [selectedEscuela, setSelectedEscuela] = useState('');

    // Estado para almacenar la URL del PDF
    const [pdfUrl, setPdfUrl] = useState('');

    // Referencia al iframe
    const iframeRef = useRef(null);

    // Función para manejar la generación del reporte de la escuela
    const handleGenerarReporteEscuela = () => {
        if (selectedEscuela) {
            // Actualizar la URL del iframe con la ruta del PDF de la escuela
            setPdfUrl(`/reportes/generar-escuela/${selectedEscuela}`);
        } else {
            alert('Por favor, seleccione una escuela.');
        }
    };

    // Función para manejar la generación del reporte de alumnos
    const handleGenerarReporteAlumnos = () => {
        if (selectedEscuela) {
            // Actualizar la URL del iframe con la ruta del PDF de alumnos
            setPdfUrl(`/reportes/generar-alumnos/${selectedEscuela}`);
        } else {
            alert('Por favor, seleccione una escuela.');
        }
    };

    // Usar useEffect para manejar la actualización del iframe
    useEffect(() => {
        if (pdfUrl && iframeRef.current) {
            // Forzar la actualización del iframe
            iframeRef.current.src = pdfUrl;
        }
    }, [pdfUrl]);

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

                            {/* Botón para generar el reporte de la escuela */}
                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                                onClick={handleGenerarReporteEscuela}
                            >
                                Generar Reporte de la Escuela
                            </button>

                            {/* Botón para generar el reporte de alumnos */}
                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                onClick={handleGenerarReporteAlumnos}
                            >
                                Generar Reporte de Alumnos
                            </button>

                            {/* Iframe para mostrar el PDF */}
                            <div className="mt-6">
                                <iframe
                                    ref={iframeRef} // Referencia al iframe
                                    src={pdfUrl}
                                    width="100%"
                                    height="600px"
                                    style={{ border: 'none' }}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}