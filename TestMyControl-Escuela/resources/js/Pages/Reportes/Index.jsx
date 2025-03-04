import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import { useState, useEffect, useRef } from "react";
import { Download, ListChecks } from "lucide-react";

export default function ReportesIndex() {
    const { escuelas } = usePage().props;
    const [selectedEscuela, setSelectedEscuela] = useState("");
    const [pdfUrl, setPdfUrl] = useState("");
    const iframeRef = useRef(null);

    const handleGenerarReporteAlumnos = () => {
        if (selectedEscuela) {
            const newPdfUrl = `/reportes/generar-alumnos/${selectedEscuela}`;
            setPdfUrl(newPdfUrl);
        } else {
            alert("Por favor, seleccione una escuela.");
        }
    };

    const handleGenerarReporteTodasEscuelas = () => {
        const newPdfUrl = `/reportes/generar-todas-escuelas`;
        setPdfUrl(newPdfUrl);
    };

    // Actualiza el iframe cuando cambia la URL del PDF
    useEffect(() => {
        if (pdfUrl && iframeRef.current) {
            iframeRef.current.src = pdfUrl;
        }
    }, [pdfUrl]);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Reportes
                </h2>
            }
        >
            <Head title="Reportes" />

            <div className="py-12">
                <div className="max-w-5xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        {/* Botón para generar el reporte de todas las escuelas */}
                        <div className="mb-6">
                            <button
                                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                                onClick={handleGenerarReporteTodasEscuelas}
                            >
                                <Download size={18} />
                                Reporte de Todas las Escuelas
                            </button>
                        </div>

                        {/* Select y botón para generar el reporte de alumnos */}
                        <div className="mb-6 flex gap-4 items-end">
                            <div className="flex-1">
                                <label className="block text-lg font-semibold text-gray-700 mb-2">
                                    Seleccione la escuela:
                                </label>
                                <select
                                    className="block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
                                    value={selectedEscuela}
                                    onChange={(e) =>
                                        setSelectedEscuela(e.target.value)
                                    }
                                >
                                    <option value="">--Seleccione--</option>
                                    {escuelas.map((escuela) => (
                                        <option
                                            key={escuela.id_school}
                                            value={escuela.id_school}
                                        >
                                            {escuela.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <button
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
                                onClick={handleGenerarReporteAlumnos}
                            >
                                <ListChecks size={18} />
                                Generar reporte de Alumnos
                            </button>
                        </div>

                        {/* Iframe para mostrar el PDF */}
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
