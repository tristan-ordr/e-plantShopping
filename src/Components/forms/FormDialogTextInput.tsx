import * as React from "react";
import {ErrorLike} from "@apollo/client";

export default function FormDialogTextInput(props: FormDialogTextInputProps) {
    const {formLabel, inputId, inputName, inputValue, setValue, inputError} = props
    return(
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
                <div className="flex space-x-1"><label
                    className="block text-xs font-semibold leading-[18px] text-gray-600 mb-2"
                    htmlFor={inputId}>{formLabel}</label></div>
            </div>
            <div className="flex items-center relative w-full">
                <input
                    className={`w-full min-w-0 rounded-md text-foreground bg-transparent border placeholder-gray-500 focus:outline-none relative z-10 text-base leading-6 px-3 py-2 ${inputError? "border-red-500 " : "border-gray-200 hover:border-gray-400 focus:border-pink-400 "} `}
                    data-1p-ignore
                    id={inputId}
                    name={inputName}
                    value={inputValue ? inputValue : undefined}
                    onChange={setValue}
                />
            </div>
            { inputError && <div className="text-xs m-1 text-red-600">
                <p>{inputError.message}</p>
            </div>}
        </div>
    )
}

interface FormDialogTextInputProps {
    formLabel: string
    inputId: string
    inputName: string
    inputValue: string | null
    setValue: (event: React.ChangeEvent<HTMLInputElement>) => void
    inputError: ErrorLike | undefined | null
}