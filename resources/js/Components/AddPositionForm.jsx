import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import PrimaryButton from "./PrimaryButton";
const AddPositionForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
    });
    function submitPosition(e) {
        //e.preventDefault();
        post("/positions/create");
    }
    return (
        <div>
            <button onClick={() => setIsOpen(true)}>Add New Position</button>
            <Modal show={isOpen} maxWidth="md" onClose={() => setIsOpen(false)}>
                <div className="p-6 bg-neutral-100">
                    <h2 className="text-lg font-medium text-gray-900 ">
                        Add New Position
                    </h2>

                    <form onSubmit={submitPosition} className="my-5">
                        <InputLabel value="Position" />
                        <TextInput
                            id="fname"
                            type="text"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            placeholder="Enter Position"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        <InputError message={errors.name} className="mt-2" />
                        <div className="mt-5 flex justify-center">
                            <PrimaryButton
                                className="w-full"
                                disabled={processing}
                            >
                                Submit
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className="mt-6 grid place-content-end">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="px-4 py-2 text-white bg-gray-600 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default AddPositionForm;
