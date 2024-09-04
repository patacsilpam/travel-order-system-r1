import React, { useState } from "react";
import { useForm, usePage, router } from "@inertiajs/react";
import { CirclePlus } from "lucide-react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { FilePenLine } from "lucide-react";
import PrimaryButton from "@/Components/PrimaryButton";
import SelectDropdown from "@/Components/SelectDropdown";
import Modal from "@/Components/Modal";

const EditOfficeForm = ({ auth, success, status, office }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        office_id: "",
        name: office.name || "",
        office_head: office.office_head || "",
    });
    function submitOffice(e) {
        e.preventDefault();
        post(`/division`, {
            onSuccess: () => setIsOpen(false), // Close the modal on success
        });
        // Close the modal on succes);
    }

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="flex gap-2 bg-green-600 text-white py-2 px-4 rounded"
            >
                <FilePenLine size={16} />
                Edit
            </button>
            <Modal show={isOpen} maxWidth="md" onClose={() => setIsOpen(false)}>
                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}
                <div className="p-6  md:w-full w-[90vw] ">
                    <div className="flex flex-row justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            Add New Office
                        </h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-gray-500 text-neutral-200 h-8 w-8 rounded-full text-md"
                            title="Close"
                        >
                            x
                        </button>
                    </div>
                    <form
                        onSubmit={submitOffice}
                        className="shadow-sm rounded-md space-y-3 mt-5"
                    >
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
                        <div>
                            <InputLabel value="Select Head" />
                            <SelectDropdown
                                value={data.office_head}
                                onChange={(e) =>
                                    setData("office_head", e.target.value)
                                }
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                isFocused={true}
                            />
                            <InputError
                                message={errors.office_head}
                                className="mt-2"
                            />
                        </div>
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

export default EditOfficeForm;