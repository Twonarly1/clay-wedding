import clsx from "clsx"
import { Dancing_Script } from "next/font/google"
import React from "react"
import { Button } from "./button/button"
import { CustomLink } from "./custom-link"

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: "400",
})

const flavor = `${dancing.className}`

export function PageTitle({ title }: { title: string }) {
    return (
        <div className="ring-b relative mx-auto flex w-full flex-col items-center justify-center ring-1 ring-black">
            <div className="absolute left-2 top-4">
                <CustomLink href="/" title="Home" />
            </div>
            <h1
                className={clsx(
                    `${flavor}`,
                    "mt-14 text-center text-[50px] text-fern_green sm:mt-0 sm:text-[100px]",
                )}
            >
                {title}
            </h1>
        </div>
    )
}
