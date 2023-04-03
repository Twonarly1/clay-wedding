import { PageTitle } from "../../core/components"
import NameForm from "./components/name-form"

function page() {
    return (
        <>
            <PageTitle title={"RSVP"} />
            <NameForm />
        </>
    )
}

export default page
