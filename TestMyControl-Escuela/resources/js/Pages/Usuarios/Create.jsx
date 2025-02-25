import React, { use } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

const Create = ({auth}) => {

    const initialValues = {
        name: "",
        email: "",
        password: "",
        //password_confirmation: "",
        role: "",

       
    };
    
    
    const {data,errors,setData,post} = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route('usuarios.store'));
    }
    
  return (
    <AuthenticatedLayout
    header={

        <div className="flex justify-between">

        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Añadir usuario
        </h2>
        <Link href={route('usuarios.index')} className="btn btn-primary">
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
                    <InputLabel htmlFor="name" value="name" />

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
            
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="email" value="email" />

                    <TextInput
                        id="email"
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
            
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                
                  <div className="mt-4">
                                    <InputLabel htmlFor="password" value="Password" />
                
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        className="mt-1 block w-full"
                                        autoComplete="new-password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        required
                                    />
                
                                    <InputError message={errors.password} className="mt-2" />
                 </div>
               

                  <div>
                                    <InputLabel htmlFor="role" value="role" />
                
                                    <select 
                                    name="role" 
                                    id="role"
                                    onChange={(e) => {setData('role', e.target.value);
                                        
                                    }}
                
                                     className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                    >
                
                                    <option value="administrador">administrador</option>
                                    <option value="usuario">usuario</option>
                
                            
                
                                    </select>
                
                                    <InputError message={errors.role} className="mt-2" />
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