"use client"
import { useState } from "react"
import { Tab } from "@headlessui/react"
import { PageTitle } from "../../core/components"
import clsx from "clsx"
import { WeddingAccordian, PartyAccordian } from "./components"

const infoPages = ["Wedding Day", "After Party"]

export default function Page() {
    const [infoPage, setInfoPage] = useState<string>(infoPages[0])

    return (
        <>
            <PageTitle title={"Information"} />
            <div className="mx-auto flex max-w-5xl flex-col space-y-4 p-5 sm:p-10">
                <Tab.Group>
                    <Tab.List className="flex space-x-1 rounded-xl bg-fern_green p-1">
                        {infoPages.map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    clsx(
                                        "w-full rounded-lg py-3.5 text-2xl leading-5 text-fern_green",
                                        "ring-white  ring-offset-2 ring-offset-fern_green focus:outline-none",
                                        selected ? "bg-white shadow" : "text-white",
                                    )
                                }
                                onClick={() => setInfoPage(category)}
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="mt-2">
                        {infoPage === "Wedding Day" ? <WeddingAccordian /> : <PartyAccordian />}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </>
    )
}
