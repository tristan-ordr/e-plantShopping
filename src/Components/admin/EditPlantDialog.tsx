import * as React from "react";

import Dialog from "@mui/material/Dialog";


export default function EditPlantDialog({show, setShow, plantId, setPlantId }) {
    const handleSubmit = () => {
        console.log("submit");

        setShow(false);
    }

    const handleClose = () => {
        setPlantId(null)
        setShow(false);
    }

    return (
        <Dialog
            open={show}
            onClose={handleClose}
        >
            <div
                className="w-full max-h-screen focus:outline-none relative p-8 bg-background dark:bg-secondaryBg rounded-xl overflow-y-auto md:w-[520px]">
                <div className="flex flex-col space-y-6">
                    <h1 className="text-xl font-semibold">Edit Plant {plantId}</h1>
                    <form name="Insert category" className="space-y-5 mt-6">
                        <div className="flex flex-col w-full">
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-1"><label
                                    className="block text-xs font-semibold leading-[18px] text-gray-600 mb-2"
                                    htmlFor="input-default-:r7l:">Name</label></div>
                            </div>
                            <div className="flex items-center relative w-full">
                                <input id="input-default-:r7l:"
                                  name="default"
                                  className="w-full min-w-0 rounded-md text-foreground bg-transparent border border-gray-200 placeholder-gray-500 focus:outline-none relative z-10 hover:border-gray-400 focus:border-pink-400 text-base leading-6 px-3 py-2"
                                  value=""/>
                            </div>
                        </div>
                        <div className="flex space-x-4 justify-end">
                            <button
                                onClick={() => {setShow(false)}}
                                className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 border-gray-200 text-foreground hover:bg-gray-200 hover:border-gray-300 disabled:bg-gray-100 disabled:border-gray-200 focus-visible:ring-gray-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3"
                                type="button">
                                <span className="inline-block">
                                    Cancel
                                </span>
                            </button>
                            <button
                                onClick={() => {handleSubmit()}}
                                type="button"
                                className="group/button flex items-center justify-center border transform transition-transform duration-50 active:scale-95 focus:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 bg-pink-500 border-pink-500 text-white hover:bg-pink-600 hover:border-pink-600 disabled:bg-pink-500 disabled:border-pink-500 focus-visible:ring-pink-600 h-[42px] py-2 px-3 rounded-md text-base leading-6 space-x-3">
                                <span className="inline-block">Add plant</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </Dialog>
    )
}