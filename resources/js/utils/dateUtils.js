export const minDate = () => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);
    return minDate.toISOString().split("T")[0];
};

export const defaultDate = () => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate());
    return minDate.toISOString().split("T")[0];
};

export const minDateLocal = () => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate() + 3);
    return minDate.toISOString().slice(0, 16);
};

export const defaultDateLocal = () => {
    const minDate = new Date();
    minDate.setDate(minDate.getDate());
    return minDate.toISOString().slice(0, 16);
};
