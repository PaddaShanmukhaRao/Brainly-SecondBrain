import type { ReactElement } from "react";
interface ButtonProps{
        variant : "primary"|"secondary",
        text: string,
        startIcon?:ReactElement
}
const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-400"
}
const defultStyles = "px-4 py-2 rounded-md"
export default function Button({variant,text}:ButtonProps){
    return <button className={`${variantStyles[variant]} ${defultStyles}`}>
        {text}
    </button>
    
}