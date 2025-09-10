import * as React from "react";
import {gql} from "@apollo/client";
import {useMutation} from "@apollo/client/react";

const INSERT_PLANT = gql`
    mutation InsertPlant($plant: PlantInput!) {
        createPlant(plant: $plant) {
            id
            name
        }
    }
`;

export default function InsertPlantButton({plant, onComplete}) {
    const [mutate, {data, loading, error}] = useMutation(INSERT_PLANT)

    const insertPlant = () => {
        console.log(plant);

        mutate({variables: {plant}})
            .then(result => {
                onComplete()
            })
            .catch(e => {
                console.log(e)
            });
    }

    return (
        <button
            onClick={insertPlant}
            className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3 insert-row">
            <span className="inline-block">Insert</span>
        </button>
    )
}