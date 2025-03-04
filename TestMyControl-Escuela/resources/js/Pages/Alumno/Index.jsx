import React from "react";
import { Pencil, PencilRuler, Trash2, PlusCircle } from "lucide-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, alumnos }) => {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Alumnos
                    </h2>
                    <Link
                        href={route("alumno.create")}
                        className="px-4 py-2 bg-orange-600 text-white rounded-md shadow-md hover:bg-orange-700 transition flex items-center space-x-2"
                    >
                        <PlusCircle size={18} />
                        <span>Agregar Alumno</span>
                    </Link>
                </div>
            }
        >
            <Head title="Alumnos" />

            <div className="w-full">
                <div className="overflow-x-auto">
                    <table className="w-full table-fixed text-sm text-left text-gray-600">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                            <tr>
                                <th className="px-3 py-2 w-32">Nombre</th>
                                <th className="px-3 py-2 w-32">Dirección</th>
                                <th className="px-3 py-2 w-28">Teléfono</th>
                                <th className="px-3 py-2 w-40">Email</th>
                                <th className="px-3 py-2 w-24">Foto</th>
                                <th className="px-3 py-2 w-24">Género</th>

                                <th className="px-3 py-2 w-24">Grado</th>
                                <th className="px-3 py-2 w-24">Sección</th>
                                <th className="px-3 py-2 w-24">Escuela</th>
                                <th className="px-3 py-2 w-32">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {alumnos?.map((alumno) => (
                                <tr
                                    key={alumno.id_alumno}
                                    className="hover:bg-gray-100 transition"
                                >
                                    <td className="px-3 py-2 max-w-[120px]  ">
                                        {alumno.nombre_completo}
                                    </td>
                                    <td className="px-3 py-2 max-w-[120px]  ">
                                        {alumno.direccion}
                                    </td>
                                    <td className="px-3 py-2 max-w-[100px]  ">
                                        {alumno.telefono}
                                    </td>
                                    <td className="px-3 py-2 max-w-[150px]  ">
                                        {alumno.email}
                                    </td>
                                    <td className="px-3 py-2">
                                        <img
                                            src={`/storage/${alumno.foto}`}
                                            className="w-12 h-12 rounded-full object-cover"
                                        />
                                    </td>
                                    <td className="px-3 py-2">
                                        {alumno.genero}
                                    </td>

                                    <td className="px-3 py-2">
                                        {alumno.grado
                                            ? alumno.grado.nombre_grado
                                            : "Sin grado"}
                                    </td>
                                    <td className="px-3 py-2">
                                        {alumno.seccion
                                            ? alumno.seccion.nombre_seccion
                                            : "Sin sección"}
                                    </td>
                                    <td className="px-3 py-2">
                                        {alumno.escuela
                                            ? alumno.escuela.nombre
                                            : "Sin escuela"}
                                    </td>
                                    <td className="px-3 py-2 flex space-x-2">
                                        <Link
                                            href={route("alumno.edit", [
                                                alumno.id_alumno,
                                            ])}
                                            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition flex items-center space-x-1"
                                        >
                                            <PencilRuler size={16} />
                                        </Link>
                                        <Link
                                            href={route("alumno.destroy", [
                                                alumno.id_alumno,
                                            ])}
                                            method="delete"
                                            as="button"
                                            className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition flex items-center space-x-1"
                                            onClick={(e) => {
                                                if (
                                                    !confirm(
                                                        `¿Estás seguro de que deseas eliminar a ${alumno.nombre_completo}?`
                                                    )
                                                ) {
                                                    e.preventDefault(); // Cancela la eliminación
                                                }
                                            }}
                                        >
                                            <Trash2 size={16} />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Index;
