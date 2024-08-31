// GET -getting data
// POST - creating data
// PUT - updating data

import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) { // we have to add request object as a param to prevent caching! Here we don't use request, but we need to include it to prevent caching.
    // here we usually fetch users from a db
    // return NextResponse.json('response');
    return NextResponse.json([
        { id: 1, name: 'Mosh' },
        { id: 2, name: 'John' }
    ]);

}