import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Show = ({ auth, category }: any) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Category Details
                </h2>
            }
        >
            <Head title="Category Details" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                <h1 className="text-xl font-semibold text-gray-800 leading-tight">
                                    {category.data.id}. {category.data.name}
                                </h1>
                                <p className="mt-2 text-sm/relaxed">
                                    {category.data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};
export default Show;
