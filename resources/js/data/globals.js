import {
    CircleGauge,
    FilePen,
    Compass,
    Users,
    User,
    Settings,
    Building2,
} from "lucide-react";

export const navItems = [
    {
        id: 1,
        name: "Dashboard",
        navlist: "dashboard",
        icon: CircleGauge,
    },
    {
        id: 2,
        name: "Travel Request",
        navlist: "travel-request",
        icon: FilePen,
    },
    {
        id: 3,
        name: "Travel Orders",
        navlist: "travel-orders",
        icon: Compass,
    },
    {
        id: 4,
        name: "Employees",
        navlist: "employees",
        icon: Users,
    },
    {
        id: 5,
        name: "Divisions",
        navlist: "divisions",
        icon: Building2,
    },
    {
        id: 6,
        name: "Users",
        navlist: "users",
        icon: User,
    },
    {
        id: 7,
        name: "Settings",
        navlist: "settings",
        icon: Settings,
    },
];

export const roles = [
    {
        id: 1,
        title: "Administrator",
    },
    {
        id: 2,
        title: "Officer",
    },
    {
        id: 3,
        title: "User",
    },
];

// tableStyle.js
export const customStyles = {
    headCells: {
        style: {
            fontSize: "1rem",
            fontWeight: "900",
        },
    },
    cells: {
        style: {
            fontSize: "1rem",
            padding: "1rem",
        },
    },
};
