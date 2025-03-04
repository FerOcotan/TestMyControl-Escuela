import { Head, Link } from "@inertiajs/react";
import VerticalLogo from "@/Components/Logobrand";

export default function Welcome({ auth }) {
    const expanded = true;

    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center">
                <div className="text-center w-full max-w-4xl px-4">
                    {/* Logo vertical */}
                    <div className="flex justify-center mb-12">
                        <VerticalLogo
                            className={`overflow-hidden transition-all ${
                                expanded ? "w-64" : "w-0"
                            }`}
                        />
                    </div>

                    {/* Título y descripción */}
                    <h1 className="text-7xl font-bold text-gray-800 mb-6">
                        ¡Hola!
                    </h1>
                    <p className="text-2xl text-gray-600 mb-12">
                        Bienvenido Inicia sesión o regístrate para continuar.
                    </p>

                    {/* Botones de Login y Register */}
                    <div className="space-x-6">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="px-8 py-4 bg-blue-600 text-white text-xl font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="px-8 py-4 bg-orange-600 text-white text-xl font-semibold rounded-lg hover:bg-blue-200 transition duration-300"
                                >
                                    Iniciar Sesión
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="px-8 py-4 bg-green-600 text-white text-xl font-semibold rounded-lg hover:bg-yellow-300 transition duration-300"
                                >
                                    Registrarse
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
