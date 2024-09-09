import React from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import { useRemember } from "@inertiajs/react";
const ItineraryComponent = ({ index, data, onChange }) => {
    return (
        <div>
            <div className="mb-4 flex flex-col justify-center lg:flex-row md:flex-col lg:space-y-0 lg:space-x-5 md:space-y-2">
                <div>
                    <InputLabel value="Place of Destination" />
                    <TextInput
                        type="text"
                        placeholder="Place of Destination"
                        className="container-fluid w-full"
                        value={data.placeDestination}
                        onChange={(e) =>
                            onChange(index, "placeDestination", e.target.value)
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Departure" />
                    <TextInput
                        type="datetime-local"
                        className="container-fluid w-full"
                        value={data.departure}
                        onChange={(e) =>
                            onChange(index, "departure", e.target.value)
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Arrival" />
                    <TextInput
                        type="datetime-local"
                        className="container-fluid w-full"
                        value={data.arrival}
                        onChange={(e) =>
                            onChange(index, "arrival", e.target.value)
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Means of Transportation" />
                    <select
                        name="meansOfTransportation"
                        className="w-full border-gray-300 dark:border-gray-700 dark:text-gray-700 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                        value={data.meansOfTransportation}
                        onChange={(e) =>
                            onChange(
                                index,
                                "meansOfTransportation",
                                e.target.value
                            )
                        }
                    >
                        <option disabled value="">
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
                        value={data.allowance}
                        onChange={(e) =>
                            onChange(index, "allowance", e.target.value)
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Per Diem" />
                    <TextInput
                        type="number"
                        className="container-fluid w-full"
                        placeholder="0.00"
                        value={data.perDiem}
                        onChange={(e) =>
                            onChange(index, "perDiem", e.target.value)
                        }
                    />
                </div>
                <div>
                    <InputLabel value="Others" />
                    <TextInput
                        type="number"
                        className="container-fluid w-full"
                        placeholder="0.00"
                        value={data.others}
                        onChange={(e) =>
                            onChange(index, "others", e.target.value)
                        }
                    />
                </div>
            </div>
            <br />
            <hr className="mb-4 shadow-sm" />
        </div>
    );
};

export default ItineraryComponent;
