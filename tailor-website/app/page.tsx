import Image from "next/image"

export default function Home() {
  return (
    <>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-[1200px] mx-auto mt-[0px] mt-[100px] px-6 border border-black">

        <div className="grid grid-cols-4 gap-8">

          {/* Left Title */}
          <div className="col-span-1">
            <h2 className="font-gelica font-normal text-[48px] leading-tight text-black">
              Why <br /> Choose Us
            </h2>
          </div>

          {/* Features */}
          <div className="col-span-3 grid grid-cols-3 gap-10">

            {/* Feature 1 */}
            <div className="flex flex-col gap-3">
              <h3 className="font-gelica text-[24px] text-black">
                Easy to Use
              </h3>

              <p className="font-satoshi text-[16px] leading-[1.6] text-gray-700">
                Designed with tailors in mind—simple, clean tools let you manage
                orders, measurements, and customers without any tech stress.
              </p>

              <a href="#" className="font-satoshi text-[14px] text-[#6B57FF] flex items-center gap-2 mt-2 hover:opacity-80 transition">
                More Info
                <span className="text-[18px]">→</span>
              </a>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-3">
              <h3 className="font-gelica text-[24px] text-black">
                Time Saver
              </h3>

              <p className="font-satoshi text-[16px] leading-[1.6] text-gray-700">
                Save templates, reuse measurements, and handle every order quickly,
                so you can serve customers faster and reduce waiting time.
              </p>

              <a href="#" className="font-satoshi text-[14px] text-[#6B57FF] flex items-center gap-2 mt-2 hover:opacity-80 transition">
                More Info
                <span className="text-[18px]">→</span>
              </a>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-3">
              <h3 className="font-gelica text-[24px] text-black">
                Reliable & Secure
              </h3>

              <p className="font-satoshi text-[16px] leading-[1.6] text-gray-700">
                All your shop data is safely stored and organized digitally, making
                it easy to access anytime while keeping your business information secure.
              </p>

              <a href="#" className="font-satoshi text-[14px] text-[#6B57FF] flex items-center gap-2 mt-2 hover:opacity-80 transition">
                More Info
                <span className="text-[18px]">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Categories Section */}
      <section className="w-full max-w-[1200px] mx-auto mt-[0px] bg-[#F7F7F7] px-6">

        {/* Section Heading */}
        <div className="text-center mb-[60px] mt-10">
          <h2 className="font-gelica text-[42px] text-black mb-3">
            Explore <span className="bg-gradient-to-r from-[#FF6F61] to-[#9A54FD] bg-clip-text text-transparent">Categories</span>
          </h2>

          <p className="font-satoshi text-[18px] text-gray-600 max-w-[780px] mx-auto leading-[1.6]">
            Easily manage and browse orders for every type of clothing. From men’s shirts to
            women’s dresses, we’ve got it organized
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-3 gap-10">

          {/* Men’s Clothing */}
          <div className="relative group rounded-[20px] overflow-hidden shadow-md cursor-pointer">
            <img src="/images/Mens Clothing.png" className="w-full h-[230px] object-cover group-hover:scale-105 transition" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-gelica text-[20px]">Men’s Clothing</h3>
              <p className="font-satoshi text-[14px] text-gray-200">Shirts, pants, suits</p>
            </div>
          </div>

          {/* Women’s Clothing */}
          <div className="relative group rounded-[20px] overflow-hidden shadow-md cursor-pointer">
            <img src="/images/Women Clothing.png" className="w-full h-[230px] object-cover group-hover:scale-105 transition" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-gelica text-[20px]">Women’s Clothing</h3>
              <p className="font-satoshi text-[14px] text-gray-200">Dresses, tops, skirts</p>
            </div>
          </div>

          {/* Kids Clothing */}
          <div className="relative group rounded-[20px] overflow-hidden shadow-md cursor-pointer">
            <img src="/images/Kids Clothing.png" className="w-full h-[230px] object-cover group-hover:scale-105 transition" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-gelica text-[20px]">Kids’ Clothing</h3>
              <p className="font-satoshi text-[14px] text-gray-200">Shirts, dresses, uniforms</p>
            </div>
          </div>

          {/* Traditional */}
          <div className="relative group rounded-[20px] overflow-hidden shadow-md cursor-pointer">
            <img src="/images/Women Clothing.png" className="w-full h-[230px] object-cover group-hover:scale-105 transition" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-gelica text-[20px]">Traditional</h3>
              <p className="font-satoshi text-[14px] text-gray-200">Shalwar kameez, kurta, sherwani</p>
            </div>
          </div>

          {/* Accessories */}
          <div className="relative group rounded-[20px] overflow-hidden shadow-md cursor-pointer">
            <img src="/images/Mens Clothing.png" className="w-full h-[230px] object-cover group-hover:scale-105 transition" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-gelica text-[20px]">Accessories</h3>
              <p className="font-satoshi text-[14px] text-gray-200">Scarves, ties, belts</p>
            </div>
          </div>

          <div
            className="relative rounded-[20px] overflow-hidden shadow-md bg-[url('/images/Hero.png')] bg-cover bg-center cursor-pointer group flex items-end p-6"
          >

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F61E5] via-[#9A54FDCC] to-[#B073FFE0]"></div>

            {/* Optional: Dark tint on top of gradient */}
            <div className="absolute inset-0 bg-black/20"></div>

            {/* Content */}
            <div className="relative text-white">
              <h3 className="font-gelica text-[20px]">Explore More</h3>
              <p className="font-satoshi text-[14px] text-gray-200">A platform suitable for all</p>
            </div>

            <div className="absolute right-6 top-6 text-white text-[24px] group-hover:translate-x-1 transition">
              →
            </div>
          </div>


        </div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <section className="w-full py-10 mt-10">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* ---------- LEFT CONTENT ---------- */}
          <div>
            <h1 className="font-gelica text-[42px] md:text-[54px] leading-[1.2] text-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
                All-in-one
              </span>{" "}
              Software to Run
              Your Tailoring Business
            </h1>

            <p className="font-satoshi text-[18px] text-gray-600 mt-6 max-w-[520px] leading-[1.6]">
              A complete digital solution designed for tailoring shops to
              manage orders, measurements, customers, and daily workflow —
              simple, fast, and reliable.
            </p>

            <button className="mt-8 px-6 py-3 rounded-full border border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white transition font-satoshi">
              Get the App Now →
            </button>
          </div>


          {/* ---------- RIGHT IMAGE (cropped) ---------- */}
          <div className="relative flex justify-end md:-mr-[180px] h-[460px] overflow-hidden">

            <Image
              src="/images/Full Mobile 2.png"
              width={500}
              height={500}
              alt="Mobile UI"
              className="pointer-events-none select-none object-contain"
            />

          </div>

        </div>
      </section>


      <section className="w-full py-24 bg-[#F7F7F7]">
        {/* --------- Section Heading --------- */}
        <div className="text-center max-w-[800px] mx-auto px-6">
          <h2 className="font-gelica text-[36px] md:text-[48px] leading-tight text-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
              Connected
            </span>{" "}
            Tailoring Experience
          </h2>

          <p className="font-satoshi text-[18px] text-gray-600 mt-4 leading-[1.6]">
            We offer a complete system with separate apps for Tailors and Customers designed to keep everything synced, smooth, and stress-free.
          </p>
        </div>


        {/* --------- Two Cards Grid --------- */}
        <div className="max-w-[1400px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

          {/* --------- Tailor Card --------- */}
          <div className="bg-[#E6DBFF] rounded-[24px] p-10 flex flex-col items-center text-center relative overflow-hidden">

            {/* Badge */}
            <div className="px-4 py-1 bg-white/60 rounded-full border border-white/70 backdrop-blur-sm mb-6">
              <span className="font-satoshi text-[14px] text-[#9A54FD] font-medium">Tailor</span>
            </div>

            {/* Title */}
            <h3 className="font-gelica text-[24px] md:text-[28px] text-black leading-tight">
              Your Complete Digital Workspace
            </h3>

            {/* Description */}
            <p className="font-satoshi text-[16px] text-gray-700 mt-4 max-w-[400px]">
              Manage orders, measurements, customers, and delivery dates—all in
              one fast and organized app.
            </p>

            {/* Cropped Mobile Image */}
            <div className="mt-10 w-[260px] md:w-[300px] h-[420px] overflow-hidden">
              <Image
                src="/images/3.png"
                width={300}
                height={600}
                alt="Tailor App"
                className="object-cover pointer-events-none select-none"
              />
            </div>
          </div>


          {/* --------- Customer Card --------- */}
          <div className="bg-[#FFE1E0] rounded-[24px] p-10 flex flex-col items-center text-center relative overflow-hidden">

            {/* Badge */}
            <div className="px-4 py-1 bg-white/60 rounded-full border border-white/70 backdrop-blur-sm mb-6">
              <span className="font-satoshi text-[14px] text-[#FF6F61] font-medium">Customer</span>
            </div>

            {/* Title */}
            <h3 className="font-gelica text-[24px] md:text-[28px] text-black leading-tight">
              A Smooth Experience for Every Customer
            </h3>

            {/* Description */}
            <p className="font-satoshi text-[16px] text-gray-700 mt-4 max-w-[400px]">
              Customers can place orders, track progress, chat with the tailor,
              and get delivery updates without calls.
            </p>

            {/* Cropped Mobile Image */}
            <div className="mt-10 w-[260px] md:w-[300px] h-[420px] overflow-hidden">
              <Image
                src="/images/4.png"
                width={300}
                height={600}
                alt="Customer App"
                className="object-cover pointer-events-none select-none"
              />
            </div>
          </div>


        </div>

      </section>



      {/* ==================== SMART ORDER SECTION ==================== */}
      <section className="w-full py-24 bg-white overflow-hidden">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-0">

          {/* ===== Left Image - Completely aligned to left edge ===== */}
          <div className="relative w-full">
            <Image
              src="/images/Tracking.png"
              width={680}
              height={480}
              alt="Smart Order Tracking"
              className="rounded-[20px] md:rounded-l-none md:rounded-r-[20px] object-cover w-full h-full"
            />

            {/* Background shape behind image (Figma-style) */}
            <div className="absolute -z-10 -right-14 top-10 w-[300px] h-[260px] bg-[#F0EEF9] rounded-[40px] hidden md:block"></div>
          </div>

          {/* ===== Right Content ===== */}
          <div className="px-6 md:px-12 lg:px-16 py-6 md:py-0">

            {/* Category Badge */}
            <div className="mb-4">
              <span className="font-satoshi text-[12px] tracking-[2px] uppercase text-[#FF6F61]">
                Customer
              </span>
            </div>

            {/* Title */}
            <h2 className="font-gelica text-[38px] md:text-[48px] leading-[1.2] text-black max-w-[520px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
                Smart Order
              </span>{" "}
              Tracking With Zero Hassle
            </h2>

            {/* Description */}
            <p className="font-satoshi text-[18px] text-gray-600 mt-6 leading-[1.6] max-w-[500px]">
              Manage unlimited orders, delivery dates, customer details, and work status
              from one clean dashboard—no more registers, no more confusion.
            </p>

            {/* CTA Link */}
            <a
              href="#"
              className="font-satoshi text-[16px] text-[#FF6F61] flex items-center gap-2 mt-8 hover:opacity-80 transition"
            >
              More Info
              <span className="text-[18px]">→</span>
            </a>
          </div>

        </div>
      </section>

     {/* ==================== CRAFTED FOR TAILORS SECTION ==================== */}
<section className="w-full py-28 bg-white">
  <div className="max-w-[1400px] mx-auto pl-6 pr-0 grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* ===== Left Content ===== */}
    <div className="flex flex-col justify-center">
      
      {/* Category Badge */}
      <span className="font-satoshi text-[12px] tracking-[2px] uppercase text-[#9A54FD] mb-4">
        Tailors
      </span>

      {/* Title */}
      <h2 className="font-gelica text-[42px] md:text-[50px] leading-[1.15] text-black max-w-[600px]">
        Crafted for 
        {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
          Tailors
        </span>{" "}
        to Work Faster & Serve Better
      </h2>

      {/* Description */}
      <p className="font-satoshi text-[18px] text-gray-600 mt-6 leading-[1.6] max-w-[520px]">
        Enjoy a smooth, easy-to-use experience that boosts your shop efficiency, 
        reduces mistakes, and helps you deliver professional service every time.
      </p>

      {/* CTA */}
      <a
        href="#"
        className="font-satoshi text-[16px] text-[#9A54FD] flex items-center gap-2 mt-8 hover:opacity-80 transition"
      >
        More Info
        <span className="text-[18px]">→</span>
      </a>
    </div>

    {/* ===== Right Image ===== */}
    <div className="relative w-full h-full flex items-center">
      <div className="relative w-full rounded-[24px] md:rounded-l-none md:rounded-r-[24px] overflow-hidden">
        <Image
          src="/images/FT.png"
          alt="Tailor Working"
          width={800}
          height={600}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  </div>
</section>

      {/* ==================== DETAILED CUSTOMER INSIGHTS SECTION ==================== */}
      <section className="w-full py-24 bg-[#F7F7F7]">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          
          {/* ===== Left: Mobile Phones Image - Cropped 20% from bottom ===== */}
          <div className="relative flex items-start justify-center h-[600px]">
            <div className="relative w-full flex items-center justify-center">
              <div className="relative w-full max-w-[500px] h-[500px] overflow-hidden">
                <Image
                  src="/images/2(1).png"
                  alt="Customer Insights Mobile Screens"
                  width={500}
                  height={600}
                  className="object-cover w-full h-[600px] object-top"
                />
              </div>
            </div>
          </div>

          {/* ===== Right: Text Content ===== */}
          <div className="flex flex-col justify-center">
            
            {/* Title */}
            <h2 className="font-gelica text-[38px] md:text-[48px] leading-[1.2] text-black max-w-[600px]">
              <span className="text-[#9A54FD]">Detailed</span>{" "}
              <span className="text-[#FF6F61]">Customer</span>{" "}
              Insights for Better Service
            </h2>

            {/* Description */}
            <p className="font-satoshi text-[18px] text-gray-600 mt-6 leading-[1.6] max-w-[550px]">
              Get a full view of every customer measurements, order history, preferred styles, rush-work patterns, and past delivery timelines —all in seconds.
            </p>

            {/* CTA Button */}
            <button className="mt-8 px-8 py-4 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white transition font-satoshi text-[16px] font-medium w-fit">
              Get the App Now →
            </button>
          </div>

        </div>
      </section>

      {/* ==================== TOP TAILORS SECTION ==================== */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="font-gelica text-[36px] md:text-[42px] leading-tight text-black mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
                Top Tailors
              </span>{" "}
              You Can Trust
            </h2>
            <p className="font-satoshi text-[16px] text-gray-600 max-w-[780px] mx-auto leading-[1.6]">
              Easily manage and browse orders for every type of clothing. From men's shirts to women's dresses, we've got it organized
            </p>
          </div>

          {/* Main Content - Two Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:gap-12">
            
            {/* Left Column - Tailor Image */}
            <div className="relative w-full flex items-center justify-center">
              <div className="relative w-full max-w-[450px] rounded-[20px] overflow-hidden">
                <Image
                  src="/images/tailor.png"
                  alt="Ahmed Ali - Professional Tailor"
                  width={450}
                  height={550}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Profile Content */}
            <div className="flex flex-col justify-center">
              
              {/* Name */}
              <h3 className="font-gelica text-[36px] md:text-[40px] leading-tight text-black mb-2">
                Ahmed Ali
              </h3>

              {/* Description */}
              <p className="font-satoshi text-[16px] text-gray-600 mb-5 leading-[1.6]">
                Expert in stitching with consistent quality and on-time delivery.
              </p>

              {/* Statistics */}
              <div className="flex flex-wrap gap-4 md:gap-6 mb-5">
                {/* Customer Rating */}
                <div className="flex items-center gap-2">
                  <span className="text-[#9A54FD] text-[18px]">★</span>
                  <span className="font-satoshi text-[15px] text-gray-700">
                    4.9 Customer Rating
                  </span>
                </div>

                {/* Orders Completed */}
                <div className="font-satoshi text-[15px] text-gray-700">
                  450+ Orders Completed
                </div>

                {/* On-Time Delivery */}
                <div className="font-satoshi text-[15px] text-gray-700">
                  98% On-Time Delivery
                </div>
              </div>

              {/* CTA Button */}
              <button className="px-6 py-3 rounded-[12px] bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white transition font-satoshi text-[15px] font-medium w-fit">
                Book Now →
              </button>
            </div>  

          </div>
        </div>
      </section>

      {/* ==================== GET STARTED IN 3 EASY STEPS SECTION ==================== */}
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
            <h2 className="font-gelica text-[36px] md:text-[42px] leading-tight text-white mb-3">
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
              <h3 className="font-gelica text-[22px] md:text-[24px] text-white mb-2">
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
              <h3 className="font-gelica text-[22px] md:text-[24px] text-white mb-2">
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
              <h3 className="font-gelica text-[22px] md:text-[24px] text-white mb-2">
                Deliver & Feedback
              </h3>
              <p className="font-satoshi text-[15px] text-white/90 leading-[1.6] max-w-[280px]">
                Complete the order and get instant feedback.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== ABOUT MYTAILOR SECTION ==================== */}
      <section className="w-full bg-[#F7F7F7]">
        {/* Top Gradient Bar */}
        <div className="w-full h-1 bg-gradient-to-r from-[#9854F5] to-[#F554D5]"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-8">
            
            {/* Left Column - Tailor Shop Image */}
            <div className="relative w-full max-w-[500px]">
              <div className="relative rounded-[16px] overflow-hidden shadow-xl">
                <Image
                  src="/images/about.png"
                  alt="Modern Tailor Shop"
                  width={500}
                  height={350}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div className="flex flex-col justify-center">
              
              {/* Heading */}
              <h2 className="font-gelica text-[32px] md:text-[36px] leading-tight mb-3">
                <span className="text-black">About</span>{" "}
                <span className="text-[#F554D5]">MyTailor</span>
              </h2>

              {/* Mission Statement */}
              <p className="font-satoshi text-[15px] text-gray-700 leading-[1.6] mb-5 max-w-[550px]">
                Our mission is to make tailoring shops efficient and customers happy. Designed with real tailors in mind, our apps simplify every step, from taking measurements to order delivery.
              </p>

              {/* CTA Button */}
              <button className="px-5 py-2.5 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white transition font-satoshi text-[14px] font-medium w-fit">
                Get the App Now →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== WHAT TAILORS & CUSTOMERS SAY SECTION ==================== */}
      <section className="w-full py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          
          {/* Section Heading */}
          <div className="mb-8">
            <h2 className="font-gelica text-[36px] md:text-[42px] leading-tight text-black mb-3">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9854F5] to-[#F554D5]">Tailors & Customers</span> Say
            </h2>
            <p className="font-satoshi text-[15px] text-gray-600 leading-[1.6] max-w-[700px]">
              Real reviews from tailors and customers who love how easy and fast our apps make every order
            </p>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Image Card */}
            <div className="relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/1.png"
                alt="Customer Review"
                width={400}
                height={400}
                className="object-cover w-full h-[300px]"
              />
            </div>

            {/* Card 2: Text Review */}
            <div className="relative bg-[#F7F7F7] rounded-[20px] p-6 pt-12">
              {/* Profile Picture */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src="/images/1.png"
                  alt="Bang Upin"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Name */}
              <h3 className="font-gelica text-[20px] text-black text-center mb-1 mt-4">
                Bang Upin
              </h3>
              
              {/* Role */}
              <p className="font-satoshi text-[13px] text-gray-500 text-center mb-4">
                Pedagang Asongan
              </p>
              
              {/* Review Text */}
              <p className="font-satoshi text-[14px] text-gray-700 leading-[1.6] text-center mb-4">
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

            {/* Card 3: Text Review */}
            <div className="relative bg-[#F7F7F7] rounded-[20px] p-6 pt-12">
              {/* Profile Picture */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
                <Image
                  src="/images/1.png"
                  alt="Siti Aminah"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Name */}
              <h3 className="font-gelica text-[20px] text-black text-center mb-1 mt-4">
                Siti Aminah
              </h3>
              
              {/* Role */}
              <p className="font-satoshi text-[13px] text-gray-500 text-center mb-4">
                Konsultan Kecantikan
              </p>
              
              {/* Review Text */}
              <p className="font-satoshi text-[14px] text-gray-700 leading-[1.6] text-center mb-4">
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
      </section>

      {/* ==================== GET STARTED TODAY SECTION ==================== */}
      <section className="w-full py-16 bg-[#F7F7F7]">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            
            {/* Left Side - Text Content & Buttons */}
            <div className="flex flex-col">
              {/* Heading */}
              <h2 className="font-gelica text-[36px] md:text-[42px] leading-tight text-black mb-4">
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
                <button className="px-6 py-3 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white transition font-satoshi text-[15px] font-medium flex items-center justify-center gap-2">
                  Download for Tailors →
                </button>
                
                {/* Download for Customers Button */}
                <button className="px-6 py-3 rounded-full bg-white border-2 border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61] hover:text-white transition font-satoshi text-[15px] font-medium flex items-center justify-center gap-2">
                  Download for Customers →
                </button>
              </div>
            </div>

            {/* Right Side - QR Code & App Store Badges */}
            <div className="flex flex-col items-center md:items-end gap-6">
              {/* QR Code */}
              <div className="bg-white p-4 rounded-[12px] shadow-md">
                <div className="w-[150px] h-[150px] bg-black rounded-[8px] flex items-center justify-center">
                  <span className="text-white text-xs">QR Code</span>
                </div>
              </div>
              
              {/* App Store Badges */}
              <div className="flex flex-col gap-3">
                {/* Google Play Badge */}
                <div className="bg-black px-6 py-3 rounded-[8px] flex items-center gap-3 cursor-pointer hover:opacity-90 transition">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L16.81,12L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <span className="text-white font-satoshi text-[14px]">Get it on Google Play</span>
                </div>
                
                {/* App Store Badge */}
                <div className="bg-black px-6 py-3 rounded-[8px] flex items-center gap-3 cursor-pointer hover:opacity-90 transition">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                  </svg>
                  <span className="text-white font-satoshi text-[14px]">Download on the App Store</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  )
}
