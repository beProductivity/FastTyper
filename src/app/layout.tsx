import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import  Providers  from '../providers/Providers'
import { Navbar } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode,
  params: { lang: string}
}) {
  return (
    <html lang={params.lang}>
      <body>
        <Providers> 
        <Navbar/>
        {children}
        </Providers>
      </body>
    </html>
  )
}
