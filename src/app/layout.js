"use client"
// import Provider from './Provider'
import {SessionProvider} from "next-auth/react"
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'openinapp',
  description: 'Login with google and Dashboard',
}

export default function RootLayout({ children,session}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
