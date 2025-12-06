import Image from "next/image";

export default function Hero() {
  return (
   <div className="w-full h-[800px] relative">

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
      <div
        className="absolute flex flex-col items-center justify-center gap-[14px] text-center"
        style={{
          width: "861px",
          height: "298px",
          top: "220px",
          left: "292px",
        }}
      >
        <h1
          className="font-gelica font-normal text-[80px] leading-[1] text-white"
          style={{ color: "#ffffffff" }}
        >
          Optimize Your Business <br /> with Our Software
        </h1>

        <p
          className="font-satoshi text-[20px] leading-[1.4] text-white"
          style={{ color: "#ffffffff" }}
        >
          All your orders, measurements, and customers neatly<br /> organized in one app
        </p>
      </div>

      {/* Hero 1: Top-Left Corner - Cluster of Circles */}
      <div className="absolute top-120 left-310 z-10">
        <Image
          src="/images/Hero1.png"
          alt="Status Indicators"
          width={120}
          height={100}
          className="object-contain"
        />
      </div>

      
       <div className="absolute top-[620px] right-[500px] z-10">
        <Image
          src="/images/Hero2.png"
          alt="Tailor-Focused"
          width={200}
          height={180}
          className="object-contain"
        />
      </div> 

      {/* Hero 3: Bottom-Center-Right - Reliable & Secure Badge */}
     <div className="absolute bottom-[200px] right-[1150px] z-10">
        <Image
          src="/images/Hero3.png"
          alt="Reliable & Secure"
          width={100}
          height={120}
          className="object-contain"
        />
      </div>

    </div>
  );
}
