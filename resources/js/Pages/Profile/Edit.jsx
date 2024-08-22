import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="py-5 px-5">
                <div className="flex  flex-col gap-5">
                    <div className="p-4 sm:p-8 bg-white  shadow-sm sm:rounded-sm w-full">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className=""
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white  shadow-sm sm:rounded-sm w-full">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>
                </div>
                {/** <div className="p-4 sm:p-8 bg-white shadow-sm sm:rounded-sm">
                    <DeleteUserForm className="max-w-xl" />
                </div>*/}
            </div>
        </AuthenticatedLayout>
    );
}
