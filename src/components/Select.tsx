import React, { ChangeEventHandler } from "react";
import { SelectorIcon } from "../icons/SelectorIcon";

export function Select({ options, placeholder, defaultValue, onChange }: Props) {
    return (
        <div className="relative">
            <select
                defaultValue={defaultValue} 
                onChange={onChange}
                className="appearance-none bg-transparent pl-4 pr-10 py-2 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 w-full"
            >
                {placeholder && <option value="" disabled={!defaultValue}>{placeholder ?? defaultValue}</option>}
                {options.map((option, index) => (
                    <option key={index} value={option.value} className="text-gray-700 bg-white">
                        {option.label}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <SelectorIcon />
            </div>
        </div>
    );
};

type Props = {
    options: { value: string; label: string }[];
    placeholder?: string;
    defaultValue?: string;
    onChange: ChangeEventHandler<HTMLSelectElement>;
};