import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0  bg-neutral-200 p-2">
            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className=" w-full sm:max-w-md bg-neutral-100 border border-[#D6D6D6] overflow-hidden rounded-sm   ">
                {children}
            </div>
        </div>
    );
}
