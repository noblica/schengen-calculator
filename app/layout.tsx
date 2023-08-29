import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Schengen Calculator',
  description: 'Calculate your remaining schengen days',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className={`${inter.className} h-full`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
