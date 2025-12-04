"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

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
        w-[1284px]
        h-[74.34px]
        flex
        justify-between
        items-center
        bg-[#FFFFFF73]
        rounded-[100px]
        border-b
        border-gray-300
        px-[40px]
        py-[10px]
        mx-auto
        mt-[40px]
        font-[Satoshi]
      "
      style={{ backdropFilter: "blur(10px)" }}
    >
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <Image 
          src="/Logo.png" 
          alt="TailorCraft Logo"
          width={80}
          height={30}
          className="object-contain"
        />
      </div>

      {/* Middle Navigation */}
      <nav className="flex gap-8">
        {navItems.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className={`
              text-[14px]
              leading-[24px]
              font-[500]
              hover:text-[#9A54FD]
              transition
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

      {/* Right Side: Download App */}
      <button
        className="
          bg-white
          text-[#9A54FD]
           border
           border-[#9A54FD]
          px-6
          py-2
          rounded-full
          hover:opacity-80
          transition
        "
      >
        Download Our App →
      </button>
    </header>
  );
}
