// resources/js/Components/ActionLinks.jsx
import React from "react";
import { Link } from "@inertiajs/react";

const ActionLinks = ({
    row,
    editUrl,
    deleteUrl,
    editLabel = "Edit",
    deleteLabel = "Delete",
}) => {
    return (
        <div className="flex lg:flex-row flex-col gap-3">
            <Link
                href={editUrl(row)}
                className="bg-green-600 text-white p-1 rounded-sm "
            >
                {editLabel}
            </Link>

            <Link
                href={deleteUrl(row)}
                className="bg-red-600 text-white p-1  rounded-sm "
            >
                {deleteLabel}
            </Link>
        </div>
    );
};

export default ActionLinks;
