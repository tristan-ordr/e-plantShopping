import * as React from "react";

import {Drawer} from "@mui/material";
import {gql, TypedDocumentNode} from "@apollo/client";
import {useQuery} from "@apollo/client/react";
import {GetPlantQuery, GetPlantQueryVariables} from "../../types/generated/schema";

import PlantForm from "./PlantForm";
import DeletePlantButton from "./DeletePlantButton";
import {DashboardModalState} from "./Dashboard";

const GET_PLANT: TypedDocumentNode<GetPlantQuery, GetPlantQueryVariables> = gql`
    query GetPlant($plantId: ID!) {
        plant(id: $plantId) {
            id
            name
            cost
            description
            image
            category {
                id
                name
            }
        }
        categories {
            id
            name
        }
    }
`;


export default function EditPlantDialog(props: EditPlantDialogProps) {
    const { modalState, setModalState } = props

    const { loading, error, data } = useQuery(GET_PLANT, {
        variables: { plantId: modalState.modalData.plantId }
    });

    const closeModal = () => {
        setModalState( (prevState: DashboardModalState) => ({ ...prevState, modalType: null, modalData: { plantId: null }}))
    }

    return (
        <Drawer
            anchor="right"
            open={modalState.modalType === "edit_plant"}
            onClose={closeModal}
        >
            <div
                className="w-full max-h-screen focus:outline-none relative p-8 bg-background dark:bg-secondaryBg rounded-xl overflow-y-auto md:w-[520px]">
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-row mb-1 justify-between align-center">
                        <h1 className="text-xl font-semibold align-middle">Edit plant</h1>
                        <DeletePlantButton
                            modalState={modalState}
                            setModalState={setModalState}
                        />
                    </div>
                    {
                        loading && <p>Loading...</p>
                    }
                    {
                        error && <p>Error : {error.message}</p>
                    }
                    { data && (<>
                        <PlantForm
                            data={data}
                            closeModal={closeModal}
                        />
                    </>)}
                </div>
            </div>
        </Drawer>
    )
}

interface EditPlantDialogProps {
    modalState: DashboardModalState
    setModalState:  React.Dispatch<React.SetStateAction<DashboardModalState>>
}