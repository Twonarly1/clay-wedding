import React from "react"

type Props = {
    height: number
}

export default function SkeletonCard({ height }: Props) {
    let size = `h-${height}`
    return (
        <div className=" animate-pulse rounded-md bg-white p-2 xl:aspect-h-8 xl:aspect-w-7 ">
            <div className={`flex  flex-col space-y-2 p-2 ${size} `}>
                <div className="h-full w-full rounded-md bg-gray-200"></div>
                {/* <div className="h-12 w-full rounded-md bg-gray-200"></div> */}
            </div>
        </div>
    )
}
