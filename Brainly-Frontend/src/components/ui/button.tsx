import type { ReactElement } from "react";
interface ButtonProps {
  variant: "primary" | "secondary";
  text: string;
  startIcon?: ReactElement;
  onClick?:()=>void
}
const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-400",
};
const defultStyles = "px-4 py-2 rounded-md font-light flex items-center";
export default function Button({ variant, text, startIcon ,onClick}: ButtonProps) {
  return (
    <button onClick={onClick} className={`${variantStyles[variant]} ${defultStyles}`}>
      <div className="pr-2">
        {startIcon}
      </div>
      {text}
    </button>
  );
}
