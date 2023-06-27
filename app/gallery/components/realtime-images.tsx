"use client"

import { useEffect, useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

import Image from "next/image"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import clsx from "clsx"
import { Ring } from "@uiball/loaders"

export async function delay(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms))
}

export default function RealtimeImages({ serverImages }: { serverImages: Image[] }) {
    const [images, setImages] = useState(serverImages)
    const supabase = createClientComponentClient<Database>()
    const [isLoading, setIsLoading] = useState<boolean>(true)

    useEffect(() => {
        setImages(serverImages)
        setIsLoading(false)
    }, [serverImages])

    useEffect(() => {
        const channel = supabase
            .channel("*")
            .on(
                "postgres_changes",
                { event: "INSERT", schema: "public", table: "gallery" },
                (payload) => setImages((images) => [...images, payload.new as Image]),
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase, setImages, images])

    if (isLoading == true) {
        return <div className="mt-32 flex items-center justify-center">Loading...</div>
    }

    return (
        <div className="p-8">
            <ResponsiveMasonry
                columnsCountBreakPoints={{
                    320: 1,
                    350: 2,
                    640: 2,
                    768: 3,
                    1024: 4,
                    1280: 5,
                    1536: 6,
                }}
            >
                <Masonry gutter="20px">
                    {images.map((image, i: number) => (
                        <>
                            <Image
                                key={image.name}
                                priority
                                alt=""
                                height={400}
                                width={400}
                                className={clsx(
                                    // isLoading ? "blur-xl grayscale" : "blur-0 grayscale-0",
                                    "block w-full max-w-[400px]",
                                )}
                                src={image.imageSrc}
                                // onClick={() => {
                                //     viewImage(image.imageSrc, i), openModal()
                                // }}
                                // onLoadingComplete={() => setIsLoading(false)}
                            />
                            {/* <button
                                                className=""
                                                onClick={() => removeImage(image.name)}
                                            >
                                                Remove Image
                                            </button> */}
                        </>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    )
}
