import { Head, Link } from "@inertiajs/react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Create from "./Create";
import EditOfficeForm from "./EditDivisionForm";
import DeleteDivisionForm from "./DeleteDivisionForm";
import { customStyles } from "@/data/globals";

const columns = [
    {
        id: "Number",
        selector: (row) => row.id,
    },
    {
        name: "Office/Division",
        selector: (row) => row.name,
    },
    {
        name: "Head",
        selector: (row) => row.office_head,
    },
    {
        name: "Action",
        selector: (row) => (
            <div className="flex lg:flex-row flex-col py-2 gap-5">
                <EditOfficeForm />
                <DeleteDivisionForm />
            </div>
        ),
    },
];

const Show = ({ auth, users, office }) => {
    console.log(office);
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
                    <h1 className="text-4xl font-bold my-5">Offices</h1>
                    <div className="flex  md:justify-end sm:justify-start mb-1">
                        {/**ADD NEW USER */}
                        <Create users={users} />
                    </div>
                    <div className="relative">
                        <DataTableExtensions
                            columns={columns}
                            data={office}
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
