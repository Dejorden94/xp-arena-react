import { Head } from '@inertiajs/react';
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import GameComponent from "@/components/GameComponent/GameComponent";

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <GameComponent/>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
