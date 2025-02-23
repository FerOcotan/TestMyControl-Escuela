import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';



const Index = ({auth,grado}) => {
    console.log(grado);

  return (
    <AuthenticatedLayout
    header={

        <div className="flex justify-between">

        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Grados
        </h2>
        <Link href={route('grado.create')} className="btn btn-primary">
        Agregar Grado
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
                                    Codigo grado
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                    Grado
                                    </th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                 {   
                                    grado?.map(grados => (
                                        <tr key={grados} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">

                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                          
                                            {grados.id_grado}
                                        </th>
                                        <td className="px-6 py-4">
                                            {grados.nombre_grado}
                                        </td>
                                      

                                        <td>
                                                
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