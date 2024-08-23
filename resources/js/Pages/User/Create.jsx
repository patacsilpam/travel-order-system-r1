import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Head, Link } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
const CreateUser = ({ auth, success, status, canResetPassword }) => {
    const { data, setData, post, processing, errors } = useForm({
        firstName: "",
        lastName: "",
        position: "",
        office: "",
        role: "",
        email: "",
        password: "",
    });
    function submitUser(e) {
        e.preventDefault();
        post("/user/create");
    }
    const { flash } = usePage().props;
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                }
            >
                <Head title="Add User" />
                <div className="m-3">
                    {flash.message && (
                        <div
                            class="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded relative"
                            role="alert"
                        >
                            <span class="block sm:inline">{flash.message}</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                <svg
                                    class="fill-current h-6 w-6 text-blue-500"
                                    role="button"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <title>Close</title>
                                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                                </svg>
                            </span>
                        </div>
                    )}
                </div>
                <div className="flex flex-col py-7 m-10 ">
                    {status && (
                        <div className="mb-4 font-medium text-sm text-green-600">
                            {status}
                        </div>
                    )}
                    <h1 className="text-4xl font-bold my-5">Add New User</h1>
                    <form
                        onSubmit={submitUser}
                        className=" bg-white shadow-sm rounded-md space-y-5 p-5"
                    >
                        <div>
                            <InputLabel value="First Name" />
                            <TextInput
                                id="fname"
                                type="text"
                                value={data.firstName}
                                className="mt-1 block w-full"
                                autoComplete="firstName"
                                isFocused={true}
                                placeholder="Enter first name"
                                onChange={(e) =>
                                    setData("firstName", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.firstName}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel value="Last Name" />
                            <TextInput
                                id="lname"
                                type="text"
                                value={data.lastName}
                                className="mt-1 block w-full"
                                autoComplete="lastName"
                                isFocused={true}
                                placeholder="Enter last name"
                                onChange={(e) =>
                                    setData("lastName", e.target.value)
                                }
                            />
                        </div>
                        <InputError
                            message={errors.lastName}
                            className="mt-2"
                        />
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
                                onChange={(e) =>
                                    setData("position", e.target.value)
                                }
                            />
                        </div>
                        <InputError
                            message={errors.position}
                            className="mt-2"
                        />
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
                                onChange={(e) =>
                                    setData("office", e.target.value)
                                }
                            />
                        </div>
                        <InputError message={errors.office} className="mt-2" />
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
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                            />
                        </div>
                        <InputError message={errors.role} className="mt-2" />
                        <div>
                            <InputLabel value="Email Address" />
                            <TextInput
                                id="email-address"
                                type="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="email"
                                isFocused={true}
                                placeholder="Enter email address"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                        </div>
                        <InputError message={errors.email} className="mt-2" />
                        <div>
                            <InputLabel value="Password" />
                            <TextInput
                                id="password"
                                type="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="password"
                                isFocused={true}
                                placeholder="Enter password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />
                        </div>
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                        <div className="text-center mt-5">
                            <PrimaryButton disabled={processing}>
                                <p className="w-50">Add User</p>
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
                ;
            </AuthenticatedLayout>
        </div>
    );
};

export default CreateUser;
