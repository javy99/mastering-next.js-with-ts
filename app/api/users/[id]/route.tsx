import { NextRequest, NextResponse } from "next/server";

export function GET(
    request: NextRequest,
    { params: { id } }: { params: { id: number } }) {
    // Fetch data from a db
    // If not found, return 404 error
    // Else return data
    if (id > 10)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    else
        return NextResponse.json({ id: 1, name: 'Javy' })
}

// PUT   - for replacing object
// PATCH - for updating 1 or more properties

export async function PUT(
    request: NextRequest,
    { params: { id } }: { params: { id: number } }) {
    // Validate the request body
    const body = await request.json()
    // If invalid, return 400
    if (!body.name)
        return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    // Fetch the user with the given id

    // If doesn't exist, return 404
    if (id > 10)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    // Update the user
    // Return the updated user 
    return NextResponse.json({ id: 1, name: body.name })

}