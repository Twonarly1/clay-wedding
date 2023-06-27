import "./globals.css"

import localFont from "@next/font/local"
import clsx from "clsx"

import type { Metadata } from "next"
import { Footer } from "../core"
import Providers from "./providers"

const kaisei = localFont({
    src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
    weight: "700",
    variable: "--font-kaisei",
    display: "swap",
})

export const metadata: Metadata = {
    title: "Clay Wedding",
    description: "Dejah Hawkinson & Marcus Clay",

    icons: {
        apple: [{ sizes: "180x180", url: "/apple-touch-icon.png" }],
        icon: [
            { url: "/favicon.ico" },
            { sizes: "16x16", url: "/favicon-16x16.png" },
            { sizes: "32x32", url: "/favicon-32x32.png" },
        ],
    },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={(clsx(kaisei.variable), "bg-white")}>
            <body>
                <Providers>{children}</Providers>
                <Footer />
            </body>
        </html>
    )
}
