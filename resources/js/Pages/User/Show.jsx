import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DataTable from "react-data-table-component";
const columns = [
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
const Show = ({ auth }) => {
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
                    <div className="flex justify-between flex-col lg:flex-row">
                        <div>
                            <span>Insert Filter Here</span>
                        </div>
                        <div>
                            <Link
                                href=""
                                className="bg-blue-600 bg-opacity-90 hover:bg-blue-700 text-white p-2 rounded-md w-[200px] text-center"
                            >
                                <strong>Create User</strong>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-slate-200">
                        <DataTable
                            columns={columns}
                            data={data}
                            selectableRows
                        />
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default Show;
