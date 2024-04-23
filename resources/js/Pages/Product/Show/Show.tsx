import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Show = ({ auth, product }: any) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Categories
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <div className="w-full flex flex-col justify-center text-xl font-bol"></div>
                        <div className="p-6 text-gray-900 bg-slate-200 rounded-md">
                            <img
                                src={product.data.image_path}
                                className="w-62 max-h-62 max-w-62 h-62 m-auto rounded-md mb-10"
                                alt=""
                            />
                            <div className="mt-4 m-auto text-xl font-bold align-self-center text-center">
                                {product.data.name}
                            </div>
                            <div className="mt-4 flex justify-start">
                                <div className="mr-2 text-md bold w-64">
                                    Product Price:
                                </div>
                                <div className="text-md text-gray-800">
                                    Rs.{product.data.price}/=
                                </div>
                            </div>
                            <div className="mt-4 flex justify-start ">
                                <div className="mr-2 text-md bold w-64">
                                    Product ID:
                                </div>
                                <div className="text-md text-gray-500">
                                    {product.data.id}
                                </div>
                            </div>
                            <div className="mt-4 flex justify-start ">
                                <div className="mr-2 text-md bold w-64">
                                    Product Category:
                                </div>
                                <div className="text-md text-gray-500">
                                    {product.data.category?.name || "-"}
                                </div>
                            </div>

                            <div className="mt-4 flex justify-start">
                                <div className="mr-2 text-md bold min-w-64">
                                    Product Description:
                                </div>
                                <div className="text-md text-gray-500">
                                    {product.data.description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};
export default Show;
