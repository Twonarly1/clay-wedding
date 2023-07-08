import { PageTitle } from "../../core"
import Image from "next/image"
import GridList from "./components/grid-list"
import { Slideshow } from "../../core/slideshow"

// const couple: Person[] = [
//     { name: "Dejah Hawkinson", role: "Bride", imageUrl: "/party/couple.jpeg" },
//     { name: "Marcus Clay", role: "Groom", imageUrl: "/party/alex.jpg" },
// ]

const dejahsParty: Person[] = [
    { name: "Beau Hawkinson", role: "Best Bro", imageUrl: "/party/beau.jpg" },
    { name: "Erika Dennis", role: "Made of Honor", imageUrl: "/party/erika1.jpg" },
    { name: "Alexandra Triemert", role: "Matron of Honor", imageUrl: "/party/alex.jpg" },
    { name: "Lauren Gernentz", role: "Bridesmaid", imageUrl: "/party/lauren.jpg" },
    { name: "Brianna Karnes", role: "Bridesmaid", imageUrl: "/party/bri-karnes.jpg" },
    { name: "Jessica Bahn", role: "Bridesmaid", imageUrl: "/party/jess-1.jpg" },
    { name: "Brianna Piersdorf", role: "Bridesmaid", imageUrl: "/party/bri.jpg" },
]

const marcusParty: Person[] = [
    { name: "Matthew Clay", role: "Best Man", imageUrl: "/party/mathew.jpg" },
    { name: "Mitchell Clay", role: "Best Man", imageUrl: "/party/mitchell.jpg" },
    { name: "Ryan Karnes", role: "Groomsmen", imageUrl: "/party/ryan-karnes-1.jpg" },
    { name: "Dallas Genung", role: "Groomsmen", imageUrl: "/party/dal-2.jpg" },
    { name: "Dan Hanacek", role: "Groomsmen", imageUrl: "/party/dan-2.jpg" },
    { name: "Mike Chavez", role: "Groomsmen", imageUrl: "/party/mike.jpg" },
]
function page() {
    return (
        <div className="min-h-screen">
            <PageTitle title={"Wedding Party"} />
            <div className="flex flex-col space-y-8 p-8 py-12">
                <Slideshow />
                <h2 className="cursor-default text-center text-xl font-bold">Dejah's Party</h2>
                <div className="relative z-20 flex w-full cursor-default gap-8 overflow-y-hidden overflow-x-scroll pb-4 scrollbar scrollbar-track-white scrollbar-thumb-fern_green">
                    <GridList people={dejahsParty} />
                </div>
                <h2 className="cursor-default text-center text-xl font-bold">Marcus's Party</h2>
                <div className="relative z-20 flex w-full cursor-default gap-8 overflow-y-hidden overflow-x-scroll pb-4 scrollbar scrollbar-track-white scrollbar-thumb-fern_green">
                    <GridList people={marcusParty} />
                </div>
            </div>
        </div>
    )
}

export default page
