import * as React from 'react';
import {gql, TypedDocumentNode} from "@apollo/client";
import {useQuery} from "@apollo/client/react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CachedIcon from '@mui/icons-material/Cached';
import NewLabelOutlinedIcon from '@mui/icons-material/NewLabelOutlined';
import NewCategoryDialog from "./NewCategoryDialog.js";
import {GetPlantsQuery} from "../../types/generated/schema";

export default function PlantList() {
    const GET_PLANTS: TypedDocumentNode<GetPlantsQuery> = gql`
        query GetPlants {
            plants {
                id
                name
                cost
                description
                image
                category {
                    name
                }
            }
            categories {
                id
                name
            }
        }
        `;

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState([]);

    const { loading, error, data, refetch } = useQuery(GET_PLANTS);


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    const hideBackButton = true



    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // @ts-ignore
    return (
        <div className="flex-1">
            <div className="flex flex-col space-y-1">
                <div className="flex flex-col flex-grow mt-5">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute top-0 flex items-center left-0">
                            <button
                                className={`group/button ${hideBackButton ? "hidden" : "flex"} items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-transparent text-foreground hover:bg-gray-100 hover:border-gray-100 disabled:bg-transparent disabled:border-transparent focus-visible:ring-gray-600 focus-visible:bg-gray-100 h-[34px] py-1.5 rounded-md text-sm leading-5 space-x-2 w-[34px] px-0 flex-shrink-0`}>
                                <ArrowBackIcon/>
                            </button>
                        </div>
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
                                onClick={()=> handleClickOpen()}
                                className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-transparent dark:text-pink-700 hover:bg-pink-100 hover:border-pink-100 disabled:bg-transparent disabled:border-transparent focus-visible:ring-pink-600 focus-visible:bg-pink-100 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2 text-pink-500"
                                title="Add category">
                                <NewLabelOutlinedIcon className="mb-[2px] mr-[2px]"/>
                                Add category
                            </button>
                        </div>
                    </div>
                    <div className="pt-1"></div>
                    <div className="flex flex-col justify-between flex-grow mt-5">
                        <div
                            className="grid grid-cols-[minmax(0,1fr)] max-h-[360px]  overflow-x-auto flex-grow rounded-lg border border-gray-200">
                            <table className="w-[100%] border-collapse select-auto">
                                <thead className="bg:white hover:bg-gray-200 sticky top-0">
                                <tr>
                                    <th scope="col" className="p-2 pl-4 text-left">id</th>
                                    <th scope="col" className="p-2 text-left">name</th>
                                    <th scope="col" className="p-2 text-left">image</th>
                                    <th scope="col" className="p-2 text-left">cost</th>
                                    <th scope="col" className="p-2 text-left">description</th>
                                    <th scope="col" className="p-2 pr-4 text-left">category</th>
                                </tr>
                                </thead>
                                <tbody>
                                {data.plants.map((plant, index) => (
                                    <tr key={index} className="hover:bg-gray-200 whitespace-nowrap">
                                        <td className="p-2 pl-4">{plant.id}</td>
                                        <td className="p-2">{plant.name}</td>
                                        <td className="p-2">{plant.image}</td>
                                        <td className="p-2">{plant.cost}</td>
                                        <td className="p-2">{plant.description}</td>
                                        <td className="p-2 pr-4">{plant.category.name}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="space-x-3 flex justify-end pt-2">
                            <button
                                className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-transparent border-pink-200 text-pink-500 dark:text-pink-700 hover:bg-pink-100 hover:border-pink-200 disabled:bg-transparent disabled:border-pink-200 disabled:text-pink-700 focus-visible:ring-pink-600 focus-visible:bg-pink-100 h-[34px] py-1.5 px-3 rounded-md text-sm leading-5 space-x-2 add-row mb-3">
                                <span className="inline-block">Add plant</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <NewCategoryDialog
                open={open}
                onClose={handleClose}
            />
        </div>
    )
}
