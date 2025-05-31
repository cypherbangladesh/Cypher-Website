import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Header from '@/components/shared/navbar'
import Footer from '@/components/shared/footer'
// import Providers from '@/providers/Providers'
import { ToastContainer } from 'react-toastify';

// import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CypherEdge',
  description: 'Cypher Edge Bangladesh',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Providers> */}
          {/* <CartProvider> */}
            <div className="min-h-screen flex flex-col">
              <Header />
              {/* <ThemeProvider> */}
              <main className="flex-1">{children}</main>
              <ToastContainer />
              {/* </ThemeProvider> */}
              <Footer />
            </div>
          {/* </CartProvider> */}
        {/* </Providers> */}
      </body>
    </html>
  )
}
