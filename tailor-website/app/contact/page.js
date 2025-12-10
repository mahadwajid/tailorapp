import Image from "next/image"

export default function Contact() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section data-aos="fade-down" className="relative w-full h-[450px] overflow-hidden pt-32">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Hero.png"
            alt="Contact Us Background"
            fill
            className="object-cover"
          />
          {/* Gradient Overlay - Pink to Purple */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F554D5] to-[#9854F5] opacity-85"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 h-full flex flex-col items-start justify-center text-left">
          <h1 className="font-gelica font-black text-[40px] md:text-[48px] leading-tight text-white mb-3">
            Contact Us
          </h1>
          <p className="font-satoshi text-[16px] md:text-[18px] text-white/95 max-w-[600px]">
            Get in Touch with MyTailor
          </p>
        </div>
      </section>

      {/* ==================== NEED ASSISTANCE SECTION ==================== */}
      <section data-aos="fade-up" className="w-full bg-white py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-gelica font-black text-[36px] md:text-[42px] leading-tight text-black mb-3">
              Need <span className="text-[#9A54FD] italic">Assistance?</span>
            </h2>
            <p className="font-satoshi text-[16px] text-gray-600">
              Reach our team anytime for app or account support.
            </p>
          </div>

          {/* ==================== CONTACT FORM & DETAILS SECTION ==================== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Column - Contact Form */}
            <div data-aos="fade-right" className="bg-white rounded-[20px] p-8 shadow-md">
              <form className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="font-satoshi text-[14px] text-gray-700 mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Full Name"
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:border-[#9A54FD] focus:outline-none font-satoshi text-[14px]"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="font-satoshi text-[14px] text-gray-700 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Email Address"
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:border-[#9A54FD] focus:outline-none font-satoshi text-[14px]"
                  />
                </div>

                {/* Your Message */}
                <div>
                  <label className="font-satoshi text-[14px] text-gray-700 mb-2 block">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Enter your message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-[12px] border border-gray-300 focus:border-[#9A54FD] focus:outline-none font-satoshi text-[14px] resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-full bg-white border-2 border-[#9A54FD] text-[#9A54FD] hover:bg-[#9A54FD] hover:text-white transition font-satoshi text-[15px] font-medium flex items-center justify-center gap-2"
                >
                  Submit Form →
                </button>
              </form>
            </div>

            {/* Right Column - Contact Details */}
            <div data-aos="fade-left" className="bg-white rounded-[20px] p-8 shadow-md">
              <h3 className="font-gelica font-black text-[24px] text-black mb-6">
                How You Can Reach Us:
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:support@mytailor.com" 
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#9A54FD]/5 transition cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#9A54FD]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A54FD]/20 transition">
                    <svg className="w-6 h-6 text-[#9A54FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-satoshi text-[15px] text-gray-900 font-medium mb-1 group-hover:text-[#9A54FD] transition">
                      support@mytailor.com
                    </p>
                    <p className="font-satoshi text-[13px] text-gray-600">
                      Email Address
                    </p>
                  </div>
                </a>

                {/* Call */}
                <a 
                  href="tel:+923479890617" 
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#9A54FD]/5 transition cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#9A54FD]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A54FD]/20 transition">
                    <svg className="w-6 h-6 text-[#9A54FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-satoshi text-[15px] text-gray-900 font-medium mb-1 group-hover:text-[#9A54FD] transition">
                      +92 347 9890617
                    </p>
                    <p className="font-satoshi text-[13px] text-gray-600">
                      Call Support
                    </p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/923479890617" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#9A54FD]/5 transition cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#9A54FD]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A54FD]/20 transition">
                    <svg className="w-6 h-6 text-[#9A54FD]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-satoshi text-[15px] text-gray-900 font-medium mb-1 group-hover:text-[#9A54FD] transition">
                      +92 347 9890617
                    </p>
                    <p className="font-satoshi text-[13px] text-gray-600">
                      WhatsApp Chat
                    </p>
                  </div>
                </a>

                {/* Address */}
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Al-Nawaz+Arcade,+Adjacent+to+Rawalpindi+Urology+Hospital,+Murree+Road,+Rawalpindi,+Pakistan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#9A54FD]/5 transition cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#9A54FD]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A54FD]/20 transition">
                    <svg className="w-6 h-6 text-[#9A54FD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-satoshi text-[15px] text-gray-900 font-medium mb-1 group-hover:text-[#9A54FD] transition">
                      Al-Nawaz Arcade, Adjacent to Rawalpindi Urology Hospital, Murree Road, Rawalpindi, Pakistan.
                    </p>
                    <p className="font-satoshi text-[13px] text-gray-600">
                      Address
                    </p>
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
