import Link from "next/link"

export function Footer() {
    return (
        <div className="mx-auto flex max-w-5xl flex-col items-center p-10 text-sm sm:text-xl">
            <b className="cursor-default text-fern_green">Dejah Hawkinson & Marcus Clay</b>
            <p className="cursor-default text-fern_green">October 7th, 2023</p>
            <Link href="/creator" className="mt-2 text-xs text-fern_green">
                Created by <u>Beau Hawkinson</u>
            </Link>
        </div>
    )
}
