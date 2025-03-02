import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import MapaUser from '@/Components/MapaUser';

export default function Dashboard() {
   
    const { alumno, message } = usePage().props;


    if (message) {
        return (
            <AuthenticatedLayout header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}>
                <Head title="Dashboard" />
                <div className="py-12 text-center">
                    <h2 className="text-2xl font-bold">{message}</h2>
                </div>
            </AuthenticatedLayout>
        );
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">

                            {/* Información del Alumno */}
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold">{alumno.nombre_completo}</h2>
                                <img
                                    src={`/storage/${alumno.foto}`}
                                    alt={alumno.nombre_completo}
                                    className="w-32 h-32 mx-auto rounded-full mt-4"
                                />
                                <div className="mt-4 text-left max-w-md mx-auto">
                                    
                                    <p><strong>Escuela:</strong> {alumno.escuela?.nombre}</p>
                                    <p><strong>Grado:</strong> {alumno.grado?.nombre_grado}</p>
                                    <p><strong>Sección:</strong> {alumno.seccion?.nombre_seccion}</p>
                                    <p><strong>Dirección:</strong> {alumno.escuela?.direccion}</p>
                                </div>
                            </div>

                            {/* Mapa con ubicación de la escuela */}
                            {alumno.escuela?.latitud && alumno.escuela?.longitud && (
                                <MapaUser escuela={alumno.escuela} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
