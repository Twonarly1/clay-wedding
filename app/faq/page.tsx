import { PageTitle } from "../../core"
import FAQ from "./components/faq"

function page() {
    return (
        <div>
            <PageTitle title={"FAQ"} />
            <div className="mx-auto max-w-7xl p-8 py-24">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="cursor-default text-2xl font-bold leading-10 tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <FAQ />
                </div>
            </div>
        </div>
    )
}

export default page
