"use client"
import Image from "next/image"
import React, { useState, useEffect, useRef } from "react"

const colors = [
    "/party/couple.jpeg",
    "/party/couple-1.jpg",
    // "/party/couple-2.jpg",
    "/party/couple-3.jpg",
    "/party/couple-4.jpg",
    "/party/couple-5.jpg",
    "/party/couple-6.jpg",
]
const delay = 3500

export function Slideshow() {
    const [index, setIndex] = useState(0)
    const timeoutRef = useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    }

    useEffect(() => {
        resetTimeout()
        //@ts-ignore
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1))
        }, delay)

        return () => {
            resetTimeout()
        }
    }, [index])

    return (
        <div className="mx-auto h-auto w-auto max-w-[500px] overflow-hidden">
            <div
                className="whitespace-nowrap transition duration-1000 ease-in-out"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((image, idx) => (
                    <Image
                        className="slide h-[300px] w-auto lg:h-[400px]"
                        key={idx}
                        src={image}
                        alt=""
                        height={400}
                        width={600}
                    />
                ))}
            </div>
            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot ${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx)
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}
