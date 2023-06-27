import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { Dancing_Script } from "next/font/google"
import { Button, CustomLink } from "../core"

const dancing = Dancing_Script({
    subsets: ["latin"],
    weight: "400",
})

const flavor = `${dancing.className}`

const navItems: NavItem[] = [
    { title: "Information", href: "/information" },
    { title: "Wedding Party", href: "/wedding-party" },
    { title: "FAQ", href: "/faq" },
    { title: "Accommodations", href: "/accommodations" },
    { title: "Gallery", href: "/gallery" },
]

function HomePage() {
    const eventDate = new Date("2023-10-07T21:00:00Z")
    const currentDate = new Date()
    const timeDifference = eventDate.getTime() - currentDate.getTime()
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))

    return (
        <div className="relative flex h-screen flex-col items-center justify-center p-1 text-center">
            <div className="absolute right-5 top-5 flex cursor-default items-center gap-2 text-sm font-light sm:text-xl">
                <div className="h-2 w-2 animate-pulse rounded-full bg-fern_green" />
                <p> {`${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes `}</p>
            </div>
            <p
                className={clsx(
                    `${flavor}`,
                    "cursor-default text-center text-[50px] text-fern_green sm:text-[100px]",
                )}
            >
                Dejah & Marcus
            </p>
            <div className="flex flex-col items-center justify-center gap-2">
                <div className="flex cursor-default items-center space-x-2 text-xl font-light sm:text-2xl">
                    <CalendarIcon className="h-5 w-5 opacity-70 sm:h-7 sm:w-7" />
                    <p>October 7th, 2023</p>
                </div>

                <Button
                    as="a"
                    href="https://www.google.com/maps/place/Ojiketa+Regional+Park/@45.3073359,-92.8894451,13.06z/data=!4m6!3m5!1s0x52b2ec0f03f3ae11:0x4608657c61b8d40!8m2!3d45.3465656!4d-92.8848124!16s%2Fg%2F1hc865p1p"
                >
                    <div className="group flex items-center space-x-2 text-xl font-light sm:text-2xl">
                        <MapPinIcon className="h-5 w-5 opacity-70 group-hover:text-fern_green sm:h-7 sm:w-7" />
                        <p>Ojiketa Regional Park</p>
                    </div>
                </Button>
                <nav className="mt-10 flex flex-col space-y-3">
                    {navItems.map((i) => (
                        <CustomLink key={i.href} href={i.href} title={i.title} />
                    ))}
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.amazon.com/wedding/dejah-hawkinson-marcus-clay-chisago-city-october-2023/registry/34CLJCXZYBXOZ"
                        className="flex items-center justify-center rounded-full border bg-fern_green p-3 px-8 text-white hover:border-fern_green hover:bg-white hover:text-fern_green"
                    >
                        Registry
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default HomePage
