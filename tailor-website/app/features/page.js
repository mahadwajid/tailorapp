"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Features() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I create a new order?",
      answer: "Simply tap the 'New Order' button, enter customer details and measurements, select the clothing type, and set the delivery date. The order will be automatically saved and tracked."
    },
    {
      question: "Can I save multiple measurement templates?",
      answer: "Yes! You can create and save unlimited measurement templates for different clothing types. These templates can be reused for repeat customers, saving you time and ensuring consistency."
    },
    {
      question: "How do customers track their orders?",
      answer: "Customers receive real-time updates through the customer app. They can see order status, progress, and delivery dates. Tailors can also send notifications and updates directly to customers."
    },
    {
      question: "Is MyTailor free to use?",
      answer: "MyTailor offers a free tier with basic features. Premium plans are available with advanced features like analytics, unlimited templates, and priority support."
    },
    {
      question: "Can I access the app on multiple devices?",
      answer: "Yes, MyTailor syncs across all your devices. Your data is securely stored in the cloud, so you can access orders, customers, and measurements from any device, anywhere."
    },
    {
      question: "How secure is my customer data?",
      answer: "We use industry-standard encryption and security measures to protect all your data. Your customer information and order details are safely stored and only accessible to you."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  return (
    <>
    <section data-aos="fade-up" className="w-full bg-white py-10 pt-32">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Section - Headline and Subtitle */}
        <div data-aos="fade-down" className="text-center mb-8">
          <h1 className="font-gelica font-black text-[36px] md:text-[44px] leading-tight text-gray-800 mb-3">
            Everything You Need to Run Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A54FD] to-[#F554D5]">
              Tailor Shop
            </span>
          </h1>
          <p className="font-satoshi text-[16px] text-gray-600 max-w-[650px] mx-auto leading-[1.6]">
            All the tools you need to manage orders, customers, and measurements efficiently.
          </p>
        </div>

        {/* Middle Section - App Store Download Buttons */}
        <div data-aos="zoom-in" className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          {/* Google Play Button */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black px-6 py-3 rounded-[10px] flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition"
          >
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#00D9FF"/>
              <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#00FF88"/>
              <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" fill="#FFD900"/>
              <path d="M3.84 2.15L16.81 8.88L14.54 11.15L3.84 2.15Z" fill="#FF6D00"/>
            </svg>
            <span className="text-white font-satoshi text-[14px] font-medium">GET IT ON Google Play</span>
          </a>
          
          {/* App Store Button */}
          <a 
            href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black px-6 py-3 rounded-[10px] flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <span className="text-white font-satoshi text-[14px] font-medium">Download on the App Store</span>
          </a>
        </div>

        {/* Bottom Section - Three Smartphones */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex items-center justify-center">
          {/* Mobile Phones Image - Single Image Showing All Three Phones */}
          <div className="relative w-full max-w-[750px] flex items-center justify-center">
            <Image
              src="/images/3in1.png"
              alt="My Tailor App Screens"
              width={750}
              height={500}
              className="object-contain w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>

      {/* Smart Order Management Section */}
      <section data-aos="fade-up" className="w-full bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="font-gelica font-black text-[32px] md:text-[36px] leading-tight text-gray-800 mb-2">
              <span className="text-[#FF6F61]">MyTailor</span> Features
            </h2>
            <p className="font-satoshi text-[15px] text-gray-600">
              Explore MyTailor's Powerful Features
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            {/* Left: Mobile Phone Image - Cropped to 80% */}
            <div data-aos="fade-right" className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[350px] h-[450px] overflow-hidden">
                <img
                  src="/images/3.png"
                  alt="Smart Order Management"
                  className="object-cover w-full h-[562px] object-top"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div data-aos="fade-left" className="flex flex-col justify-center">
              <h3 className="font-gelica font-black text-[32px] md:text-[36px] leading-tight text-black mb-3">
                Smart Order Management
              </h3>
              <p className="font-satoshi text-[15px] text-gray-600 leading-[1.6] max-w-[500px]">
                Keep all your orders organized in one place. Track delivery dates, progress, and pending work effortlessly. Quick search and real-time status updates make managing orders stress-free.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Customer Profiles & Measurements Section */}
      <section data-aos="fade-up" className="w-full bg-[#F7F7F7] py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Two Column Layout - Reversed */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            {/* Left: Text Content */}
            <div data-aos="fade-right" className="flex flex-col justify-center">
              <h3 className="font-gelica font-black text-[32px] md:text-[36px] leading-tight text-black mb-4">
                Customer Profiles & Measurements
              </h3>
              <div className="font-satoshi text-[15px] text-gray-600 leading-[1.6] space-y-2.5 max-w-[500px]">
                <p>Save customer details, preferences, and complete measurement history. Access past orders instantly for repeat customers. Give personalized service with minimal effort.</p>
               
              </div>
            </div>

            {/* Right: Mobile Phone Image - Cropped to 80% */}
            <div data-aos="fade-left" className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[350px] h-[450px] overflow-hidden">
                <img
                  src="/images/4.png"
                  alt="Customer Profiles & Measurements"
                  className="object-cover w-full h-[562px] object-top"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Clothing Templates Section */}
      <section data-aos="fade-up" className="w-full bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            {/* Left: Mobile Phone Image - Cropped to 80% */}
            <div data-aos="fade-right" className="relative flex items-center justify-center">
              <div className="relative w-full max-w-[350px] h-[450px] overflow-hidden">
                <img
                  src="/images/2(1).png"
                  alt="Clothing Templates"
                  className="object-cover w-full h-[562px] object-top"
                  style={{ imageRendering: 'high-quality' }}
                />
              </div>
            </div>

            {/* Right: Text Content */}
            <div data-aos="fade-left" className="flex flex-col justify-center">
              <h3 className="font-gelica font-black text-[32px] md:text-[36px] leading-tight text-black mb-4">
                Clothing Templates
              </h3>
              <div className="font-satoshi text-[15px] text-gray-600 leading-[1.6] space-y-2.5 max-w-[500px]">
                <p>Create templates for shirts, pants, kurtas, dresses, and more. Reuse templates to save time and avoid mistakes. Maintain consistent quality across all orders.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* More Tools Section */}
      <section data-aos="fade-up" className="w-full bg-[#F7F7F7] py-10">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="font-gelica text-[32px] md:text-[36px] leading-tight text-gray-800 mb-3">
              More Tools to Make Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A54FD] to-[#F554D5]">
                Work Effortless
              </span>
            </h2>
            <p className="font-satoshi text-[15px] text-gray-600 max-w-[700px] mx-auto">
              Extra features designed to save time, boost efficiency, and keep your tailoring shop running smoothly.
            </p>
          </div>

          {/* Features Grid - 2 Rows x 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3 border-b border-gray-300 pb-6 md:pb-8">
              
              {/* Feature 1: Multi-Device Sync */}
              <div className="flex flex-col pr-0 md:pr-6 md:border-r border-gray-300">
                <div className="w-12 h-12 rounded-[10px] bg-[#9A54FD]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#9A54FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="font-gelica font-black text-[20px] text-black mb-2">Multi-Device Sync</h3>
                <p className="font-satoshi text-[14px] text-gray-600 leading-[1.6]">
                  Access your data from any device, anywhere, with secure cloud backup.
                </p>
              </div>

              {/* Feature 2: Quick Analytics & Insights */}
              <div className="flex flex-col px-0 md:px-6 md:border-r border-gray-300">
                <div className="w-12 h-12 rounded-[10px] bg-[#9A54FD]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#9A54FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-gelica font-black text-[20px] text-black mb-2">Quick Analytics & Insights</h3>
                <p className="font-satoshi text-[14px] text-gray-600 leading-[1.6]">
                  Get fast overviews of popular orders, customer trends, and performance.
                </p>
              </div>

              {/* Feature 3: Easy Order Filtering & Search */}
              <div className="flex flex-col pl-0 md:pl-6">
                <div className="w-12 h-12 rounded-[10px] bg-[#9A54FD]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#9A54FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                  </svg>
                </div>
                <h3 className="font-gelica font-black text-[20px] text-black mb-2">Easy Order Filtering & Search</h3>
                <p className="font-satoshi text-[14px] text-gray-600 leading-[1.6]">
                  Find any order or customer instantly with smart filters and search.
                </p>
              </div>

            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-3 pt-6 md:pt-8">
              
              {/* Feature 4: Export Reports */}
              <div className="flex flex-col pr-0 md:pr-6 md:border-r border-gray-300">
                <div className="w-12 h-12 rounded-[10px] bg-[#9A54FD]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#9A54FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <h3 className="font-gelica font-black text-[20px] text-black mb-2">Export Reports</h3>
                <p className="font-satoshi text-[14px] text-gray-600 leading-[1.6]">
                  Generate and export order and customer reports for better tracking.
                </p>
              </div>

              {/* Feature 5: Secure Data Storage */}
              <div className="flex flex-col px-0 md:px-6 md:border-r border-gray-300">
                <div className="w-12 h-12 rounded-[10px] bg-[#9A54FD]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#9A54FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-gelica font-black text-[20px] text-black mb-2">Secure Data Storage</h3>
                <p className="font-satoshi text-[14px] text-gray-600 leading-[1.6]">
                  All your customer and order data is safely stored with top-level security.
                </p>
              </div>

              {/* Feature 6: Customizable Settings */}
              <div className="flex flex-col pl-0 md:pl-6">
                <div className="w-12 h-12 rounded-[10px] bg-[#9A54FD]/10 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-[#9A54FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-gelica font-black text-[20px] text-black mb-2">Customizable Settings</h3>
                <p className="font-satoshi text-[14px] text-gray-600 leading-[1.6]">
                  Adjust app preferences to match your shop workflow perfectly.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================== GET STARTED TODAY SECTION ==================== */}
      <section data-aos="fade-up" className="w-full py-16">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            
            {/* Left Side - Text Content & Buttons */}
            <div className="flex flex-col">
              {/* Heading */}
              <h2 className="font-gelica font-black text-[36px] md:text-[42px] leading-tight text-black mb-4">
                Get Started Today{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9854F5] to-[#F554D5] italic">
                  For Tailors & Customer
                </span>
              </h2>
              
              {/* Description */}
              <p className="font-satoshi text-[16px] text-gray-700 mb-8 leading-[1.6]">
                Download the apps and start managing orders or placing them instantly
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Download for Tailors Button */}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white transition font-satoshi text-[15px] font-medium flex items-center justify-center gap-2"
                >
                  Download for Tailors →
                </a>
                
                {/* Download for Customers Button */}
                <a 
                  href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-white border-2 border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61] hover:text-white transition font-satoshi text-[15px] font-medium flex items-center justify-center gap-2"
                >
                  Download for Customers →
                </a>
              </div>
            </div>

            {/* Right Side - QR Code & App Store Badges */}
              {/* Right Side - QR Code & App Store Badges */}
              <div data-aos="fade-left" className="flex flex-col items-center md:items-end gap-3 sm:gap-4 md:gap-2 lg:gap-3">
              {/* QR Code */}
              <div className="p-2 sm:p-3 md:p-3 lg:p-4 bg-white rounded-lg sm:rounded-xl self-center md:self-end md:translate-x-[-40px]">
                <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] flex items-center justify-center">
                  <Image
                    src="/images/QR Code.png"
                    alt="QR Code"
                    width={200}
                    height={200}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 md:gap-2 lg:gap-3 items-center">
                {/* Google Play Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 transition rounded-md sm:rounded-lg px-2.5 sm:px-3 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-2 lg:py-2.5 flex items-center gap-1.5 sm:gap-2 md:gap-2 min-w-[120px] sm:min-w-[130px] md:min-w-[140px] lg:min-w-[150px]"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5Z" fill="#00D9FF"/>
                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#00FF88"/>
                    <path d="M20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81Z" fill="#FFD900"/>
                    <path d="M3.84 2.15L16.81 8.88L14.54 11.15L3.84 2.15Z" fill="#FF6D00"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[8px] sm:text-[9px] md:text-[9px] lg:text-[10px] text-white uppercase leading-tight">GET IT ON</span>
                    <span className="text-[11px] sm:text-[12px] md:text-[12px] lg:text-[13px] text-white font-semibold leading-tight">Google Play</span>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-800 transition rounded-md sm:rounded-lg px-2.5 sm:px-3 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-2 lg:py-2.5 flex items-center gap-1.5 sm:gap-2 md:gap-2 min-w-[120px] sm:min-w-[130px] md:min-w-[140px] lg:min-w-[150px]"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-6 lg:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="flex flex-col items-start">
                    <span className="text-[8px] sm:text-[9px] md:text-[9px] lg:text-[10px] text-white leading-tight">Download on the</span>
                    <span className="text-[11px] sm:text-[12px] md:text-[12px] lg:text-[13px] text-white font-semibold leading-tight">App Store</span>
                  </div>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>


      <section className="w-full py-10 sm:py-12 md:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          
          {/* Section Heading */}
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h2 className="font-gelica font-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-tight text-black mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
                Top Tailors
              </span>{" "}
              You Can Trust
            </h2>
            <p className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 max-w-[780px] mx-auto leading-[1.6] px-4">
              Easily manage and browse orders for every type of clothing. From men's shirts to women's dresses, we've got it organized
            </p>
          </div>

          {/* Main Content - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-12">

            {/* Left Column - Tailor Image */}
            <div className="relative w-full flex items-center justify-center">
              <div className="relative w-full max-w-[450px]">
                {/* Background Ellipse - positioned behind and larger */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] z-0">
                  <Image
                    src="/images/Ellipse 1412.png"
                    alt="Background Gradient"
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Tailor Image Container */}
                <div className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden z-10">
                  <Image
                    src="/images/tailor.png"
                    alt="Ahmed Ali - Professional Tailor"
                    width={450}
                    height={550}
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Profile Content */}
            <div className="flex flex-col justify-center">

              {/* Name */}
              <h3 className="font-gelica font-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight text-black mb-2">
                Ahmed Ali
              </h3>

              {/* Description */}
              <p className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-gray-600 mb-4 sm:mb-5 leading-[1.6]">
                Expert in stitching with consistent quality and on-time delivery.
              </p>

              {/* Statistics */}
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-5">
                {/* Customer Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-[#9A54FD] text-[16px] sm:text-[18px]">★</span>
                  <span className="font-satoshi text-[13px] sm:text-[14px] md:text-[15px] text-gray-700">
                    4.9 Customer Rating
                  </span>
                </div>

                {/* Orders Completed */}
                <div className="font-satoshi text-[13px] sm:text-[14px] md:text-[15px] text-gray-700">
                  450+ Orders Completed
                </div>

                {/* On-Time Delivery */}
                <div className="font-satoshi text-[15px] text-gray-700">
                  98% On-Time Delivery
                </div>
              </div>

              {/* CTA Button */}
              <Link href="/contact" className="px-6 py-3 rounded-[12px] bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white font-satoshi text-[15px] font-medium w-fit inline-block">
                Book Now →
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== FAQ SECTION ==================== */}
      <section id="faqs" data-aos="fade-up" className="w-full py-12 bg-white scroll-mt-20">
        <div className="max-w-[900px] mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="font-gelica font-black text-[32px] md:text-[36px] leading-tight text-black mb-3">
              Have Questions?{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9A54FD] to-[#F554D5] italic">
                We've Got Answers
              </span>
            </h2>
            <p className="font-satoshi text-[14px] text-gray-600 max-w-[650px] mx-auto leading-[1.6]">
              Extra features designed to save time, boost efficiency, and keep your tailoring shop running smoothly.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-[12px] overflow-hidden transition-all hover:border-gray-300"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-satoshi text-[15px] text-gray-800 font-medium pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Answer Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 pb-4">
                    <p className="font-satoshi text-[14px] text-gray-600 leading-[1.6]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="relative w-full py-12 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/Explore More.png"
            alt="Background"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay - Left to Right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F554D5] to-[#9854F5] opacity-90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="font-gelica font-black text-[36px] md:text-[42px] leading-tight text-white mb-3">
              Get Started in 3 Easy Steps
            </h2>
            <p className="font-satoshi text-[16px] text-white/90 max-w-[700px] mx-auto leading-[1.6]">
              From order to delivery, our apps make tailoring simple for both tailors and customers.
            </p>
          </div>

          {/* Three Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Step 1: Add Customer / Place Order */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-[16px] flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-[#9854F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="font-gelica font-black text-[22px] md:text-[24px] text-white mb-2">
                Add Customer / Place Order
              </h3>
              <p className="font-satoshi text-[15px] text-white/90 leading-[1.6] max-w-[280px]">
                Quickly create a new order with all measurements.
              </p>
            </div>

            {/* Step 2: Track Progress */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-[16px] flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-[#9854F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <h3 className="font-gelica font-black text-[22px] md:text-[24px] text-white mb-2">
                Track Progress
              </h3>
              <p className="font-satoshi text-[15px] text-white/90 leading-[1.6] max-w-[280px]">
                Tailors update status, customers see live updates.
              </p>
            </div>

            {/* Step 3: Deliver & Feedback */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-[16px] flex items-center justify-center mb-4 shadow-lg">
                <svg className="w-8 h-8 text-[#9854F5]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-gelica font-black text-[22px] md:text-[24px] text-white mb-2">
                Deliver & Feedback
              </h3>
              <p className="font-satoshi text-[15px] text-white/90 leading-[1.6] max-w-[280px]">
                Complete the order and get instant feedback.
              </p>
            </div>

          </div>
        </div>
      </section>

         {/* ==================== WHAT TAILORS & CUSTOMERS SAY SECTION ==================== */}
         <section data-aos="fade-up" className="w-full py-12 pt-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Section Heading */}
          <div className="mb-8">
            <h2 className="font-gelica font-black text-[36px] md:text-[42px] leading-tight text-black mb-3">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9854F5] to-[#F554D5]">Tailors & Customers</span> Say
            </h2>
            <p className="font-satoshi text-[15px] text-gray-600 leading-[1.6] max-w-[700px]">
              Real reviews from tailors and customers who love how easy and fast our apps make every order
            </p>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Image Card */}
            <div className="relative rounded-[20px] overflow-hidden max-w-[320px] mx-auto md:mx-0">
              <Image
                src="/images/Feedback1.png"
                alt="Customer Review"
                width={400}
                height={500}
                className="object-cover w-full h-[450px]"
              />
            </div>

            {/* Card 2: Text Review with Background */}
            <div className="relative rounded-[20px] overflow-visible h-[450px] max-w-[320px] mx-auto md:mx-0">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                <Image
                  src="/images/Feedback2.jpg"
                  alt="Customer Review Background"
                  fill
                  className="object-cover"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 pt-16 h-full flex flex-col justify-center">
                {/* Profile Picture */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
                  <Image
                    src="/images/Feedback profile.png"
                    alt="Bang Upin"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Name */}
                <h3 className="font-gelica font-black text-[20px] text-white text-center mb-1 mt-4">
                  Bang Upin
                </h3>
                
                {/* Role */}
                <p className="font-satoshi text-[13px] text-gray-200 text-center mb-4">
                  Pedagang Asongan
                </p>
                
                {/* Review Text */}
                <p className="font-satoshi text-[14px] text-white leading-[1.6] text-center mb-4">
                  "Thank you so much, my space now looks more luxurious and expensive"
                </p>
                
                {/* Rating Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[#FF6F61] text-[18px]">★</span>
                  ))}
                  <span className="text-gray-300 text-[18px]">★</span>
                </div>
              </div>
            </div>

            {/* Card 3: Text Review with Background */}
            <div className="relative rounded-[20px] overflow-visible h-[450px] max-w-[320px] mx-auto md:mx-0">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-[20px] overflow-hidden">
                <Image
                  src="/images/Feedback3.jpg"
                  alt="Customer Review Background"
                  fill
                  className="object-cover"
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-6 pt-16 h-full flex flex-col justify-center">
                {/* Profile Picture */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
                  <Image
                    src="/images/Feedback profile.png"
                    alt="Siti Aminah"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
                
                {/* Name */}
                <h3 className="font-gelica font-black text-[20px] text-white text-center mb-1 mt-4">
                  Siti Aminah
                </h3>
                
                {/* Role */}
                <p className="font-satoshi text-[13px] text-gray-200 text-center mb-4">
                  Konsultan Kecantikan
                </p>
                
                {/* Review Text */}
                <p className="font-satoshi text-[14px] text-white leading-[1.6] text-center mb-4">
                  "With this new design, my clients feel more confident and satisfied"
                </p>
                
                {/* Rating Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[#FF6F61] text-[18px]">★</span>
                  ))}
                  <span className="text-gray-300 text-[18px]">★</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
