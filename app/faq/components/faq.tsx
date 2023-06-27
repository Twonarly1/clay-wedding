"use client"
import { Disclosure } from "@headlessui/react"
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline"

const faqs = [
    {
        question: "What should I wear?",
        answer: "Casual attire is acceptable.",
    },
    {
        question: "Where are the ceremony and reception located?",
        answer: "Both the wedding ceremony and reception will be held at Ojiketa Regional Park in Chisago City, MN. There will be a brief outdoor walk between the ceremony and reception hall. The ceremony will be held in the Chapel and the reception in Strom Hall.",
    },
    {
        question: "What if I can’t make it?",
        answer: "We’re sorry you can’t attend! Please RSVP your regards via the response card sent with your invitation, or reach out to Marcus or Dejah so we can plan accordingly.",
    },
    {
        question: "How do I RSVP?",
        answer: "Please RSVP as soon as possible via the response cards provided with your invitation or reach out to Marcus or Dejah. RSVPs are due by September 1st. If RSVP cards are not returned by September 1st we will assume this means you are not able to attend.",
    },
    {
        question: "What time should I arrive?",
        answer: "Ceremony will start at 4pm. Please plan to arrive 10-15 minutes beforehand.",
    },
    {
        question: "Guest parking?",
        answer: "Parking is available onsite. Vehicles can also be left overnight, but should be picked up by 1pm.",
    },
    {
        question: "Are kids welcome?",
        answer: "Although we love your kids, we have limited venue spacing. We have decided to make our wedding an adults only event aside from immediate family traveling from out of state or unless otherwise noted on your invitation and response card. We hope this advanced notice means you will still be able to celebrate with us!",
    },
    {
        question: "Can I bring a guest?",
        answer: "We are only able to accommodate those guests formally listed on your wedding invitation.",
    },
    {
        question: "What if I have dietary restrictions?",
        answer: "If you have strict dietary needs/restrictions, please let us know via your response cards or reach out to Marcus or Dejah so we can plan accordingly.",
    },
    {
        question: "Where should I stay?",
        answer: "There are a few hotels nearby, listed in the Accommodations section of our website. There are also a handful of onsite cabins available. Cabins will primarily be reserved for the wedding party and out of town guests. Please reach out to Marcus or Dejah if interested in a cabin as space is limited.",
    },
]

export default function FAQ() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                <span className="text-base font-semibold leading-7">
                                                    {faq.question}
                                                </span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <MinusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    ) : (
                                                        <PlusSmallIcon
                                                            className="h-6 w-6"
                                                            aria-hidden="true"
                                                        />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">
                                                {faq.answer}
                                            </p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
