import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SuccessButton from "@/Components/SuccessButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { FilePenLine } from "lucide-react";
import { useState } from "react";

const EditFundsForm = ({ funds }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { data, setData, put, processing, errors } = useForm({
        name: funds.funds || "",
    });
    function submitPosition(e) {
        e.preventDefault(); // Prevent the default form submission
        put(`/funds/edit/${funds.id}`, {
            onSuccess: () => setIsOpen(false), // Close the modal on success
        });
    }
    return (
        <div>
            {/*Button to trigger the modal */}
            <button
                className="flex gap-2 bg-green-600 text-white py-2 px-4 rounded"
                onClick={() => setIsOpen(true)}
            >
                <FilePenLine size={16} /> Edit
            </button>
            {/*Modal */}
            <Modal show={isOpen} maxWidth="md" onClose={() => setIsOpen(false)}>
                <div className="p-6 bg-white md:w-full w-[90vw]">
                    <div className="flex flex-row justify-between">
                        {/*Title */}
                        <h2 className="text-lg font-medium text-gray-900">
                            Edit
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
                    <form onSubmit={submitPosition} className="my-5">
                        {/**Field for Position */}
                        <InputLabel value="Source of Funds" />
                        <TextInput
                            id="name"
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            placeholder="Enter Source of Funds"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)} // Update the data state
                        />
                        <InputError message={errors.name} className="mt-2" />
                        <div className="mt-5 flex justify-center">
                            {/**Button*/}
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

export default EditFundsForm;
