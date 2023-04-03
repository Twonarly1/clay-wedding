import React from "react"

export default function SkeletonCard() {
    return (
        <div className=" animate-pulse rounded-md bg-white p-2 xl:aspect-w-7 xl:aspect-h-8 ">
            <div className="flex h-80 flex-col space-y-2 p-2 ">
                <div className="h-full w-full rounded-md bg-gray-200"></div>
                <div className="h-12 w-full rounded-md bg-gray-200"></div>
            </div>
        </div>
    )
}
