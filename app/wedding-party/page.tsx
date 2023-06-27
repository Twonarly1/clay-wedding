import { PageTitle } from "../../core/components"
import Image from "next/image"
import Group from "./components/group"
import Example from "./components/grid-list"

type Person = {
    name: string
    role: string
    imageUrl: string
}

const couple: Person[] = [
    { name: "Dejah Hawkinson", role: "Bride", imageUrl: "/party/couple.jpeg" },
    { name: "Marcus Clay", role: "Groom", imageUrl: "/party/alex.jpg" },
]

const dejahsParty: Person[] = [
    { name: "Beau Hawkinson", role: "role", imageUrl: "/party/beau.jpg" },
    { name: "Erika Dennis", role: "role", imageUrl: "/party/erika1.jpg" },
    { name: "Alexandra Triemert", role: "role", imageUrl: "/party/alex.jpg" },
    { name: "Lauren Gernentz", role: "role", imageUrl: "/party/lauren.jpg" },
    { name: "Brianna Karnes", role: "role", imageUrl: "/party/bri_ryan2.jpg" },
    { name: "Jessica Bahn", role: "role", imageUrl: "/party/dal:jess.jpg" },
    { name: "Brianna Piersdorf", role: "role", imageUrl: "/party/bri.jpg" },
]

const marcusParty: Person[] = [
    { name: "Matthew Clay", role: "Best Man", imageUrl: "/party/mathew.jpg" },
    { name: "Mitchell Clay", role: "Best Man", imageUrl: "/party/mitchell.jpg" },
    { name: "Ryan Karnes", role: "role", imageUrl: "/party/bri_ryan2.jpg" },
    { name: "Dallas Genung", role: "role", imageUrl: "/party/dal:jess.jpg" },
    { name: "Dan Hanacek", role: "role", imageUrl: "/party/dan.jpeg" },
    { name: "Mike Chavez", role: "role", imageUrl: "/party/mike.jpg" },
]
function page() {
    return (
        <>
            <PageTitle title={"Wedding Party"} />
            <div className="flex flex-col space-y-8 p-8">
                {/* <div className="mx-auto flex w-full max-w-7xl items-center justify-center gap-8">
                    <Example people={couple} />
                </div> */}
                <Image
                    height={400}
                    width={400}
                    alt=""
                    className="mx-auto h-80 w-auto rounded-lg object-cover"
                    src="/party/couple.jpeg"
                />
                <h2 className="text-center text-xl font-bold">Dejah's Party</h2>
                <div className="relative z-20 flex w-full gap-8 overflow-y-hidden overflow-x-scroll pb-4 scrollbar scrollbar-track-gray-200 scrollbar-thumb-fern_green">
                    <Example people={dejahsParty} />
                </div>
                <h2 className="text-center text-xl font-bold">Marcus's Party</h2>
                <div className="relative z-20 flex w-full gap-8 overflow-y-hidden overflow-x-scroll pb-4 scrollbar scrollbar-track-gray-200 scrollbar-thumb-fern_green">
                    <Example people={marcusParty} />
                </div>
            </div>
            {/* <Group persons={couple} row={true} /> */}
            {/* <div className="divide- mt-10 grid grid-cols-1 divide-x divide-fern_green sm:grid-cols-2">
                    <Group persons={dejahsParty} row={false} title="Bride Party" />
                    <Group persons={marcusParty} row={false} title="Groom Party" />
                </div> */}
        </>
    )
}

export default page
