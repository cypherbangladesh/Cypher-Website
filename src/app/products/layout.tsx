import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"




import Header from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Products",
  description: "Cypher Edge Bangladesh",
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Header /> */}
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  )
}

