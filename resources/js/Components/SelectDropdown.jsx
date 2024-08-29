import React, { forwardRef, useEffect, useRef } from "react";

const SelectDropdown = forwardRef(function SelectDropdown(
    {
        options = [],
        defaultValue = "Select",
        className = "",
        isFocused = false,
        ...props
    },
    ref
) {
    const selectRef = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            selectRef.current.focus();
        }
    }, [isFocused]);

    return (
        <select
            {...props}
            className={
                "border-gray-300 dark:border-gray-700 dark:text-gray-700 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm " +
                className
            }
            ref={selectRef}
        >
            <option value="" disabled>
                {defaultValue}
            </option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
});

export default SelectDropdown;
