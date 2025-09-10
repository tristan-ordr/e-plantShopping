import * as React from "react";

export default function CategorySelector({categories, selectedCategories, setSelectedCategories}) {
    const handleTableRowClicked = (categoryId: number) => {
        setSelectedCategories( prevState => ({
            ...prevState,
            [categoryId]: !prevState[categoryId]
        }));
    }

    return (
        <>
            { categories.length < 1 &&
                <p>You *must* add some categories before you can remove any!</p>
            }
            { categories.length > 1 && (
                <>
                    <p className="m-4 pb-2">
                        Select the categories you wish to remove, and then press the delete button to confirm.
                        You are only able to delete empty categories.
                    </p>
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
                                categories
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