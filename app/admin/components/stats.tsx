"use client"

type Props = {
    guests: Guest[]
}

export function Stats({ guests }: Props) {
    // wedding attendance
    const numberAttendingWedding = guests?.filter((guest: Guest) => {
        return guest.wedding === "Yes"
    })
    // party attendance
    const numberAttendingParty = guests?.filter((guest: Guest) => {
        return guest.party === "Yes"
    })
    // chicken meal preference
    const chickenPreference = guests?.filter((guest: Guest) => {
        return guest.meal === "Chicken"
    })
    // beef meal preference
    const beefPreference = guests?.filter((guest: Guest) => {
        return guest.meal === "Beef"
    })
    return (
        <>
            <b>Guest statistics:</b>
            <div className="rounded-2xl border border-fern_green p-5">
                <div className="flex space-x-4">
                    <p className="text-xl font-bold text-fern_green">
                        {numberAttendingWedding?.length}
                    </p>
                    <p> guests are attending the wedding!</p>
                </div>
                <div className="flex space-x-4">
                    <p className="text-xl font-bold text-fern_green">
                        {numberAttendingParty?.length}
                    </p>
                    <p>guests are attending the after party!</p>
                </div>
                <div className="flex space-x-4">
                    <p className="text-xl font-bold text-fern_green">{chickenPreference?.length}</p>
                    <p> guests prefer Chicken for their meal.</p>
                </div>
                <div className="flex space-x-4">
                    <p className="text-xl font-bold text-fern_green">{beefPreference?.length}</p>
                    <p>guests prefer Beef for their meal.</p>
                </div>
            </div>
        </>
    )
}
