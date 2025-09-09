import * as React from 'react';

export default function FormDialogTextInput({formLabel, inputId, inputName, inputValue, setValue}) {
    return(
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center">
                <div className="flex space-x-1"><label
                    className="block text-xs font-semibold leading-[18px] text-gray-600 mb-2"
                    htmlFor={inputId}>{formLabel}</label></div>
            </div>
            <div className="flex items-center relative w-full">
                <input
                    className="w-full min-w-0 rounded-md text-foreground bg-transparent border border-gray-200 placeholder-gray-500 focus:outline-none relative z-10 hover:border-gray-400 focus:border-pink-400 text-base leading-6 px-3 py-2"
                    id={inputId}
                    name={inputName}
                    value={inputValue}
                    onChange={setValue}
                />
            </div>
        </div>
    )
}