import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { CirclePlus } from "lucide-react";
import ItineraryComponent from "./ItineraryComponent";
import { useRemember } from "@inertiajs/react";

const StepTwo = ({ data, setData, post, processing, errors }) => {
    const createEmptyItinerary = () => ({
        placeDestination: "",
        departure: "",
        arrival: "",
        meansOfTransportation: "",
        allowance: "",
        perDiem: "",
        others: "",
    });
    const [itineraries, setItineraries] = useRemember(
        [createEmptyItinerary()]
        //"itineraries"
    );
    const handleClick = () => {
        setItineraries([...itineraries, createEmptyItinerary()]);
    };

    const handleItineraryChange = (index, field, value) => {
        const newItineraries = [...itineraries];
        newItineraries[index][field] = value;
        setItineraries(newItineraries);
        setData("itineraries", newItineraries); // Store the itineraries data in the parent form data
    };
    return (
        <div>
            <div className="grid place-items-end my-4">
                <PrimaryButton
                    className="space-x-3 w-fit"
                    onClick={handleClick}
                >
                    <CirclePlus /> <span>Add Itinerary</span>
                </PrimaryButton>
            </div>
            <form
                className="mb-4 flex flex-col justify-center lg:flex-row md:flex-col lg:space-y-0 lg:space-x-5 md:space-y-2"
                method="POST"
            >
                <div>
                    {itineraries.map((itinerary, index) => (
                        <ItineraryComponent
                            key={index}
                            index={index}
                            data={itinerary}
                            onChange={handleItineraryChange}
                            modeFiling={data.modeFiling}
                        />
                    ))}
                </div>
            </form>
        </div>
    );
};

export default StepTwo;
