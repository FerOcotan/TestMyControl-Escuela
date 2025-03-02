import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';
import MapaPuntos from '@/Components/MapaPuntos';

export default function Dashboard() {
    // Obtén los datos de alumnos y escuelas desde las props de Inertia
    const { alumnos, escuelas } = usePage().props;

    console.log('Alumnos:', alumnos); // Verifica que los datos de alumnos lleguen
    console.log('Escuelas:', escuelas); // Verifica que los datos de escuelas lleguen

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
                          

                            {/* Muestra el mapa con los puntos */}
                            <MapaPuntos alumnos={alumnos} escuelas={escuelas} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}