import { PageTitle } from "../../core"

const hotels: Hotel[] = [
    {
        name: "AmeriVu Inn & Suites - Chisago City",
        href: "https://goo.gl/maps/anjje5V9N937VXd19",
        distance: "2.7 miles",
        time: "7 min",
    },
    {
        name: "Super 8 by Wyndham Chisago City",
        href: "https://goo.gl/maps/vBk57mL8nFCuSKoB9",
        distance: "3.3 miles",
        time: "7 min",
    },
    {
        name: "Country Inn & Suites by Radisson, Forest Lake, MN",
        href: "https://goo.gl/maps/SYnHHLo3oC1QHisDA",
        distance: "10.3 miles",
        time: "15 min",
    },
    {
        name: "Running Aces Hotel",
        href: "https://goo.gl/maps/h64CZQvJzF7CrvtV7",
        distance: "13.2 miles",
        time: "18 min",
    },
]

function page() {
    return (
        <div className="min-h-screen">
            <PageTitle title={"Accommodations"} />
            <div className="mx-auto grid w-full max-w-7xl gap-16 p-8 py-24 lg:grid-cols-2">
                {hotels.map((hotel) => (
                    <div
                        className="relative flex flex-col space-y-5 rounded-lg border-2 border-fern_green bg-white p-8 shadow-lg"
                        key={hotel.href}
                    >
                        <b className="h-fit text-2xl">{hotel.name}</b>
                        <div className=" flex gap-4">
                            <p className="rounded-full bg-green-500/30 px-3 py-1">
                                {hotel.distance}
                            </p>
                            <p className="rounded-full bg-blue-500/30 px-3 py-1">{hotel.time}</p>
                        </div>
                        <div>
                            <a
                                className="rounded-full border border-fern_green bg-white px-3 py-1 text-fern_green hover:border-fern_green hover:bg-fern_green hover:text-white lg:absolute lg:bottom-4 lg:right-8"
                                href={hotel.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Map
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page
