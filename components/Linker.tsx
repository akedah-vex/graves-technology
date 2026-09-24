import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";

type LinkerProps = HTMLAttributes<HTMLElement> & {
    children?: ReactNode,
    link?: string
}

export default function Linker({children, link, ...props}: LinkerProps) {
    const classData: string | undefined = props.className
    
    return (
        <Link href={link || "/"} className={classData || ""}>
            {children}
        </Link>
    );
}