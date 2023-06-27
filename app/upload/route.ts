import { NextResponse } from "next/server"

export async function POST(request: Request) {
    console.log("made it to the route")

    const { id } = await request.json()
    console.log(id)
    return NextResponse.json(id)
}
