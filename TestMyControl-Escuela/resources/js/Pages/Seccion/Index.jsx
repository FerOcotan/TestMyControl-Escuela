import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Pencil, Trash2, PlusCircle } from "lucide-react"; // Importar iconos

const Index = ({ auth, seccion }) => {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Secciones
                    </h2>
                    <Link
                        href={route("seccion.create")}
                        className="px-4 py-2 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700 transition flex items-center space-x-2"
                    >
                        <PlusCircle size={18} />
                        <span>Agregar Sección</span>
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-md rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                <table className="w-full table-fixed text-sm text-gray-700">
                                    <thead className="bg-gray-100 text-gray-700 uppercase">
                                        <tr>
                                            <th className="px-4 py-3 w-1/3">
                                                Código Sección
                                            </th>
                                            <th className="px-4 py-3 w-1/3">
                                                Sección
                                            </th>
                                            <th className="px-4 py-3 w-1/3 text-center">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {seccion?.map((secciones) => (
                                            <tr
                                                key={secciones.id_seccion}
                                                className="hover:bg-gray-50 transition"
                                            >
                                                <td className="px-4 py-3">
                                                    {secciones.id_seccion}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {secciones.nombre_seccion}
                                                </td>
                                                <td className="px-4 py-3 flex justify-center space-x-3">
                                                    <Link
                                                        href={route(
                                                            "seccion.edit",
                                                            [
                                                                secciones.id_seccion,
                                                            ]
                                                        )}
                                                        className="px-3 py-1 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition flex items-center space-x-1"
                                                    >
                                                        <Pencil size={16} />
                                                        <span>Editar</span>
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "seccion.destroy",
                                                            [
                                                                secciones.id_seccion,
                                                            ]
                                                        )}
                                                        method="delete"
                                                        as="button"
                                                        className="px-3 py-1 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition flex items-center space-x-1"
                                                    >
                                                        <Trash2 size={16} />
                                                        <span>Eliminar</span>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
