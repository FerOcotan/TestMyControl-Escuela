import React, { use } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

const Create = ({auth}) => {

    const initialValues = {
        nombre: "",
        direccion: "",
        telefono: "",   
    };
    
    
    const {data,errors,setData,post} = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route('padres.store'));
    }
    
  return (
    <AuthenticatedLayout
    header={

        <div className="flex justify-between">

        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Añadir Padres
        </h2>
        <Link href={route('padres.index')} className="btn btn-primary">
        Padres
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


                        <div>
                    <InputLabel htmlFor="nombre" value="Nombre" />

                    <TextInput
                        id="nombre"
                        type="text"
                        name="nombre"
                        value={data.nombre}
                        className="mt-1 block w-full"
            
                        onChange={(e) => setData('nombre', e.target.value)}
                    />

                    <InputError message={errors.nombre} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="direccion" value="direccion" />

                    <TextInput
                        id="direccion"
                        type="text"
                        name="direccion"
                        value={data.direccion}
                        className="mt-1 block w-full"
            
                        onChange={(e) => setData('direccion', e.target.value)}
                    />

                    <InputError message={errors.direccion} className="mt-2" />
                </div>

                
                <div>
                   <InputLabel htmlFor="telefono" value="telefono" />
               
                                   <TextInput
                                       id="telefono"
                                       type="text"
                                       name="telefono"
                                       value={data.telefono}
                                       className="mt-1 block w-full"
                           
                                       onChange={(e) => setData('telefono', e.target.value)}
                                   />
               
                                   <InputError message={errors.telefono} className="mt-2" />
                               </div>

               
                    <div className='flex justify-end mt-4'>
                    <PrimaryButton >
                        Añadir
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


export default Create