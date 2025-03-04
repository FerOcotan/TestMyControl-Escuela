import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout imageUrl="https://www.mined.gob.sv/joomgallery/originals/mas_de_400_estudiantes_ce_jose_antonio_rodriguez_port_reciben_el_primer_uniforme_escolar_2132/mas_de_400_estudiantes_ce_jose_antonio_rodriguez_port_reciben_el_primer_uniforme_escolar_1_20200213_1138437033.jpg">
            <Head title="Log in" />

            <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg">
                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Iniciar Sesión
                </h1>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
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
                            className="mt-1 block w-full rounded-lg border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 block">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ml-2 text-sm text-gray-600">
                                Recordarme
                            </span>
                        </label>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="text-sm text-green-600 hover:text-orange-800"
                            >
                                ¿Olvidaste tu contraseña?
                            </Link>
                        )}

                        <PrimaryButton
                            className="px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-yellow-700 transition duration-300"
                            disabled={processing}
                        >
                            Iniciar Sesión
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
