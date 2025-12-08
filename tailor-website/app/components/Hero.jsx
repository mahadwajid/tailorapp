import Image from "next/image";

export default function Hero() {
  return (
   <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] relative">

      {/* Background Image */}
      <Image
        src="/images/Hero.png"
        alt="Tailor Craft Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to bottom,
            #FF6F61E5 20%,
            #9A54FDCC 60%,
            #FFFFFF 100%
          )`,
        }}
      />

      {/* Text Container */}
      <div className="absolute flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-[14px] text-center px-4 sm:px-6 md:px-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[861px]">
        <h1 className="font-gelica font-black text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] xl:text-[70px] leading-[1.1] sm:leading-[1] text-white">
          Optimize Your Business <br className="hidden sm:block" /> with Our Software
        </h1>

        <p className="font-satoshi text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[1.4] text-white max-w-[280px] sm:max-w-[400px] md:max-w-[600px]">
          All your orders, measurements, and customers neatly<br className="hidden sm:block" /> organized in one app
        </p>
      </div>

      {/* Hero 1: Top-Left Corner - Cluster of Circles */}
      <div className="absolute top-8 left-4 sm:top-16 sm:left-8 md:top-24 md:left-16 lg:top-32 lg:left-20 z-10 hidden sm:block">
        <Image
          src="/images/Hero1.png"
          alt="Status Indicators"
          width={80}
          height={70}
          className="object-contain sm:w-[100px] sm:h-[85px] md:w-[120px] md:h-[100px]"
        />
      </div>

      {/* Hero 2: Bottom-Left */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 sm:bottom-24 sm:left-auto sm:translate-x-0 sm:right-1/4 md:right-1/3 lg:right-[500px] lg:top-[620px] lg:bottom-auto z-10 hidden sm:block">
        <Image
          src="/images/Hero2.png"
          alt="Tailor-Focused"
          width={120}
          height={110}
          className="object-contain sm:w-[150px] sm:h-[140px] md:w-[180px] md:h-[160px] lg:w-[200px] lg:h-[180px]"
        />
      </div> 

      {/* Hero 3: Bottom-Center-Right - Reliable & Secure Badge */}
      <div className="absolute bottom-8 right-4 sm:bottom-16 sm:right-8 md:bottom-24 md:right-16 lg:bottom-[200px] lg:right-[1150px] z-10 hidden md:block">
        <Image
          src="/images/Hero3.png"
          alt="Reliable & Secure"
          width={70}
          height={85}
          className="object-contain md:w-[85px] md:h-[100px] lg:w-[100px] lg:h-[120px]"
        />
      </div>

    </div>
  );
}
