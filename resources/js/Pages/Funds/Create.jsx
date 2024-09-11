import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
const AddSoureFundsForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        funds: "",
    });
    function submitFunds(e) {
        e.preventDefault(); // Prevent the default form submission
        post(`/funds`, {
            onSuccess: () => setIsOpen(false), // Close the modal on success
        });
    }
    return (
        <div>
            {/*Button to trigger the modal */}
            <button onClick={() => setIsOpen(true)}>Add New Fund</button>
            {/*Modal */}
            <Modal show={isOpen} maxWidth="md" onClose={() => setIsOpen(false)}>
                <div className="p-6  md:w-full w-[90vw] bg-white">
                    <div className="flex flex-row justify-between">
                        {/*Title */}
                        <h2 className="text-lg font-medium text-gray-900">
                            Add New Source of Fund
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
                        onSubmit={submitFunds}
                        className="shadow-sm rounded-md space-y-3 mt-5"
                    >
                        {/**Field for Funds */}
                        <div>
                            <InputLabel value="Funds" />
                            <TextInput
                                id="office"
                                type="text"
                                value={data.funds}
                                className="mt-1 block w-full"
                                autoComplete="office"
                                isFocused={true}
                                placeholder="Enter New Source of Fund"
                                onChange={(e) =>
                                    setData("funds", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.funds}
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

export default AddSoureFundsForm;
