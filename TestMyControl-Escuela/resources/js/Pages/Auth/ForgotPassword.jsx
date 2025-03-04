import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, useForm } from '@inertiajs/react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
       <GuestLayout imageUrl="https://www.mined.gob.sv/wp-content/uploads/2020/10/c0c26ec2b98f11c4e261423b8ec26409.jpg">
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
            ¿Olvidaste tu contraseña? Ningún problema. Sólo déjanos saber tu correo electrónico
                dirección y le enviaremos por correo electrónico un enlace para restablecer la contraseña que le
                le permite elegir uno nuevo. ¿Olvidaste tu contraseña? Ningún problema. Sólo déjanos saber tu correo electrónico
                dirección y le enviaremos por correo electrónico un enlace para restablecer la contraseña que le
                le permite elegir uno nuevo.
            </div>

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="mt-4 flex items-center justify-end">
                    <PrimaryButton className="ms-4" disabled={processing}>
                  
Enviar Enlace para restablecer contraseña de correo electrónico
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
