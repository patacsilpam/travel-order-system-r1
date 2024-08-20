import { usePage } from "@inertiajs/react";

function UserShow() {
    const { flash } = usePage().props;

    return (
        <div>
            {flash.success && (
                <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <strong className="font-bold">Success! </strong>
                    <span className="block sm:inline">{flash.success}</span>
                </div>
            )}
            {/* Your existing user list or details code */}
        </div>
    );
}

export default UserShow;
