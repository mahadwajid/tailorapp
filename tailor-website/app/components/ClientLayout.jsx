"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Header from "./Header"
import Hero from "./Hero"

export default function ClientLayout({ children }) {
  const pathname = usePathname()
  const isHome = pathname === "/"

  useEffect(() => {
    // Dynamically import AOS only on client side
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
        offset: 100,
      })
    })
  }, [])

  return (
    <>
      {/* your layout code */}
      <div className="relative">
        {isHome && (
          <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] mb-[-50px] sm:mb-[-80px] lg:mb-[-100px]">
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
    </>
  )
}

