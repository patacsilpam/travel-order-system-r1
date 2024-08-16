import React, { useState } from "react";

import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import PrimaryButton from "./PrimaryButton";

import { CirclePlus } from "lucide-react";
import ItineraryComponent from "./ItineraryComponent";

const StepTwo = ({ formData, setFormData }) => {
    const [components, setComponents] = useState([]);

    const handleClick = () => {
        // Add a new DynamicComponent to the components array
        setComponents([
            ...components,
            <ItineraryComponent key={components.length} />,
        ]);
    };

    return (
        <div>
            <div className="grid place-items-end my-4">
                <PrimaryButton
                    className="space-x-3 w-fit"
                    onClick={handleClick}
                >
                    {" "}
                    <CirclePlus /> <span>Add Itinerary</span>
                </PrimaryButton>
            </div>
            <form
                className="mb-4 flex flex-col  justify-center lg:flex-row md:flex-col lg:space-y-0 lg:space-x-5 md:space-y-2"
                method="POST"
            >
                <div>
                    <InputLabel value="Place of Destination" />
                    <TextInput
                        type="text"
                        placeholder="Place of Destination"
                        className="container-fluid w-full"
                        value={formData.placeDestination}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                placeDestination: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Departure" />
                    <TextInput
                        type="datetime-local"
                        className="container-fluid w-full"
                        value={formData.departure}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                departure: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Arrival" />
                    <TextInput
                        type="datetime-local"
                        className="container-fluid w-full"
                        value={formData.arrival}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                arrival: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Means of Transportation" />
                    <select
                        name="meansOfTransportation"
                        className="w-full border-gray-300 dark:border-gray-700  dark:text-gray-700 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                    >
                        <option disabled selected>
                            Select means of transportation
                        </option>
                        <option value="Office Vehicle">Office Vehicle</option>
                        <option value="Public Utility Vehicle">
                            Public Utility Vehicle
                        </option>
                    </select>
                </div>
                <div>
                    <InputLabel value="Allowance" />
                    <TextInput
                        type="number"
                        className="container-fluid w-full"
                        placeholder="0.00"
                        value={formData.allowance}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                arrival: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Per Diem" />
                    <TextInput
                        type="number"
                        className="container-fluid w-full"
                        placeholder="0.00"
                        value={formData.perDiem}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                perDiem: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Others" />
                    <TextInput
                        type="number"
                        className="container-fluid w-full"
                        placeholder="0.00"
                        value={formData.others}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                arrival: e.target.value,
                            })
                        }
                    />
                </div>
            </form>

            <hr className="my-5 shadow-sm" />
            <div>{components.map((component) => component)}</div>
        </div>
    );
};

export default StepTwo;
