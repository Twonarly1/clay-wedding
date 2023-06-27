"use client"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { createClient } from "@supabase/supabase-js"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "../lib/graphql/apollo-client"
import { Toaster } from "react-hot-toast"
import { NEXT_PUBLIC_SUPABASE_ANON_KEY, NEXT_PUBLIC_SUPABASE_URL } from "../lib/env"
import { SupabaseProvider } from "./supabase-provider"

const supabase = createClient(NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY)

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={apolloClient}>
            <Toaster position="top-right" />
            {children}
        </ApolloProvider>
    )
}

export default Providers
