import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Create = ({ auth, categories }: any) => {
    const { data, setData, post }: any = useForm({
        name: "",
        description: "",
        price: "",
        category_id: "",
        image: "",
    });
    const submit: any = (e: any) => {
        e.preventDefault();
        post(route("products.store"));
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Create Product
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                <form action="" className="space-y-6">
                                    <div>
                                        <InputLabel
                                            value="Product Name"
                                            htmlFor="name"
                                        />
                                        <TextInput
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={data.name}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                            className="mt-1 block w-full"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            value="Description"
                                            htmlFor="description"
                                        />
                                        <TextInput
                                            id="description"
                                            name="description"
                                            type="text"
                                            value={data.description}
                                            onChange={(e) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            className="mt-1 block w-full"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            value="Price"
                                            htmlFor="price"
                                        />
                                        <TextInput
                                            id="price"
                                            name="price"
                                            type="number"
                                            step={0.01}
                                            value={data.price}
                                            onChange={(e) =>
                                                setData("price", e.target.value)
                                            }
                                            className="mt-1 block w-full"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            value="Category"
                                            htmlFor="category_id"
                                        />
                                        <select
                                            id="category_id"
                                            name="category_id"
                                            value={data.category_id}
                                            onChange={(e) =>
                                                setData(
                                                    "category_id",
                                                    e.target.value
                                                )
                                            }
                                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                        >
                                            <option value="">
                                                Select Category
                                            </option>
                                            {categories.data.map(
                                                (category: any) => (
                                                    <option
                                                        key={category.id}
                                                        value={category.id}
                                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                                    >
                                                        {category.name}
                                                    </option>
                                                )
                                            )}
                                        </select>
                                    </div>
                                    <div>
                                        <InputLabel
                                            value="Product Image"
                                            htmlFor="image"
                                        />
                                        <TextInput
                                            id="image"
                                            name="image"
                                            type="file"
                                            onChange={(e) =>
                                                e.target.files &&
                                                setData(
                                                    "image",
                                                    e.target.files[0]
                                                )
                                            }
                                            className="p-1 mt-1 block w-full"
                                            style={{
                                                border: "1px solid #d1d5db",
                                            }}
                                        />
                                    </div>
                                    <div className="w-full flex items-center justify-end">
                                        <PrimaryButton
                                            className=" bg-amber-500 hover:bg-amber-600"
                                            onClick={submit}
                                        >
                                            Save
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};
export default Create;
