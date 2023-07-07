import './globals.css'
import { Inter,Plus_Jakarta_Sans } from 'next/font/google'
import Head from 'next/head'
import { CardProvider } from '@/context/CardProvider'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jakarta = Plus_Jakarta_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight:['200','400','600'],
  variable:'--font-jakarta-sans',
})

export const metadata = {
  title: 'Avseel',
  description: 'Avseel is a brand of mosquito repellent products that is safe for the whole family.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="C6AOOM5iUTJweDxiXS9QaQphHGup6THmyEdjJpa1MbI" />
      </head>
      <body className={`${inter.variable} ${jakarta.variable}`}>
        <CardProvider>
          {children}
        </CardProvider>
      </body>
    </html>
  )
}
