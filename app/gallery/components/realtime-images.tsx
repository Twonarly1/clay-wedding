"use client"

import { Fragment, useEffect, useState } from "react"
import Image from "next/image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import clsx from "clsx"
import { createClient } from "../../../lib/supabase/supabase-browser"
import { Dialog, Menu, Transition } from "@headlessui/react"
import { EllipsisHorizontalIcon, XMarkIcon } from "@heroicons/react/24/outline"
import saveAs from "file-saver"
import { motion } from "framer-motion"

export default function RealtimeImages({ serverImages }: { serverImages: Image[] }) {
    const [images, setImages] = useState(serverImages)
    const supabase = createClient()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    let [open, setOpen] = useState(false)
    const [selectedImage, setSelectedImage] = useState<Image | null>(null)

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    useEffect(() => {
        setImages(serverImages)
        setIsLoading(false)
    }, [serverImages])

    useEffect(() => {
        const channel = supabase
            .channel("*")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "gallery" },
                (payload) => setImages((images) => [...images, payload.new as Image]),
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase, setImages, images])

    if (isLoading == true) {
        return <div className="mt-32 flex items-center justify-center">Loading...</div>
    }

    return (
        <div className="p-8">
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    320: 1,
                    350: 2,
                    640: 2,
                    768: 3,
                    1024: 4,
                    1280: 5,
                    1536: 6,
                }}
            >
                <Masonry gutter="20px">
                    {images.map((image, i: number) => (
                        <div className="relative">
                            <Image
                                key={image.name}
                                priority
                                alt=""
                                height={400}
                                width={400}
                                className={clsx("block w-full max-w-[400px]")}
                                src={image.imageSrc}
                            />
                            <div className="absolute right-2 top-2">
                                <Menu as="div" className="relative flex-none ">
                                    <Menu.Button className=" z-50 block rounded-full bg-white p-1 text-gray-500 hover:text-gray-900">
                                        <span className="sr-only">Open options</span>
                                        <EllipsisHorizontalIcon
                                            className="h-4 w-4"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() =>
                                                            saveAs(image.imageSrc, image.name)
                                                        }
                                                        className={clsx(
                                                            active ? "rounded-t-md bg-gray-50" : "",
                                                            "block w-full px-3 py-1 text-left text-sm leading-6 text-gray-900",
                                                        )}
                                                    >
                                                        Save
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={() => {
                                                            setSelectedImage(image)
                                                            openModal()
                                                        }}
                                                        className={clsx(
                                                            active ? "bg-gray-50" : "",
                                                            "block w-full rounded-b-md px-3 py-1 text-left text-sm leading-6 text-gray-900",
                                                        )}
                                                    >
                                                        View
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50" open={open} onClose={closeModal}>
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
                        <div className="flex min-h-full items-center justify-center text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative flex h-screen w-full flex-col items-center justify-center bg-black/80 md:flex-row">
                                    <div className="items-end justify-end text-right">
                                        <button onClick={closeModal}>
                                            <XMarkIcon className="mb-2 h-6 w-6 rounded-full border border-white p-1 text-white" />
                                        </button>

                                        <Image
                                            priority
                                            alt=""
                                            height={800}
                                            width={800}
                                            className="h-auto w-auto "
                                            src={selectedImage?.imageSrc ?? ""}
                                        />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}
