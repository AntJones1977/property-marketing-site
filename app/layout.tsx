import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' })

export const metadata: Metadata = {
  title: 'PropertyApp — Property Portfolio Management for UK Landlords',
  description:
    'Track properties, mortgages, tenants, compliance, and tax returns in one place. Purpose-built for UK buy-to-let landlords. Free for up to 3 properties.',
  keywords: [
    'UK landlord software',
    'property portfolio management',
    'SA105 tax software',
    'buy-to-let management',
    'rental property software',
    'landlord app UK',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
