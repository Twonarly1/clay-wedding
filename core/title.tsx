import clsx from "clsx"
import { Button } from "./button"
import { breathing } from "@/fonts"

export function PageTitle({ title }: { title: string }) {
    return (
        <div className="relative mx-auto flex h-[144px] w-full flex-col items-center justify-center border-b border-fern_green bg-white">
            <div className="absolute left-2 top-2">
                <Button as="a" href="/" variant="dark">
                    Home
                </Button>
            </div>
            <h1
                className={clsx(
                    breathing.className,
                    "mt-20 cursor-default text-center text-[30px] text-fern_green sm:mt-0 sm:text-[50px]",
                )}
            >
                {title}
            </h1>
        </div>
    )
}
