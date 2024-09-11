import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { CirclePlus } from "lucide-react";
import { customStyles } from "@/data/globals";
import AddSoureFundsForm from "./Create";
import EditFundsForm from "./Edit";
import DeleteFundsForm from "./Delete";

const columns = [
    {
        name: "Source of Funds",
        selector: (row) => row.funds,
    },
    {
        name: "Action",
        selector: (row) => (
            <div className="flex lg:flex-row flex-col py-2 gap-5">
                <EditFundsForm funds={row} />
                <DeleteFundsForm funds={row} />
            </div>
        ),
    },
];
const Show = ({ auth, funds }) => {
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                }
            >
                <Head title="Positions" />
                <div className="m-5">
                    <h1 className="text-4xl font-bold my-5">Source of Funds</h1>
                    <div className="flex  md:justify-end sm:justify-start mb-1">
                        <div className="flex justify-center bg-blue-600 bg-opacity-90 hover:bg-blue-700 text-white p-2 rounded-md  text-center space-x-3">
                            <div>
                                <CirclePlus />
                            </div>
                            <div>
                                <AddSoureFundsForm />
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <DataTableExtensions
                            columns={columns}
                            data={funds}
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
