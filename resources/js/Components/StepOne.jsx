import React, { useState, useEffect } from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
const StepOne = ({ formData, setFormData }) => {
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() => {
        const date = new Date();
        // Extract the month, day, and year
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const day = String(date.getDate()).padStart(2, "0");
        const year = date.getFullYear();

        // Format the date as MM-DD-YYYY
        const formattedDate = `${month}-${day}-${year}`;
        setCurrentDate(formattedDate);
    }, []);
    return (
        <div className="space-y-6 ">
            {/**MODE OF FILING */}
            <div className="space-x-4">
                <InputLabel value="Mode of Filing" className="mb-3" />
                <div className="flex md:flex-row flex-col lg:space-y-0 space-y-1 sm:space-x-3">
                    <div className="flex items-center border -1 border-neutral-300 p-2 rounded-sm hover:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                        <input
                            id="immediate"
                            type="radio"
                            name="modeFiling"
                            value="immediate"
                        />
                        <label
                            htmlFor="immediate"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Immediate
                        </label>
                    </div>
                    <div className="flex items-center border -1 border-neutral-300 p-2 rounded-sm hover:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                        <input
                            id="notimmediate"
                            type="radio"
                            name="modeFiling"
                            value="immediate"
                        />
                        <label
                            htmlFor="notimmediate"
                            className="ml-2 text-sm font-medium text-gray-900"
                        >
                            Not Immediate
                        </label>
                    </div>
                </div>
            </div>
            {/**DATE OF FILING */}
            <div>
                <InputLabel value="Date of Filing (MM-DD-YYYY)" />
                <input
                    type="text"
                    placeholder="Date"
                    className="container-fluid w-full rounded-md border-gray-400 text-neutral-600"
                    value={currentDate}
                    onChange={(e) =>
                        setFormData({
                            ...formData,
                            currentDate: e.target.value,
                        })
                    }
                    disabled="disabled"
                />
            </div>
            {/**FIRST NAME */}
            <div>
                <InputLabel value="First Name" />
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
            {/**LAST NAME */}
            <div>
                <InputLabel value="Last Name" />
                <TextInput
                    type="text"
                    placeholder="Last Name"
                    className="container-fluid w-full"
                    value={formData.lastName}
                    onChange={(e) =>
                        setFormData({ ...formData, lastName: e.target.value })
                    }
                />
            </div>
            {/**Date of Official Travel (FROM) */}
            <div>
                <InputLabel value="Date of Official Travel (FROM)" />
                <TextInput
                    type="date"
                    placeholder="Select date of Official Travel (FROM)"
                    className="container-fluid w-full"
                    value={formData.dateFrom}
                    onChange={(e) =>
                        setFormData({ ...formData, dateFrom: e.target.value })
                    }
                />
            </div>
            {/**Date of Official Travel (TO) */}
            <div>
                <InputLabel value="Date of Official Travel (TO)" />
                <TextInput
                    type="date"
                    placeholder="Select date of Official Travel (TO)"
                    className="container-fluid w-full"
                    value={formData.dateTo}
                    onChange={(e) =>
                        setFormData({ ...formData, dateTo: e.target.value })
                    }
                />
            </div>
            <div>
                <InputLabel value="Source of Fund" />
                <TextInput
                    type="text"
                    placeholder="Source of Fund"
                    className="container-fluid w-full"
                    value={formData.dateTo}
                    onChange={(e) =>
                        setFormData({ ...formData, dateTo: e.target.value })
                    }
                />
            </div>
            <div>
                <InputLabel value="Source of Fund" />
                <TextInput
                    type="text"
                    placeholder="Source of Fund"
                    className="container-fluid w-full"
                    value={formData.dateTo}
                    onChange={(e) =>
                        setFormData({ ...formData, dateTo: e.target.value })
                    }
                />
            </div>
        </div>
    );
};

export default StepOne;
