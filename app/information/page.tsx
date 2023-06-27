import { PageTitle } from "../../core/components"

const faqs = [
    {
        question: "Wedding Day Information",
        answer: "4:00pm - 4:30pm Chapel",
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
        <>
            <PageTitle title={"Information"} />
            <div className="min-h-screen">
                <div className="mx-auto flex max-w-7xl flex-col justify-center gap-16 px-6 py-24 lg:flex-row lg:px-8">
                    <div className="w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1557.5317475353731!2d-92.88629398972286!3d45.34624407342416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotels!5e0!3m2!1sen!2sus!4v1687614705976!5m2!1sen!2sus"
                            width="450"
                            height="450"
                            className="h-full min-h-[450px] w-full"
                            // style="border:0;"
                            // allowfullscreen=""
                            loading="eager"
                            // referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="mt-10  lg:mt-0">
                        <dl className="space-y-10">
                            <div className="">
                                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                                    Wedding Day Information
                                </h2>
                                <p className="mt-4 text-base leading-7 text-gray-600">
                                    All events will be located at{" "}
                                    <span className="text-fern_green">Ojiketa Regional Park</span>{" "}
                                    in Chisago City, MN.
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
        </>
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
