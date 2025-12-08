import "./globals.css"
import Footer from "./components/Footer"
import ClientLayout from "./components/ClientLayout"
import localFont from "next/font/local"
import { ReactNode } from "react"

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
    { path: "./../public/Fonts/Gelica - Primary/Gelica - Primary/fonnts.com-Gelica-Light.otf", weight: "300" },
    { path: "./../public/Fonts/Gelica - Primary/Gelica - Primary/fonnts.com-Gelica-Regular.otf", weight: "400" },
    { path: "./../public/Fonts/Gelica - Primary/Gelica - Primary/fonnts.com-Gelica-Medium.otf", weight: "500" },
    { path: "./../public/Fonts/Gelica - Primary/Gelica - Primary/fonnts.com-Gelica-Semi-Bold.otf", weight: "600" },
    { path: "./../public/Fonts/Gelica - Primary/Gelica - Primary/fonnts.com-Gelica-Bold.otf", weight: "700" },
    { path: "./../public/Fonts/Gelica - Primary/Gelica - Primary/fonnts.com-Gelica-Black.otf", weight: "900" },
  ],
  variable: "--font-gelica",
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${satoshi.variable} ${gelica.variable}`}>
      <body className="font-satoshi antialiased">
        <ClientLayout>
          {children}
        </ClientLayout>
        <Footer />
      </body>
    </html>
  )
}
