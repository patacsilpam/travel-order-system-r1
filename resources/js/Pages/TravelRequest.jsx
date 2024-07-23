import { Head } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UpdateTravelRequest from "./TravelRequest/Partials/UpdateTravelRequest";
const TravelRequest = ({ auth }) => {
    return (
        <div>
            <AuthenticatedLayout
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"></h2>
                }
            >
                <Head title="Travel Request" />
                <UpdateTravelRequest />
            </AuthenticatedLayout>
        </div>
    );
};

export default TravelRequest;
