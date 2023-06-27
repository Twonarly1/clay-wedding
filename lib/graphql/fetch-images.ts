import { gql } from "graphql-request"
import { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_STEPZEN_KEY } from "../env"

const fetchImages = async (isDynamic?: boolean) => {
    const query = gql`
        query MyQuery {
            getImagesList {
                created_at
                name
                imageSrc
            }
        }
    `

    const res = await fetch(`${NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        cache: isDynamic ? "no-cache" : "default",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${NEXT_PUBLIC_STEPZEN_KEY}`,
        },
        body: JSON.stringify({
            query,
        }),
    })

    const images = await res.json()

    return images.data.getImagesList
}
export default fetchImages
