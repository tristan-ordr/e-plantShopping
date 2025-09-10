import * as React from "react";

import Dialog from "@mui/material/Dialog";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import {gql} from "@apollo/client";
import {useMutation, useQuery} from "@apollo/client/react";
import {useState} from "react";

// GraphQL Queries
const GET_CATEGORIES = gql`
    query GetCategories {
        categories {
            id
            name
            plants {
                id
                name
            }
        }
    }
`;

const DELETE_CATEGORIES = gql`
    mutation DeleteCategories($ids: [ID!]) {
        deleteCategories(ids: $ids) {
            id
        }
    }
`;

function CategoriesList({selectedCategories, setSelectedCategories}) {
    // Use Query
    const { loading, error, data } = useQuery(GET_CATEGORIES);

    const handleTableRowClicked = (categoryId: number) => {
        setSelectedCategories( prevState => ({
            ...prevState,
            [categoryId]: !prevState[categoryId]
        }));
    }

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error : {error.message}</p>
    }

    return (
        <>
            { !data.categories || data.categories.length < 1 &&
                <p>You *must* add some categories before you can remove any!</p>
            }
            { data && data.categories && data.categories.length > 1 && (
                    <>
                        <p className="m-4 pb-2">Select the empty categories you wish to remove, and then press the delete button to confirm. You are only able to delete empty categories.</p>
                        <div
                            id="category-data-grid"
                            className="grid grid-cols-[minmax(0,1fr)] max-h-[360px]  overflow-x-auto flex-grow rounded-lg border border-gray-200">
                            <table className="w-[100%] border-collapse select-auto">
                                <thead className="bg:white hover:bg-gray-200 sticky top-0">
                                <tr>
                                    <th scope="col" className="p-2 pl-4 text-left">id</th>
                                    <th scope="col" className="p-2 text-left">name</th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    data.categories
                                        .filter( category => category.plants.length < 1)
                                        .map( category => (
                                            <tr
                                                key={category.id}
                                                className={`whitespace-nowrap ${ selectedCategories[category.id] ?
                                                    "bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600" :
                                                    "bg-gray-100 border-gray-200 text-black hover:bg-gray-200 hover:border-gray-300 "}`}
                                                onClick={() => {handleTableRowClicked(category.id)}}
                                            >
                                                <td className="p-2 pl-4">{category.id}</td>
                                                <td className="p-2">{category.name}</td>
                                            </tr>
                                        ))
                                }
                                </tbody>
                            </table>
                        </div>
                    </>
                )
            }
        </>
    )
}


export default function RemoveCategoriesDialog({ show, setShow }) {
    const [selectedCategories, setSelectedCategories] = useState({});
    const [mutate, { data, loading, error} ] = useMutation(DELETE_CATEGORIES);

    const handleSubmit = () => {
        const ids = Object
            .entries(selectedCategories)
            .flatMap(([id, selected]) => selected ? id : [])

        mutate({ variables: { ids }})
            .then( result => {
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

                    <CategoriesList
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