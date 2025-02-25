import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';



const Edit = ({alumnos,padres,padreAlumno}) => {

    const initialValues = {
        parentesco: padreAlumno.parentesco,
        id_padre: padreAlumno.id_padre,  
        id_alumno: padreAlumno.id_alumno,  

    };
    
    
    const {data,errors,setData,post,recentlySuccessful} = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route('PadreAlumno.update',padreAlumno.id_padre_alumno));
    }
    
  return (
    <AuthenticatedLayout
    header={

        <div className="flex justify-between">

        <h2 className="text-xl font-semibold leading-tight text-gray-800">
        Actualizar Alumno
        </h2>
        <Link href={route('PadreAlumno.index')} className="btn btn-primary">
        Alumnos
        </Link>
        </div>
    }
>
    <Head title="Dashboard" />

    <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900">
                 <form onSubmit={submit}>

                     <Transition
                                            show={recentlySuccessful}
                                            enter="transition ease-in-out"
                                            enterFrom="opacity-0"
                                            leave="transition ease-in-out"
                                            leaveTo="opacity-0"
                                        >
                                            <p className="text-sm text-gray-600 text-center">
                                                Alumno Actualizado.
                                            </p>
                   </Transition>


                        <div>
                    <InputLabel htmlFor="parentesco" value="parentesco" />

                    <TextInput
                        id="parentesco"
                        type="text"
                        name="parentesco"
                        value={data.parentesco}
                        className="mt-1 block w-full"
            
                        onChange={(e) => setData('parentesco', e.target.value)}
                    />

                    <InputError message={errors.parentesco} className="mt-2" />
                </div>

               
               

                    

                {/* Padre */}
                <div>
                    <InputLabel htmlFor="id_padre" value="Padre" />
                    <select
                        id="id_padre"
                        name="id_padre"
                        className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        value={data.id_padre}
                        onChange={(e) => setData("id_padre", e.target.value)}
                    >
                        <option value="">Seleccione un padre</option>
                        {padres.map((padre) => (
                            <option key={padre.id_padre} value={padre.id_padre}>
                                {padre.nombre}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.id_padre} className="mt-2" />
                </div>

                {/* Alumno */}
<div>
    <InputLabel htmlFor="id_alumno" value="Alumno" />
    <select
        id="id_alumno"
        name="id_alumno"
        className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        value={data.id_alumno}
        onChange={(e) => setData("id_alumno", e.target.value)}
    >
        <option value="">Seleccione un alumno</option>
        {alumnos.map((alumno) => (
            <option key={alumno.id_alumno} value={alumno.id_alumno}>
                {alumno.nombre_completo}
            </option>
        ))}
    </select>
    <InputError message={errors.id_alumno} className="mt-2" />
</div>


                            

                    <div className='flex justify-end mt-4'>
                    <PrimaryButton >
                        Actualizar 
                    </PrimaryButton>

                    </div>
                    

                 </form>
                </div>
            </div>
        </div>
    </div>
</AuthenticatedLayout>
  )
}


export default Edit