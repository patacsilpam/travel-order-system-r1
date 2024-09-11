import React, { useState, useEffect } from "react";
import InputLabel from "./InputLabel";
import TextInput from "./TextInput";
import InputError from "./InputError";
import SelectDropdown from "./SelectDropdown";
import { minDate, defaultDate } from "@/utils/dateUtils";
import MultiSelectDropdown from "./MultiSelectDropdown";
const StepOne = ({ data, setData, post, processing, errors, funds, users }) => {
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

    const fundOptions = funds.map((item) => ({
        value: item.funds,
        label: item.funds,
    }));
    const userOptions = users.map((item) => ({
        value: `${item.first_name} ${item.last_name}`,
        label: `${item.first_name} ${item.last_name}`,
    }));
    return (
        <div className="space-y-6 ">
            {/**MODE OF FILING */}
            <div className="space-x-4">
                <div className="flex flex-row gap-1">
                    <InputLabel value="Mode of Filing" className="" />{" "}
                    <small className="mb-3 text-red-600">*</small>
                </div>
                <div className="flex md:flex-row flex-col ">
                    <div className="flex items-center border -1 mx-2 md:my-0 my-1 border-neutral-300 p-2 rounded-sm hover:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                        <input
                            id="immediate"
                            type="radio"
                            name="modeFiling"
                            value="immediate"
                            checked={data.modeFiling === "immediate"}
                            onChange={(e) =>
                                setData("modeFiling", e.target.value)
                            }
                        />
                        <label
                            htmlFor="immediate"
                            className="ml-2 text-sm font-medium text-gray-900  "
                        >
                            Immediate
                        </label>
                    </div>
                    <div className="flex items-center border -1 mx-2 border-neutral-300 p-2 rounded-sm hover:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500">
                        <input
                            id="notimmediate"
                            type="radio"
                            name="modeFiling"
                            value="not immediate"
                            checked={data.modeFiling === "not immediate"}
                            onChange={(e) =>
                                setData("modeFiling", e.target.value)
                            }
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
            {/**Conditional Statement, if the mode of filing is immediate */}
            {data.modeFiling === "immediate" && (
                <div>
                    <div className="flex flex-row gap-1">
                        <InputLabel value="Proof of Evidence" />
                        <small className="text-red-600"> *</small>
                    </div>
                    <input
                        type="file"
                        required
                        className="container-fluid w-full border border-neutral-700 rounded-md"
                        onChange={(e) => setData("evidence", e.target.files[0])}
                    />
                </div>
            )}
            {/**DATE OF FILING */}
            <div>
                <InputLabel value="Date of Filing (MM-DD-YYYY)" />{" "}
                <input
                    type="text"
                    placeholder="Date"
                    className="container-fluid w-full rounded-md border-gray-400 text-neutral-600"
                    value={currentDate}
                    disabled="disabled"
                />
            </div>
            {/**FIRST NAME */}
            <div>
                <div className="flex flex-row gap-1">
                    <InputLabel value="First Name" />
                    <small className="text-red-600"> *</small>
                </div>
                <TextInput
                    type="text"
                    placeholder="First Name"
                    className="container-fluid w-full"
                    value={data.firstName}
                    onChange={(e) => setData("firstName", e.target.value)}
                />

                {errors.firstName && <InputError message={errors.firstName} />}
            </div>
            {/**LAST NAME */}
            <div>
                <div className="flex flex-row gap-1">
                    <InputLabel value="Last Name" />
                    <small className="text-red-600"> *</small>
                </div>
                <TextInput
                    type="text"
                    placeholder="Last Name"
                    className="container-fluid w-full"
                    value={data.lastName}
                    onChange={(e) => setData("lastName", e.target.value)}
                />
            </div>
            <div>
                <div className="flex flex-row gap-1">
                    <InputLabel value="Employees" />
                    <small className="text-red-600"> *</small>
                </div>
                <MultiSelectDropdown
                    options={userOptions}
                    onChange={(selected) => setData("employees", selected)}
                />
            </div>

            {/**Date of Official Travel (FROM) */}
            <div>
                <div className="flex flex-row gap-1">
                    <InputLabel value="Date of Official Travel (FROM)" />
                    <small className="text-red-600"> *</small>
                </div>
                <TextInput
                    type="date"
                    placeholder="Select date of Official Travel (FROM)"
                    className="container-fluid w-full"
                    value={data.dateFrom}
                    min={
                        data.modeFiling === "immediate"
                            ? minDate()
                            : defaultDate()
                    }
                    onChange={(e) => setData("dateFrom", e.target.value)}
                />
            </div>
            {/**Date of Official Travel (TO) */}
            <div>
                <div className="flex flex-row gap-1">
                    <InputLabel value="Date of Official Travel (TO)" />
                    <small className="text-red-600"> *</small>
                </div>
                <TextInput
                    type="date"
                    placeholder="Select date of Official Travel (TO)"
                    className="container-fluid w-full"
                    min={
                        data.modeFiling === "immediate"
                            ? minDate()
                            : defaultDate()
                    }
                    value={data.dateTo}
                    onChange={(e) => setData("dateTo", e.target.value)}
                />
            </div>
            <div>
                <div className="flex flex-row gap-1">
                    <InputLabel value="Source of Fund" />
                    <small className="text-red-600"> *</small>
                </div>
                <SelectDropdown
                    options={fundOptions}
                    className="container-fluid w-full"
                    value={data.sourceOfFund}
                    onChange={(e) => setData("sourceOfFund", e.target.value)}
                />
            </div>
        </div>
    );
};

export default StepOne;
