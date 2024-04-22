import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";

const Create = ({ auth }: any) => {
    const { data, setData, post }: any = useForm({
        name: "",
        description: "",
    });
    const submit: any = (e: any) => {
        e.preventDefault();
        post(route("categories.store"));
    };
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
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div>
                                <form action="" className="space-y-6">
                                    <div>
                                        <InputLabel
                                            value="Category Name"
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
                                    <div className="w-full flex items-center justify-end">
                                        <PrimaryButton
                                            className="bg-blue-500 hover:bg-blue-700"
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