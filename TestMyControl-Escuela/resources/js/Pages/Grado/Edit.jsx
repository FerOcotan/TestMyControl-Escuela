import React, { use } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Transition } from "@headlessui/react";

const Edit = ({ auth, grado }) => {
    const initialValues = {
        nombre_grado: grado.nombre_grado,
    };

    const { data, errors, setData, post, recentlySuccessful } =
        useForm(initialValues);

    const submit = (e) => {
        e.preventDefault();
        post(route("grado.update", grado));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Actualizar grado
                    </h2>
                    <Link
                        href={route("grado.index")}
                        className="btn btn-primary"
                    >
                        Grados
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
                                        Actualizado.
                                    </p>
                                </Transition>

                                <div>
                                    <InputLabel
                                        htmlFor="nombre_grado"
                                        value="Nombre Grado"
                                    />

                                    <TextInput
                                        id="nombre_grado"
                                        type="text"
                                        name="nombre_grado"
                                        value={data.nombre_grado}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "nombre_grado",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.nombre_grado}
                                        className="mt-2"
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
