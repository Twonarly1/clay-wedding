import "./globals.css"

import { Footer } from "../core"
import Providers from "./providers"

import type { Metadata } from "next"

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
        <html lang="en" className="antialiases bg-fern_green/10 text-zinc-900">
            <body className="">
                <Providers>{children}</Providers>
                <Footer />
            </body>
        </html>
    )
}
