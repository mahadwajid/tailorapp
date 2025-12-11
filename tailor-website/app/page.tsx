import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>

      {/* Why Choose Us Section */}
      <section className="w-full max-w-[1200px] mx-auto mt-12 sm:mt-16 md:mt-20 lg:mt-[100px] px-4 sm:px-6 py-6 sm:py-8 bg-white rounded-[8px]">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">

          {/* Left Title */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="font-gelica font-black text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-tight text-black">
              Why <br className="hidden lg:block" /> Choose Us
            </h2>
          </div>

          {/* Features */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

            {/* Feature 1 */}
            <div data-aos="fade-up" data-aos-delay="100" className="flex flex-col gap-2 sm:gap-2.5">
              <h3 className="font-gelica font-black text-[18px] sm:text-[20px] lg:text-[22px] text-black">
                Easy to Use
              </h3>

              <p className="font-satoshi text-[14px] sm:text-[15px] leading-[1.6] text-gray-700">
                Designed with tailors in mind—simple, clean tools let you manage
                orders, measurements, and customers without any tech stress.
              </p>

              <a href="#" className="font-satoshi text-[13px] sm:text-[14px] text-[#6B57FF] flex items-center gap-2 mt-1">
                More Info
                <span className="text-[14px] sm:text-[16px]">→</span>
              </a>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-2 sm:gap-2.5">
              <h3 className="font-gelica font-black text-[18px] sm:text-[20px] lg:text-[22px] text-black">
                Time Saver
              </h3>

              <p className="font-satoshi text-[14px] sm:text-[15px] leading-[1.6] text-gray-700">
                Save templates, reuse measurements, and handle every order quickly,
                so you can serve customers faster and reduce waiting time.
              </p>

              <a href="#" className="font-satoshi text-[13px] sm:text-[14px] text-[#6B57FF] flex items-center gap-2 mt-1">
                More Info
                <span className="text-[14px] sm:text-[16px]">→</span>
              </a>
            </div>

            {/* Feature 3 */}
            <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col gap-2 sm:gap-2.5">
              <h3 className="font-gelica font-black text-[18px] sm:text-[20px] lg:text-[22px] text-black">
                Reliable & Secure
              </h3>

              <p className="font-satoshi text-[14px] sm:text-[15px] leading-[1.6] text-gray-700">
                All your shop data is safely stored and organized digitally, making
                it easy to access anytime while keeping your business information secure.
              </p>

              <a href="#" className="font-satoshi text-[13px] sm:text-[14px] text-[#6B57FF] flex items-center gap-2 mt-1">
                More Info
                <span className="text-[14px] sm:text-[16px]">→</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Explore Categories Section */}
      <section className="w-full mt-0 bg-[#F7F7F7] py-8 sm:py-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <div className="text-center mb-8 sm:mb-12 md:mb-[60px] mt-6 sm:mt-8 md:mt-10">
            <h2 className="font-gelica font-black text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] text-black mb-3">
              Explore <span className="bg-gradient-to-r from-[#FF6F61] to-[#9A54FD] bg-clip-text text-transparent">Categories</span>
            </h2>

            <p className="font-satoshi text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 max-w-[780px] mx-auto leading-[1.6] mb-4 px-4">
              Easily manage and browse orders for every type of clothing. From men's shirts to
              women's dresses, we've got it organized
            </p>

            <a
              href="/categories"
              className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white font-satoshi text-[13px] sm:text-[14px] md:text-[15px] font-medium"
            >
              View All Categories →
            </a>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10">

            {/* Men's Clothing */}
            <a href="/categories" className="relative group rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-md cursor-pointer block">
              <img src="/images/Mens Clothing.png" className="w-full h-[200px] sm:h-[220px] md:h-[230px] object-cover" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="font-gelica font-black text-[16px] sm:text-[18px] md:text-[20px]">Men's Clothing</h3>
                <p className="font-satoshi text-[12px] sm:text-[13px] md:text-[14px] text-gray-200">Shirts, pants, suits</p>
              </div>
            </a>

            {/* Women's Clothing */}
            <a href="/categories" className="relative group rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-md cursor-pointer block">
              <img src="/images/Women Clothing.png" className="w-full h-[200px] sm:h-[220px] md:h-[230px] object-cover group-hover:scale-105 transition" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="font-gelica font-black text-[16px] sm:text-[18px] md:text-[20px]">Women's Clothing</h3>
                <p className="font-satoshi text-[12px] sm:text-[13px] md:text-[14px] text-gray-200">Dresses, tops, skirts</p>
              </div>
            </a>

            {/* Kids Clothing */}
            <a href="/categories" className="relative group rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-md cursor-pointer block">
              <img src="/images/Kids Clothing.png" className="w-full h-[200px] sm:h-[220px] md:h-[230px] object-cover group-hover:scale-105 transition" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="font-gelica font-black text-[16px] sm:text-[18px] md:text-[20px]">Kids' Clothing</h3>
                <p className="font-satoshi text-[12px] sm:text-[13px] md:text-[14px] text-gray-200">Shirts, dresses, uniforms</p>
              </div>
            </a>

            {/* Traditional */}
            <a href="/categories" className="relative group rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-md cursor-pointer block">
              <img src="/images/Women Clothing.png" className="w-full h-[200px] sm:h-[220px] md:h-[230px] object-cover group-hover:scale-105 transition" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="font-gelica font-black text-[16px] sm:text-[18px] md:text-[20px]">Traditional</h3>
                <p className="font-satoshi text-[12px] sm:text-[13px] md:text-[14px] text-gray-200">Shalwar kameez, kurta, sherwani</p>
              </div>
            </a>

            {/* Accessories */}
            <a href="/categories" className="relative group rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-md cursor-pointer block">
              <img src="/images/Mens Clothing.png" className="w-full h-[200px] sm:h-[220px] md:h-[230px] object-cover" />
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                <h3 className="font-gelica font-black text-[16px] sm:text-[18px] md:text-[20px]">Accessories</h3>
                <p className="font-satoshi text-[12px] sm:text-[13px] md:text-[14px] text-gray-200">Scarves, ties, belts</p>
              </div>
            </a>

            <a
              href="/categories"
              className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden shadow-md cursor-pointer group flex items-end p-4 sm:p-6 h-[200px] sm:h-[220px] md:h-[230px]"
            >
              <Image
                src="/images/Hero.png"
                alt="Explore More"
                fill
                className="object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF6F61E5] via-[#9A54FDCC] to-[#B073FFE0]"></div>

              {/* Optional: Dark tint on top of gradient */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Content */}
              <div className="relative z-10 text-white">
                <h3 className="font-gelica font-black text-[16px] sm:text-[18px] md:text-[20px]">Explore More</h3>
                <p className="font-satoshi text-[12px] sm:text-[13px] md:text-[14px] text-gray-200">A platform suitable for all</p>
              </div>

              <div className="absolute right-4 sm:right-6 top-4 sm:top-6 z-10 text-white text-[20px] sm:text-[24px]">
                →
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ================= HERO SECTION ================= */}
      <section className="w-full py-8 sm:py-10 mt-6 sm:mt-8 md:mt-10">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10">

          {/* ---------- LEFT CONTENT ---------- */}
          <div>
            <h1 className="font-gelica font-black text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] xl:text-[54px] leading-[1.2] text-black">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
                All-in-one
              </span>{" "}
              Software to Run
              Your Tailoring Business
            </h1>

            <p className="font-satoshi text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 mt-4 sm:mt-6 max-w-[520px] leading-[1.6]">
              A complete digital solution designed for tailoring shops to
              manage orders, measurements, customers, and daily workflow —
              simple, fast, and reliable.
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white font-satoshi inline-block text-[13px] sm:text-[14px] md:text-[15px]"
            >
              Get the App Now →
            </a>
          </div>


          {/* ---------- RIGHT IMAGE (cropped) ---------- */}
          <div className="relative flex justify-center md:justify-end md:-mr-[182px] h-[300px] sm:h-[380px] md:h-[460px] overflow-hidden">

            <Image
              src="/images/Full Mobile 2.png"
              width={500}
              height={500}
              alt="Mobile UI"
              className="pointer-events-none select-none object-contain w-auto h-full"
            />

          </div>

        </div>
      </section>


      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F7F7F7]">
        {/* --------- Section Heading --------- */}
        <div className="text-center max-w-[800px] mx-auto px-4 sm:px-6">
          <h2 className="font-gelica font-black text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-tight text-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
              Connected
            </span>{" "}
            Tailoring Experience
          </h2>

          <p className="font-satoshi text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 mt-3 sm:mt-4 leading-[1.6] px-4">
            We offer a complete system with separate apps for Tailors and Customers designed to keep everything synced, smooth, and stress-free.
          </p>
        </div>


        {/* --------- Two Cards Grid --------- */}
        <div className="max-w-[1400px] mx-auto mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 px-4 sm:px-6">

          {/* --------- Tailor Card --------- */}
          <div data-aos="flip-left" data-aos-delay="100" className="bg-[#E6DBFF] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden">

            {/* Badge */}
            <div className="px-3 sm:px-4 py-1 bg-white/60 rounded-full border border-white/70 backdrop-blur-sm mb-4 sm:mb-6">
              <span className="font-satoshi text-[12px] sm:text-[14px] text-[#9A54FD] font-medium">Tailor</span>
            </div>

            {/* Title */}
            <h3 className="font-gelica font-black text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-black leading-tight">
              Your Complete Digital Workspace
            </h3>

            {/* Description */}
            <p className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-gray-700 mt-3 sm:mt-4 max-w-[400px]">
              Manage orders, measurements, customers, and delivery dates—all in
              one fast and organized app.
            </p>

            {/* Mobile Image - Centered and Properly Displayed */}
            <div className="mt-6 sm:mt-8 md:mt-10 w-full flex items-center justify-center">
              <div className="relative w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16] flex items-center justify-center">
                <Image
                  src="/images/3.png"
                  width={300}
                  height={600}
                  alt="Tailor App"
                  className="object-contain pointer-events-none select-none w-full h-full"
                />
              </div>
            </div>
          </div>


          {/* --------- Customer Card --------- */}
          <div className="bg-[#FFE1E0] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden">

            {/* Badge */}
            <div className="px-3 sm:px-4 py-1 bg-white/60 rounded-full border border-white/70 backdrop-blur-sm mb-4 sm:mb-6">
              <span className="font-satoshi text-[12px] sm:text-[14px] text-[#FF6F61] font-medium">Customer</span>
            </div>

            {/* Title */}
            <h3 className="font-gelica font-black text-[20px] sm:text-[22px] md:text-[24px] lg:text-[28px] text-black leading-tight">
              A Smooth Experience for Every Customer
            </h3>

            {/* Description */}
            <p className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-gray-700 mt-3 sm:mt-4 max-w-[400px]">
              Customers can place orders, track progress, chat with the tailor,
              and get delivery updates without calls.
            </p>

            {/* Mobile Image - Centered and Properly Displayed */}
            <div className="mt-6 sm:mt-8 md:mt-10 w-full flex items-center justify-center">
              <div className="relative w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-[9/16] flex items-center justify-center">
                <Image
                  src="/images/4.png"
                  width={300}
                  height={600}
                  alt="Customer App"
                  className="object-contain pointer-events-none select-none w-full h-full"
                />
              </div>
            </div>
          </div>


        </div>

      </section>



      {/* ==================== SMART ORDER SECTION ==================== */}
      <section data-aos="fade-up" className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-0">

          {/* ===== Left Image - Completely aligned to left edge ===== */}
          <div data-aos="fade-right" className="relative w-full">
            <Image
              src="/images/Tracking.png"
              width={680}
              height={480}
              alt="Smart Order Tracking"
              className="rounded-[16px] sm:rounded-[20px] md:rounded-l-none md:rounded-r-[20px] object-cover w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-full"
            />

           
          </div>

          {/* ===== Right Content ===== */}
          <div className="px-4 sm:px-6 md:px-12 lg:px-16 py-6 md:py-0">

            {/* Category Badge */}
            <div className="mb-3 sm:mb-4">
              <span className="font-satoshi text-[11px] sm:text-[12px] tracking-[2px] uppercase text-[#FF6F61]">
                Customer
              </span>
            </div>

            {/* Title */}
            <h2 className="font-gelica font-black text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] leading-[1.2] text-black max-w-[520px]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
                Smart Order
              </span>{" "}
              Tracking With Zero Hassle
            </h2>

            {/* Description */}
            <p className="font-satoshi text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 mt-4 sm:mt-6 leading-[1.6] max-w-[500px]">
              Manage unlimited orders, delivery dates, customer details, and work status
              from one clean dashboard—no more registers, no more confusion.
            </p>

            {/* CTA Link */}
            <a
              href="#"
              className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-[#FF6F61] flex items-center gap-2 mt-6 sm:mt-8 hover:opacity-80 transition"
            >
              More Info
              <span className="text-[16px] sm:text-[18px]">→</span>
            </a>
          </div>

        </div>
      </section>

     {/* ==================== CRAFTED FOR TAILORS SECTION ==================== */}
       <section className="w-full py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
         <div className="max-w-[1400px] mx-auto pl-4 sm:pl-6 pr-4 sm:pr-0 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">

           {/* ===== Left Content ===== */}
           <div className="flex flex-col justify-center">

            {/* Category Badge */}
            <span className="font-satoshi text-[11px] sm:text-[12px] tracking-[2px] uppercase text-[#9A54FD] mb-3 sm:mb-4">
              Tailors
            </span>

            {/* Title */}
            <h2 className="font-gelica font-black text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] leading-[1.15] text-black max-w-[600px]">
              Crafted for
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6F61] to-[#9A54FD]">
                Tailors
              </span>{" "}
              to Work Faster & Serve Better
            </h2>

            {/* Description */}
            <p className="font-satoshi text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 mt-4 sm:mt-6 leading-[1.6] max-w-[520px]">
              Enjoy a smooth, easy-to-use experience that boosts your shop efficiency,
              reduces mistakes, and helps you deliver professional service every time.
            </p>

            {/* CTA */}
            <a
              href="#"
              className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-[#9A54FD] flex items-center gap-2 mt-6 sm:mt-8"
            >
              More Info
              <span className="text-[16px] sm:text-[18px]">→</span>
            </a>
          </div>

           {/* ===== Right Image ===== */}
           <div data-aos="fade-left" className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full flex items-center">
            <div className="relative w-full rounded-[20px] sm:rounded-[24px] md:rounded-l-none md:rounded-r-[24px] overflow-hidden">
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
      <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-[#F7F7F7]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-12 md:gap-16">
          
          {/* ===== Left: Mobile Phones Image - Cropped 20% from bottom ===== */}
          <div className="relative flex items-start justify-center h-[400px] sm:h-[500px] md:h-[600px]">
            <div className="relative w-full flex items-center justify-center">
              <div className="relative w-full max-w-[500px] h-[400px] sm:h-[500px] overflow-hidden">
                <Image
                  src="/images/2(1).png"
                  alt="Customer Insights Mobile Screens"
                  width={500}
                  height={600}
                  className="object-cover w-full h-full object-top"
                />
              </div>
            </div>
          </div>

          {/* ===== Right: Text Content ===== */}
          <div data-aos="fade-left" className="flex flex-col justify-center">

            {/* Title */}
            <h2 className="font-gelica font-black text-[28px] sm:text-[32px] md:text-[38px] lg:text-[48px] leading-[1.2] text-black max-w-[600px]">
              <span className="text-[#9A54FD]">Detailed</span>{" "}
              <span className="text-[#FF6F61]">Customer</span>{" "}
              Insights for Better Service
            </h2>

            {/* Description */}
            <p className="font-satoshi text-[14px] sm:text-[16px] md:text-[18px] text-gray-600 mt-4 sm:mt-6 leading-[1.6] max-w-[550px]">
              Get a full view of every customer measurements, order history, preferred styles, rush-work patterns, and past delivery timelines —all in seconds.
            </p>

            {/* CTA Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white font-satoshi text-[14px] sm:text-[15px] md:text-[16px] font-medium w-fit inline-block"
            >
              Get the App Now →
            </a>
          </div>

        </div>
      </section>

      {/* ==================== TOP TAILORS SECTION ==================== */}
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
              <h2 className="font-gelica font-black text-[32px] md:text-[36px] leading-tight mb-3">
                <span className="text-black">About</span>{" "}
                <span className="text-[#F554D5]">MyTailor</span>
              </h2>

              {/* Mission Statement */}
              <p className="font-satoshi text-[15px] text-gray-700 leading-[1.6] mb-5 max-w-[550px]">
                Our mission is to make tailoring shops efficient and customers happy. Designed with real tailors in mind, our apps simplify every step, from taking measurements to order delivery.
              </p>

              {/* CTA Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white font-satoshi text-[14px] font-medium w-fit inline-block"
              >
                Get the App Now →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== WHAT TAILORS & CUSTOMERS SAY SECTION ==================== */}
      <section data-aos="fade-up" className="w-full py-8 sm:py-12 pt-12 sm:pt-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          
          {/* Section Heading */}
          <div data-aos="fade-down" className="mb-6 sm:mb-8">
            <h2 className="font-gelica font-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-tight text-black mb-2 sm:mb-3">
              What <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9854F5] to-[#F554D5]">Tailors & Customers</span> Say
            </h2>
            <p className="font-satoshi text-[13px] sm:text-[14px] md:text-[15px] text-gray-600 leading-[1.6] max-w-[700px]">
              Real reviews from tailors and customers who love how easy and fast our apps make every order
            </p>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

            {/* Card 1: Image Card */}
            <div className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden max-w-[320px] mx-auto sm:mx-0 w-full">
              <Image
                src="/images/Feedback1.png"
                alt="Customer Review"
                width={400}
                height={500}
                className="object-cover w-full h-[350px] sm:h-[400px] md:h-[450px]"
              />
            </div>

            {/* Card 2: Text Review with Background */}
            <div data-aos="zoom-in" data-aos-delay="200" className="relative rounded-[16px] sm:rounded-[20px] overflow-visible h-[350px] sm:h-[400px] md:h-[450px] max-w-[320px] mx-auto sm:mx-0 w-full">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-[16px] sm:rounded-[20px] overflow-hidden">
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
              <div className="relative z-10 p-4 sm:p-6 pt-12 sm:pt-16 h-full flex flex-col justify-center">
                {/* Profile Picture */}
                <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
                  <Image
                    src="/images/Feedback profile.png"
                    alt="Bang Upin"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name */}
                <h3 className="font-gelica font-black text-[16px] sm:text-[18px] md:text-[20px] text-white text-center mb-1 mt-3 sm:mt-4">
                  Bang Upin
                </h3>

                {/* Role */}
                <p className="font-satoshi text-[11px] sm:text-[12px] md:text-[13px] text-gray-200 text-center mb-3 sm:mb-4">
                  Pedagang Asongan
                </p>

                {/* Review Text */}
                <p className="font-satoshi text-[12px] sm:text-[13px] md:text-[14px] text-white leading-[1.6] text-center mb-3 sm:mb-4">
                  "Thank you so much, my space now looks more luxurious and expensive"
                </p>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[#FF6F61] text-[14px] sm:text-[16px] md:text-[18px]">★</span>
                  ))}
                  <span className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px]">★</span>
                </div>
              </div>
            </div>

            {/* Card 3: Text Review with Background */}
            <div className="relative rounded-[16px] sm:rounded-[20px] overflow-visible h-[350px] sm:h-[400px] md:h-[450px] max-w-[320px] mx-auto sm:mx-0 w-full">
              {/* Background Image */}
              <div className="absolute inset-0 rounded-[16px] sm:rounded-[20px] overflow-hidden">
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
              <div className="relative z-10 p-4 sm:p-6 pt-12 sm:pt-16 h-full flex flex-col justify-center">
                {/* Profile Picture */}
                <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg z-20">
                  <Image
                    src="/images/Feedback profile.png"
                    alt="Siti Aminah"
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* Name */}
                <h3 className="font-gelica font-black text-[16px] sm:text-[18px] md:text-[20px] text-white text-center mb-1 mt-3 sm:mt-4">
                  Siti Aminah
                </h3>

                {/* Role */}
                <p className="font-satoshi text-[11px] sm:text-[12px] md:text-[13px] text-gray-200 text-center mb-3 sm:mb-4">
                  Konsultan Kecantikan
                </p>

                {/* Review Text */}
                <p className="font-satoshi text-[12px] sm:text-[13px] md:text-[14px] text-white leading-[1.6] text-center mb-3 sm:mb-4">
                  "With this new design, my clients feel more confident and satisfied"
                </p>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-[#FF6F61] text-[14px] sm:text-[16px] md:text-[18px]">★</span>
                  ))}
                  <span className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px]">★</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

       {/* ==================== GET STARTED TODAY SECTION ==================== */}
       <section className="w-full py-10 sm:py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 sm:gap-10 md:gap-12">
            
            {/* Left Side - Text Content & Buttons */}
            <div className="flex flex-col">
              {/* Heading */}
              <h2 className="font-gelica font-black text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-tight text-black mb-3 sm:mb-4">
                Get Started Today{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9854F5] to-[#F554D5] italic">
                  For Tailors & Customer
                </span>
              </h2>

              {/* Description */}
              <p className="font-satoshi text-[14px] sm:text-[15px] md:text-[16px] text-gray-700 mb-6 sm:mb-8 leading-[1.6]">
                Download the apps and start managing orders or placing them instantly
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Download for Tailors Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white font-satoshi text-[13px] sm:text-[14px] md:text-[15px] font-medium flex items-center justify-center gap-2"
                >
                  Download for Tailors →
                </a>

                {/* Download for Customers Button */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.tailorbhai&hl=en&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white border-2 border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61] hover:text-white font-satoshi text-[13px] sm:text-[14px] md:text-[15px] font-medium flex items-center justify-center gap-2"
                >
                  Download for Customers →
                </a>
              </div>
            </div>

            {/* Right Side - QR Code & App Store Badges */}
            <div className="flex flex-col items-center md:items-end gap-3 sm:gap-4 md:gap-2 lg:gap-3">
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
                  className="bg-black hover:bg-gray-800 rounded-md sm:rounded-lg px-2.5 sm:px-3 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-2 lg:py-2.5 flex items-center gap-1.5 sm:gap-2 md:gap-2 min-w-[120px] sm:min-w-[130px] md:min-w-[140px] lg:min-w-[150px]"
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
                  className="bg-black hover:bg-gray-800 rounded-md sm:rounded-lg px-2.5 sm:px-3 md:px-3 lg:px-4 py-1.5 sm:py-2 md:py-2 lg:py-2.5 flex items-center gap-1.5 sm:gap-2 md:gap-2 min-w-[120px] sm:min-w-[130px] md:min-w-[140px] lg:min-w-[150px]"
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

    </>
  )
}
