"use client"

import { createContext, useContext, useState } from "react"

// import type { Database } from "@/types/supabase";
import type { SupabaseClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "../lib/supabase/supabase-browser"

type SupabaseContext = {
    supabase: SupabaseClient
}

const Context = createContext<SupabaseContext | undefined>(undefined)

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
    const [supabase] = useState(() => createClient())

    return (
        <Context.Provider value={{ supabase }}>
            <>{children}</>
        </Context.Provider>
    )
}

export const useSupabase = () => {
    let context = useContext(Context)
    if (context === undefined) {
        throw new Error("useSupabase must be used inside SupabaseProvider")
    } else {
        return context
    }
}
