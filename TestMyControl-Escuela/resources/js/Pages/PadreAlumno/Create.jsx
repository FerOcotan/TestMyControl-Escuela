import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';

const Create = ({ auth, alumnos, padres }) => {
    const initialValues = {
        id_alumno: "",
        id_padre: "",   
        parentesco: "",
    };
    
    const { data, errors, setData, post } = useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route('PadreAlumno.store'));
    };
    
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">Agregar Parentesco</h2>
                    <Link href={route('PadreAlumno.index')} className="btn btn-primary">
                        Parentesco
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

                                {/* ComboBox de Alumnos */}
                                <div>
                                    <InputLabel htmlFor="id_alumno" value="Selecciona un Alumno" />
                                    <select
    id="id_alumno"
    name="id_alumno"
    className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
    value={data.id_alumno}
    onChange={(e) => setData('id_alumno', parseInt(e.target.value, 10) || '')}
>
    <option value="">Selecciona un Alumno</option>
    {alumnos.map((alumno) => (
        <option key={alumno.id_alumno} value={alumno.id_alumno}>
            {alumno.nombre_completo}
        </option>
    ))}
</select>
<InputError message={errors.id_alumno} className="mt-2" />

                                    <InputError message={errors.id_alumno} className="mt-2" />
                                </div>

                                {/* ComboBox de Padres */}
                                <div className="mt-4">
                                    <InputLabel htmlFor="id_padre" value="Selecciona un Padre" />
                                    <select
                                        id="id_padre"
                                        name="id_padre"
                                        value={data.id_padre}
                                        onChange={(e) => setData('id_padre', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    >
                                        <option value="">-- Selecciona --</option>
                                        {padres.map((padre) => (
                                            <option key={padre.id_padre} value={padre.id_padre}>
                                                {padre.nombre}
                                            </option>
                                        ))}
                                    </select>
                                    <InputError message={errors.id_padre} className="mt-2" />
                                </div>

                                {/* Campo de Parentesco */}
                                <div className="mt-4">
                                    <InputLabel htmlFor="parentesco" value="Parentesco" />
                                    <input
                                        id="parentesco"
                                        type="text"
                                        name="parentesco"
                                        value={data.parentesco}
                                        onChange={(e) => setData('parentesco', e.target.value)}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                                    />
                                    <InputError message={errors.parentesco} className="mt-2" />
                                </div>

                                {/* Botón de enviar */}
                                <div className='flex justify-end mt-4'>
                                    <PrimaryButton>
                                        Añadir
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
