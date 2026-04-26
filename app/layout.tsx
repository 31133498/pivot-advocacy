import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-montserrat'
})

export const metadata: Metadata = {
  title: 'Pivot Advocacy | Transforming Substance Abuse Prevention',
  description: 'Pivot Advocacy is a research-driven psycho-educational initiative helping young people and vulnerable populations move from awareness to action through immersive learning, resilience building, and community engagement.',
  keywords: ['substance abuse prevention', 'addiction recovery', 'psycho-educational', 'resilience building', 'youth programs', 'mental health', 'community engagement'],
  authors: [{ name: 'Pivot Advocacy' }],
  openGraph: {
    title: 'Pivot Advocacy | Transforming Substance Abuse Prevention',
    description: 'Empowering individuals and communities through immersive psycho-educational tools for substance abuse prevention and recovery support.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1a0a2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${montserrat.className} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
