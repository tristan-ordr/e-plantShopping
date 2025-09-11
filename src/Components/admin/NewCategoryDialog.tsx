import * as React from "react";

import Dialog from "@mui/material/Dialog";
import { useState } from "react";
import FormDialogTextInput from "../forms/FormDialogTextInput";
import {gql, TypedDocumentNode} from "@apollo/client";
import { useMutation } from "@apollo/client/react";
import {InsertCategoryMutation, InsertCategoryMutationVariables} from "../../types/generated/schema";
import {DashboardModalState} from "./Dashboard";

const INSERT_CATEGORY: TypedDocumentNode<InsertCategoryMutation, InsertCategoryMutationVariables> = gql`
    mutation InsertCategory($name: String!) {
        createCategory(name: $name) {
            id
            name
        }
    }
`;


export default function NewCategoryDialog(props: NewCategoryDialogProps) {
    const { modalState, setModalState } = props;
    const [name, setName] = useState("")

    const [mutate, { error }] = useMutation(INSERT_CATEGORY, {
        refetchQueries: [
            "GetPlants"
        ]
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }

    const handleSubmit = () => {
        mutate({variables: { name }})
            .then( _ => {
                setName("");
                setModalState((prevState: DashboardModalState) => ({...prevState, modalType: null}));
            })
            .catch(e => {
                console.log(e);
            });
    }

    const handleClose = () => {
        setModalState((prevState: DashboardModalState) => ({...prevState, modalType: null}));
    };
    return (
        <Dialog
            open={modalState.modalType === "new_category"}
            onClose={handleClose}>
            <div
                className="w-full max-h-screen focus:outline-none relative p-8 bg-background dark:bg-secondaryBg rounded-xl overflow-y-auto md:w-[520px]">
                <div className="flex flex-col space-y-6">
                    <h1 className="text-xl font-semibold">Insert category</h1>
                    <form name="Insert category" className="space-y-5 mt-6">
                        <FormDialogTextInput
                            formLabel="Name"
                            inputId="category-name"
                            inputName="categoryName"
                            inputValue={name}
                            setValue={handleChange}
                            inputError={error}
                        />

                        <div className="flex space-x-4 justify-end">
                            <button
                                onClick={()=> handleClose()}
                                className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 border-gray-200 text-foreground hover:bg-gray-200 hover:border-gray-300 disabled:bg-gray-100 disabled:border-gray-200 focus-visible:ring-gray-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3"
                                type="button">
                                <span className="inline-block">Cancel</span>
                            </button>
                            <button
                                onClick={() => handleSubmit()}
                                className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3"
                                type="button">
                                <span className="inline-block">Add category</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    )
}

interface NewCategoryDialogProps {
    modalState: DashboardModalState
    setModalState:  React.Dispatch<React.SetStateAction<DashboardModalState>>
}