import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import StarsCanvas from '@/components/StarBackground'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Decentralized node connection',
  description: 'connecting nodes to blockchains',
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],    
    shortcut: ["/apple-touch-icon.png"]
  },
  manifest: "/site.webmanifest"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Script src='./index.js' strategy='beforeInteractive' />
        {children}
        <StarsCanvas />
        </body>
    </html>
  )
}
