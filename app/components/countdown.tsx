"use client"

import React, { useEffect, useState } from "react"
import useCalculateTimeLeft from "../../lib/hooks/useCalculateTimeLeft"

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
        <p className="text-xl font-light sm:text-2xl">
            {timerComponents.length ? timerComponents : <span>Time's up!</span>}
        </p>
    )
}

export default Countdown
