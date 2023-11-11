import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://acme.com'),
  title: {
    default: 'Template',
    template: '%s | Template'
  },
  description: 'Next Template Description',
  applicationName: 'Next.js',
  keywords: ['Next.js', 'React', 'Javascript'],
  authors: [ { name: 'Band', url: 'https://brand.com'} ],
  creator: 'Nevobit Software',
  publisher: 'Nevobit Software',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    }
  },
  openGraph: {
    title: 'Template',
    description:'Template',
    url: 'https://template.com',
    siteName: 'Template',
    type: 'website',
    locale: 'en-US',
  },
  twitter: {
    title: 'Template',
    description:'Template',
    creator: '@nevobitsoftware',
    site: 'Template',
    card: 'summary_large_image',
  }
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
