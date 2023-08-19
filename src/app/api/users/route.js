import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server"

connectDb();

export function GET(request) {

    const users = [
        {
            name: 'Utkarsh Goyal',
            phone: '9876543210',
            course: 'next.js'
        },
        {
            name: 'Abhishek',
            phone: '8989898989',
            course: 'react.js'
        }
    ]
    
    return NextResponse.json(users);
}

export function POST() {

}

export function DELETE() {

}

export function PUT() {

}
