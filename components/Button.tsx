
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    children?: ReactNode
}

export default function Button ({ children, ...props }: ButtonProps) {
    const classData: string | undefined = props.className
    return (
        <button className={classData}>
            { children }
        </button>
    )
}