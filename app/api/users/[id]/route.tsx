import { NextRequest, NextResponse } from "next/server";

export function GET(
    request: NextRequest,
    { params: { id } }: {
        params: { id: number }
    }) {
    // Fetch data from a db
    // If not found, return 404 error
    // Else return data
    if (id > 10)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    else
        return NextResponse.json({ id: 1, name: 'Javy' })
}