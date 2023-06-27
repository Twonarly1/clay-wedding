"use client"
import { useState } from "react"

export function MapComponent() {
    const [isLoading, setIsLoading] = useState(true)

    // Function to handle iframe load event
    const handleIframeLoad = () => {
        setIsLoading(false)
    }

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1557.5317475353731!2d-92.88629398972286!3d45.34624407342416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotels!5e0!3m2!1sen!2sus!4v1687614705976!5m2!1sen!2sus"
                width="450"
                height="450"
                className={`h-full min-h-[450px] w-full ${isLoading ? "hidden" : ""}`}
                onLoad={handleIframeLoad}
                loading="lazy"
            ></iframe>
        </div>
    )
}
