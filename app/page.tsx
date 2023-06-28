import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { Dancing_Script } from "next/font/google"
import Image from "next/image"
import { Button } from "../core"
import { Slideshow } from "../core/slideshow"

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
    {
        title: "Registry",
        href: "https://www.amazon.com/wedding/dejah-hawkinson-marcus-clay-chisago-city-october-2023/registry/34CLJCXZYBXOZ",
    },
]

function HomePage() {
    const eventDate = new Date("2023-10-07T21:00:00Z")
    const currentDate = new Date()
    const timeDifference = eventDate.getTime() - currentDate.getTime()
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))

    return (
        <div className="relative flex min-h-screen flex-col items-center justify-center bg-fern_green/10 text-center">
            <Image
                alt=""
                quality={100}
                src="/img/bkg-2.png"
                height={1200}
                width={1200}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
            />

            <p
                className={clsx(
                    `${flavor}`,
                    "cursor-default text-center text-[50px] font-bold text-fern_green sm:text-[100px]",
                )}
            >
                Dejah & Marcus
            </p>
            <div className="flex flex-col items-center gap-2 pt-4">
                <div className="group flex cursor-default items-center space-x-2 text-xl font-light sm:text-2xl">
                    <CalendarIcon className="h-5 w-5 opacity-70 group-hover:text-fern_green sm:h-7 sm:w-7" />
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
                <div className=" flex cursor-default items-center gap-2 text-sm font-light sm:text-base">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-fern_green" />
                    <p> {`${daysLeft} days, ${hoursLeft} hours, ${minutesLeft} minutes `}</p>
                </div>
                <nav className="flex flex-col gap-3 py-10">
                    {navItems.map((i) => (
                        <Button as="a" key={i.href} href={i.href} variant="dark">
                            {i.title}
                        </Button>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export default HomePage
