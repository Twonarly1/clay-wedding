import clsx from "clsx"
import Link from "next/link"

type LinkProps = {
    href: string
    title: string
    variant?: "dark" | "white"
}

export function CustomLink({ href, title, variant = "dark" }: LinkProps) {
    const className = clsx("transition-colors", {
        "rounded-full border bg-fern_green p-3 px-8 text-white hover:border-fern_green hover:bg-white hover:text-fern_green":
            variant === "dark",
        "rounded-full border border-fern_green bg-white p-3 px-8 text-fern_green hover:border-fern_green hover:bg-fern_green hover:text-white":
            variant === "white",
    })
    return (
        <Link href={href} className={clsx(className)}>
            {title}
        </Link>
    )
}
