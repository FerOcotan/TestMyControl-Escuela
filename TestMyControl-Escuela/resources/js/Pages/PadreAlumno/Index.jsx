import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';



const Index = ({auth,padreAlumno,padres,alumnos}) => {


  return (
    <AuthenticatedLayout
    header={

        <div className="flex justify-between">

        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Parentesco
        </h2>
        <Link href={route('PadreAlumno.create')} className="btn btn-primary">
        Agregar Parentesco
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
                                    <th scope="col" className="px-6 py-3">
                                    Parentesco
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Responsable
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Hijo
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Acciones
                                    </th>
                                  
                                </tr>
                            </thead>
                            <tbody>
                            {padreAlumno?.map(padre => (
                                <tr key={padre.id_padre_almno} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {padre.parentesco}
                                    </th>
                                    <td className="px-6 py-4">
                                        {padre.padres.nombre} {/* Aquí se muestra el nombre del padre */}
                                    </td>
                                    <td className="px-6 py-4">
                                        {padre.alumnos.nombre_completo} {/* Aquí se muestra el nombre del alumno */}
                                    </td>
                                        <td className="space-x-2 flex px-6 py-4">
                                            <Link href={route('PadreAlumno.edit', [padre.id_padre_alumno])} className="btn btn-primary">
                                                Editar
                                            </Link>
                                            <Link href={route('PadreAlumno.destroy', [padre.id_padre_alumno])} method="delete" as="button" className="btn btn-danger">
                                                Eliminar
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
  )
}


export default Index