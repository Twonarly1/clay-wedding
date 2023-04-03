import clsx from "clsx"
import { Dancing_Script } from "next/font/google"
import Link from "next/link"
import { Button, CustomLink } from "../core/components"
import { Calendar, Directions } from "../core/icons"
import Countdown from "./components/countdown"

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: "400",
})

const flavor = `${dancing.className}`

const navItems: { title: string; href: string }[] = [
    { title: "Gallery", href: "/gallery" },
    { title: "RSVP", href: "/rsvp" },
    { title: "Information", href: "/information" },
    { title: "Wedding Party", href: "/wedding-party" },
]

function HomePage() {
    return (
        <div className="flex h-screen flex-col items-center justify-center p-1 text-center">
            <p
                className={clsx(
                    `${flavor}`,
                    "text-center text-[45px] text-fern_green sm:text-[100px]",
                )}
            >
                Dejah & Marcus
            </p>
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center space-x-2 text-xl font-light sm:text-2xl">
                    <Calendar className="h-5 w-5 opacity-70 sm:h-7 sm:w-7" />
                    <p>October 7th, 2023</p>
                </div>
                <Countdown />
                <Button
                    iconLeft={Directions}
                    as="a"
                    href="https://www.google.com/maps/place/Ojiketa+Regional+Park/@45.3073359,-92.8894451,13.06z/data=!4m6!3m5!1s0x52b2ec0f03f3ae11:0x4608657c61b8d40!8m2!3d45.3465656!4d-92.8848124!16s%2Fg%2F1hc865p1p"
                >
                    <p className="text-xl font-light sm:text-2xl">Ojikita Regional Park</p>
                </Button>

                <nav className="mt-10 flex flex-col space-y-2">
                    {navItems.map((i) => (
                        <CustomLink key={i.href} href={i.href} title={i.title} />
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default HomePage
