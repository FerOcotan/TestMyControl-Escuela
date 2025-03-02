import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import MapComponent from '@/Components/MapComponent';  // Importa el nuevo componente

const Create = ({ grados, secciones, escuelas, users }) => {

    
    const initialValues = {
        nombre_completo: "",
        direccion: "",
        telefono: "",
        email: "",   
        foto: null,
        genero: "",
        latitud: "",
        longitud: "",
        id_school: "", // Nuevo campo
        id_grado: "",  // Nuevo campo
        id_seccion: "" ,// Nuevo campo
        user_id:""
    };

    const { data, errors, setData, post } = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        console.log(data)
        post(route('alumno.store'))
        
        console.Console.log(data)
        
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Añadir Alumno
                    </h2>
                    <Link href={route('alumno.index')} className="btn btn-primary">
                        Escuelas
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
                                    <InputLabel htmlFor="nombre_completo" value="Nombre completo" />
                                    <TextInput
                                        id="nombre_completo"
                                        type="text"
                                        name="nombre_completo"
                                        value={data.nombre_completo}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('nombre_completo', e.target.value)}
                                    />
                                    <InputError message={errors.nombre_completo} className="mt-2" />
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

                <div>
                    <InputLabel htmlFor="foto" value="foto" />

                    <TextInput
                        id="foto"
                        type="file"
                        name="foto"
                        className="mt-1 block w-full"
            
                        onChange={(e) => setData('foto', e.target.files[0])}
                    />

                    <InputError message={errors.foto} className="mt-2" />
                </div>  
                
                <div>
                    <InputLabel htmlFor="genero" value="genero" />

                    <select 
                    name="genero" 
                    id="genero"
                    onChange={(e) => {setData('genero', e.target.value);
                        
                    }}

                     className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                    >

                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>

            

                    </select>

                    <InputError message={errors.genero} className="mt-2" />
                </div>  

                <div>
                    <InputLabel htmlFor="latitud" value="latitud" />

                    <TextInput
                        id="latitud"
                        type="text"
                        name="latitud"
                        value={data.latitud}
                        className="mt-1 block w-full"
            
                        onChange={(e) => setData('latitud', e.target.value)}
                    />

                    <InputError message={errors.latitud} className="mt-2" />
                </div>  

                <div>
                    <InputLabel htmlFor="longitud" value="longitud" />

                    <TextInput
                        id="longitud"
                        type="text"
                        name="longitud"
                        value={data.longitud}
                        className="mt-1 block w-full"
            
                        onChange={(e) => setData('longitud', e.target.value)}
                    />

                    <InputError message={errors.longitud} className="mt-2" />
                </div>  

                               {/* Grado */}
                            <div>
                                <InputLabel htmlFor="id_grado" value="Grado" />
                                <select
                                    id="id_grado"
                                    name="id_grado"
                                    className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.id_grado}
                                    onChange={(e) => setData("id_grado", e.target.value)} // No convertir a BigInt
                                >
                                    <option value="">Seleccione un grado</option>
                                    {grados.map((grado) => (
                                        <option key={grado.id_grado} value={grado.id_grado}>
                                            {grado.nombre_grado}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.id_grado} className="mt-2" />
                            </div>

                            {/* Sección */}
                            <div>
                                <InputLabel htmlFor="id_seccion" value="Sección" />
                                <select
                                    id="id_seccion"
                                    name="id_seccion"
                                    className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    value={data.id_seccion}
                                    onChange={(e) => setData("id_seccion", e.target.value)} // No convertir a BigInt
                                >
                                    <option value="">Seleccione una sección</option>
                                    {secciones.map((seccion) => (
                                        <option key={seccion.id_seccion} value={seccion.id_seccion}>
                                            {seccion.nombre_seccion}
                                        </option>
                                    ))}
                                </select>
                                <InputError message={errors.id_seccion} className="mt-2" />
                            </div>

                                  {/* escuela */}
                                  <div>
                                    <InputLabel htmlFor="id_school" value="Sección" />
                                    <select
                                        id="id_school"
                                        name="id_school"
                                        className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        value={data.id_school}
                                        onChange={(e) => setData('id_school', e.target.value)}
                                    >
                                        <option value="">Seleccione una escuela</option>
                                        {escuelas.map((escuela) => (
                                            <option key={escuela.id_school} value={escuela.id_school}>
                                                {escuela.nombre}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.id_school} className="mt-2" />
                                </div>

                                  {/* usuario */}
                                  <div>
                                    <InputLabel htmlFor="user_id" value="Usuario" />
                                    <select
                                        id="user_id"
                                        name="user_id"
                                        className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        value={data.user_id}
                                        onChange={(e) => setData('user_id', e.target.value)}
                                    >
                                        <option value="">Seleccione un usuario</option>
                                        {users.map((user) => (
                                            <option key={user.id} value={user.id}>
                                                {user.email}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.user_id} className="mt-2" />
                                </div>

                                <MapComponent 
                                        latitud={data.latitud} 
                                        longitud={data.longitud} 
                                        setData={setData} 
                                    />
                                

                                <div className="flex justify-end mt-4">
                                    <PrimaryButton>
                                        Añadir Alumno
                                    </PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}


export default Create;
