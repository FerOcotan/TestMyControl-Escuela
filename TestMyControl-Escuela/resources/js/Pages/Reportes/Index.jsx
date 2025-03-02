import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';

export default function ReportesIndex() {
    const { escuelas } = usePage().props;
    const [selectedEscuela, setSelectedEscuela] = useState('');
    const [pdfUrl, setPdfUrl] = useState('');
    const iframeRef = useRef(null);

    const handleGenerarReporteEscuela = () => {
        if (selectedEscuela) {
            const newPdfUrl = `/reportes/generar-escuela/${selectedEscuela}`;
            if (pdfUrl !== newPdfUrl) {
                setPdfUrl(newPdfUrl); // Solo actualiza si la URL es diferente
            }
        } else {
            alert('Por favor, seleccione una escuela.');
        }
    };

    const handleGenerarReporteAlumnos = () => {
        if (selectedEscuela) {
            const newPdfUrl = `/reportes/generar-alumnos/${selectedEscuela}`;
            if (pdfUrl !== newPdfUrl) {
                setPdfUrl(newPdfUrl); // Solo actualiza si la URL es diferente
            }
        } else {
            alert('Por favor, seleccione una escuela.');
        }
    };

    useEffect(() => {
        if (pdfUrl && iframeRef.current) {
            iframeRef.current.src = pdfUrl; // Actualiza el iframe solo si hay una URL válida
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

                            <button
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mr-2"
                                onClick={handleGenerarReporteEscuela}
                            >
                                Generar Reporte de la Escuela
                            </button>

                            <button
                                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                onClick={handleGenerarReporteAlumnos}
                            >
                                Generar Reporte de Alumnos
                            </button>

                            <div className="mt-6">
                                <iframe
                                    ref={iframeRef}
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