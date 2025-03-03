import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Pencil, Trash2, PlusCircle } from "lucide-react"; // Importar iconos

const Index = ({ auth, padres }) => {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Padres
                    </h2>
                    <Link
                        href={route("padres.create")}
                        className="px-4 py-2 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700 transition flex items-center space-x-2"
                    >
                        <PlusCircle size={18} />
                        <span>Añadir Padre</span>
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
                                            <th className="px-4 py-3 w-1/4">
                                                Nombre
                                            </th>
                                            <th className="px-4 py-3 w-1/4">
                                                Dirección
                                            </th>
                                            <th className="px-4 py-3 w-1/4">
                                                Teléfono
                                            </th>
                                            <th className="px-4 py-3 w-1/4 text-center">
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {padres?.map((padre) => (
                                            <tr
                                                key={padre.id_padre}
                                                className="hover:bg-gray-50 transition"
                                            >
                                                <td className="px-4 py-3 truncate">
                                                    {padre.nombre}
                                                </td>
                                                <td className="px-4 py-3 truncate">
                                                    {padre.direccion}
                                                </td>
                                                <td className="px-4 py-3">
                                                    {padre.telefono}
                                                </td>
                                                <td className="px-4 py-3 flex justify-center space-x-3">
                                                    <Link
                                                        href={route(
                                                            "padres.edit",
                                                            [padre.id_padre]
                                                        )}
                                                        className="px-3 py-1 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition flex items-center space-x-1"
                                                    >
                                                        <Pencil size={16} />
                                                        <span>Editar</span>
                                                    </Link>
                                                    <Link
                                                        href={route(
                                                            "padres.destroy",
                                                            [padre.id_padre]
                                                        )}
                                                        method="delete"
                                                        as="button"
                                                        className="px-3 py-1 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition flex items-center space-x-1"
                                                        onClick={(e) => {
                                                            if (
                                                                !window.confirm(
                                                                         `¿Estás seguro de que deseas eliminar este encargado ${padre.nombre}?`
                                                                )
                                                            ) {
                                                                e.preventDefault(); // Cancela la eliminación si el usuario no confirma
                                                            }
                                                        }}
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
