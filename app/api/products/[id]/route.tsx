import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
    request: NextRequest,
    { params: { id } }: { params: { id: number } }) {
    if (id > 20)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    else
        return NextResponse.json({ id: 1, name: 'Milk', price: 3 })
}

export async function PUT(
    request: NextRequest,
    { params: { id } }: { params: { id: number } }) {
    const body = await request.json()
    const validation = schema.safeParse(body);
    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })

    if (id > 20)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    return NextResponse.json({ id: 1, name: body.name, price: body.price })
}

export async function DELETE(
    request: NextRequest,
    { params: { id } }: { params: { id: number } }) {
    if (id > 20)
        return NextResponse.json({ error: 'User not found' }, { status: 404 })
    return NextResponse.json({});
}