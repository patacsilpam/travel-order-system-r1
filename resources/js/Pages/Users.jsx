import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CreateUser from "@/Pages/User/Create";
const Users = ({ auth }) => {
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                }
            >
                <Head title="Users" />
                <CreateUser />
            </AuthenticatedLayout>
        </div>
    );
};

export default Users;
