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

// tableStyle.js
const tableCustomStyles = {
    headCells: {
        style: {
            fontSize: "20px",
            fontWeight: "bold",
            paddingLeft: "8px", // Adjust padding as needed
            justifyContent: "center",
            textColor: "#fff", // Customize the background color
        },
    },
};

export default tableCustomStyles;
