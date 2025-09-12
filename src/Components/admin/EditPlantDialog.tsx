import * as React from "react";

import {Drawer} from "@mui/material";
import {gql, TypedDocumentNode} from "@apollo/client";
import {useQuery} from "@apollo/client/react";
import {GetPlantQuery, GetPlantQueryVariables } from "../../types/generated/schema";

import PlantForm from "./PlantForm";
import DeletePlantButton from "./DeletePlantButton";
import {InventoryModal} from "./Inventory.tsx";

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
    const { modal, setModal } = props

    const { loading, error, data } = useQuery(GET_PLANT, {
        variables: { plantId: modal.data.plantId! }
    });

    const closeModal = () => {
        setModal( (prevState: InventoryModal) => ({ ...prevState, type: null, data: { plantId: null }}))
    }

    return (
        <Drawer
            anchor="right"
            open={modal.type === "edit_plant"}
            onClose={closeModal}
        >
            <div
                className="w-full max-h-screen focus:outline-none relative p-8 bg-background dark:bg-secondaryBg rounded-xl overflow-y-auto md:w-[520px]">
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-row mb-1 justify-between align-center">
                        <h1 className="text-xl font-semibold align-middle">Edit plant</h1>
                        <DeletePlantButton
                            modal={modal}
                            setModal={setModal}
                        />
                    </div>
                    {
                        loading && <p>Loading...</p>
                    }
                    {
                        error && <p>Error : {error.message}</p>
                    }
                    { data && data.plant && (<>
                        <PlantForm
                            plant={data.plant}
                            categories={data.categories}
                            closeModal={closeModal}
                        />
                    </>)}
                </div>
            </div>
        </Drawer>
    )
}

interface EditPlantDialogProps {
    modal: InventoryModal
    setModal:  React.Dispatch<React.SetStateAction<InventoryModal>>
}

export type GetPlantQueryCategory = {__typename: "Category", id: string, name: string} | null
export type CategoryArray = GetPlantQueryCategory[] | null
