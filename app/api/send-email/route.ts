import WelcomeTemplate from '@/emails/WelcomeTemplate'
import { NextResponse } from 'next/server'
import React from 'react'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
console.log("Resend API Key:", process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: 'domain.com',
        to: 'javlonqosimov1999@gmail.com',
        subject: 'Welcome aboard!',
        react: React.createElement(WelcomeTemplate, { name: 'Javlonbek' })
    })

    return NextResponse.json({})
}