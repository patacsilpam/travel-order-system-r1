import React from "react";
import { useForm, usePage } from "@inertiajs/react";
import { Head, Link } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SuccessButton from "@/Components/SuccessButton";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import SelectDropdown from "@/Components/SelectDropdown";
import { roles } from "@/data/globals";
const EditUser = ({ auth, user, positions, offices }) => {
    const { data, setData, put, processing, errors } = useForm({
        id: user.id || "",
        user_id: user.user_id || "",
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        position: user.position || "",
        office: user.office || "",
        role: user.role || "",
        email: user.email || "",
        password: user.password || "",
    });
    const positionOptions = positions.map((position) => ({
        value: position.name,
        label: position.name,
    }));
    const roleOptions = roles.map((role) => ({
        value: role.title,
        label: role.title,
    }));
    const officeOptions = offices.map((office) => ({
        value: office.name,
        label: office.name,
    }));
    function updateUser(e) {
        e.preventDefault();
        put(`/user/edit/${user.id}`);
        console.log(data);
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
                    {/*Title */}
                    <h1 className="text-4xl font-bold my-5">
                        Update User Information
                    </h1>
                    {/*Form */}
                    <form
                        onSubmit={updateUser}
                        className=" bg-white shadow-sm rounded-md space-y-5 p-5"
                    >
                        {/**Field for First Name */}
                        <div>
                            <InputLabel value="First Name" />
                            <TextInput
                                id="fname"
                                type="text"
                                value={data.first_name}
                                className="mt-1 block w-full"
                                autoComplete="firstName"
                                isFocused={true}
                                placeholder="Enter first name"
                                onChange={(e) =>
                                    setData("first_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.first_name}
                                className="mt-2"
                            />
                        </div>
                        {/**Field for Last Name */}
                        <div>
                            <InputLabel value="Last Name" />
                            <TextInput
                                id="lname"
                                type="text"
                                value={data.last_name}
                                className="mt-1 block w-full"
                                autoComplete="lastName"
                                isFocused={true}
                                placeholder="Enter last name"
                                onChange={(e) =>
                                    setData("last_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.last_name}
                                className="mt-2"
                            />
                        </div>
                        {/**Field for Employee Position */}
                        <div>
                            <InputLabel value="Position" />
                            <SelectDropdown
                                options={positionOptions}
                                value={data.position}
                                onChange={(e) =>
                                    setData("position", e.target.value)
                                }
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                isFocused={true}
                            />
                            <InputError
                                message={errors.position}
                                className="mt-2"
                            />
                        </div>
                        {/**Field for Employee Designated Office */}
                        <div>
                            <InputLabel value="Office" />
                            <SelectDropdown
                                options={officeOptions}
                                value={data.office}
                                onChange={(e) =>
                                    setData("office", e.target.value)
                                }
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                isFocused={true}
                            />
                            <InputError
                                message={errors.office}
                                className="mt-2"
                            />
                        </div>
                        {/**Field for Employee (User role) */}
                        <div>
                            <InputLabel value="Select Role" />
                            <SelectDropdown
                                options={roleOptions}
                                value={data.role}
                                onChange={(e) =>
                                    setData("role", e.target.value)
                                }
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                isFocused={true}
                            />
                            <InputError
                                message={errors.role}
                                className="mt-2"
                            />
                        </div>
                        {/**Field for Employee email address */}
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
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>
                        {/**Field for Employee Password */}
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
                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>
                        {/**Button */}
                        <div className="text-center mt-5">
                            <SuccessButton disabled={processing}>
                                <p className="w-50">Save Changes</p>
                            </SuccessButton>
                        </div>
                    </form>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default EditUser;
