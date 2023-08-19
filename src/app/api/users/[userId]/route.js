import { NextResponse } from "next/server"

export function GET(request, { params }) {

    const users = [
        {
            id: 1,
            name: 'Utkarsh Goyal',
            phone: '9876543210',
            course: 'next.js'
        },
        {
            id: 2,
            name: 'Abhishek',
            phone: '8989898989',
            course: 'react.js'
        }
    ]
    console.log(`response: ${params.userId}`);
    return NextResponse.json('test');
}

export function POST() {

}

export function DELETE() {

}

export function PUT() {

}
