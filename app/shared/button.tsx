// import React from "react";
interface button {
    text: string,
    border?: boolean,
    bg?: string,
    custom:string
}
function Button({ text,border=true,custom }: button) {
    
    return (
        
        <button className= {` ${border && "border border-slate-200"} ${custom} w-28 px-6 py-1 rounded-md`}>
            {text}
        </button>

    )
}
export default Button;