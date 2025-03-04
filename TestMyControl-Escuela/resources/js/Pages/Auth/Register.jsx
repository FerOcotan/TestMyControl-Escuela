import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("register"), {
            onFinish: () => reset("password", "password_confirmation"),
        });
    };

    return (
        <GuestLayout imageUrl="https://www.mined.gob.sv/wp-content/uploads/2020/10/c0c26ec2b98f11c4e261423b8ec26409.jpg">
            <Head title="Register" />

            <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Registrarse
                </h1>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nombre" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full rounded-lg border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-lg border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Contraseña" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full rounded-lg border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirmar Contraseña"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full rounded-lg border-gray-300 focus:border-yellow-500 focus:ring-yellow-500"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        <Link
                            href={route("login")}
                            className="text-sm text-grey-400 hover:text-yellow-800"
                        >
                            ¿Ya tienes una cuenta?
                        </Link>

                        <PrimaryButton
                            className="px-6 py-3 bg-yellow-400 text-white text-lg font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
                            disabled={processing}
                        >
                            Registrarse
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
