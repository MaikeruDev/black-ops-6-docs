import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Layout from './layout-component'
import { LanguageProvider } from './language-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Black Ops 6 Docs',
  description: 'Documentation for Black Ops 6 zombies, multiplayer, and campaign',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <Layout>{children}</Layout>
        </LanguageProvider>
      </body>
    </html>
  )
}