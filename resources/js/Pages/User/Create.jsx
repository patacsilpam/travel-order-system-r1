import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React from "react";

const CreateUser = () => {
    return (
        <div>
            <form className="flex flex-col w-full">
                <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-2">
                    <div>
                        <InputLabel value="First Name" />
                        <TextInput
                            id="fname"
                            name="fname"
                            type="text"
                            className="mt-1 block w-full"
                            placeholder="Enter first name"
                        />
                    </div>
                    <div>
                        <InputLabel value="First Name" />
                        <TextInput
                            id="fname"
                            name="fname"
                            type="text"
                            className="mt-1 block w-full"
                            placeholder="Enter first name"
                        />
                    </div>
                    <div>
                        <InputLabel value="First Name" />
                        <TextInput
                            id="fname"
                            name="fname"
                            type="text"
                            className="mt-1 block w-full"
                            placeholder="Enter first name"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
