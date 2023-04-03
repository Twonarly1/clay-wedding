import clsx from "clsx"
import { ReactNode } from "react"

type Props = {
    className?: string
    children: ReactNode | ReactNode[]
}

export function IconBase({ children, className = "h-3 w-3" }: Props) {
    return (
        <svg
            className={clsx("inline-block", className)}
            fill="currentColor"
            height="192"
            strokeWidth="16"
            viewBox="0 0 256 256"
            width="192"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="256" height="256" fill="none"></rect>
            {children}
        </svg>
    )
}
