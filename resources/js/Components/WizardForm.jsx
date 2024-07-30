import React, { useState } from "react";

const steps = ["Employee Details", "Travel Details", "Validation"];

const WizardForm = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = () => {
        // Handle form submission
        alert("Form submitted!");
    };

    return (
        <div className="container mx-auto p-4">
            <div className="flex gap-2 justify-between mb-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex-1 text-center py-2 ${
                            index < currentStep
                                ? "bg-green-500 text-white"
                                : index === currentStep
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200"
                        }`}
                    >
                        {step}
                    </div>
                ))}
            </div>
            <div className="p-4 border">
                {currentStep === 0 && <div>Content for Step 1</div>}
                {currentStep === 1 && <div>Content for Step 2</div>}
                {currentStep === 2 && <div>Content for Step 3</div>}
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevStep}
                    className="bg-gray-500 text-white py-2 px-4 rounded"
                    disabled={currentStep === 0}
                >
                    Previous
                </button>
                {currentStep < steps.length - 1 ? (
                    <button
                        onClick={nextStep}
                        className="bg-blue-500 text-white py-2 px-4 rounded"
                    >
                        Next
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        className="bg-green-500 text-white py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default WizardForm;
