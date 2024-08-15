export default function InputLabel({
    value,
    className = "",
    children,
    ...props
}) {
    return (
        <label
            {...props}
            className={
                `block font-medium text-sm text-gray-700 dark:text-gray-600 ` +
                className
            }
        >
            {value ? value : children}
        </label>
    );
}
