import { PageTitle } from "../../core/components"
import Upload from "./components/upload"
import { createClient } from "../../lib/supabase/supabase-server"
import RealtimeImages from "./components/realtime-images"

// export async function delay(ms: number) {
//     await new Promise((resolve) => setTimeout(resolve, ms))
// }
// await delay(5000)

export default async function Index() {
    const supabase = createClient()

    const { data: images, error } = await supabase.from("gallery").select("*")

    return (
        <>
            <PageTitle title={"Gallery"} />
            <Upload />
            <RealtimeImages serverImages={images ?? []} />
        </>
    )
}
