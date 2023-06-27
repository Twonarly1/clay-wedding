export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
    public: {
        Tables: {
            admin: {
                Row: {
                    created_at: string | null
                    id: number
                    password: string | null
                    username: string | null
                }
                Insert: {
                    created_at?: string | null
                    id?: number
                    password?: string | null
                    username?: string | null
                }
                Update: {
                    created_at?: string | null
                    id?: number
                    password?: string | null
                    username?: string | null
                }
                Relationships: []
            }
            guests: {
                Row: {
                    created_at: string | null
                    id: number
                    meal: string | null
                    name: string | null
                    party: string | null
                    wedding: string | null
                }
                Insert: {
                    created_at?: string | null
                    id?: number
                    meal?: string | null
                    name?: string | null
                    party?: string | null
                    wedding?: string | null
                }
                Update: {
                    created_at?: string | null
                    id?: number
                    meal?: string | null
                    name?: string | null
                    party?: string | null
                    wedding?: string | null
                }
                Relationships: []
            }
            gallery: {
                Row: {
                    created_at: string
                    imageSrc: string
                    name: string
                }
                Insert: {
                    created_at?: string
                    imageSrc?: string
                    name: string
                }
                Update: {
                    created_at?: string
                    imageSrc?: string
                    name?: string
                }
                Relationships: []
            }
        }
        Views: {
            [_ in never]: never
        }
        Functions: {
            [_ in never]: never
        }
        Enums: {
            [_ in never]: never
        }
        CompositeTypes: {
            [_ in never]: never
        }
    }
}
