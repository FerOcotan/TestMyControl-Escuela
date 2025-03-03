import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

import AplicationBrand from '@/Components/ApplicationBrand';

export default function GuestLayout({ children }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            {/* Contenedor principal con dos columnas */}
            <div className="flex w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Columna del formulario */}
                <div className="w-full max-w-md px-6 py-8">
                    <div className="flex justify-center mb-4">
                        <Link href="/">
                            <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                        </Link>
                        
                    </div>
                    <div className="w-full bg-white shadow-md sm:rounded-lg">
                        {children}
                    </div>

                     
                </div>

                {/* Columna de la imagen */}
                <div className="w-full max-w-md">
                    <img
                        src="https://www.mined.gob.sv/joomgallery/originals/mas_de_400_estudiantes_ce_jose_antonio_rodriguez_port_reciben_el_primer_uniforme_escolar_2132/mas_de_400_estudiantes_ce_jose_antonio_rodriguez_port_reciben_el_primer_uniforme_escolar_1_20200213_1138437033.jpg"
                        alt="Imagen de fondo"
                        className="w-full h-full object-cover rounded-r-lg"
                    />
                </div>
            </div>
        </div>
    );
}
