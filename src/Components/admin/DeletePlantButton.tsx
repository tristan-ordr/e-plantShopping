import * as React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import {gql} from "@apollo/client";
import {useMutation} from "@apollo/client/react";
import {DashboardModalState} from "./Dashboard";

const DELETE_PLANT = gql`
    mutation DeletePlant($id: ID!) {
        deletePlant(id: $id) {
            id
        }
    }
`;

export default function DeletePlantButton(props: DeleteButtonProps) {
    const {modalState, setModalState} = props;

    const [mutate] = useMutation(DELETE_PLANT, {
        refetchQueries: [
            "GetPlants"
        ]
    })

    const onDelete = () => {
        mutate({variables: {id: modalState.modalData.plantId}})
            .then( _ => {
                setModalState((prevState: DashboardModalState) => ({...prevState, modalType: null, modalData: {plantId: null}}))
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
    modalState: DashboardModalState
    setModalState:  React.Dispatch<React.SetStateAction<DashboardModalState>>
}