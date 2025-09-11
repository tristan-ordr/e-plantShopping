import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { gql } from "@apollo/client";
import {useMutation} from "@apollo/client/react";
import {useState} from "react";
import CategorySelector from "./CategorySelector";
import {GetPlantsQueryCategories} from "./PlantList";

// GraphQL Queries
const DELETE_CATEGORIES = gql`
    mutation DeleteCategories($ids: [ID!]) {
        deleteCategories(ids: $ids) {
            id
        }
    }
`;


export default function RemoveCategoriesDialog(props: RemoveCategoriesDialogProps) {
    const { categories, show, setShow } = props;

    const [ mutate ] = useMutation(DELETE_CATEGORIES, {
        refetchQueries: [
            "GetPlants"
        ]
    });

    const [selectedCategories, setSelectedCategories] = useState({});

    const handleSubmit = () => {
        const ids = Object
            .entries(selectedCategories)
            .flatMap(([id, selected]) => selected ? id : [])

        mutate({ variables: { ids }})
            .then( _ => {
                setSelectedCategories({});
                setShow(false);
            })
            .catch(e => {
                console.log(e)
            })
    }

    const handleClose = () => {
        setShow(false);
    };

    return (
        <Dialog
            open={show}
            onClose={handleClose}>
            <div
                className="w-full max-h-screen focus:outline-none relative p-8 bg-background dark:bg-secondaryBg rounded-xl overflow-y-auto md:w-[520px]">
                <div className="flex flex-col space-y-6">
                    <h1 className="text-xl font-semibold">Delete categories</h1>

                    <CategorySelector
                        categories={categories}
                        selectedCategories={selectedCategories}
                        setSelectedCategories={setSelectedCategories}
                    />

                    <div className="flex space-x-4 justify-end">
                        <button
                            onClick={()=> handleClose()}
                            className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 border-gray-200 text-foreground hover:bg-gray-200 hover:border-gray-300 disabled:bg-gray-100 disabled:border-gray-200 focus-visible:ring-gray-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3"
                            type="button">
                            <span className="inline-block">Cancel</span>
                        </button>
                        <button
                            onClick={() => handleSubmit()}
                            className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-red-500 border-red-500 text-white hover:bg-red-600 hover:border-red-600 disabled:bg-red-500 disabled:border-red-500 focus-visible:ring-red-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3"
                            type="button">
                            <DeleteForeverOutlinedIcon/>
                            <span className="inline-block">Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

interface RemoveCategoriesDialogProps {
    categories: GetPlantsQueryCategories[]
    show: boolean
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}
