"use client"

import { Disclosure } from "@headlessui/react"
import { Chevron } from "../../../core/icons"

export function WeddingAccordian() {
    return (
        <div className="mx-auto flex max-w-5xl flex-col p-2 sm:p-10">
            <div className="mb-6">
                <p className="text-4xl sm:text-5xl">Wedding Day</p>
                <p className="mt-2 text-fern_green sm:mt-4 sm:text-3xl">
                    Ojikita Regional Park -<span className="sm:text-3xl">10/07/2023</span>
                </p>
            </div>
            <Disclosure>
                <Disclosure.Button className="relative flex w-full items-center justify-between rounded-md border border-fern_green p-3">
                    <p className="text-3xl">Venue</p>
                    <Chevron className="absolute right-2 h-6 w-6 ui-open:rotate-90" />
                </Disclosure.Button>
                <Disclosure.Panel className="p-2 text-2xl">
                    <>
                        <p>
                            The Wedding will be held at Ojikita Regional Park, located in Chisago
                            City, MN.
                        </p>
                        <a
                            className="flex cursor-pointer items-center space-x-2 text-xl font-light sm:text-2xl"
                            href="https://www.google.com/maps/place/Ojiketa+Regional+Park/@45.3073359,-92.8894451,13.06z/data=!4m6!3m5!1s0x52b2ec0f03f3ae11:0x4608657c61b8d40!8m2!3d45.3465656!4d-92.8848124!16s%2Fg%2F1hc865p1p"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Click here for directions
                        </a>
                    </>
                </Disclosure.Panel>
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
