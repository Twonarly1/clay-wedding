"use client"
import { SessionContextProvider } from "@supabase/auth-helpers-react"
import { createClient } from "@supabase/supabase-js"
import { ApolloProvider } from "@apollo/client"
import apolloClient from "../lib/graphql/apollo-client"
import { Toaster } from "react-hot-toast"
import { NEXT_PUBLIC_SUPABASE_URL } from "../lib/env"

const supabase = createClient(
    NEXT_PUBLIC_SUPABASE_URL,
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9heHhneWRvZ2ZjcGRheHh4d2JkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg2MjQ1NjksImV4cCI6MTk5NDIwMDU2OX0.AJc3fUDDb_ybCWtOP1oLt7l2EJG7o-d0x2pjf0ZWdPg",
)

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ApolloProvider client={apolloClient}>
            <SessionContextProvider supabaseClient={supabase}>
                <Toaster position="top-right" />
                {children}
            </SessionContextProvider>
        </ApolloProvider>
    )
}

export default Providers
