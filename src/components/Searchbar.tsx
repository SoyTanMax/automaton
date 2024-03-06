import React, { ChangeEventHandler } from "react";
import { SearchIcon } from "../icons/SearchIcon";

export function SearchBar({ placeholder, onChange }: Props){
    return ( 
        <div className="relative">
            <input placeholder={placeholder ?? 'Search'} onChange={onChange} type="text" className="bg-transparent pl-10 pr-4 py-2 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500" />
            <div className="absolute left-0 top-0.5 pl-3 pt-2 flex items-center pointer-events-none">
                <SearchIcon />
            </div>
        </div>
    )
};

type Props = {
    placeholder?: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}