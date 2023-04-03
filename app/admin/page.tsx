import { PageTitle } from "../../core/components"
import { GuestList } from "./components"

function page() {
    return (
        <>
            <PageTitle title={"Admin"} />
            <GuestList />
        </>
    )
}

export default page
