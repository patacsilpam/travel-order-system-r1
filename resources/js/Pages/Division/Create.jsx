import React, { useState } from "react";
import { useForm, usePage, router } from "@inertiajs/react";
import { CirclePlus } from "lucide-react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectDropdown from "@/Components/SelectDropdown";
import Modal from "@/Components/Modal";

const AddNewOffice = ({ status, users }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        office_id: "",
        name: "",
        office_head: "",
    });

    function submitOffice(e) {
        e.preventDefault();
        post(`/division`, {
            onSuccess: () => setIsOpen(false), // Close the modal on success
        });
        // Close the modal on succes);
    }
    const userOptions = users.map((user) => ({
        value: `${user.first_name} ${user.last_name}`,
        label: `${user.first_name} ${user.last_name}`,
    }));
    return (
        <div>
            {/**Button to trigger the modal */}
            <button
                onClick={() => setIsOpen(true)}
                className="flex justify-center bg-blue-600 bg-opacity-90 hover:bg-blue-700 text-white p-2 rounded-md  text-center gap-2 "
            >
                <CirclePlus />
                Add New Office
            </button>
            {/**Modal */}
            <Modal show={isOpen} maxWidth="md" onClose={() => setIsOpen(false)}>
                <div className="p-6  md:w-full w-[90vw] ">
                    <div className="flex flex-row justify-between">
                        {/**Title */}
                        <h2 className="text-lg font-medium text-gray-900">
                            Add New Office
                        </h2>
                        {/**Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-gray-500 text-neutral-200 h-8 w-8 rounded-full text-md"
                            title="Close"
                        >
                            x
                        </button>
                    </div>
                    {/**Form */}
                    <form
                        onSubmit={submitOffice}
                        className="shadow-sm rounded-md space-y-3 mt-5"
                    >
                        {/**Field for Office */}
                        <div>
                            <InputLabel value="Office" />
                            <TextInput
                                id="office"
                                type="text"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="office"
                                isFocused={true}
                                placeholder="Enter office"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        {/**Field for Office Head */}
                        <div>
                            <InputLabel value="Enter Division/Office Head" />
                            <TextInput
                                id="office"
                                type="text"
                                value={data.office_head}
                                className="mt-1 block w-full"
                                autoComplete="office"
                                isFocused={true}
                                placeholder="(e.g. Juan Dela Cruz)"
                                onChange={(e) =>
                                    setData("office_head", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.office_head}
                                className="mt-2"
                            />
                        </div>
                        {/**Button */}
                        <div className="mt-10 flex justify-center">
                            <PrimaryButton
                                className="w-full"
                                disabled={processing}
                            >
                                Submit
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default AddNewOffice;
