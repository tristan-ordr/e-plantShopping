import * as React from 'react';
import {useEffect } from "react";

import {gql, TypedDocumentNode} from "@apollo/client";
import {useQuery} from "@apollo/client/react";
import {GetPlantsQuery} from "../../types/generated/schema";

import CachedIcon from '@mui/icons-material/Cached';
import NewLabelOutlinedIcon from '@mui/icons-material/NewLabelOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import NewCategoryDialog from "./NewCategoryDialog.js";
import EditPlantDialog from "./EditPlantDialog";
import RemoveCategoriesDialog from "./RemoveCategoriesDialog";
import TableRowNewPlant from "./TableRowNewPlant";
import InsertPlantButton from "./InsertPlantButton";

// GraphQL Query
export const GET_PLANTS: TypedDocumentNode<GetPlantsQuery> = gql`
    query GetPlants {
        plants {
            id
            name
            cost
            description
            image
            category {
                name
                id
            }
        }
        categories {
            id
            name
            plants { id }
        }
    }
`;

export type InventoryModalType = "new_category" | "remove_categories" | "edit_plant" | null;
export interface InventoryModal {
    type: InventoryModalType,
    data: {
        plantId: string | null
    }
}


export default function Inventory() {
    // Use Query
    const { loading, error, data, refetch } = useQuery(GET_PLANTS);
    const categoriesData = data && data.categories;

    // State
    const initialModalState: InventoryModal = {
        type: null,
        data: {
            plantId: null
        }
    }
    const [modal, setModal] = React.useState(initialModalState);

    const [showInsertPlant, setShowInsertPlant] = React.useState(false);
    const [insertPlant, setInsertPlant] = React.useState({
        name: "",
        cost: "",
        description: "",
        image: "",
        category_id: ""
    });

    // Event handlers
    const handleTableRowClicked = (plantId: string) => {
        setModal( (prevState: InventoryModal) => ({
            ...prevState,
            type: "edit_plant",
            data: {
                plantId: plantId
            }
        }));
    }

    // useEffect for interacting with the DOM:
    useEffect( () => {
        if (showInsertPlant) {
            const divElement = document.getElementById('plant-data-grid')!;
            divElement.scrollTop = divElement.scrollHeight + 40;

            const nameInput = document.getElementById('insert-plant-name-input')!
            nameInput.focus();
        }
    }, [showInsertPlant])

    return (<>
        <div className="relative flex items-center justify-center">
            <div className="absolute top-0 flex items-center left-0"></div>
            <p className="text-lg">Plants</p>
            <div className="absolute top-0 flex items-center right-0">
                <button
                    className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-transparent text-pink-500 dark:text-pink-700 hover:bg-pink-100 hover:border-pink-100 disabled:bg-transparent disabled:border-transparent focus-visible:ring-pink-600 focus-visible:bg-pink-100 h-[34px] py-1.5 rounded-md text-sm leading-5 space-x-2 w-[34px] px-0 flex-shrink-0"
                    title="Refresh data"
                    onClick={() => refetch()}
                >
                    <CachedIcon/>
                </button>
                <button
                    onClick={()=> setModal(prevState => ({...prevState, type: "new_category"}))}
                    className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-transparent dark:text-pink-700 hover:bg-pink-100 hover:border-pink-100 disabled:bg-transparent disabled:border-transparent focus-visible:ring-pink-600 focus-visible:bg-pink-100 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2 text-pink-500"
                    title="Add category">
                    <NewLabelOutlinedIcon className="mb-[2px] mr-[2px]"/>
                    Add category
                </button>
                { categoriesData && categoriesData.length > 1 && <button
                    onClick={()=> setModal(prevState => ({...prevState, type: "remove_categories"}))}
                    className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-transparent dark:text-pink-700 hover:bg-pink-100 hover:border-pink-100 disabled:bg-transparent disabled:border-transparent focus-visible:ring-pink-600 focus-visible:bg-pink-100 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2 text-pink-500"
                    title="Delete categories">
                        <DeleteForeverOutlinedIcon className="mb-[2px] mr-[2px]"/>
                    </button>
                }
            </div>
        </div>
        <div className="pt-1"></div>
        <div className="flex flex-col justify-between flex-grow mt-5">
            <div
                id="plant-data-grid"
                className="grid grid-cols-[minmax(0,1fr)] max-h-[360px]  overflow-x-auto flex-grow rounded-lg border border-gray-200">
                {
                    loading && <p>Loading...</p>
                }
                {
                    error && <p>Error : {error.message}</p>
                }
                { data && data.plants &&
                    <table className="w-[100%] border-collapse select-auto">
                        <thead className="bg:white hover:bg-gray-200 sticky top-0">
                        <tr>
                            <th scope="col" className="p-2 pl-4 text-left">id</th>
                            <th scope="col" className="p-2 text-left">name</th>
                            <th scope="col" className="p-2 text-left">cost</th>
                            <th scope="col" className="p-2 text-left">description</th>
                            <th scope="col" className="p-2 text-left">image</th>
                            <th scope="col" className="p-2 pr-4 text-left">category</th>
                        </tr>
                        </thead>
                        <tbody>
                        { data.plants.map((plant) => (
                            <tr
                                key={plant.id}
                                className="hover:bg-gray-200 whitespace-nowrap"
                                onClick={() => {handleTableRowClicked(plant.id)}}
                            >
                                <td className="p-2 pl-4">{plant.id}</td>
                                <td className="p-2">{plant.name}</td>
                                <td className="p-2">{plant.cost}</td>
                                <td className="p-2">{plant.description}</td>
                                <td className="p-2">{plant.image}</td>
                                <td className="p-2 pr-4">{plant.category.name}</td>
                            </tr>
                        ))}
                        { showInsertPlant &&
                            <TableRowNewPlant
                                categoryList={data.categories}
                                insertPlant={insertPlant}
                                setInsertPlant={setInsertPlant}
                            />
                        }
                        </tbody>
                    </table>
                }

            </div>
            <div className="space-x-3 flex justify-end pt-2">
                { !showInsertPlant &&
                    <button
                        onClick={() => {setShowInsertPlant(true)}}
                        className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-pink-200 text-pink-500 dark:text-pink-700 hover:bg-pink-100 hover:border-pink-200 disabled:bg-transparent disabled:border-pink-200 disabled:text-pink-700 focus-visible:ring-pink-600 focus-visible:bg-pink-100 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2 add-row mb-3">
                        <span className="inline-block">Add plant</span>
                    </button>
                }
                {showInsertPlant &&
                    <>
                        <button
                            onClick={() => setShowInsertPlant(false)}
                            className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 border-gray-200 text-foreground hover:bg-gray-200 hover:border-gray-300 disabled:bg-gray-100 disabled:border-gray-200 focus-visible:ring-gray-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3 cancel-insert-row">
                            <span className="inline-block">Cancel</span>
                        </button>

                        <InsertPlantButton
                            plant={insertPlant}
                            setInsertPlant={setInsertPlant}
                            setShowNewPlant={setShowInsertPlant}
                        />
                    </>
                }

            </div>
            { modal.type === "new_category" && <NewCategoryDialog
                modal={modal}
                setModal={setModal}
            /> }
            { data && modal.type === "remove_categories" && <RemoveCategoriesDialog
                categories={data.categories}
                modal={modal}
                setModal={setModal}
            /> }
            {  modal.type === "edit_plant" && <EditPlantDialog
                modal={modal}
                setModal={setModal}
            /> }
        </div>
    </>)
}


export interface PlantInputInterface {name: string, cost: string, description: string, image: string, category_id: string}

// Copied from the generated schema.ts file for convenience:
export type GetPlantsQueryPlants = { __typename: 'Plant', id: string, name: string, cost: string | null, description: string | null, image: string | null, category: { __typename: 'Category', name: string, id: string } }
export type GetPlantsQueryCategories = { __typename: 'Category', id: string, name: string, plants: Array<{ __typename: 'Plant', id: string }> | null }
