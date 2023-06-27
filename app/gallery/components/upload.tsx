"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import saveAs from "file-saver"
import { Dialog, Transition } from "@headlessui/react"
import toast from "react-hot-toast"
import { Button } from "../../../core"
import { createClient } from "../../../lib/supabase/supabase-browser"
import { useRouter } from "next/navigation"
import { ArrowPathIcon } from "@heroicons/react/24/outline"

const CDNURL = "https://oaxxgydogfcpdaxxxwbd.supabase.co/storage/v1/object/public/images/"

export async function delay(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms))
}

function Upload() {
    const supabase = createClient()
    const fileRef: any = useRef()
    const [files, setFiles] = useState<File[]>([])
    const router = useRouter()

    const handleClick = async () => {
        toast("Uploading multiple images at once will take longer.", {
            duration: 5000,
            icon: "❗️",
            position: "top-right",
        })
        await delay(2000)
        fileRef.current.click()
    }

    const handleChange = (e: { target: { files: any } }) => {
        setFiles([...e.target.files])
        fileRef.current.value = null
    }

    async function uploadImage(file: File) {
        const image_identifier = uuidv4()
        // upload image to Storage
        const { data: upload, error: uploadError } = await supabase.storage
            .from("images")
            .upload(image_identifier, file)
        if (uploadError) {
            console.log(uploadError)
            return
        }
        // insert record to images table
        const { data, error } = await supabase
            .from("gallery")
            .insert({ name: image_identifier, imageSrc: CDNURL + "/" + upload.path })
    }

    useEffect(() => {
        files.map((file, index: number) => {
            toast.promise(uploadImage(file), {
                loading: "Saving...",
                success: <b>Image {index + 1} Uploaded!</b>,
                error: <b>Could not upload image {index + 1}.</b>,
            })
            router.refresh()
        })
    }, [files])

    return (
        <>
            <div className="absolute right-2 top-2">
                <Button onClick={() => router.refresh()} variant="white">
                    <ArrowPathIcon className="h-6 w-6" />
                </Button>
            </div>
            <div className="mx-auto my-6 flex items-center justify-center">
                <Button onClick={handleClick} variant="dark">
                    + Upload Images
                </Button>
            </div>
            <input
                multiple
                ref={fileRef}
                type="file"
                accept="image/png, image/jpeg"
                hidden
                onChange={handleChange}
            />
        </>
    )
}

export default Upload

// const [imageData, setImageData] = useState({ image: "", i: 0 })
// const [insertImage] = useMutation(INSERT_IMAGE, {
//     refetchQueries: [FETCH_IMAGE_LIST, "getImagesList"],
// })
// const [deleteImage] = useMutation(DELETE_IMAGE, {
//     refetchQueries: [FETCH_IMAGE_LIST, "getImagesList"],
// })
// const { data, loading: imagesLoading, error } = useQuery(FETCH_IMAGE_LIST)
// const length = data?.getImagesList.length
// let [open, setOpen] = useState(false)

// function closeModal() {
//     setOpen(false)
// }

// function openModal() {
//     setOpen(true)
// }

{
    /* <div className="px-5">
                {imagesLoading ? (
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                        {skeletonCards.map((index: number) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                ) : (
                <div className="p-2">
                    <ResponsiveMasonry
                        columnsCountBreakPoints={{
                            350: 1,
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
                                            "block w-full",
                                        )}
                                        src={image.imageSrc}
                                        onClick={() => {
                                            viewImage(image.imageSrc, i), openModal()
                                        }}
                                        // onLoadingComplete={() => setIsLoading(false)}
                                    />
                                    <button
                                                className=""
                                                onClick={() => removeImage(image.name)}
                                            >
                                                Remove Image
                                            </button>
                                </>
                            ))}
                        </Masonry>
                    </ResponsiveMasonry>
                </div>
                 )}
                <div className="grid grid-cols-1 gap-8">
                    {data?.getImagesList.map((item: SupabaseDatabaseImage) => (
                        <IndividualImage image={item} key={item.name} />
                    ))}
                </div>
            </div> */
}

// function viewImage(image: string, i: number) {
//     console.log(image, i)
//     setImageData({ image, i })
// }

// function imgAction(action: any) {
//     let i = imageData.i

//     if (action === "next-img") {
//         if (i === length - 1) {
//             setImageData({ image: data?.getImagesList[0].imageSrc, i: 0 })
//         } else {
//             setImageData({ image: data?.getImagesList[i + 1].imageSrc, i: i + 1 })
//         }
//     }
//     if (action === "previous-img") {
//         if (i === 0) {
//             setImageData({ image: data?.getImagesList[length - 1].imageSrc, i: length - 1 })
//         } else {
//             setImageData({ image: data?.getImagesList[i - 1].imageSrc, i: i - 1 })
//         }
//     }
//     if (!action) {
//         setImageData({ image: "", i: 0 })
//     }
// }

// async function removeImage(imageName: string) {
//     // delete image from storage
//     const { error } = await supabase.storage.from("images").remove(["gallery/" + imageName])

//     if (error) {
//         console.error(error)
//         return
//     }

//     // delete from images table
//     await deleteImage({
//         variables: {
//             name: imageName,
//         },
//     })
// }

// async function downloadImage(imageName: string) {
//     console.log(imageName)
//     saveAs(CDNURL + "gallery/" + imageName, imageName)
// }

// let skeletonCards = Array(25).fill(0)

{
    /* {imageData.image && (
                <>
                    <Transition appear show={open} as={Fragment}>
                        <Dialog
                            as="div"
                            className="fixed inset-0 z-50"
                            open={open}
                            onClose={closeModal}
                        >
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black/80" />
                            </Transition.Child>

                            <div className="fixed inset-0 w-full">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="relative flex h-screen w-full flex-col items-center justify-center bg-black/80 md:flex-row">
                                        <div className="flex">
                                            <button
                                                className="absolute left-2 top-2 bg-fern_green p-1"
                                                onClick={() =>
                                                    downloadImage(
                                                        data.getImagesList[imageData.i].name,
                                                    )
                                                }
                                            >
                                                <Download className="h-6 w-6 text-white" />
                                            </button>
                                            <button
                                                onClick={closeModal}
                                                className="absolute right-2 top-2 bg-fern_green p-1"
                                            >
                                                <X className="h-6 w-6 text-white" />
                                            </button>
                                        </div>
                                        <button
                                            className="hidden w-20 items-center justify-center bg-fern_green p-1 text-center text-white md:flex"
                                            onClick={() => imgAction("previous-img")}
                                        >
                                            &larr;
                                        </button>
                                        <Image
                                            priority
                                            alt=""
                                            height={600}
                                            width={600}
                                            className=""
                                            src={imageData.image}
                                        />
                                        <button
                                            className="hidden w-20 items-center justify-center bg-fern_green p-1 text-center text-white md:flex"
                                            onClick={() => imgAction("next-img")}
                                        >
                                            &rarr;
                                        </button>
                                        <div className="absolute bottom-0 flex w-full justify-center space-x-2 md:hidden">
                                            <button
                                                className="w-full bg-fern_green p-1 text-white"
                                                onClick={() => imgAction("previous-img")}
                                            >
                                                &larr;
                                            </button>
                                            <button
                                                className="w-full bg-fern_green p-1 text-white"
                                                onClick={() => imgAction("next-img")}
                                            >
                                                &rarr;
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition>
                </>
            )} */
}
