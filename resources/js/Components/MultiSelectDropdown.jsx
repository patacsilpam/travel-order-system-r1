import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef, forwardRef } from "react";
import Checkbox from "./Checkbox";
const MultiSelectDropdown = forwardRef(function MultiSelectDropdown(
    {
        options = [],
        defaultValue = "Select",
        className = "",
        isFocused = false,
        onChange,
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

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const handleCheckboxChange = (optionValue) => {
        setSelectedOptions((prev) => {
            const newSelection = prev.includes(optionValue)
                ? prev.filter((value) => value !== optionValue)
                : [...prev, optionValue];
            if (onChange) {
                onChange(newSelection);
            }
            return newSelection;
        });
    };
    return (
        <div className="relative inline-block text-left w-full">
            <button
                onClick={toggleDropdown}
                type="button"
                className="flex flex-row justify-between items-center container-fluid w-full rounded-md border border-gray-700 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                <span className="text-md">
                    {selectedOptions >= 0
                        ? "Select"
                        : selectedOptions.map((item) => (
                              <span className="bg-indigo-600 text-white mr-2 px-2 p-1 rounded-full">
                                  {" "}
                                  {item}{" "}
                              </span>
                          ))}
                    {/*selectedOptions.length > 0
                        ? `(${selectedOptions.length})`
                        : ""*/}
                </span>

                <ChevronDown />
            </button>
            {isOpen && (
                <div
                    className="w-full origin-top-right mt-1 absolute rounded-md border border-neutral-300 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                >
                    {options.map((option, key) => (
                        <div
                            key={key}
                            className="flex flex-row items-center gap-2 mt-2 hover:bg-blue-700  hover:text-white"
                        >
                            <Checkbox
                                value={option.value}
                                className="ml-2"
                                checked={selectedOptions.includes(option.value)}
                                onChange={() =>
                                    handleCheckboxChange(option.value)
                                }
                            />
                            {option.label}{" "}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});

export default MultiSelectDropdown;
