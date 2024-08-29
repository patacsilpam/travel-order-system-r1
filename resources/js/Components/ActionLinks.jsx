// resources/js/Components/ActionLinks.jsx
import React from "react";
import { Link } from "@inertiajs/react";
import { FilePenLine, Trash } from "lucide-react";

const ActionLinks = ({
    row,
    editUrl,
    deleteUrl,
    editLabel = "Edit",
    deleteLabel = "Delete",
}) => {
    return (
        <div className="flex ">
            <Link
                href={editUrl(row)}
                className="flex gap-2 bg-green-600 text-white py-2 px-4 rounded"
            >
                <FilePenLine size={16} />
                {editLabel}
            </Link>
        </div>
    );
};

export default ActionLinks;
