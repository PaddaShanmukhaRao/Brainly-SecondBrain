import type { ReactElement } from "react"

export function SidebarItem({icon,text}:{
    icon:ReactElement,
    text:string
}){
    return<>
    {icon} {text}
    </>
}