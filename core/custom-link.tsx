import clsx from "clsx"
import Link from "next/link"

export function CustomLink({ href, title, variant = "dark" }: LinkProps) {
    const className = clsx("transition-colors", {
        "rounded-full border border-transparent bg-fern_green p-3 px-8 text-white transition duration-300 hover:border-fern_green hover:bg-white hover:text-fern_green":
            variant === "dark",
        "rounded-full border border-fern_green bg-white p-3 px-8 text-fern_green transition duration-300 hover:border-fern_green hover:bg-fern_green hover:text-white":
            variant === "white",
    })
    return (
        //@ts-ignore
        <Link href={href} className={clsx(className)}>
            {title}
        </Link>
    )
}
