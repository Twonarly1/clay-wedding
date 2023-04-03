"use client"
import { Menu, Transition } from "@headlessui/react"
import { Fragment, useEffect, useRef, useState } from "react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

type Props = {
    value: string
    setValue: any
    options: string[]
}

export function DropdownSelect({ value, setValue, options }: Props) {
    const [selected, setSelected] = useState(value)

    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="flex">
                        {selected}
                        <ChevronDownIcon
                            className="ml-2 -mr-1 h-5 w-5 text-black"
                            aria-hidden="true"
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            {options.map((item: string) => (
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => {
                                                setSelected(item)
                                                setValue(item)
                                            }}
                                            className={`${
                                                active
                                                    ? "bg-fern_green text-white"
                                                    : "text-gray-900"
                                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                        >
                                            {item}
                                        </button>
                                    )}
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
