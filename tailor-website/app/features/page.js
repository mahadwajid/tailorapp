import Image from "next/image"

export default function Features() {
  return (
    <>
    <section className="w-full bg-white py-10 pt-32">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top Section - Headline and Subtitle */}
        <div className="text-center mb-8">
          <h1 className="font-gelica text-[36px] md:text-[44px] leading-tight text-gray-800 mb-3">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          {/* Google Play Button */}
          <div className="bg-black px-6 py-3 rounded-[10px] flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,12L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
            </svg>
            <span className="text-white font-satoshi text-[14px] font-medium">GET IT ON Google Play</span>
          </div>
          
          {/* App Store Button */}
          <div className="bg-black px-6 py-3 rounded-[10px] flex items-center gap-2.5 cursor-pointer hover:opacity-90 transition">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
            </svg>
            <span className="text-white font-satoshi text-[14px] font-medium">Download on the App Store</span>
          </div>
        </div>

        {/* Bottom Section - Three Smartphones */}
        <div className="flex items-center justify-center">
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
      <section className="w-full bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center mb-8">
            <h2 className="font-gelica text-[32px] md:text-[36px] leading-tight text-gray-800 mb-2">
              <span className="text-[#FF6F61]">MyTailor</span> Features
            </h2>
            <p className="font-satoshi text-[15px] text-gray-600">
              Explore MyTailor's Powerful Features
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            {/* Left: Mobile Phone Image - Cropped to 80% */}
            <div className="relative flex items-center justify-center">
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
            <div className="flex flex-col justify-center">
              <h3 className="font-gelica text-[32px] md:text-[36px] leading-tight text-black mb-3">
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
      <section className="w-full bg-[#F7F7F7] py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Two Column Layout - Reversed */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            {/* Left: Text Content */}
            <div className="flex flex-col justify-center">
              <h3 className="font-gelica text-[32px] md:text-[36px] leading-tight text-black mb-4">
                Customer Profiles & Measurements
              </h3>
              <div className="font-satoshi text-[15px] text-gray-600 leading-[1.6] space-y-2.5 max-w-[500px]">
                <p>Save customer details, preferences, and complete measurement history.</p>
                <p>Access past orders instantly for repeat customers.</p>
                <p>Give personalized service with minimal effort.</p>
              </div>
            </div>

            {/* Right: Mobile Phone Image - Cropped to 80% */}
            <div className="relative flex items-center justify-center">
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
      <section className="w-full bg-white py-8">
        <div className="max-w-[1200px] mx-auto px-6">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            {/* Left: Mobile Phone Image - Cropped to 80% */}
            <div className="relative flex items-center justify-center">
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
            <div className="flex flex-col justify-center">
              <h3 className="font-gelica text-[32px] md:text-[36px] leading-tight text-black mb-4">
                Clothing Templates
              </h3>
              <div className="font-satoshi text-[15px] text-gray-600 leading-[1.6] space-y-2.5 max-w-[500px]">
                <p>Create templates for shirts, pants, kurtas, dresses, and more.</p>
                <p>Reuse templates to save time and avoid mistakes.</p>
                <p>Maintain consistent quality across all orders.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* More Tools Section */}
      <section className="w-full bg-[#F7F7F7] py-10">
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
                <h3 className="font-gelica text-[20px] text-black mb-2">Multi-Device Sync</h3>
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
                <h3 className="font-gelica text-[20px] text-black mb-2">Quick Analytics & Insights</h3>
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
                <h3 className="font-gelica text-[20px] text-black mb-2">Easy Order Filtering & Search</h3>
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
                <h3 className="font-gelica text-[20px] text-black mb-2">Export Reports</h3>
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
                <h3 className="font-gelica text-[20px] text-black mb-2">Secure Data Storage</h3>
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
                <h3 className="font-gelica text-[20px] text-black mb-2">Customizable Settings</h3>
                <p className="font-satoshi text-[14px] text-gray-600 leading-[1.6]">
                  Adjust app preferences to match your shop workflow perfectly.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}
