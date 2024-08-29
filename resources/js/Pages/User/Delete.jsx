import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Modal from "@/Components/Modal";
import DangerButton from "../../Components/DangerButton";
import DefaultButton from "../../Components/DefaultButton";
import { Trash } from "lucide-react";
import { position } from "@chakra-ui/react";
const Delete = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { delete: deleteRequest, processing } = useForm();

    function submitPosition(e) {
        e.preventDefault(); // Prevent the default form submission
        deleteRequest(`/user/delete/${user.id}`, {
            onSuccess: () => setIsOpen(false), // Close the modal on success
            onError: (errors) => {
                console.error("Error deleting position:", errors);
            },
        });
    }
    return (
        <div>
            <button
                className="flex gap-2 bg-red-600 text-white py-2 px-4 rounded"
                onClick={() => setIsOpen(true)}
            >
                <Trash size={16} /> Delete
            </button>

            <Modal show={isOpen} maxWidth="md" onClose={() => setIsOpen(false)}>
                <div className="p-6 bg-neutral-100">
                    <div className="flex flex-col space-y-2">
                        <strong className="text-gray-900 text-xl">
                            Are you sure you want to delete this user?
                        </strong>
                        <span>
                            This will delete the user permanently. You cannot
                            undo this action.
                        </span>
                    </div>
                    <div className="flex flex-row justify-center mt-7">
                        <div className="lg:px-3 px-1">
                            <DefaultButton
                                onClick={() => setIsOpen(false)}
                                className="w-full"
                            >
                                Cancel
                            </DefaultButton>
                        </div>
                        <form
                            onSubmit={submitPosition}
                            className="flex flex-row gap-2"
                        >
                            <div className="">
                                <DangerButton
                                    className="w-full"
                                    disabled={processing}
                                >
                                    Delete
                                </DangerButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Delete;
