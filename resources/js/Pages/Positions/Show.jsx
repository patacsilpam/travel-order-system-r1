import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import { CirclePlus } from "lucide-react";
import AddPositionForm from "@/Components/AddPositionForm";
import EditPositionForm from "./EditPositionForm";
import DeletePositionForm from "./DeletePositionForm";
const columns = [
    /*{
        id: "Number",
        selector: (row) => row.id,
    },*/
    {
        name: "Position",
        selector: (row) => row.name,
    },
    {
        name: "Action",
        selector: (row) => (
            <div className="flex lg:flex-row flex-col py-2 gap-5">
                <EditPositionForm position={row} />
                <DeletePositionForm position={row} />
            </div>
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
                <Head title="Positions" />
                <div className="m-5">
                    <h1 className="text-4xl font-bold my-5">Positions</h1>
                    <div className="flex  md:justify-end sm:justify-start mb-1">
                        <div className="flex justify-center bg-blue-600 bg-opacity-90 hover:bg-blue-700 text-white p-2 rounded-md  text-center space-x-3">
                            <div>
                                <CirclePlus />
                            </div>
                            <div>
                                <AddPositionForm />
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
