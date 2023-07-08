"use client"

import React, { useEffect, useState } from "react"
import useCalculateTimeLeft from "../lib/hooks/useCalculateTimeLeft"

function Countdown() {
    const [timeLeft, setTimeLeft] = useState<any>(useCalculateTimeLeft())

    useEffect(() => {
        // updates every minute
        setTimeout(() => {
            setTimeLeft(useCalculateTimeLeft())
        }, 60000)
    })

    const timerComponents: any[] = []

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>,
        )
    })

    return (
        <div className=" flex cursor-default items-center gap-2 text-sm font-light sm:text-base">
            <div className="h-2 w-2 animate-pulse rounded-full bg-fern_green" />
            <p> {timerComponents.length ? timerComponents : <span>Time's up!</span>}</p>
        </div>
    )
}

export default Countdown
