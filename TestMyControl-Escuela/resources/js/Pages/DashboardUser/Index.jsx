import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import MapaUser from "@/Components/MapaUser";

export default function Dashboard() {
    const { alumno, message } = usePage().props;

    if (message) {
        return (
            <AuthenticatedLayout
                header={<h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>}
            >
                <Head title="Dashboard" />
                <div className="py-12 flex justify-center">
                    <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-bold text-red-600">{message}</h2>
                    </div>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12 flex justify-center">
                <div className="w-full max-w-4xl px-6 py-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl text-gray-600 text-center mb-8">
                       Informacion de la escuela.
                    </h2>

                    {/* Información de la escuela */}
                    <div className="flex items-center bg-white-100 p-6 rounded-lg shadow-md mb-8">
                        <div className="flex-1">
                            <p className="text-lg text-gray-700">
                                <strong className="text-gray-900">Escuela asignada:</strong> {alumno.escuela?.nombre}
                            </p>
                            <p className="text-lg text-gray-700 mt-2">
                                <strong className="text-gray-900">Dirección:</strong> {alumno.escuela?.direccion}
                            </p>
                        </div>
                        <img
                            src={`/storage/${alumno.escuela?.foto}`}
                            alt="Escuela"
                            className="w-40 h-40 object-cover rounded-lg border-1 border-gray-300 shadow-lg ml-6"
                        />
                    </div>

                    {/* Mapa de la escuela */}
                    {alumno.escuela?.latitud && alumno.escuela?.longitud && (
                        <div className="w-full h-60 rounded-lg overflow-hidden shadow-md mb-8">
                            <MapaUser escuela={alumno.escuela} />
                        </div>
                    )}

                    {/* Información del estudiante */}
                    {/* Información del estudiante */}

                    <h2 className="text-2xl text-gray-600 text-center mb-8">
                       Informacion del estudiante.
                    </h2>
<div className="flex items-center bg-white-100 p-6 rounded-lg shadow-md">
    <div className="flex-1">
        <p className="text-lg text-gray-700">
            <strong className="text-gray-900">Nombre Completo:</strong> {alumno.nombre_completo}
        </p>
        <p className="text-lg text-gray-700 mt-2">
            <strong className="text-gray-900">Grado:</strong> {alumno.grado?.nombre_grado}
        </p>
        <p className="text-lg text-gray-700 mt-2">
            <strong className="text-gray-900">Sección:</strong> {alumno.seccion?.nombre_seccion}
        </p>
    </div>
    <img
        src={`/storage/${alumno.foto}`}
        alt={alumno.nombre_completo}
        className="w-40 h-40 object-cover rounded-lg border-1 border-gray-300 shadow-lg ml-6"
    />
</div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
