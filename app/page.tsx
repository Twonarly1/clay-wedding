import { CalendarIcon, MapPinIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { Dancing_Script } from "next/font/google"
import Image from "next/image"
import { Button, Modal } from "../core"
import Countdown from "./countdown"

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
        title: "Amazon",
        href: "https://www.amazon.com/wedding/dejah-hawkinson-marcus-clay-chisago-city-october-2023/registry/34CLJCXZYBXOZ",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
            >
                <path
                    fill="#FFB300"
                    d="M39.6,39c-4.2,3.1-10.5,5-15.6,5c-7.3,0-13.8-2.9-18.8-7.4c-0.4-0.4,0-0.8,0.4-0.6c5.4,3.1,11.5,4.9,18.3,4.9c4.6,0,10.4-1,15.1-3C39.7,37.7,40.3,38.5,39.6,39z M41.1,36.9c-0.5-0.7-3.5-0.3-4.8-0.2c-0.4,0-0.5-0.3-0.1-0.6c2.3-1.7,6.2-1.2,6.6-0.6c0.4,0.6-0.1,4.5-2.3,6.3c-0.3,0.3-0.7,0.1-0.5-0.2C40.5,40.4,41.6,37.6,41.1,36.9z"
                ></path>
                <path
                    fill="#ffffff"
                    d="M36.9,29.8c-1-1.3-2-2.4-2-4.9v-8.3c0-3.5,0-6.6-2.5-9c-2-1.9-5.3-2.6-7.9-2.6C19,5,14.2,7.2,13,13.4c-0.1,0.7,0.4,1,0.8,1.1l5.1,0.6c0.5,0,0.8-0.5,0.9-1c0.4-2.1,2.1-3.1,4.1-3.1c1.1,0,3.2,0.6,3.2,3v3c-3.2,0-6.6,0-9.4,1.2c-3.3,1.4-5.6,4.3-5.6,8.6c0,5.5,3.4,8.2,7.8,8.2c3.7,0,5.9-0.9,8.8-3.8c0.9,1.4,1.3,2.2,3,3.7c0.4,0.2,0.9,0.2,1.2-0.1l0,0c1-0.9,2.9-2.6,4-3.5C37.4,30.9,37.3,30.3,36.9,29.8z M27,22.1L27,22.1c0,2-0.1,6.9-5,6.9c-3,0-3-3-3-3c0-4.5,4.2-5,8-5V22.1z"
                ></path>
            </svg>
        ),
    },
    {
        title: "Target",
        href: "https://www.target.com/gift-registry/gift-giver?registryId=00efb9c0-25d0-11ee-9bc8-21abd1447d02&type=WEDDING",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
            >
                <path
                    fill="#EF4444"
                    d="M6,24c0-9.95,8.05-18,18-18s18,8.05,18,18s-8.05,18-18,18C14.05,42.056,6,33.95,6,24	z M24,36.018c6.652,0,12.019-5.366,12.019-12.019S30.652,11.981,24,11.981S11.981,17.348,11.981,24S17.348,36.018,24,36.018z M29.981,24c0,3.298-2.683,5.981-5.981,5.981c-3.298,0-5.981-2.683-5.981-5.981s2.683-5.981,5.981-5.981S29.981,20.702,29.981,24z"
                ></path>
            </svg>
        ),
    },
]

function HomePage() {
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
                <Countdown />
                <nav className="flex flex-col gap-3 py-10">
                    {navItems.slice(0, 5).map((i) => (
                        <Button as="a" key={i.href} href={i.href} variant="dark">
                            {i.title}
                        </Button>
                    ))}
                    <Modal variant="dark" />
                </nav>
            </div>
        </div>
    )
}

export default HomePage
