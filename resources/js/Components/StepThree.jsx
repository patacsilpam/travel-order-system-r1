import React, { useState } from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

const StepThree = ({ formData, setFormData }) => {
    const [imageSrc, setImageSrc] = useState(null);
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImageSrc(reader.result);
            };
            reader.readAsDataURL(file);
        }
        setFormData({ ...formData, img: file.name });
    };

    return (
        <div>
            <InputLabel value="Select a file" />
            <TextInput
                type="file"
                placeholder="Upload signature"
                className="container-fluid w-full border-1 border-neutral-600"
                onChange={handleFileChange}
            />
            {imageSrc && (
                <div className="mt-4">
                    <img
                        src={imageSrc}
                        alt="Uploaded Preview"
                        className="w-96 h-96"
                    />
                </div>
            )}
        </div>
    );
};

export default StepThree;
