import Image from "next/image";

export default function Hero() {
  return (
   <div className="w-full h-[800px] relative border border-black">

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

      <div
        className="absolute flex flex-col items-center justify-center gap-[24px] text-center"
        style={{
          width: "200px",
          height: "180px",
          top: "390px",
          left: "1290px",
          border: "2px solid #1a1919ff",
        }}
      >

        {/* Badge */}
        <div className="flex flex-col items-center gap-[15px]">

          {/* Circle */}
          <div className="w-[32px] h-[32px] rounded-full border border-white/60 flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-white rounded-full" />
          </div>

          {/* Connector + Pill */}
          <div className="relative">
            {/* Connector */}
            <div className="absolute -top-[12px] left-1/2 -translate-x-1/2 w-[24px] h-[12px] bg-white/60 rounded-t-full" />

            {/* Pill */}
            <div className="px-[28px] py-[10px] bg-white/20 backdrop-blur-sm rounded-full border border-white/40">
              <p className="font-satoshi text-[12px] text-white">
                Tailor-Focused
              </p>
            </div>
          </div>

        </div>
      </div>


      <div
        className="absolute flex items-center gap-[12px]"
        style={{
          width: "auto",
          height: "48px",
          top: "590px",
          left: "750px",
        }}
      >
        {/* Left Circle Badge */}
        <div className="w-[32px] h-[32px] rounded-full border border-white/60 flex items-center justify-center bg-white/20 backdrop-blur-sm">
          <div className="w-[10px] h-[10px] bg-white rounded-full" />
        </div>

        {/* Combined Pill */}
        <div className="px-[22px] py-[10px] bg-white/20 backdrop-blur-sm border border-white/40 rounded-full flex items-center justify-center">
          <p className="font-satoshi text-[16px] text-white">
            Reliable & Secure
          </p>
        </div>
      </div>



    </div>
  );
}
