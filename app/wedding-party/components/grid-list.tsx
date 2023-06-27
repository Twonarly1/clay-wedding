import Image from "next/image"

type Props = {
    people: Person[]
}

export default function GridList({ people }: Props) {
    return (
        <>
            {people.map((person) => (
                <div
                    key={person.name}
                    className="min-w-[240px] rounded-lg border border-fern_green border-opacity-50 bg-white p-8 text-center shadow"
                >
                    <Image
                        height={200}
                        width={200}
                        alt={person.name}
                        className="mx-auto h-40 w-40 rounded-full object-cover"
                        src={person.imageUrl}
                    />
                    <h3 className="mt-6 text-sm font-medium text-gray-900">{person.name}</h3>
                    <dl className="mt-1 flex flex-grow flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-sm text-gray-500">{person.role}</dd>
                        <dt className="sr-only">Role</dt>
                    </dl>
                </div>
            ))}
        </>
    )
}
