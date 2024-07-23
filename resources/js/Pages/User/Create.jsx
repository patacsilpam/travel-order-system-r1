import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import React from "react";

const CreateUser = () => {
    return (
        <div>
            <form>
                <InputLabel value="First Name" />
                <TextInput
                    id="fname"
                    name="fname"
                    type="text"
                    className="mt-1 block w-full"
                    placeholder="Enter first name"
                />
            </form>
        </div>
    );
};

export default CreateUser;
