import type { Database as DB } from "../lib/database.types"

declare global {
    type Database = DB
    type Image = Database["public"]["Tables"]["gallery"]["Row"]
}
