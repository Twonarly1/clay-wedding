import { PageTitle } from "../../core/components"
import Image from "next/image"
import Group from "./components/group"

type Person = {
    name: string
    role: string
}

const couple: Person[] = [
    { name: "Dejah Hawkinson", role: "Bride" },
    { name: "Marcus Clay", role: "Groom" },
]

const dejahsParty: Person[] = [
    { name: "Beau Hawkinson", role: "role" },
    { name: "Erika Dennis", role: "role" },
    { name: "Alexandra Triemert", role: "role" },
    { name: "Lauren Gernatz", role: "role" },
    { name: "Brianna Karnes", role: "role" },
    { name: "Jessica Bahn", role: "role" },
    { name: "Brianna Feddick", role: "role" },
]

const marcusParty: Person[] = [
    { name: "Matthew Clay", role: "Best Man" },
    { name: "Mitchell Clay", role: "Best Man" },
    { name: "Ryan Karnes", role: "role" },
    { name: "Dallas Genung", role: "role" },
    { name: "Dan Hanacek", role: "role" },
    { name: "Mike Chavez", role: "role" },
]
function page() {
    return (
        <>
            <PageTitle title={"Wedding Party"} />
            <div className="mx-auto max-w-3xl p-2 sm:p-10">
                <Group persons={couple} row={true} />
                <div className="divide- mt-10 grid grid-cols-1 divide-x divide-fern_green sm:grid-cols-2">
                    <Group persons={dejahsParty} row={false} title="Bride Party" />
                    <Group persons={marcusParty} row={false} title="Groom Party" />
                </div>
            </div>
        </>
    )
}

export default page
