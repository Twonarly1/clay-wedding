"use client"
import { useMutation } from "@apollo/client"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import toast from "react-hot-toast"
import { Button } from "../../../core"
import { INSERT_GUEST } from "../../../lib/graphql/mutations"
import { FETCH_GUESTS_LIST } from "../../../lib/graphql/queries"

export function UpdateGuestList() {
    const [guest, setGuest] = useState<string>("")
    const [addGuest] = useMutation(INSERT_GUEST, {
        refetchQueries: [FETCH_GUESTS_LIST],
    })

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    function insertGuest() {
        const notification = toast.loading("updating guest list")
        if (!guest) return
        addGuest({
            variables: {
                name: guest,
            },
        })
        toast.success("Submission updated", {
            id: notification,
        })
    }

    return (
        <>
            <Button variant="dark" as="button" onClick={openModal}>
                Add Guest
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
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-2 p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                >
                                    Add a guest to the guest list.
                                </Dialog.Title>
                                <form
                                    onSubmit={insertGuest}
                                    className="mx-auto mt-4 flex max-w-5xl flex-col space-y-4"
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Please enter a full name"
                                        className="h-12 rounded border border-fern_green px-4 placeholder:text-fern_green"
                                        onChange={(e) => setGuest(e.target.value)}
                                        value={guest}
                                    />
                                    <div className="flex justify-end space-x-4">
                                        <Button variant="dark" as="button" type="submit">
                                            Submit
                                        </Button>
                                    </div>
                                </form>

                                <div className="mt-4">
                                    <Button onClick={closeModal} as="button" variant="white">
                                        Close
                                    </Button>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
