import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A2A2A]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-5">
          
          {/* Column 1: Branding and Social Media */}
          <div className="flex flex-col">
            {/* Logo */}
            <div className="mb-3">
              <Image
                src="/images/White Logo.png"
                alt="My Tailor Logo"
                width={100}
                height={32}
                className="object-contain"
              />
            </div>
            
            {/* Tagline */}
            <p className="font-satoshi text-[13px] text-white mb-4 leading-[1.5]">
              Your personal online tailoring & alteration service.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-2">
              <a href="https://www.facebook.com/MyTailor" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#2A2A2A] transition">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/codecrushtech/" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#2A2A2A] transition">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#2A2A2A] transition">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h3 className="font-gelica font-black text-[16px] text-white mb-3">Services</h3>
            <ul className="flex flex-col gap-1.5">
              <li><Link href="#" className="font-satoshi text-[13px] text-white hover:text-[#9A54FD] transition">Custom Stitching</Link></li>
              <li><Link href="#" className="font-satoshi text-[13px] text-white hover:text-[#9A54FD] transition">Alterations</Link></li>
              <li><Link href="#" className="font-satoshi text-[13px] text-white hover:text-[#9A54FD] transition">Bridal & Formal Wear</Link></li>
              <li><Link href="#" className="font-satoshi text-[13px] text-white hover:text-[#9A54FD] transition">Fabric Selection</Link></li>
              <li><Link href="#" className="font-satoshi text-[13px] text-white hover:text-[#9A54FD] transition">Home Collection & Delivery</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="flex flex-col">
            <h3 className="font-gelica font-black text-[16px] text-white mb-3">Quick Links</h3>
            <ul className="flex flex-col gap-1.5">
              <li><Link href="/features" className="font-satoshi text-[13px] text-white hover:text-[#9A54FD] transition">MyTailor Features</Link></li>
              <li><Link href="/community" className="font-satoshi text-[13px] text-white hover:text-[#9A54FD] transition">Community</Link></li>
              <li><Link href="/about" className="font-satoshi text-[13px] text-white hover:text-[#9A54FD] transition">About Us</Link></li>
              <li><Link href="/features#faqs" className="font-satoshi text-[13px] text-white hover:text-[#9A54FD] transition">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="flex flex-col">
            <h3 className="font-gelica font-black text-[16px] text-white mb-3">Contact</h3>
            <div className="flex flex-col gap-2">
              <p className="font-satoshi text-[13px] text-white">
                Email: <a href="mailto:Support@mytailor.com" className="text-[#9A54FD] hover:underline">Support@mytailor.com</a>
              </p>
              <p className="font-satoshi text-[13px] text-white">
                Phone: <span className="text-white">+92 347 9890617</span>
              </p>
              <p className="font-satoshi text-[13px] text-white leading-[1.5]">
                Address: Al-Nawaz Arcade, Adjacent to Rawalpindi Urology Hospital, Murree Road, Rawalpindi, Pakistan.
              </p>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-4 text-center">
          <p className="font-satoshi text-[13px] text-white">
            Copyright - MyTailor © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
