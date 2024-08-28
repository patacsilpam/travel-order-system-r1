export default function DefaultButton({
    className = "",
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center px-14 py-2 bg-transparent border border-1 rounded-md font-semibold text-xs text-neutral-800  uppercase tracking-widest hover:bg-gray-300 active:bg-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 dark:focus:ring-offset-gray-300 transition ease-in-out duration-150 ${
                    disabled && "opacity-25"
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
