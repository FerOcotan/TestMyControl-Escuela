import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import { Download, ListChecks, PlusCircle } from 'lucide-react';

export default function ReportesIndex() {
    const { escuelas } = usePage().props;
    const [selectedEscuela, setSelectedEscuela] = useState('');
    const [pdfUrl, setPdfUrl] = useState('');
    const iframeRef = useRef(null);

    const handleGenerarReporteEscuela = () => {
        if (selectedEscuela) {
            const newPdfUrl = `/reportes/generar-escuela/${selectedEscuela}`;
            if (pdfUrl !== newPdfUrl) {
                setPdfUrl(newPdfUrl);
            }
        } else {
            alert('Por favor, seleccione una escuela.');
        }
    };

    const handleGenerarReporteAlumnos = () => {
        if (selectedEscuela) {
            const newPdfUrl = `/reportes/generar-alumnos/${selectedEscuela}`;
            if (pdfUrl !== newPdfUrl) {
                setPdfUrl(newPdfUrl);
            }
        } else {
            alert('Por favor, seleccione una escuela.');
        }
    };

    useEffect(() => {
        if (pdfUrl && iframeRef.current) {
            iframeRef.current.src = pdfUrl;
        }
    }, [pdfUrl]);

    return (
        <AuthenticatedLayout
            header={
                <h2  className="text-xl font-semibold leading-tight text-gray-800">Reportes </h2>
            }
        >
            <Head title="Reportes" />

            <div className="py-12">
                <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="mb-6">
                            <label className="block text-lg font-semibold text-gray-700 mb-2">
                                Seleccione la escuela:
                            </label>
                            <select
                                className="block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                                value={selectedEscuela}
                                onChange={(e) => setSelectedEscuela(e.target.value)}
                            >
                                <option value="">--Seleccione--</option>
                                {escuelas.map((escuela) => (
                                    <option key={escuela.id_school} value={escuela.id_school}>
                                        {escuela.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex gap-4">
                            <button
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                                onClick={handleGenerarReporteEscuela}
                            >
                                <Download size={18} />
                                Reporte de la Escuela
                            </button>

                            <button
                                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                                onClick={handleGenerarReporteAlumnos}
                            >
                                <ListChecks size={18} />
                                Reporte de Alumnos
                            </button>
                        </div>

                        <div className="mt-8 border border-gray-300 rounded-lg overflow-hidden">
                            <iframe
                                ref={iframeRef}
                                src={pdfUrl}
                                width="100%"
                                height="600px"
                                className="rounded-md"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
