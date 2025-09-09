import * as React from "react";

import {Drawer} from "@mui/material";
import {gql, TypedDocumentNode} from "@apollo/client";
import {useQuery} from "@apollo/client/react";
import {GetPlantQuery} from "../../types/generated/schema";
import FormDialogTextInput from "../forms/FormDialogTextInput";
import FormDialogSelect from "../forms/FormDialogSelect";

export default function EditPlantDialog({show, setShow, plantId, setPlantId }) {
    const GET_PLANT: TypedDocumentNode<GetPlantQuery> = gql`
        query GetPlant($plantId: ID!) {
            plant(id: $plantId) {
                name
                cost
                description
                image
                category {
                    id
                    name
                }
            }
            categories {
                id
                name
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_PLANT, {
        variables: { plantId }
    });

    const handleSelectChange = () => {

    }

    const handleChange = () => {

    }

    const handleSubmit = () => {
        console.log("submit");
        setShow(false);
    }

    const handleClose = () => {
        setPlantId(null)
        setShow(false);
    }

    // Rendering
    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error : {error.message}</p>;

    return (
        <Drawer
            anchor="right"
            open={show}
            onClose={handleClose}
        >
            <div
                className="w-full max-h-screen focus:outline-none relative p-8 bg-background dark:bg-secondaryBg rounded-xl overflow-y-auto md:w-[520px]">
                <div className="flex flex-col space-y-6">
                    <h1 className="text-xl font-semibold">Edit plant</h1>
                    {
                        loading && <p>Loading...</p>
                    }
                    {
                        error && <p>Error : {error.message}</p>
                    }
                    {
                        data && <form name="Insert category" className="space-y-5 mt-6">
                            <FormDialogTextInput
                                formLabel="name"
                                inputId="name"
                                inputName="name"
                                inputValue={data.plant.name}
                                setValue={handleChange}
                            />
                            <FormDialogTextInput
                                formLabel="cost"
                                inputId="cost"
                                inputName="cost"
                                inputValue={data.plant.cost}
                                setValue={handleChange}
                            />
                            <FormDialogTextInput
                                formLabel="description"
                                inputId="description"
                                inputName="description"
                                inputValue={data.plant.description}
                                setValue={handleChange}
                            />
                            <FormDialogTextInput
                                formLabel="image"
                                inputId="image"
                                inputName="image"
                                inputValue={data.plant.image}
                                setValue={handleChange}
                            />
                            <FormDialogSelect
                                formLabel="category"
                                inputId="category"
                                options={data.categories}
                                selected={data.plant.category.id}
                                setValue={handleSelectChange}
                            />
                            <div className="flex space-x-4 justify-end">
                                <button
                                    onClick={() => {setShow(false)}}
                                    className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 border-gray-200 text-foreground hover:bg-gray-200 hover:border-gray-300 disabled:bg-gray-100 disabled:border-gray-200 focus-visible:ring-gray-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3"
                                    type="button">
                                <span className="inline-block">
                                    Cancel
                                </span>
                                </button>
                                <button
                                    onClick={() => {handleSubmit()}}
                                    type="button"
                                    className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3">
                                    <span className="inline-block">Save</span></button>
                            </div>
                        </form>
                    }
                </div>
            </div>
        </Drawer>
    )
}