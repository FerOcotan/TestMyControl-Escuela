import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

import AplicationBrand from "@/Components/ApplicationBrand";

export default function GuestLayout({ children, imageUrl }) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
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

                {/* Columna de la imagen con imagen dinámica, login y register */}
                <div className="w-full max-w-md">
                    <img
                        src={imageUrl}
                        alt="Imagen de fondo"
                        className="w-full h-full object-cover rounded-r-lg"
                    />
                </div>
            </div>
        </div>
    );
}
