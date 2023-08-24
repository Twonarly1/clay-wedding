import Link from "next/link"
import { Button } from "./button"
import { Modal } from "./modal"

const navItems: NavItem[] = [
    { title: "Information", href: "/information" },
    { title: "Wedding Party", href: "/wedding-party" },
    { title: "FAQ", href: "/faq" },
    { title: "Accommodations", href: "/accommodations" },
    { title: "Gallery", href: "/gallery" },
]

export function Footer() {
    return (
        <div className="relative mx-auto flex flex-col items-start justify-between border-t border-fern_green bg-white p-10 sm:flex-row">
            <div className="mb-4 flex w-full flex-col items-center justify-start sm:w-32 sm:items-start">
                {navItems.map((item) => (
                    <Button as="a" href={item.href}>
                        <p className="w-full text-center text-sm hover:font-bold sm:w-32 sm:text-left">
                            {item.title}
                        </p>
                    </Button>
                ))}
                <Modal variant="footer" />
            </div>

            <div className="flex w-full flex-col items-center justify-between text-center sm:w-fit sm:items-start sm:text-right">
                <div>
                    <b className="cursor-default text-fern_green">Dejah Hawkinson & Marcus Clay</b>
                    <p className="cursor-default text-fern_green">October 7th, 2023</p>
                </div>
                <Link
                    href="/creator"
                    className="mt-2 text-xs text-fern_green sm:absolute sm:bottom-10 sm:right-10"
                >
                    Created by <u>Beau Hawkinson</u>
                </Link>
            </div>
        </div>
    )
}
