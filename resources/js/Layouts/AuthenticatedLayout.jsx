import { useState } from "react";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import {
    CircleGauge,
    FilePen,
    Compass,
    Split,
    User,
    HandCoins,
    Settings,
    Building2,
} from "lucide-react";
// Authenticated component that renders the navigation and main content
export default function Authenticated({ user, header, children }) {
    // State for toggling the navigation dropdown
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <div className="flex flex-row justify-around  bg-slate-100 overflow-auto">
            {/* Sidebar navigation */}
            <div
                className={
                    (showingNavigationDropdown
                        ? "flex absolute top-0 left-0 z-50"
                        : "hidden") + "   bg-[#0A0E20] lg:flex"
                }
            >
                <div className="flex flex-col space-y-24 h-screen">
                    {/* Logo section */}
                    <div className="flex flex-row items-center p-2 gap-2 w-[300px]">
                        <img src="/images/logo.png" className="w-[60px]" />
                        <div className="text-white">
                            <small className="text-[#E7E7E7]">NCIP R1</small>
                            <p>TRAVEL ORDER SYSTEM</p>
                        </div>
                    </div>
                    {/* Navigation links */}
                    <ul className="flex flex-col space-y-3 ">
                        <NavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                            className="gap-2"
                        >
                            <CircleGauge />
                            &nbsp;Dashboard
                        </NavLink>
                        <NavLink
                            href={route("travel-request.show")}
                            active={route().current("travel-request.show")}
                            className="gap-2"
                        >
                            <FilePen />
                            Travel Requests
                        </NavLink>
                        <NavLink
                            href={route("travel-order.show")}
                            active={route().current("travel-order.show")}
                            className="gap-2"
                        >
                            <Compass />
                            Travel Orders
                        </NavLink>
                        {/* Conditional rendering for admin-specific links */}
                        {user?.role === "Administrator" && (
                            <ul className="flex flex-col space-y-3 ">
                                <NavLink
                                    href={route("division.show")}
                                    active={route().current("division.show")}
                                    className="gap-2"
                                >
                                    <Building2 />
                                    Offices
                                </NavLink>
                                <NavLink
                                    href={route("positions.show")}
                                    active={route().current("positions.show")}
                                    className="gap-2"
                                >
                                    <Split />
                                    Positions
                                </NavLink>
                                <NavLink
                                    href={route("user.show")}
                                    active={route().current("user.show")}
                                    className="gap-2"
                                >
                                    <User />
                                    Users
                                </NavLink>
                                <NavLink
                                    href={route("funds.show")}
                                    active={route().current("funds.show")}
                                    className="gap-2"
                                >
                                    <HandCoins />
                                    Funds
                                </NavLink>
                                <NavLink
                                    href={route("settings.show")}
                                    active={route().current("settings.show")}
                                    className="gap-2"
                                >
                                    <Settings />
                                    Settings
                                </NavLink>
                            </ul>
                        )}
                    </ul>
                </div>
            </div>
            {/**Hamburger Menu */}
            <div className="w-screen h-screen">
                <div className="flex flex-row items-center justify-between lg:justify-end p-5 border border-b-gray-300 shadow-sm">
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState
                            )
                        }
                        className="lg:hidden md:flex inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-800 hover:bg-gray-100  focus:outline-none focus:bg-gray-100  focus:text-gray-800 dark:focus:text-gray-800 transition duration-150 ease-in-out"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    !showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    {/* User dropdown and profile information */}
                    <div>
                        <div className="sm:items-center sm:ms-6">
                            <div className="ms-3 relative">
                                {showingNavigationDropdown ? (
                                    <button
                                        onClick={() =>
                                            setShowingNavigationDropdown(
                                                (previousState) =>
                                                    !previousState
                                            )
                                        }
                                        className="lg:hidden md:flex inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-800 hover:bg-gray-100  focus:outline-none focus:bg-gray-100  focus:text-gray-800 dark:focus:text-gray-800 transition duration-150 ease-in-out"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                className={
                                                    !showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                            <path
                                                className={
                                                    showingNavigationDropdown
                                                        ? "inline-flex"
                                                        : "hidden"
                                                }
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                ) : (
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {`${user.first_name} ${user.last_name}`}
                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Main content section */}
                <main
                    className={`overflow-hidden ${
                        showingNavigationDropdown ? "backdrop-opacity-70" : ""
                    }`}
                >
                    <div className="overflow-hidden"> {children} </div>
                </main>
            </div>
        </div>
    );
}
