import * as React from 'react';
import {useState} from "react";
import FormDialogTextInput from "../forms/FormDialogTextInput";
import FormDialogSelect from "../forms/FormDialogSelect";

export default function PlantForm({data}) {
    const [localData, setLocalData] = useState({
        name: data.plant.name,
        cost: data.plant.cost,
        description: data.plant.description,
        image: data.plant.image,
        category: data.plant.category.id
    });

    const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocalData(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }

    return (
        <form name="Insert category" className="space-y-5 mt-6">
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
                options={data.categories}
                selected={localData["category"]}
                setValue={handleSelectChange}
            />
        </form>
    )
}