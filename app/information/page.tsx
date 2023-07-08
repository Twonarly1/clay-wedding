import { PageTitle } from "../../core"

const martini = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
    >
        <path d="M237.66,45.66A8,8,0,0,0,232,32H24a8,8,0,0,0-5.66,13.66L120,147.31V208H88a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16H136V147.31ZM43.31,48H212.69l-16,16H59.31ZM128,132.69,75.31,80H180.69Z"></path>
    </svg>
)

const info = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
    >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
    </svg>
)

const diamond = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
    >
        <path d="M246,98.73l-56-64A8,8,0,0,0,184,32H72a8,8,0,0,0-6,2.73l-56,64a8,8,0,0,0,.17,10.73l112,120a8,8,0,0,0,11.7,0l112-120A8,8,0,0,0,246,98.73ZM222.37,96H180L144,48h36.37ZM74.58,112l30.13,75.33L34.41,112Zm89.6,0L128,202.46,91.82,112ZM96,96l32-42.67L160,96Zm85.42,16h40.17l-70.3,75.33ZM75.63,48H112L76,96H33.63Z"></path>
    </svg>
)

const dinner = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#000000"
        viewBox="0 0 256 256"
    >
        <path d="M72,88V40a8,8,0,0,1,16,0V88a8,8,0,0,1-16,0ZM216,40V224a8,8,0,0,1-16,0V176H152a8,8,0,0,1-8-8,268.75,268.75,0,0,1,7.22-56.88c9.78-40.49,28.32-67.63,53.63-78.47A8,8,0,0,1,216,40ZM200,53.9c-32.17,24.57-38.47,84.42-39.7,106.1H200ZM119.89,38.69a8,8,0,1,0-15.78,2.63L112,88.63a32,32,0,0,1-64,0l7.88-47.31a8,8,0,1,0-15.78-2.63l-8,48A8.17,8.17,0,0,0,32,88a48.07,48.07,0,0,0,40,47.32V224a8,8,0,0,0,16,0V135.32A48.07,48.07,0,0,0,128,88a8.17,8.17,0,0,0-.11-1.31Z"></path>
    </svg>
)

const faqs: FAQ[] = [
    {
        question: "Wedding Day Information",
        answer: "4:00pm - Midnight",
        icon: info,
    },
    {
        question: "Ceremony",
        answer: "4:00pm - 4:30pm Chapel",
        icon: diamond,
    },
    {
        question: "Cocktail hour",
        answer: "4:30pm - 5:30pm Strom Hall",
        icon: martini,
    },
    {
        question: "Reception",
        answer: "5:30pm - Midnight Strom Hall",
        icon: dinner,
    },
]

export default function Page() {
    return (
        <div className="min-h-screen">
            <PageTitle title={"Information"} />

            <div className="mx-auto flex max-w-7xl flex-col-reverse justify-center gap-16 p-8 py-24">
                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7214.9466450291675!2d-92.887922!3d45.344981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b2ec061c8fc4c5%3A0x3d523ef29526472e!2sStrom%20Hall!5e1!3m2!1sen!2sus!4v1687868391859!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        className="h-full min-h-[450px] w-full"
                        loading="eager"
                    ></iframe>
                </div>
                <div className="cursor-default text-left lg:p-5 lg:text-left">
                    <dl className="space-y-10">
                        <div className="">
                            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                                Wedding Day Itinerary
                            </h2>
                            <p className="mt-4 text-base leading-7">
                                All events will be located at{" "}
                                <a
                                    className="text-fern_green underline"
                                    href="https://goo.gl/maps/azEorWdB1uuVfNnF8"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Ojiketa Regional Park
                                </a>{" "}
                                located in Chisago City, MN.
                            </p>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-2">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.question}
                                    className="group flex items-center rounded border border-fern_green bg-white text-left"
                                >
                                    <dt className="p-5 group-hover:animate-tilt-rotate group-hover:text-fern_green">
                                        {" "}
                                        {faq.icon}
                                    </dt>
                                    <div className="text-base leading-7">
                                        <dt className="font-semibold text-gray-900">
                                            {faq.question}
                                        </dt>
                                        <dd>{faq.answer}</dd>
                                    </div>
                                </div>
                            ))}
                        </div>
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
