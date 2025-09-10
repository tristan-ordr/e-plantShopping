import * as React from "react";

export default function TableRowNewPlant({categoryList, insertPlant, setInsertPlant}) {
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>)  => {
        const {name, value} = event.target;

        setInsertPlant(prevState=> ({
            ...prevState,
            [name]: value
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
                    onChange={handleInput}
                />
            </td>
            <td className="p-2">
                <input
                    data-1p-ignore
                    type="text"
                    name="cost"
                    value={insertPlant.cost}
                    onChange={handleInput}
                />
            </td>
            <td className="p-2">
                <input
                    data-1p-ignore
                    type="text"
                    name="description"
                    value={insertPlant.description}
                    onChange={handleInput}
                />
            </td>
            <td className="p-2">
                <input
                    data-1p-ignore
                    type="text"
                    name="image"
                    value={insertPlant.image}
                    onChange={handleInput}
                />
            </td>
            <td className="p-2 pr-4">
                <select
                    name="category_id"
                    id="category-select"
                    value={insertPlant.category_id}
                    onChange={handleInput}
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