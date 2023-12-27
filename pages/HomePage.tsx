import HomeButton from "@/components/HomeButton";
import Image from "next/image";
import Link from "next/link";
// import header_mobile from "@/public/assets/home/header_mobile.png"
import header_mobile from "@/public/assets/home/header_mobile_test.png"

export default function HomePage() {
  return (
    <main>
      {/* top section */}
      <header className="h-fit md:h-screen  bg-gradient-to-r from-[#2f80ed] to-[#56ccf2] flex flex-col md:flex-row p-1 gap-5">
        <div className="w-full md:w-1/2  text-white gap-8 flex flex-col items-center md:justify-center">
          <h1 className="text-6xl text-center font-serif" style={{ "textShadow": "0px 0px 20px rgba(0,0,0,0.90)" }}>We Manage Your Brands in Multiple Channels</h1>
          <p className="text-xl text-center px-5 font-mono">Our motto is to build a communication bridge between advertisers, customers, and affiliates.</p>
          <div className="flex gap-5">
            <Link href="/advertiser" className="btn-white">
              Advertiser
            </Link>
            <Link href="/advertiser" className="btn-white">
              Affilate
            </Link>
            
          </div>
        </div>
        <div className=" w-full md:w-1/2 px-2 lg:px-16 aspect-w-9 aspect-h-16">
          <Image src={header_mobile} alt="Header Mobile Image" className="h-full aspect-w-9 aspect-h-16"/>
        </div>
      </header>
    </main>
  )
}
