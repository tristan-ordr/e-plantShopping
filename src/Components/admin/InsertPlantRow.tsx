import * as React from "react";

export default function TableRowNewPlant({categoryList, insertPlant, setInsertPlant}) {
    const updatePlant = (key: string, value: string)=>  {
        setInsertPlant(prevState=> ({
            ...prevState,
            [key]: value
        }));
    }

    return (
        <tr
            key="new-plant"
        >
            <td></td>
            <td className="p-2">
                <input
                    data-1p-ignore
                    id="insert-plant-name-input"
                    type="text"
                    name="name"
                    value={insertPlant.name}
                    onChange={(event) => {
                        updatePlant(event.target.name, event.target.value)
                    }}
                />
            </td>
            <td className="p-2">
                <input
                    data-1p-ignore
                    type="text"
                    name="cost"
                    value={insertPlant.cost}
                    onChange={(event) => {
                        updatePlant(event.target.name, event.target.value)
                    }}
                />
            </td>
            <td className="p-2">
                <input
                    data-1p-ignore
                    type="text"
                    name="description"
                    value={insertPlant.description}
                    onChange={(event) => {
                        updatePlant(event.target.name, event.target.value)
                    }}
                />
            </td>
            <td className="p-2">
                <input
                    data-1p-ignore
                    type="text"
                    name="image"
                    value={insertPlant.image}
                    onChange={(event) => {
                        updatePlant(event.target.name, event.target.value)
                    }}
                />
            </td>
            <td className="p-2 pr-4">
                <select
                    name="category_id"
                    id="category-select"
                    value={insertPlant.category_id}
                    onChange={(event) => {
                        updatePlant(event.target.name, event.target.value)
                    }}
                >
                    <option value={-1}>--- Select a category ---</option>
                    {
                        categoryList.map (category => (
                            <option
                                key={category.id}
                                value={category.id}
                            >
                                {category.name}
                            </option>
                        ))
                    }
                </select>
            </td>
        </tr>
    )
}