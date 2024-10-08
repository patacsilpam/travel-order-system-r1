import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, reset, post, processing, errors } = useForm({
        user_id: "",
        firstName: "",
        lastName: "",
        position: "",
        office: "",
        role: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel value="First Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.firstName}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("firstName", e.target.value)}
                        required
                    />

                    <InputError message={errors.firstName} className="mt-2" />
                </div>
                <div>
                    <InputLabel value="Last Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.lastName}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("lastName", e.target.value)}
                        required
                    />

                    <InputError message={errors.lastName} className="mt-2" />
                </div>
                <div>
                    <InputLabel value="Position" />
                    <TextInput
                        id="position"
                        type="text"
                        value={data.position}
                        className="mt-1 block w-full"
                        autoComplete="position"
                        isFocused={true}
                        placeholder="Enter position"
                        onChange={(e) => setData("position", e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel value="Office" />
                    <TextInput
                        id="office"
                        type="text"
                        value={data.office}
                        className="mt-1 block w-full"
                        autoComplete="office"
                        isFocused={true}
                        placeholder="Enter office"
                        onChange={(e) => setData("office", e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel value="Role" />
                    <TextInput
                        id="rolde"
                        type="text"
                        value={data.role}
                        className="mt-1 block w-full"
                        autoComplete="office"
                        isFocused={true}
                        placeholder="Enter office"
                        onChange={(e) => setData("role", e.target.value)}
                    />
                </div>
                <InputError message={errors.role} className="mt-2" />
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
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
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
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

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
