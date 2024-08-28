import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import SuccessButton from "../../Components/SuccessButton";
import DefaultButton from "../../Components/DefaultButton";
import { Link } from "@inertiajs/react";
import { FilePenLine } from "lucide-react";

const EditPositionForm = ({ position }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, put, processing, errors } = useForm({
        name: position.name || "",
    });

    function submitPosition(e) {
        e.preventDefault(); // Prevent the default form submission
        put(`/positions/${position.id}/edit`, {
            onSuccess: () => setIsOpen(false), // Close the modal on success
        });
    }
    return (
        <div>
            <button
                className="flex gap-2 bg-green-600 text-white py-2 px-4 rounded"
                onClick={() => setIsOpen(true)}
            >
                <FilePenLine size={16} /> Edit
            </button>

            <Modal show={isOpen} maxWidth="md" onClose={() => setIsOpen(false)}>
                <div className="p-6 bg-neutral-100 md:w-full w-[90vw]">
                    <div className="flex flex-row justify-between">
                        <h2 className="text-lg font-medium text-gray-900">
                            Edit
                        </h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="bg-gray-500 text-neutral-200 h-8 w-8 rounded-full text-md"
                            title="Close"
                        >
                            x
                        </button>
                    </div>
                    <form onSubmit={submitPosition} className="my-5">
                        <InputLabel value="Position" />
                        <TextInput
                            id="name"
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            placeholder="Enter Position"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)} // Update the data state
                        />
                        <InputError message={errors.name} className="mt-2" />
                        <div className="mt-5 flex justify-center">
                            <SuccessButton
                                className="w-full"
                                disabled={processing}
                            >
                                Save Changes
                            </SuccessButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default EditPositionForm;
