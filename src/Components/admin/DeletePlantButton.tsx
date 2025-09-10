import * as React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function DeletePlantButton() {
    const onDelete = () => {
        console.log("delete plant!")
    }

    return (
        <button
            className="text-red-800 p-2 mt-[-8px] hover:bg-red-100 rounded-lg transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2"
            onClick={() => onDelete() }
        >
            <DeleteIcon />
        </button>
    )
}