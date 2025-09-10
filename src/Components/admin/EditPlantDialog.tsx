import * as React from "react";

import {Drawer} from "@mui/material";
import {gql, TypedDocumentNode} from "@apollo/client";
import {useQuery} from "@apollo/client/react";
import {GetPlantQuery, GetPlantQueryVariables} from "../../types/generated/schema";

import PlantForm from "./PlantForm";
import DeletePlantButton from "./DeletePlantButton";

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


export default function EditPlantDialog({show, setShow, plantId, setPlantId, refetch }) {
    const { loading, error, data } = useQuery(GET_PLANT, {
        variables: { plantId }
    });

    const handleSubmit = () => {
        refetch();
        setPlantId(null)
        setShow(false);
    }

    const handleClose = () => {
        setPlantId(null)
        setShow(false);
    }

    return (
        <Drawer
            anchor="right"
            open={show}
            onClose={handleClose}
        >
            <div
                className="w-full max-h-screen focus:outline-none relative p-8 bg-background dark:bg-secondaryBg rounded-xl overflow-y-auto md:w-[520px]">
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-row mb-1 justify-between align-center">
                        <h1 className="text-xl font-semibold align-middle">Edit plant</h1>
                        <DeletePlantButton
                            plantId={plantId}
                            onComplete={() => {
                                refetch();
                                handleClose();
                            }}
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
                            onCancel={handleClose}
                            onSubmit={handleSubmit}
                        />
                    </>)}
                </div>
            </div>
        </Drawer>
    )
}