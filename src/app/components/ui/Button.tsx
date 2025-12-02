import Link from "next/link";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  className?: string;
}

const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <Link href="/form">
      <button
        type="button"
        className={
          "bg-secondary rounded-md hover:bg-background hover:text-secondary hover:cursor-pointer" +
          className
        }
        {...props}
      >
        Confirmar asistencia
      </button>
    </Link>
  );
};

export default Button;
