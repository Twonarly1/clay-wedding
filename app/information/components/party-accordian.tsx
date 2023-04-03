"use client"

import { Disclosure } from "@headlessui/react"
import { Chevron } from "../../../core/icons"

export function PartyAccordian() {
    return (
        <div className="mx-auto flex max-w-5xl flex-col p-10">
            <div className="mb-6">
                <p className="text-4xl sm:text-5xl">Wedding Day</p>
                <p className="mt-4 text-3xl text-fern_green">
                    Ojikita Regional Park -<span className="text-3xl">10/07/2023</span>
                </p>
            </div>
            <Disclosure>
                <Disclosure.Button className="relative flex w-full items-center justify-between rounded-md border border-fern_green p-3">
                    <p className="text-3xl">Venue</p>
                    <Chevron className="absolute right-2 h-6 w-6 ui-open:rotate-90" />
                </Disclosure.Button>
                <Disclosure.Panel className="p-2 text-xl text-gray-500">info</Disclosure.Panel>
            </Disclosure>
            <Disclosure as="div">
                <Disclosure.Button className="relative mt-6 flex w-full items-center justify-between rounded-md border border-fern_green p-3">
                    <span className="text-3xl">Directions</span>
                    <Chevron className="absolute right-2 h-6 w-6 ui-open:rotate-90" />
                </Disclosure.Button>
                <Disclosure.Panel className="p-2 text-xl text-gray-500 ">info</Disclosure.Panel>
            </Disclosure>
            <Disclosure as="div">
                <Disclosure.Button className="relative mt-6 flex w-full items-center justify-between rounded-md border border-fern_green p-3">
                    <span className="text-3xl">Schedule</span>
                    <Chevron className="absolute right-2 h-6 w-6 ui-open:rotate-90" />
                </Disclosure.Button>
                <Disclosure.Panel className="p-2 text-xl text-gray-500 ">info</Disclosure.Panel>
            </Disclosure>
        </div>
    )
}
