import Image from "next/image"

export default function About() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section data-aos="fade-down" className="relative w-full h-[450px] overflow-hidden pt-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Hero.png"
            alt="About MyTailor Background"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay - Pink to Purple */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F554D5] to-[#9854F5] opacity-85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 h-full flex flex-col items-start justify-center text-left">
          <h1 className="font-gelica font-black text-[40px] md:text-[48px] leading-tight text-white mb-3">
            About MyTailor
          </h1>
          <p className="font-satoshi text-[16px] md:text-[18px] text-white/95 max-w-[600px]">
            Making Tailoring Smarter, Faster, and Effortless
          </p>
        </div>
      </section>

      {/* ==================== ABOUT MYTAILOR SECTION ==================== */}
      <section data-aos="fade-up" className="w-full bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            {/* Left Column - Tailor Shop Image */}
            <div data-aos="fade-right" className="relative w-full">
              <div className="relative rounded-[16px] overflow-hidden shadow-md aspect-[7/5]">
                <Image
                  src="/images/about.png"
                  alt="Modern Tailor Shop"
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div data-aos="fade-left" className="flex flex-col justify-center">
              <h2 className="font-gelica font-black text-[32px] md:text-[36px] leading-tight mb-4">
                <span className="text-black">About</span>{" "}
                <span className="text-[#9A54FD]">MyTailor</span>
              </h2>
              
              <p className="font-satoshi text-[15px] text-gray-700 leading-[1.6] mb-4">
                Our mission is to make tailoring shops efficient and customers happy.
              </p>
              
              <p className="font-satoshi text-[15px] text-gray-700 leading-[1.6] mb-5">
                Designed with real tailors in mind, our apps simplify every step, from taking measurements to order delivery.
              </p>

              <a 
                href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white transition font-satoshi text-[14px] font-medium w-fit inline-block"
              >
                Get the App Now →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== OUR STORY SECTION ==================== */}
      <section data-aos="fade-up" className="w-full bg-[#F7F7F7] py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            
            {/* Left Column - Text Content */}
            <div data-aos="fade-right" className="flex flex-col justify-center">
              <h2 className="font-gelica text-[32px] md:text-[36px] leading-tight text-black mb-5">
                Our Story
              </h2>
              
              {/* Our Mission */}
              <div className="mb-5">
                <h3 className="font-gelica font-black text-[20px] text-black mb-2">
                  Our Mission
                </h3>
                <p className="font-satoshi text-[14px] text-gray-700 leading-[1.6]">
                  MyTailor started with a simple idea: to make tailoring shops smarter and customers happier. Our mission is to digitize tailoring, simplify orders, and create seamless communication between tailors and clients.
                </p>
              </div>

              {/* Our Vision */}
              <div>
                <h3 className="font-gelica font-black text-[20px] text-black mb-2">
                  Our Vision
                </h3>
                <p className="font-satoshi text-[14px] text-gray-700 leading-[1.6]">
                  To empower tailors with modern tools and give customers a hassle-free, reliable tailoring experience anywhere in Pakistan and beyond.
                </p>
              </div>
            </div>

            {/* Right Column - Tailor Workshop Image */}
            <div data-aos="fade-left" className="relative w-full">
              <div className="relative rounded-[16px] overflow-hidden shadow-md aspect-[7/5]">
                <Image
                  src="/images/AB2.png"
                  alt="Traditional Tailor Workshop"
                  width={350}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

            {/* ==================== GET STARTED TODAY SECTION ==================== */}
            <section className="w-full py-16">
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
            <div className="flex flex-col items-center md:items-end gap-6">
              {/* QR Code */}
              <div className="p-4">
                <div className="w-[220px] h-[220px] flex items-center justify-center">
                  <Image
                    src="/images/Full QR.png"
                    alt="QR Code"
                    width={180}
                    height={180}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>
            
    
            </div>

          </div>
        </div>
      </section>

      <section className="relative w-full py-12 overflow-hidden">
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
      <section className="w-full py-12 pt-16 bg-white">
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
