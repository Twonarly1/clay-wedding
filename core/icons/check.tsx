import { IconBase } from "./icon-base"

type Props = {
    className?: string
}

export function Check({ className }: Props) {
    return (
        <IconBase className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
        </IconBase>
    )
}
