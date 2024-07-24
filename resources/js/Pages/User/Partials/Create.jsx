import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import React from "react";
import { useForm } from "@inertiajs/react";
const CreateUser = ({ status, canResetPassword }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstName: "",
        password: "",
        remember: false,
    });
    const submitUser = (e) => {
        e.preventDefault();

        get(route("users"));
    };
    return (
        <div className="flex flex-col py-10 px-5 bg-white">
            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}
            <form onSubmit={submitUser} className="space-y-5">
                <div>
                    <InputLabel value="First Name" />
                    <TextInput
                        id="fname"
                        type="text"
                        name="fname"
                        value={data.firstName}
                        className="mt-1 block w-full"
                        autoComplete="firstName"
                        isFocused={true}
                        placeholder="Enter first name"
                        onChange={(e) => setData("firstName", e.target.value)}
                    />
                    <InputError message={errors.firstName} className="mt-2" />
                </div>
                <div>
                    <InputLabel value="Last Name" />
                    <TextInput
                        id="lname"
                        type="text"
                        name="lname"
                        className="mt-1 block w-full"
                        autoComplete="lastName"
                        isFocused={true}
                        placeholder="Enter last name"
                    />
                </div>
                <div>
                    <InputLabel value="Position" />
                    <TextInput
                        id="position"
                        type="text"
                        name="position"
                        className="mt-1 block w-full"
                        autoComplete="position"
                        isFocused={true}
                        placeholder="Enter position"
                    />
                </div>
                <div>
                    <InputLabel value="Office" />
                    <TextInput
                        id="office"
                        type="text"
                        name="office"
                        className="mt-1 block w-full"
                        autoComplete="office"
                        isFocused={true}
                        placeholder="Enter office"
                    />
                </div>
                <div>
                    <InputLabel value="Email Address" />
                    <TextInput
                        id="email-address"
                        type="email"
                        name="email"
                        className="mt-1 block w-full"
                        autoComplete="email"
                        isFocused={true}
                        placeholder="Enter email address"
                    />
                </div>
                <div>
                    <InputLabel value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        className="mt-1 block w-full"
                        autoComplete="password"
                        isFocused={true}
                        placeholder="Enter password"
                    />
                </div>
                <div className="text-center mt-5">
                    <PrimaryButton disabled={processing}>
                        <p className="w-50">Add User</p>
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
