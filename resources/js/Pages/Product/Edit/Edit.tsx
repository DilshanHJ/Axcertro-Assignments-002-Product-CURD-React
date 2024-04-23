import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React from "react";
import Dropzone from "react-dropzone";

const Edit = ({ auth, product, categories }: any) => {
    const { data, setData, post }: any = useForm({
        name: product.data.name,
        description: product.data.description,
        price: product.data.price,
        category_id: product.data.category?.id || 0,
        image: "",
    });
    const submit: any = (e: any) => {
        e.preventDefault();
        post(route("products.update", product.data.id));
    };
    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Update Product
                </h2>
            }
        >
            <Head title="Update Product" />
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
                                    <div style={{ display: "none" }}>
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
                                    <div>
                                        <InputLabel
                                            value="Product Image"
                                            htmlFor="image2"
                                        />
                                        <Dropzone
                                            onDrop={(acceptedFiles) => {
                                                setData(
                                                    "image",
                                                    acceptedFiles[0]
                                                );
                                                console.log(data);
                                            }}
                                        >
                                            {({
                                                getRootProps,
                                                getInputProps,
                                            }) => (
                                                <section>
                                                    <div
                                                        style={{
                                                            border: "1px solid #d1d5db",
                                                            borderRadius: "5px",
                                                            padding: "20px",
                                                            width: "100%",
                                                            height: "200px",
                                                            display: "flex",
                                                            flexDirection:
                                                                "column",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                        {...getRootProps()}
                                                    >
                                                        <input
                                                            {...getInputProps()}
                                                        />
                                                        <div className="text-center">
                                                            {data.image ? (
                                                                <div className="w-full h-full flex flex-col justify-center items-center">
                                                                    <img
                                                                        className="max-h-[150px]"
                                                                        src={URL.createObjectURL(
                                                                            data.image
                                                                        )}
                                                                        alt=""
                                                                    />
                                                                    <p className="text-center">
                                                                        {
                                                                            data
                                                                                .image
                                                                                .name
                                                                        }
                                                                    </p>
                                                                </div>
                                                            ) : (
                                                                "Drag and drop an image here or click to select an image"
                                                            )}
                                                        </div>
                                                    </div>
                                                </section>
                                            )}
                                        </Dropzone>
                                    </div>
                                    <div className="w-full flex items-center justify-end">
                                        <PrimaryButton
                                            className=" bg-blue-500 hover:bg-blue-700"
                                            onClick={submit}
                                        >
                                            Update
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
export default Edit;
