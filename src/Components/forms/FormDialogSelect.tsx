import * as React from "react";
import {CategoryArray, GetPlantQueryCategory} from "../admin/EditPlantDialog.tsx";

export default function FormDialogSelect(props: FormDialogSelectProps) {
    const {inputId, inputName, formLabel, options, selected, setValue} = props;
    return(
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
                <div className="flex space-x-1"><label
                    className="block text-xs font-semibold leading-[18px] text-gray-600 mb-2"
                    htmlFor={inputId}>{formLabel}</label></div>
            </div>
            <div className="flex items-center relative w-full">
                <select
                    className="w-full min-w-0 rounded-md text-foreground bg-transparent border border-gray-200 placeholder-gray-500 focus:outline-none relative z-10 hover:border-gray-400 focus:border-pink-400 text-base leading-6 px-3 py-2"
                    name={inputName}
                    value={selected}
                    onChange={setValue}
                >
                    <option value={-1}>--- Select a {formLabel} ---</option>
                    {
                        options && options.map ( o => (
                            <OptionElement option={o} />
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

function OptionElement(props: OptionElementProps) {
    const { option } = props
    if (!option) {
        return <></>
    }

    return <option
        key={option.id}
        value={option.id}
    >
        {option.name}
    </option>
}

interface OptionElementProps {
    option: GetPlantQueryCategory
}

interface FormDialogSelectProps {
    formLabel: string
    inputId: string
    inputName: string
    options: CategoryArray
    selected: string
    setValue: (event: React.ChangeEvent<HTMLSelectElement>) => void
}