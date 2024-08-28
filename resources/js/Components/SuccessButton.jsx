export default function DangerButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center px-14 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white  uppercase tracking-widest hover:bg-green-500 active:bg-green-700 focus:outline-none focus:ring-1 focus:ring-green-500 focus:ring-offset-2 dark:focus:ring-offset-green-700 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
