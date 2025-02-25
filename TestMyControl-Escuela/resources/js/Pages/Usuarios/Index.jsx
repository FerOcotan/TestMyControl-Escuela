import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

const Index = ({ auth, usuarios }) => {
    console.log(usuarios);

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        usuarios
                    </h2>
                    <Link
                        href={route("usuarios.create")}
                        className="btn btn-primary"
                    >
                        Agregar usuarios
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Codigo User
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Username
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Email
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Permisos
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Acciones
                                                
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usuarios?.map((usuario) => (
                                            <tr
                                                key={usuario.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {usuario.id}
                                                </th>
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {usuario.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {usuario.email}
                                                </td>

                                                <td className="px-6 py-4">
                                                    {usuario.role}
                                                </td>
                                                <td>
                                                    <div className="space-x-2">
                                                        
                                                        <Link
                                                            href={route(
                                                                "usuarios.edit",
                                                                [
                                                                    usuario.id,
                                                                ]
                                                            )}
                                                            
                                                            className="btn btn-primary"
                                                        >
                                                            Editar
                                                        </Link>
                                                        
                                                        <Link
                                                            href={route(
                                                                "usuarios.destroy",
                                                                [
                                                                    usuario.id,
                                                                ]
                                                            )}
                                                            method="delete"
                                                            as="button"
                                                            className="btn btn-danger"
                                                        >
                                                            Eliminar
                                                        </Link>
                                                    </div>
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
