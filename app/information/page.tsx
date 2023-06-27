import { PageTitle } from "../../core"

const faqs: FAQ[] = [
    {
        question: "Wedding Day Information",
        answer: "4:00pm - Midnight",
    },
    {
        question: "Ceremony",
        answer: "4:00pm - 4:30pm Chapel",
    },
    {
        question: "Cocktail hour",
        answer: "4:30pm - 5:30pm Strom Hall",
    },
    {
        question: "Reception",
        answer: "5:30pm - Midnight Strom Hall",
    },
]

export default function Page() {
    return (
        <div className="min-h-screen">
            <PageTitle title={"Information"} />
            <div className="mx-auto flex max-w-7xl flex-col-reverse justify-center gap-16 p-8 py-24 lg:flex-row">
                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7214.9466450291675!2d-92.887922!3d45.344981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2ec061c8fc4c5%3A0x3d523ef29526472e!2sStrom%20Hall!5e1!3m2!1sen!2sus!4v1687868391859!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        className="h-full min-h-[450px] w-full"
                        loading="eager"
                    ></iframe>
                </div>
                <div className="cursor-default text-center lg:text-left">
                    <dl className="space-y-10">
                        <div className="">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                                Wedding Day Information
                            </h2>
                            <p className="mt-4 text-base leading-7 text-gray-600">
                                All events will be located at{" "}
                                <span className="text-fern_green">Ojiketa Regional Park</span> in
                                Chisago City, MN.
                            </p>
                        </div>
                        {faqs.map((faq) => (
                            <div key={faq.question}>
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    {faq.question}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">
                                    {faq.answer}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

// <Tab.Group>
// <Tab.List className="flex flex-col rounded-xl bg-fern_green p-1 sm:flex-row sm:space-x-1">
//     {infoPages.map((category) => (
//         <Tab
//             key={category}
//             className={({ selected }) =>
//                 clsx(
//                     "w-full rounded-lg py-3.5 text-2xl leading-5 text-fern_green",
//                     "ring-white  ring-offset-2 ring-offset-fern_green focus:outline-none",
//                     selected ? "bg-white shadow" : "text-white",
//                 )
//             }
//             onClick={() => setInfoPage(category)}
//         >
//             {category}
//         </Tab>
//     ))}
// </Tab.List>
// <Tab.Panels className="mt-2">
//     {infoPage === "Wedding Day" ? <WeddingAccordian /> : <PartyAccordian />}
// </Tab.Panels>
// </Tab.Group>
