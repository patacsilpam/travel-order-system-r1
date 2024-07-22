import { Link } from "@inertiajs/react";

export default function NavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "inline-flex items-center px-3 py-5 border-b-2 text-lg  leading-5 transition duration-150 ease-in-out focus:outline-none " +
                (active
                    ? "bg-slate-200 text-stone-950"
                    : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:bg-slate-200 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
{
    /*border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700*/
}
