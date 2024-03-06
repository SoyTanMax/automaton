import React from "react"

export function SelectorIcon({color}: Props){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-selector" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke={color ?? "currentColor"} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M8 9l4 -4l4 4" />
            <path d="M16 15l-4 4l-4 -4" />
        </svg>
    )
}

type Props = {
    color?: string,
}