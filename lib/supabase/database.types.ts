export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
    public: {
        Tables: {
            gallery: {
                Row: {
                    created_at: string
                    imageSrc: string
                    name: string
                }
                Insert: {
                    created_at?: string
                    imageSrc: string
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
