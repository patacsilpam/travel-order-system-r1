import { Head, Link } from "@inertiajs/react";
import { CirclePlus } from "lucide-react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ActionLinks from "@/Components/ActionLinks";
import Delete from "./Delete";
import { customStyles } from "@/data/globals";

// Helper functions for action links
const handleEditLink = (row) => `user/edit/${row.id}`;
const handleDeleteLink = (row) => `/delete/${row.id}`;

// DataTable columns definition
const columns = [
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
            <div className="flex lg:flex-row flex-col gap-2 ">
                {console.log(row)}
                <ActionLinks
                    row={row}
                    editUrl={handleEditLink}
                    deleteUrl={handleDeleteLink}
                    editLabel="Edit"
                    deleteLabel="Delete"
                />
                <Delete user={row} />
            </div>
        ),
    },
];

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
                        {/*Link for Adding New User */}
                        <div>
                            <Link
                                href={route("user.create")}
                                className="flex  flex-row justify-center gap-2 bg-blue-600 bg-opacity-90 hover:bg-blue-700 text-white p-2 rounded-md  text-center  "
                            >
                                <CirclePlus />
                                <span>Add New User</span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative">
                        {/**User Table */}
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
