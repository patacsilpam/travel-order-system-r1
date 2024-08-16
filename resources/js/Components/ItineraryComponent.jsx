import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";

const ItineraryComponent = ({ formData, setFormData }) => {
    return (
        <div>
            <div className="mb-4 flex flex-col   justify-center lg:flex-row md:flex-col lg:space-y-0 lg:space-x-5 md:space-y-2">
                <div>
                    <InputLabel value="Place of Destination" />
                    <TextInput
                        type="text"
                        placeholder="Place of Destination"
                        className="container-fluid w-full"
                    />
                </div>
                <div>
                    <InputLabel value="Departure" />
                    <TextInput
                        type="datetime-local"
                        className="container-fluid w-full"
                    />
                </div>
                <div>
                    <InputLabel value="Arrival" />
                    <TextInput
                        type="datetime-local"
                        className="container-fluid w-full"
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
                    />
                </div>
                <div>
                    <InputLabel value="Per Diem" />
                    <TextInput
                        type="number"
                        className="container-fluid w-full"
                        placeholder="0.00"
                    />
                </div>
                <div>
                    <InputLabel value="Others" />
                    <TextInput
                        type="number"
                        className="container-fluid w-full"
                        placeholder="0.00"
                    />
                </div>
            </div>
            <br />
            <hr className="mb-4 shadow-sm" />
        </div>
    );
};

export default ItineraryComponent;
