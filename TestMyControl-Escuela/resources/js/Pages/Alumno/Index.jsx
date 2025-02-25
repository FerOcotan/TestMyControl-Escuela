import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';



const Index = ({auth,alumnos}) => {
    

  return (
    <AuthenticatedLayout
    header={

        <div className="flex justify-between">

        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Alumnos
        </h2>
        <Link href={route('alumno.create')} className="btn btn-primary">
        Crear Alumno
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
                                    Nombre Alumno
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    direccion
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    telfono
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    foto
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Genero
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    latitud
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    longitud
                                    </th> <th scope="col" className="px-6 py-3">
                                    Grado
                                    </th> <th scope="col" className="px-6 py-3">
                                    Seccion
                                    </th> <th scope="col" className="px-6 py-3">
                                    Escuela
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                 {   
                                    alumnos?.map(alumno => (
                                        <tr key={alumno} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                          
                                            {alumno.nombre_completo}
                                        </th>
                                        <td className="px-6 py-4">
                                            {alumno.direccion}
                                        </td>
                                        <td className="px-6 py-4">
                                            {alumno.telefono}
                                        </td>
                                        <td className="px-6 py-4">
                                            {alumno.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {alumno.genero}
                                        </td>
                                        <td className="px-6 py-4">
                                            <img src={`/storage/${alumno.foto}`} alt="" className="w-20 h-20 rounded-full" />
                                        </td>
                                        <td className="px-6 py-4">
                                            {alumno.latitud}
                                        </td>
                                        <td className="px-6 py-4">
                                            {alumno.longitud}
                                        </td>
                                        <td className="px-6 py-4">
                                            {alumno.id_grado}
                                        </td>
                                        <td className="px-6 py-4">
                                            {alumno.id_seccion}
                                        </td>
                                        <td className="px-6 py-4">
                                            {alumno.id_school}
                                        </td>

                                        <td>
                                          <div className="space-x-2">
                                         <Link href={route('alumno.edit',[alumno.id_alumno])} className="btn btn-primary">
                                          Editar
                                        </Link>
                                        <Link href={route('alumno.destroy',[alumno.id_alumno])} method="delete" as="button" className="btn btn-danger"> 
                                             Eliminar
                                        
                                     </Link>
                                         
                                                    
                                            </div>
                                        </td>
                                    </tr>
                                    ))
                                }
                                
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