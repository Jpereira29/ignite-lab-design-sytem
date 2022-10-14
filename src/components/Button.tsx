import { clsx } from "clsx"
import { Slot } from "@radix-ui/react-slot"
import { ButtonHTMLAttributes, ReactNode } from "react"
export  interface IButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    asChild?: boolean
}

export function Button({children, asChild, className, ...props }: IButtonProps) {
    const Comp = asChild ? Slot : "button"
    return (
        <Comp className={clsx(
                "py-3 px-4 bg-cyan-500 rounded font-semibolc text-black text-sm w-full hover:bg-cyan-300 focus:ring-2 ring-white ",
                className
            )}
            {...props}
        >
            {children}
        </Comp>
    )
}