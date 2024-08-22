import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Head, Link } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import FlashMessage from "@/Components/FlashMessage";
const EditUser = ({ auth, user, success, status, canResetPassword }) => {
    const { data, setData, put, processing, errors } = useForm({
        id: user.id || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        position: user.position || "",
        office: user.office || "",
        email: user.email || "",
        password: user.password || "",
        // Add other fields as needed
    });
    function updateUser(e) {
        e.preventDefault();
        put(`/user/edit/${user.id}`);
    }
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                }
            >
                <Head title={`Edit User`} />
                <div className="flex flex-col py-7 m-10 ">
                    <h1 className="text-4xl font-bold my-5">
                        Update User Information
                    </h1>
                    <form
                        onSubmit={updateUser}
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
                        <div className="text-center mt-5">
                            <PrimaryButton disabled={processing}>
                                <p className="w-50">Save Changes</p>
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default EditUser;
