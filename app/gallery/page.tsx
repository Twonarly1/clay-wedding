import { PageTitle } from "../../core"
import Upload from "./components/upload"
import { createClient } from "../../lib/supabase/supabase-server"
import RealtimeImages from "./components/realtime-images"

export default async function Index() {
    const supabase = createClient()

    const { data: images, error } = await supabase.from("gallery").select("*")

    return (
        <div className="min-h-screen">
            <PageTitle title={"Gallery"} />
            <Upload />
            <RealtimeImages serverImages={images ?? []} />
        </div>
    )
}
