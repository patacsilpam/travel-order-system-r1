import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import ActionLinks from "@/Components/ActionLinks";
import { CirclePlus } from "lucide-react";
const handleEditLink = (row) => `user/edit/${row.id}`;
const handleDeleteLink = (row) => `/delete/${row.id}`;
const columns = [
    {
        id: "Number",
        selector: (row) => row.id,
    },
    {
        name: "Name",
        selector: (row) => `${row.first_name} ${row.last_name}`,
    },
    {
        name: "Position",
        selector: (row) => row.position,
    },
    {
        name: "Office",
        selector: (row) => row.office,
    },
    {
        name: "Role",
        selector: (row) => row.role,
    },
    {
        name: "Email",
        selector: (row) => row.email,
    },
    {
        name: "Action",
        cell: (row) => (
            <ActionLinks
                row={row}
                editUrl={handleEditLink}
                deleteUrl={handleDeleteLink}
                editLabel="Edit"
                deleteLabel="Remove"
            />
        ),
    },
];

const customStyles = {
    headCells: {
        style: {
            fontSize: "1rem",
            fontWeigth: "900",
        },
    },
    cells: {
        style: {
            fontSize: "1.1rem",
            padding: "1rem",
        },
    },
};
const Show = ({ auth, data }) => {
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                }
            >
                <Head title="User" />
                <div className="m-5">
                    <h1 className="text-4xl font-bold my-5">User</h1>
                    <div className="flex  md:justify-end sm:justify-start mb-1">
                        <div className="flex justify-center bg-blue-600 bg-opacity-90 hover:bg-blue-700 text-white p-2 rounded-md  text-center space-x-3">
                            <div>
                                <CirclePlus />
                            </div>
                            <div>
                                <Link href={route("user.create")}>
                                    <span>Add New User</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <DataTableExtensions
                            columns={columns}
                            data={data}
                            print={false}
                            export={false}
                        >
                            <DataTable
                                fixedHeader={true}
                                pagination
                                highlightOnHover
                                customStyles={customStyles}
                                responsive={true}
                                className="pt-3"
                            />
                        </DataTableExtensions>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default Show;
