import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import {TheHeader} from "@/components/TheHeader";
import {TheFooter} from "@/components/TheFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Next App from Vladimir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <TheHeader/>
        <main className="container">
        {children}
      </main>
        <TheFooter/>
      </body>
    </html>
  )
}
