import type { ReactNode } from "react";

export interface ButtonProps{
    variant :"primary"|"secondary";
    size:"sm"|"md"|"lg";
    text: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    onClick?: ()=>void;
}


const variantStyles = {
  primary: "bg-primary-500 text-white hover:bg-primary-700",
  secondary: "bg-primary-100 text-primary-700 hover:bg-primary-200",
};
const sizeStyles = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export const Button = ({
    variant,
    size,
    text,
    startIcon,
    endIcon,
    onClick
}:ButtonProps) =>(
    <div>
        <button onClick={onClick} className={`flex items-center justify-center gap-2 rounded-lg font-medium transition-colors ${variantStyles[variant]} ${sizeStyles[size]}`}
        >
            {startIcon && <span className="flex items-center">{startIcon}</span>}
            <span>{text}</span>
            {endIcon && <span className="flex items-center">{endIcon}</span>}
        </button>
    </div>
)