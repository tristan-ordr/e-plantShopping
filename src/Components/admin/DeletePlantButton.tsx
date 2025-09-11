import * as React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {gql} from "@apollo/client";
import {useMutation} from "@apollo/client/react";
import {DashboardModal} from "./Dashboard";

const DELETE_PLANT = gql`
    mutation DeletePlant($id: ID!) {
        deletePlant(id: $id) {
            id
        }
    }
`;

export default function DeletePlantButton(props: DeleteButtonProps) {
    const {modal, setModal} = props;

    const [mutate] = useMutation(DELETE_PLANT, {
        refetchQueries: [
            "GetPlants"
        ]
    })

    const onDelete = () => {
        mutate({variables: {id: modal.data.plantId}})
            .then( _ => {
                setModal((prevState: DashboardModal) => ({...prevState, type: null, data: {plantId: null}}))
            })
            .catch(e => {
                console.log(e)
            })
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

interface DeleteButtonProps {
    modal: DashboardModal
    setModal:  React.Dispatch<React.SetStateAction<DashboardModal>>
}