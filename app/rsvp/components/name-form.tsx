"use client"

import { useLazyQuery } from "@apollo/client"
import { RadioGroup } from "@headlessui/react"
import { FormEvent, useEffect, useState } from "react"
import { Check } from "../../../core/icons"
import { FETCH_GUEST_BY_NAME } from "../../../lib/graphql/queries"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import Link from "next/link"
import { Ring } from "@uiball/loaders"
import toast from "react-hot-toast"
import { Button, CustomLink } from "../../../core/components"

const attendingWedding = ["Yes", "No"]
const attendingParty = ["Yes", "No"]
const mealChoice = ["Chicken", "Beef"]

function NameForm() {
    const supabase = useSupabaseClient()
    const [guest, setGuest] = useState<string>("")
    const [fetching, setFetching] = useState<boolean>(false)
    const [fetchGuest, { loading, error, data: guestData }] = useLazyQuery(FETCH_GUEST_BY_NAME)
    const [isAttendingWedding, setIsAttendingWedding] = useState<string>(attendingWedding[1])
    const [isAttendingParty, setIsAttendingParty] = useState<string>(attendingParty[1])
    const [mealPreference, setMealPreference] = useState<string>(mealChoice[0])

    async function findGuest(e: FormEvent<HTMLFormElement>) {
        setFetching(true)
        e.preventDefault()
        if (!guest) return
        fetchGuest({
            variables: {
                name: guest,
            },
        })
    }

    async function updateGuestRecord() {
        const notification = toast.loading("updating", {
            position: "top-center",
        })
        const { data, error } = await supabase
            .from("guests")
            .update({ wedding: isAttendingWedding, party: isAttendingParty, meal: mealPreference })
            .eq("id", guestData?.getGuestByName[0].id)
            .select()

        if (error) {
            // add toast
            toast.error("Error submitting response", {
                id: notification,
                duration: 2000,
                position: "top-center",
            })
            console.log(error)
        } else {
            // add toast
            toast.success("Response Submitted", {
                id: notification,
                duration: 2000,
                position: "top-center",
            })
            console.log(data)
        }
    }

    useEffect(() => {
        const guest = guestData?.getGuestByName[0]
        if (!guest) return
        if (guest.wedding) {
            setIsAttendingWedding(guest.wedding)
        }
        if (guest.party) {
            setIsAttendingParty(guest.party)
        }
        if (guest.meal) {
            setMealPreference(guest.meal)
        }
    }, [guestData?.getGuestByName[0]])

    useEffect(() => {
        if (!fetching) return

        const notification = toast.loading("fetching guest", {
            duration: 2000,
            position: "top-center",
        })
        if (guestData?.getGuestByName.length < 1) {
            toast.error("Guest not found. Check your spelling", {
                id: notification,
                duration: 2000,
                position: "top-center",
            })
        } else {
            toast.success("Guest Found", {
                id: notification,
                duration: 2000,
                position: "top-center",
            })
        }
        setFetching(false)
        setGuest("")
    }, [guestData])

    if (loading || fetching) {
        return (
            <p className="flex h-screen items-center justify-center">
                <Ring size={50} color="#4B5320" />
            </p>
        )
    }
    return (
        <>
            {guestData?.getGuestByName[0] ? (
                <div className="mx-auto flex max-w-5xl flex-col space-y-4 p-10">
                    <div className="flex flex-col space-y-2">
                        <h1 className="text-3xl font-bold">{guestData?.getGuestByName[0].name}</h1>
                        <p className="mb-6">
                            {guestData.getGuestByName[0].wedding &&
                                "You have already submitted a response, but you can update your response if you'd like!"}
                        </p>
                    </div>
                    <RadioGroup
                        value={isAttendingWedding}
                        onChange={setIsAttendingWedding}
                        className="space-y-4"
                    >
                        <RadioGroup.Label className="text-2xl">Is attending?</RadioGroup.Label>
                        <div className="flex items-center space-x-4">
                            {attendingWedding.map((option) => (
                                <RadioGroup.Option key={option} value={option}>
                                    {({ checked }) => (
                                        <div className="flex items-center space-x-2">
                                            {checked ? (
                                                <Check className="h-10 w-10 cursor-pointer rounded-full bg-fern_green p-2 text-white" />
                                            ) : (
                                                <div className="h-10 w-10 cursor-pointer rounded-full bg-gray-300" />
                                            )}
                                            <p className="text-xl">{option}</p>
                                        </div>
                                    )}
                                </RadioGroup.Option>
                            ))}
                        </div>
                    </RadioGroup>
                    {isAttendingWedding === "Yes" && (
                        <RadioGroup
                            value={isAttendingParty}
                            onChange={setIsAttendingParty}
                            className="space-y-4"
                        >
                            <RadioGroup.Label className="text-2xl">
                                Is attending after party?
                            </RadioGroup.Label>
                            <div className="flex items-center space-x-4">
                                {attendingParty.map((option) => (
                                    <RadioGroup.Option key={option} value={option}>
                                        {({ checked }) => (
                                            <div className="flex items-center space-x-2">
                                                {checked ? (
                                                    <Check className="h-10 w-10 cursor-pointer rounded-full bg-fern_green p-2 text-white " />
                                                ) : (
                                                    <div className="h-10 w-10 cursor-pointer rounded-full bg-gray-300" />
                                                )}
                                                <p className="text-xl">{option}</p>
                                            </div>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    )}
                    {isAttendingParty === "Yes" && (
                        <RadioGroup
                            value={mealPreference}
                            onChange={setMealPreference}
                            className="space-y-4"
                        >
                            <RadioGroup.Label className="text-2xl">Meal Choice?</RadioGroup.Label>
                            <div className="flex items-center space-x-4">
                                {mealChoice.map((option) => (
                                    <RadioGroup.Option key={option} value={option}>
                                        {({ checked }) => (
                                            <div className="flex items-center space-x-2">
                                                {checked ? (
                                                    <Check className="h-10 w-10 cursor-pointer rounded-full bg-fern_green p-2 text-white " />
                                                ) : (
                                                    <div className="h-10 w-10 cursor-pointer rounded-full bg-gray-300" />
                                                )}
                                                <p className="text-xl">{option}</p>
                                            </div>
                                        )}
                                    </RadioGroup.Option>
                                ))}
                            </div>
                        </RadioGroup>
                    )}
                    <div className="flex justify-end space-x-4">
                        <CustomLink href="/" variant="white" title="Cancel" />
                        <Button variant="dark" type="submit" onClick={updateGuestRecord}>
                            {guestData.getGuestByName[0].wedding ? "Update" : "Submit"}
                        </Button>
                    </div>
                </div>
            ) : (
                <form
                    onSubmit={findGuest}
                    className="mx-auto flex max-w-5xl flex-col space-y-4 p-10"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Please enter your full name"
                        className="h-12 rounded border border-fern_green px-4 placeholder:text-fern_green"
                        onChange={(e) => setGuest(e.target.value)}
                        value={guest}
                    />
                    <div className="flex justify-end space-x-4">
                        <CustomLink href="/" variant="white" title="Cancel" />
                        <Button variant="dark" type="submit">
                            Next
                        </Button>
                    </div>
                </form>
            )}
        </>
    )
}

export default NameForm
