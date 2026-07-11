export interface ButtonProps{
    variant :"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    startIcon: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    endIcon: any;
    onClick: ()=>void;
}

export const Button = (props:ButtonProps) =>{
    
    return(
        <div>
            <button>{props.text}</button>
        </div>
    )
}