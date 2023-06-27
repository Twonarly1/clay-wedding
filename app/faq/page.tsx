import React from "react"
import { PageTitle } from "../../core"
import FAQ from "./components/faq"

function page() {
    return (
        <div>
            <PageTitle title={"FAQ"} />
            <FAQ />
        </div>
    )
}

export default page
