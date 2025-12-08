"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Community", path: "/community" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className="
        w-full
        max-w-[1284px]
        h-[60px]
        sm:h-[70px]
        lg:h-[74.34px]
        flex
        justify-between
        items-center
        bg-white
        sm:bg-[#FFFFFF73]
        sm:backdrop-blur-[10px]
        rounded-[50px]
        sm:rounded-[80px]
        lg:rounded-[100px]
        border-b
        border-gray-300
        px-4
        sm:px-6
        lg:px-[40px]
        py-[8px]
        sm:py-[10px]
        mx-auto
        mt-4
        sm:mt-6
        lg:mt-[40px]
        font-satoshi
        relative
      "
    >
      {/* Left Side: Logo */}
      <div className="flex items-center z-20">
        <Image 
          src="/Logo.png" 
          alt="TailorCraft Logo"
          width={60}
          height={22}
          className="object-contain sm:w-[70px] sm:h-[26px] lg:w-[80px] lg:h-[30px]"
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden z-20 flex flex-col gap-1.5 p-2"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[#666666] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#666666] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-[#666666] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex gap-6 xl:gap-8">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`
              text-[13px]
              xl:text-[14px]
              leading-[24px]
              font-satoshi
              hover:text-[#9A54FD]
              transition
              whitespace-nowrap
              ${
                pathname === item.path
                  ? "text-[#9A54FD]"
                  : "text-[#666666]"
              }
            `}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Desktop Download Button */}
      <a
        href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
        target="_blank"
        rel="noopener noreferrer"
        className="
          hidden
          lg:inline-block
          text-[#9A54FD]
          border
          border-[#9A54FD]
          px-4
          xl:px-6
          py-1.5
          xl:py-2
          rounded-full
          hover:opacity-80
          transition
          font-satoshi
          text-[12px]
          xl:text-[14px]
          whitespace-nowrap
        "
      >
        Download Our App →
      </a>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <div className={`
        fixed
        top-0
        right-0
        h-full
        w-[280px]
        sm:w-[320px]
        bg-white
        shadow-2xl
        z-50
        transform
        transition-transform
        duration-300
        ease-in-out
        lg:hidden
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 p-2"
            aria-label="Close menu"
          >
            <span className="w-6 h-0.5 bg-[#666666] block rotate-45"></span>
            <span className="w-6 h-0.5 bg-[#666666] block -rotate-45 -translate-y-0.5"></span>
          </button>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`
                  text-[16px]
                  font-satoshi
                  hover:text-[#9A54FD]
                  transition
                  py-2
                  ${
                    pathname === item.path
                      ? "text-[#9A54FD] font-medium"
                      : "text-[#666666]"
                  }
                `}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Download Button */}
          <a
            href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-8
              text-[#9A54FD]
              border-2
              border-[#9A54FD]
              px-6
              py-3
              rounded-full
              hover:bg-[#9A54FD]
              hover:text-white
              transition
              font-satoshi
              text-[14px]
              font-medium
              text-center
            "
          >
            Download Our App →
          </a>
        </div>
      </div>
    </header>
  );
}
