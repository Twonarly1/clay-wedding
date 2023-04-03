import clsx from "clsx"
import Image from "next/image"

type Props = {
    persons: {
        name: string
        role: string
    }[]
    row: boolean
}

function Group({ persons, row }: Props) {
    return (
        <div
            className={clsx(
                `${row ? "grid grid-cols-2 border-b border-fern_green" : "flex flex-col"}`,
            )}
        >
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
                    <p className="text-center text-xl">
                        <span className="font-semibold text-fern_green">{person.name}</span> -{" "}
                        {person.role}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Group
