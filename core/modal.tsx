"use client"

import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import { Fragment, useState } from "react"
import { Button } from "../core"

const navItems: NavItem[] = [
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
                    fill="currentColor"
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

type Props = {
    variant?: "dark" | "footer"
}

export function Modal({ variant }: Props) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <Button onClick={openModal} variant={variant}>
                Registry
            </Button>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="flex w-full justify-between text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Wedding Registry
                                        <Button variant="default" onClick={closeModal}>
                                            <XMarkIcon className="h-5 w-5" />
                                        </Button>
                                    </Dialog.Title>
                                    <div className="mt-8 flex flex-col gap-4">
                                        {navItems.slice(0, 2).map((i) => (
                                            <Button
                                                as="a"
                                                key={i.href}
                                                href={i.href}
                                                variant="dark"
                                            >
                                                <div className="flex items-center gap-1">
                                                    {i.svg}
                                                    {i.title}
                                                </div>
                                            </Button>
                                        ))}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
