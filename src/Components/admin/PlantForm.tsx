import * as React from 'react';
import {useState} from "react";
import FormDialogTextInput from "../forms/FormDialogTextInput";
import FormDialogSelect from "../forms/FormDialogSelect";
import {gql} from "@apollo/client";
import { useMutation } from '@apollo/client/react';

const UPDATE_PLANT = gql`
    mutation UpdatePlant($id: ID!, $edits: EditPlantInput!) {
        updatePlant(id: $id, edits: $edits) {
            id
            name
        }
    }
`;


export default function PlantForm({data, closeModal}) {
    const [mutate] = useMutation(UPDATE_PLANT);

    const [localData, setLocalData] = useState({
        name: data.plant.name,
        cost: data.plant.cost,
        description: data.plant.description,
        image: data.plant.image,
        category_id: data.plant.category.id
    });

    const handleSubmit = () => {
        mutate({variables: {id: data.plant.id, edits: localData}})
            .then(() => {
                closeModal();
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setLocalData(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    return (
        <form name="Edit plant" className="space-y-5 mt-6">
            <FormDialogTextInput
                formLabel="name"
                inputId="name"
                inputName="name"
                inputValue={ localData["name"] }
                setValue={handleChange}
                inputError={null}
            />
            <FormDialogTextInput
                formLabel="cost"
                inputId="cost"
                inputName="cost"
                inputValue={ localData["cost"] }
                setValue={handleChange}
                inputError={null}
            />
            <FormDialogTextInput
                formLabel="description"
                inputId="description"
                inputName="description"
                inputValue={ localData["description"] }
                setValue={handleChange}
                inputError={null}
            />
            <FormDialogTextInput
                formLabel="image"
                inputId="image"
                inputName="image"
                inputValue={ localData["image"] }
                setValue={handleChange}
                inputError={null}
            />
            <FormDialogSelect
                formLabel="category"
                inputId="category"
                inputName="category_id"
                options={data.categories}
                selected={localData["category_id"]}
                setValue={handleChange}
            />

            <div className="flex space-x-4 justify-end">
                <button
                    onClick={closeModal}
                    className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 border-gray-200 text-foreground hover:bg-gray-200 hover:border-gray-300 disabled:bg-gray-100 disabled:border-gray-200 focus-visible:ring-gray-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3"
                    type="button">
                    <span className="inline-block">Cancel</span>
                </button>
                <button
                    onClick={handleSubmit}
                    type="button"
                    className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3">
                    <span className="inline-block">Save</span>
                </button>
            </div>
        </form>
    )
}