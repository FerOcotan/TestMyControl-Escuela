import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import MapComponent from '@/Components/MapComponent';  // Importa el nuevo componente

const Create = ({ auth }) => {
    const initialValues = {
        nombre: "",
        direccion: "",
        email: "",   
        foto: null,
        latitud: "",
        longitud: "",
    };

    const { data, errors, setData, post } = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route('escuela.store'));
    }

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Crear escuela
                    </h2>
                    <Link href={route('escuela.index')} className="btn btn-primary">
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
                                    <InputLabel htmlFor="direccion" value="Dirección" />
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
                                    <InputLabel htmlFor="email" value="Email" />
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
                                    <InputLabel htmlFor="foto" value="Foto" />
                                    <TextInput
                                        id="foto"
                                        type="file"
                                        name="foto"
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData('foto', e.target.files[0])}
                                    />
                                    <InputError message={errors.foto} className="mt-2" />
                                </div>

                                {/* Integración del MapComponent */}
                                <div>
                                    <InputLabel htmlFor="latitud" value="Latitud" />
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
                                    <InputLabel htmlFor="longitud" value="Longitud" />
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

                                <div className="mt-4">
                                    <MapComponent 
                                        latitud={data.latitud} 
                                        longitud={data.longitud} 
                                        setData={setData} 
                                    />
                                </div>

                                <div className="flex justify-end mt-4">
                                    <PrimaryButton>
                                        Crear Escuela
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