import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useForm, useRemember } from "@inertiajs/react";

const steps = ["Employee Information", "Travel Details", "Validation"];

const WizardForm = ({ funds, users }) => {
    const [currentStep, setCurrentStep] = useRemember(0, "currentStep");
    const { data, setData, post, processing, errors } = useForm("WizardForm", {
        modeFiling: "",
        evidence: "",
        employees: "",
        dateFrom: "",
        dateTo: "",
        travelPurpose: "",
        sourceOfFund: "",
        itineraries: [], // Add itineraries to the form data
    });
    console.log(data.employees);
    const validateStep = () => {
        switch (currentStep) {
            case 0:
                return (
                    (data.modeFiling &&
                        data.employees &&
                        data.dateFrom &&
                        data.dateTo &&
                        data.sourceOfFund &&
                        data.evidence) ||
                    data.modeFiling === "not immediate"
                );
            case 1:
                return (
                    data.itineraries.length > 0 &&
                    data.itineraries.every(
                        (itinerary) =>
                            itinerary.placeDestination.trim() !== "" &&
                            itinerary.departure.trim() !== "" &&
                            itinerary.arrival.trim() !== "" &&
                            itinerary.meansOfTransportation.trim() !== "" &&
                            itinerary.allowance.trim() !== "" &&
                            itinerary.perDiem.trim() !== ""
                    )
                );
                return false;
        }
    };

    const nextStep = () => {
        if (validateStep()) {
            setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = () => {
        // Handle form submission
        post("/your-endpoint");
    };

    return (
        <div className="container mx-auto p-4 h-[87vh] overflow-auto bg-white mt-5">
            <h1 className="my-5 text-2xl font-black">Travel Request</h1>
            <div className="flex gap-2 justify-between mb-4">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`flex-1 text-center py-2 ${
                            index < currentStep
                                ? "bg-green-600 text-white"
                                : index === currentStep
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200"
                        }`}
                    >
                        {step}
                    </div>
                ))}
            </div>
            <div className="p-4 border">
                {currentStep === 0 && (
                    <StepOne
                        data={data}
                        setData={setData}
                        errors={errors}
                        funds={funds}
                        users={users}
                    />
                )}
                {currentStep === 1 && (
                    <StepTwo data={data} setData={setData} errors={errors} />
                )}
                {currentStep === 2 && (
                    <StepThree data={data} setData={setData} errors={errors} />
                )}
            </div>
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevStep}
                    className="bg-gray-500 text-white py-2 px-4 rounded"
                    disabled={currentStep === 0}
                >
                    Previous
                </button>
                {currentStep < steps.length - 1 && (
                    <button
                        onClick={nextStep}
                        className={`bg-blue-600 text-white py-2 px-4 rounded ${
                            !validateStep()
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                        disabled={!validateStep()}
                    >
                        Next
                    </button>
                )}

                {currentStep === steps.length - 1 && (
                    <button
                        onClick={handleSubmit}
                        className="bg-green-600 text-white py-2 px-4 rounded"
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default WizardForm;
