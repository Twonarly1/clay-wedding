type SupabaseStorageImage = {
    created_at: string
    id: string
    last_accessed_at: string
    metadata: Object
    name: string
    updated_at: string
}

type SupabaseDatabaseImage = {
    created_at: string
    imageSrc: string
    name: string
}

type Guest = {
    id: number
    created_at: string
    wedding: string
    party: string
    meal: string
    name: string
}
