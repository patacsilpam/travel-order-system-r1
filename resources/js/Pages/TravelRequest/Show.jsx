import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import WizardForm from "@/Components/WizardForm";
const Show = ({ auth }) => {
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                }
            >
                <Head title="Travel Request" />
                <div className="bg-white m-10 shadow-sm">
                    <WizardForm />
                </div>
            </AuthenticatedLayout>
        </div>
    );
};

export default Show;
