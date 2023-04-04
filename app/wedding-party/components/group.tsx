import clsx from "clsx"
import Image from "next/image"

type Props = {
    persons: {
        name: string
        role: string
    }[]
    row: boolean
    title?: string
}

function Group({ persons, row, title }: Props) {
    return (
        <div
            className={clsx(
                `${
                    row
                        ? "grid grid-cols-1 border-b border-fern_green sm:grid-cols-2"
                        : "flex flex-col"
                }`,
            )}
        >
            <p className="mx-auto text-3xl">{title}</p>
            {persons.map((person: { name: string; role: string }) => (
                <div
                    key={person.name}
                    className="flex flex-col items-center justify-center space-y-2 p-5"
                >
                    <Image
                        priority
                        src="/img/two.png"
                        alt="Party image"
                        height={200}
                        width={200}
                        className="rounded-full bg-fern_green bg-opacity-50 p-1 shadow"
                    />
                    <div className="h-10 text-center sm:text-xl">
                        <p className="font-semibold text-fern_green">{person.name}</p>
                        <p>{person.role}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Group
