import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import clsx from 'clsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test Front End',
  description: 'Test Front End',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      // h-[982px]
      className={clsx(inter.className, 'root-background w-full  scroll-smooth antialiased min-h-screen')}>{children}</body>
    </html>
  )
}
