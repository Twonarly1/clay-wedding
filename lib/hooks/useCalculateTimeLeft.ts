"use client"

function useCalculateTimeLeft() {
    let year = new Date().getFullYear()
    const difference = +new Date(`10/07/${year}`) - +new Date()
    let timeleft = {}

    if (difference > 0) {
        timeleft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            // seconds: Math.floor((difference / 1000) % 60),
        }
    }

    return timeleft
}

export default useCalculateTimeLeft
