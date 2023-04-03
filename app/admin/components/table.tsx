"use client"
import { useSupabaseClient } from "@supabase/auth-helpers-react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import toast from "react-hot-toast"
import { Button } from "../../../core"
import { DropdownSelect } from "./dropdown-select"

type Props = {
    data: any
    title: string
    responded: boolean
}

const attendingWedding = ["Yes", "No"]
const attendingParty = ["Yes", "No"]
const mealChoice = ["Chicken", "Beef", "None"]

export function Table({ data, title, responded }: Props) {
    const supabase = useSupabaseClient()
    const router = useRouter()
    const [edit, setEdit] = useState<number>(0)
    const [isAttendingWedding, setIsAttendingWedding] = useState<string>(data.wedding)
    const [isAttendingParty, setIsAttendingParty] = useState<string>(data.party)
    const [mealPreference, setMealPreference] = useState<string>(data.meal)

    async function updateGuestRecord() {
        const notification = toast.loading("editing guest list")
        const { data, error } = await supabase
            .from("guests")
            .update({ wedding: isAttendingWedding, party: isAttendingParty, meal: mealPreference })
            .eq("id", edit)
            .select()

        if (error) {
            // add toast
            toast.error("Error updating response", {
                id: notification,
            })
            console.log(error)
        } else {
            // add toast
            toast.success("Submission updated", {
                id: notification,
            })
            console.log(data)
        }
    }

    return (
        <div className="mt-8 flow-root">
            <div className="-my-1 overflow-x-auto">
                <b>{title}</b>
                <div className="my-4 inline-block min-w-full rounded-2xl border border-fern_green p-5 py-2 align-middle">
                    <table className="min-w-full divide-y divide-gray-300 ">
                        <thead>
                            <tr>
                                <th
                                    scope="col"
                                    className="w-60 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="w-40 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Wedding
                                </th>
                                <th
                                    scope="col"
                                    className="b w-40 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Party
                                </th>
                                <th
                                    scope="col"
                                    className=" w-40 px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                    Meal
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data?.map((guest: Guest) => (
                                <tr key={guest.id}>
                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                        {guest.name || "N/A"}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                                        {edit === guest.id ? (
                                            <DropdownSelect
                                                value={guest.wedding || "N/A"}
                                                options={attendingWedding}
                                                setValue={setIsAttendingWedding}
                                            />
                                        ) : (
                                            guest.wedding || "N/A"
                                        )}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                                        {edit === guest.id ? (
                                            <DropdownSelect
                                                value={guest.party || "N/A"}
                                                options={attendingParty}
                                                setValue={setIsAttendingParty}
                                            />
                                        ) : (
                                            guest.party || "N/A"
                                        )}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-700">
                                        {edit === guest.id ? (
                                            <DropdownSelect
                                                value={guest.meal || "N/A"}
                                                options={mealChoice}
                                                setValue={setMealPreference}
                                            />
                                        ) : (
                                            guest.meal || "N/A"
                                        )}
                                    </td>
                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                        {edit !== guest.id ? (
                                            <Button
                                                as="button"
                                                variant="admin"
                                                onClick={() => setEdit(guest.id)}
                                            >
                                                {responded === true ? "Modify" : "Edit"}
                                            </Button>
                                        ) : (
                                            <Button
                                                as="button"
                                                variant="admin"
                                                onClick={updateGuestRecord}
                                            >
                                                Save
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
