import PrimaryButton from "@/Components/PrimaryButton";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";

const Index = ({ auth, products }: any) => {
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Products
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                <div className="flex justify-between">
                                    <h1 className="text-xl font-semibold text-gray-800 leading-tight">
                                        All available products
                                    </h1>
                                    <PrimaryButton
                                        className=" bg-amber-500 hover:bg-amber-700"
                                        onClick={() => {
                                            router.get(
                                                route("products.create")
                                            );
                                        }}
                                    >
                                        Enter New Product
                                    </PrimaryButton>
                                </div>

                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Name
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Description
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Category
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Price
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {products.data.map((product: any) => (
                                            <tr
                                                key={product.id}
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                            >
                                                <th
                                                    scope="row"
                                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                                >
                                                    {product.name}
                                                </th>
                                                <td className="px-6 py-4">
                                                    {product.description}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {product.category.name}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {product.price}
                                                </td>

                                                <td className="px-6 py-4 space-x-2 w-72 min-w-72">
                                                    <PrimaryButton
                                                        className="bg-green-500 hover:bg-green-700"
                                                        onClick={() => {
                                                            router.get(
                                                                route(
                                                                    "products.show",
                                                                    product.id
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        View
                                                    </PrimaryButton>
                                                    <PrimaryButton
                                                        className="bg-yellow-500 hover:bg-yellow-700"
                                                        onClick={() => {
                                                            router.get(
                                                                route(
                                                                    "products.edit",
                                                                    product.id
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        Edit
                                                    </PrimaryButton>
                                                    <PrimaryButton
                                                        className="bg-red-500 hover:bg-red-700"
                                                        onClick={() => {
                                                            if (
                                                                window.confirm(
                                                                    "Are you sure you want to delete this category?"
                                                                )
                                                            ) {
                                                                router.delete(
                                                                    route(
                                                                        "products.destroy",
                                                                        product.id
                                                                    )
                                                                );
                                                            }
                                                        }}
                                                    >
                                                        Delete
                                                    </PrimaryButton>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};
export default Index;
