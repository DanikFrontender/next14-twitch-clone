import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'sonner';
import { SessionProvider } from 'next-auth/react';
import './globals.css'

import { ThemeProvider } from '@/components/theme-provider'
import { auth } from '@/next-auth';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
      <html lang="en">
        <body className={inter.className}>
          <SessionProvider session={session}>
            <ThemeProvider
              attribute="class"
              forcedTheme="dark"
              storageKey="gamehub-theme"
            >
              <Toaster theme="light" position="bottom-center" />
              {children}
            </ThemeProvider>
          </SessionProvider>
        </body>
      </html>
  )
}
