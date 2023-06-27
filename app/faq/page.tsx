import { PageTitle } from "../../core"
import FAQ from "./components/faq"

function page() {
    return (
        <div>
            <PageTitle title={"FAQ"} />
            <div className="mx-auto max-w-4xl p-8 py-24">
                <FAQ />
            </div>
        </div>
    )
}

export default page
