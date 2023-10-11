import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  width?: string;
  sm?: boolean;
  color?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}

const Button = ({ children, width, sm = false, type, color, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={` ${`${
        color ? "bg-btnGray" : "bg-btn"
      } `} border border-white p-2 rounded uppercase font-btn text-center text-base md:text-2xl md:px-3 md:py-2 ${width}
    ${sm ? "md:text-lg md:py-2" : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
