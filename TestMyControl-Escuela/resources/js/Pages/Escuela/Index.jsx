import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { Pencil, PencilRuler, Trash2,PlusCircle } from "lucide-react"; // Importar iconos

const Index = ({ auth, escuelas }) => {
    console.log(escuelas);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Escuelas
                    </h2>
                    <Link
                        href={route("escuela.create")}
                        className="px-4 py-2 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700 transition flex items-center space-x-2"
                                            >
                                                <PlusCircle size={18} />
                                                <span>Agregar Escuela</span>
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="w-full overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nombre Escuela
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dirección
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Foto
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Latitud
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Longitud
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {escuelas?.map((escuela) => (
                            <tr
                                key={escuela.id_school}
                                className="hover:bg-gray-100 transition"
                            >
                                <td className="px-6 py-4 max-w-[150px] truncate">
                                    {escuela.nombre}
                                </td>
                                <td className="px-6 py-4 max-w-[150px] truncate">
                                    {escuela.direccion}
                                </td>
                                <td className="px-6 py-4 max-w-[150px] truncate">
                                    {escuela.email}
                                </td>
                                <td className="px-6 py-4">
                                    <img
                                        src={`/storage/${escuela.foto}`}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                </td>
                                <td className="px-6 py-4">{escuela.latitud}</td>
                                <td className="px-6 py-4">
                                    {escuela.longitud}
                                </td>
                                <td className="px-6 py-4 flex space-x-2">
                                    <Link
                                        href={route("escuela.edit", [
                                            escuela.id_school,
                                        ])}
                                        className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                                    >
                                         <PencilRuler size={16} />
                                     
                                    </Link>
                                    <Link
                                        href={route("escuela.destroy", [
                                            escuela.id_school,
                                        ])}
                                        method="delete"
                                        as="button"
                                        className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                                    >
                                        <Trash2 size={16} />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
