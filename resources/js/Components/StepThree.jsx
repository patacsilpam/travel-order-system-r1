import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

const StepThree = ({ formData, setFormData }) => {
    return (
        <div>
            <h2>Step 3</h2>
            <TextInput
                type="text"
                placeholder="First Name"
                className="container-fluid w-full"
                value={formData.firstName}
                onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                }
            />
        </div>
    );
};

export default StepThree;
