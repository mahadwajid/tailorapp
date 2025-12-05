"use client"

import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import { usePathname } from "next/navigation"
import localFont from "next/font/local"

const satoshi = localFont({
  src: [
    { path: "./../public/Fonts/satoshi/Satoshi-Regular.otf", weight: "400" },
    { path: "./../public/Fonts/satoshi/Satoshi-Medium.otf", weight: "500" },
    { path: "./../public/Fonts/satoshi/Satoshi-Bold.otf", weight: "700" },
  ],
  variable: "--font-satoshi",
})

const gelica = localFont({
  src: [
    { path: "./../public/Fonts/Gelica - Primary/Gelica - Primary/fonnts.com-Gelica-Regular.otf", weight: "400" },
  ],
  variable: "--font-gelica",
})

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${satoshi.variable} ${gelica.variable}`}>
        {/* your layout code */}
        <div className="relative">
          {isHome && (
            <div className="relative w-full h-[800px] mb-[-100px]">
              <Hero />
            </div>
          )}

          <div className="absolute top-0 left-0 w-full z-50">
            <Header />
          </div>
        </div>

        <main className={isHome ? "min-h-screen" : "min-h-screen"}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
