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

                            <div className="mt-10 flex items-center space-x-6">
                        <div className="flex items-center">
                            <img src="https://maps.google.com/mapfiles/ms/icons/orange-dot.png" alt="Alumno" className="w-7 h-6 mr-2" />
                            <span className="text-gray-700">Alumnos</span>
                        </div>
                        <div className="flex items-center">
                            <img src="https://maps.google.com/mapfiles/ms/icons/green-dot.png" alt="Escuela" className="w-7 h-6 mr-2" />
                            <span className="text-gray-700">Escuelas</span>
                        </div>
</div>

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
