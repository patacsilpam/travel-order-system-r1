import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import PrimaryButton from "@/Components/PrimaryButton";
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
                <div className="bg-white">
                    <div className="text-right mx-9 my-5">
                        <Link href={route("user.create")}>Add User</Link>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default Users;
