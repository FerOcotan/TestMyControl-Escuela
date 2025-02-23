import React, { use } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

const Create = ({auth}) => {

    const initialValues = {
        nombre_seccion: "",
       
    };
    
    
    const {data,errors,setData,post} = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route('seccion.store'));
    }
    
  return (
    <AuthenticatedLayout
    header={

        <div className="flex justify-between">

        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Añadir Seccion
        </h2>
        <Link href={route('seccion.index')} className="btn btn-primary">
        secciones
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
                    <InputLabel htmlFor="nombre_seccion" value="nombre_seccion" />

                    <TextInput
                        id="nombre_seccion"
                        type="text"
                        name="nombre_seccion"
                        value={data.nombre_seccion}
                        className="mt-1 block w-full"
            
                        onChange={(e) => setData('nombre_seccion', e.target.value)}
                    />

                    <InputError message={errors.nombre} className="mt-2" />
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