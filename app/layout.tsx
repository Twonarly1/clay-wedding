import "./globals.css"

import localFont from "@next/font/local"
import clsx from "clsx"
import Providers from "./providers"
import { Footer } from "../core/components"

const kaisei = localFont({
    src: "../public/fonts/kaisei-tokumin-latin-700-normal.woff2",
    weight: "700",
    variable: "--font-kaisei",
    display: "swap",
})

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
