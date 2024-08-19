import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { CirclePlus } from "lucide-react";
const columns = [
    {
        id: "Number",
        selector: (row) => row.id,
    },
    {
        name: "Title",
        selector: (row) => row.title,
    },
    {
        name: "Year",
        selector: (row) => row.year,
    },
];

const data = [
    {
        id: 1,
        title: "Beetlejuice",
        year: "1988",
    },
    {
        id: 2,
        title: "Ghostbusters",
        year: "1984",
    },
];
const customStyles = {
    headCells: {
        style: {
            fontSize: "1rem",
            fontWeigth: "900",
        },
    },
};
const Show = ({ auth }) => {
    return (
        <div className="relative">
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight relative"></h2>
                }
            >
                <Head title="Travel Request" />
                {/*<div className="bg-white m-10 shadow-sm relative">
                    <WizardForm />
                </div>*/}
                <div className="m-5">
                    <h1 className="text-4xl font-bold my-5">Travel Request</h1>
                    <div className="flex  md:justify-end sm:justify-start mb-1">
                        <div className="flex justify-center bg-blue-600 bg-opacity-90 hover:bg-blue-700 text-white p-2 rounded-md  text-center space-x-3">
                            <div>
                                <CirclePlus />
                            </div>
                            <div>
                                <Link href={route("travel-request.create")}>
                                    <span>Add New Travel</span>
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
