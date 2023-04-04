"use client"
import { useLazyQuery, useQuery } from "@apollo/client"
import { FormEvent, useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Button, CircleNotch, CustomLink } from "../../../core"
import {
    FETCH_ADMIN_BY_USERNAME_AND_PASSWORD,
    FETCH_GUESTS_LIST,
} from "../../../lib/graphql/queries"
import { Stats } from "./stats"
import { Table } from "./table"
import { UpdateGuestList } from "./update-guest-list"

export function GuestList() {
    const {
        data: guestListData,
        loading: guestListLoading,
        error: guestListError,
    } = useQuery(FETCH_GUESTS_LIST)
    let guests = guestListData?.getGuestsList
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [adminPriveleges, setAdminPriveleges] = useState<boolean>(false)
    const [fetchAdmin, { data, error, loading }] = useLazyQuery(
        FETCH_ADMIN_BY_USERNAME_AND_PASSWORD,
    )
    // const { data: adminData } = useQuery(FETCH_ADMIN_BY_USERNAME_AND_PASSWORD, {
    //     variables: {
    //         username: "beauhawkinson1",
    //         password: "2o22hY9127x!9",
    //     },
    // })

    const submittedResponses = guests?.filter((guest: Guest) => {
        return guest.wedding !== null
    })
    const unsubmittedResponses = guests?.filter((guest: Guest) => {
        return guest.wedding === null
    })

    async function checkCredientials(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        // if (!username && !password) return

        fetchAdmin({
            variables: {
                username: username,
                password: password,
            },
        })
    }

    useEffect(() => {
        if (!data) return
        const notification = toast.loading("Fetching admin status", {
            duration: 2000,
            position: "top-center",
        })
        if (data?.getAdminByUsernameAndPassword[0]) {
            setAdminPriveleges(true)
            toast.success("Admin Found", {
                id: notification,
                duration: 2000,
                position: "top-center",
            })
        } else {
            setAdminPriveleges(false)
            toast.error("Admin not found.", {
                id: notification,
                duration: 2000,
                position: "top-center",
            })
        }
    }, [data?.getAdminByUsernameAndPassword[0]])

    function adminLogout() {
        setUsername("")
        setPassword("")
        setAdminPriveleges(false)
    }

    return (
        <div className="mx-auto flex max-w-5xl flex-col space-y-4 p-5 sm:p-10">
            {adminPriveleges ? (
                <>
                    <div className="justify-between space-y-4 text-center sm:flex sm:space-y-0">
                        <h1 className="text-3xl font-bold text-fern_green">Wedding Attendance</h1>
                        <UpdateGuestList />
                    </div>
                    {guests && <Stats guests={guests} />}
                    {guestListLoading ? (
                        <div className="flex items-center justify-center py-40">
                            <CircleNotch className="h-[50px] w-[50px] animate-spin text-fern_green" />
                        </div>
                    ) : (
                        <>
                            <Table
                                data={submittedResponses}
                                title="Guests that have responded."
                                responded={true}
                            />
                            <Table
                                data={unsubmittedResponses}
                                title="Guest who have not responded."
                                responded={false}
                            />
                            <div className="flex w-full items-end">
                                <Button variant="dark" onClick={adminLogout} as="button">
                                    Admin Logout
                                </Button>
                            </div>
                        </>
                    )}
                </>
            ) : (
                <form onSubmit={checkCredientials} className="my-5 space-y-5">
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        className="h-12 w-full rounded border border-fern_green px-4 placeholder:text-fern_green"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                    <input
                        type="text"
                        name="password"
                        placeholder="Enter your password"
                        className="h-12 w-full rounded border border-fern_green px-4 placeholder:text-fern_green"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="my-5 flex justify-end space-x-4">
                        <CustomLink href="/" variant="white" title="Cancel" />
                        <Button variant="dark" type="submit">
                            Login
                        </Button>
                    </div>
                </form>
            )}
        </div>
    )
}
