import * as React from 'react'

export default function FormDialogSelect({inputId, formLabel, options, selected, setValue}) {
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
                >
                    <option value={null}>--- Select a {formLabel} ---</option>
                    {
                        options.map ( o => (
                            <option
                                key={o.id}
                                value={o.id}
                                selected={selected === o.id}
                            >
                                {o.name}
                            </option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}

function FormDialogSelect1() {
    return (
        <div></div>
        // <div className="flex flex-col"><label className="text-xs font-semibold text-gray-600 mb-2"
        //                                       htmlFor="permission-select">Permission</label>
        //     <button type="button" role="combobox" aria-controls="radix-:rkt:" aria-expanded="false"
        //             aria-autocomplete="none" dir="ltr" data-state="closed" aria-label="Permission"
        //             id="permission-select"
        //             className="inline-flex items-center justify-between min-w-0 appearance-none border rounded-md text-foreground h-md py-2 px-3 gap-x-3 bg-transparent border-gray-200 hover:bg-gray-100 hover:border-gray-200 disabled:bg-transparent disabled:border-gray-200 focus:outline-none focus-visible:border-pink-400">
        //         <span>Can Edit</span><span aria-hidden="true"><div aria-hidden="true"
        //                                                                                          className="text-current icon-container icon-md text-2xl"><svg
        //         xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" stroke="currentColor"
        //         stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="feather feather-chevron-down"
        //         viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg></div></span></button>
        //     <select className="absolute border-none w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden" aria-hidden="true" tabIndex="-1"
        //             style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;">
        //         <option value="MEMBER">Can Edit</option>
        //         <option value="VIEWER">Can View</option>
        //     </select></div>
    )
}