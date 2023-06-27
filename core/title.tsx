import clsx from "clsx"
import { Dancing_Script } from "next/font/google"
import { Button } from "./button"

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: "400",
})

const flavor = `${dancing.className}`

export function PageTitle({ title }: { title: string }) {
    return (
        <div className="relative mx-auto flex w-full flex-col items-center justify-center border-b border-fern_green bg-white">
            <div className="absolute left-2 top-2">
                <Button as="a" href="/" variant="dark">
                    Home
                </Button>
            </div>
            <h1
                className={clsx(
                    `${flavor}`,
                    "mt-14 cursor-default text-center text-[50px] text-fern_green sm:mt-0 sm:text-[100px]",
                )}
            >
                {title}
            </h1>
        </div>
    )
}
