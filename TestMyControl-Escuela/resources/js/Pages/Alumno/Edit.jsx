import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";
import MapComponent from "@/Components/MapComponent"; // Importa el nuevo componente

const Edit = ({ alumnos, secciones, escuelas, grados, users }) => {
    const initialValues = {
        nombre_completo: alumnos.nombre_completo,
        direccion: alumnos.direccion,
        telefono: alumnos.telefono,
        email: alumnos.email,
        foto: null,
        genero: alumnos.genero,
        latitud: alumnos.latitud,
        longitud: alumnos.longitud,
        id_school: alumnos.id_school,
        id_grado: alumnos.id_grado,
        id_seccion: alumnos.id_seccion,
        user_id: alumnos.user_id, // O el valor correcto que represente el usuario asignado
    };

    const { data, errors, setData, post, recentlySuccessful } =
        useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route("alumno.update", alumnos));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Actualizar Alumno
                    </h2>
                    <Link
                        href={route("alumno.index")}
                        className="btn btn-primary"
                    >
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        <InputLabel
                                            htmlFor="nombre_completo"
                                            value="Nombre Completo"
                                        />

                                        <TextInput
                                            id="nombre_completo"
                                            type="text"
                                            name="nombre_completo"
                                            value={data.nombre_completo}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "nombre_completo",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.nombre_completo}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="direccion"
                                            value="Dirección"
                                        />

                                        <TextInput
                                            id="direccion"
                                            type="text"
                                            name="direccion"
                                            value={data.direccion}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "direccion",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.direccion}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="telefono"
                                            value="Telefono"
                                        />

                                        <TextInput
                                            id="telefono"
                                            type="text"
                                            name="telefono"
                                            value={data.telefono}
                                            className="mt-1 block w-full"
                                            onChange={(e) => {
                                                if (
                                                    /^\d{0,10}$/.test(
                                                        e.target.value
                                                    )
                                                ) {
                                                    // Solo números y máximo 10 caracteres
                                                    setData(
                                                        "telefono",
                                                        e.target.value
                                                    );
                                                }
                                            }}
                                        />
                                        {data.telefono.length > 10 && (
                                            <span className="text-red-500 text-sm">
                                                El número de teléfono no puede
                                                superar los 10 dígitos.
                                            </span>
                                        )}

                                        <InputError
                                            message={errors.telefono}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="email"
                                            value="email"
                                        />

                                        <TextInput
                                            id="email"
                                            type="text"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />

                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="foto"
                                            value="foto"
                                        />

                                        <TextInput
                                            id="foto"
                                            type="file"
                                            name="foto"
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "foto",
                                                    e.target.files[0]
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.foto}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="genero"
                                            value="role"
                                        />

                                        <select
                                            name="genero"
                                            id="genero"
                                            defaultValue={alumnos.genero}
                                            onChange={(e) => {
                                                setData(
                                                    "genero",
                                                    e.target.value
                                                );
                                            }}
                                            className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500 "
                                        >
                                            <option value="masculino">
                                                masculino
                                            </option>
                                            <option value="femenino">
                                                femenino
                                            </option>
                                        </select>

                                        <InputError
                                            message={errors.genero}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Grado */}
                                    <div>
                                        <InputLabel
                                            htmlFor="id_grado"
                                            value="Grado"
                                        />
                                        <select
                                            id="id_grado"
                                            name="id_grado"
                                            className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            value={data.id_grado}
                                            onChange={(e) =>
                                                setData(
                                                    "id_grado",
                                                    e.target.value
                                                )
                                            } // No convertir a BigInt
                                        >
                                            <option value="">
                                                Seleccione un grado
                                            </option>
                                            {grados.map((grado) => (
                                                <option
                                                    key={grado.id_grado}
                                                    value={grado.id_grado}
                                                >
                                                    {grado.nombre_grado}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.id_grado}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* Sección */}
                                    <div>
                                        <InputLabel
                                            htmlFor="id_seccion"
                                            value="Sección"
                                        />
                                        <select
                                            id="id_seccion"
                                            name="id_seccion"
                                            className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            value={data.id_seccion}
                                            onChange={(e) =>
                                                setData(
                                                    "id_seccion",
                                                    e.target.value
                                                )
                                            } // No convertir a BigInt
                                        >
                                            <option value="">
                                                Seleccione una sección
                                            </option>
                                            {secciones.map((seccion) => (
                                                <option
                                                    key={seccion.id_seccion}
                                                    value={seccion.id_seccion}
                                                >
                                                    {seccion.nombre_seccion}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.id_seccion}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* escuela */}
                                    <div>
                                        <InputLabel
                                            htmlFor="id_school"
                                            value="Sección"
                                        />
                                        <select
                                            id="id_school"
                                            name="id_school"
                                            className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            value={data.id_school}
                                            onChange={(e) =>
                                                setData(
                                                    "id_school",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">
                                                Seleccione una escuela
                                            </option>
                                            {escuelas.map((escuela) => (
                                                <option
                                                    key={escuela.id_school}
                                                    value={escuela.id_school}
                                                >
                                                    {escuela.nombre}
                                                </option>
                                            ))}
                                        </select>
                                        <InputError
                                            message={errors.id_school}
                                            className="mt-2"
                                        />
                                    </div>

                                    {/* email */}
                                    <div>
                                        <InputLabel
                                            htmlFor="user_id"
                                            value="Email"
                                        />
                                        <select
                                            id="user_id"
                                            name="user_id"
                                            className="rounded-md border-gray-300 w-full shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            value={data.user_id || ""} // Asegura que no sea undefined
                                            onChange={(e) => {
                                                console.log(
                                                    "Nuevo valor:",
                                                    e.target.value
                                                ); // Depuración
                                                setData(
                                                    "user_id",
                                                    e.target.value
                                                );
                                            }}
                                        >
                                            <option value="">
                                                Seleccione una cuenta
                                            </option>
                                            {users.map((user) => (
                                                <option
                                                    key={user.id}
                                                    value={String(user.id)}
                                                >
                                                    {user.email}
                                                </option>
                                            ))}
                                        </select>

                                        <InputError
                                            message={errors.user_id}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="latitud"
                                            value="latitud"
                                        />

                                        <TextInput
                                            id="latitud"
                                            type="text"
                                            name="latitud"
                                            value={data.latitud}
                                            className="mt-1 block w-full"
                                            readOnly
                                            onChange={(e) =>
                                                setData(
                                                    "latitud",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.latitud}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="longitud"
                                            value="longitud"
                                        />

                                        <TextInput
                                            id="longitud"
                                            type="text"
                                            name="longitud"
                                            value={data.longitud}
                                            className="mt-1 block w-full"
                                            readOnly
                                            onChange={(e) =>
                                                setData(
                                                    "longitud",
                                                    e.target.value
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.longitud}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                <div className="md:col-span-2 mt-8">
                                    <MapComponent
                                        latitud={data.latitud}
                                        longitud={data.longitud}
                                        setData={setData}
                                    />
                                </div>
                                <div className="flex justify-end mt-4">
                                    <PrimaryButton>Actualizar</PrimaryButton>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Edit;
