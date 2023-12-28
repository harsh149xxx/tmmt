import HomeButton from "@/components/HomeButton";
import Image from "next/image";
import Link from "next/link";
// import header_mobile from "@/public/assets/home/header_mobile.png"
import header_mobile from "@/public/assets/home/header_mobile_test.png"
import ServiceCard from "@/components/ServiceCard";
import Automation from '@/public/assets/home/automation.png'
import Antifraud from '@/public/assets/home/antifraud.png'
import Analytics from '@/public/assets/home/analytics.png'
import Migration from '@/public/assets/home/migration.png'
import Integration from '@/public/assets/home/integration.png'
import Support from '@/public/assets/home/support.png'

export default function HomePage() {

  const services = [
    {
      title: "Automation",
      content: "At XtremeAd, we understand the significance of automation and continuously strive to enhance our automated capabilities.By leveraging automation, we enable businesses to increase productivity while simultaneously reducing costs.We are committed to developing innovative automated solutions that drive efficiency and optimize operations.",
      img: Automation
    },
    {
      title: "Anti-Fraud Mechanism",
      content: "At XtremeAd, our anti-fraud mechanism goes beyond merely detecting fraudulent traffic. We take proactive measures to prevent such traffic from affecting your campaigns. With our robust in-house fraud detection feature, we ensure that no malicious traffic goes unnoticed, providing you with a secure and trustworthy advertising environment.",
      img: Antifraud
    },
    {
      title: "Tracking & Analytics",
      content: "Take your tracking and analytics capabilities to the next level by expanding beyond geographical data. At XtremeAd, we enable you to delve deeper into vital metrics such as carriers, languages, and effectively delivering campaigns to the right audience.",
      img: Analytics
    },
    {
      title: "Instant Migration",
      content: "Experience seamless and stress-free migration with XtremeAd, where you gain access to a wide array of tools and features. Our goal is to make the migration process effortless, ensuring a smooth transition for your business.",
      img: Migration
    },
    {
      title: "Integration",
      content: "At XtremeAd, we foster continuous collaboration with new partners, prioritizing the development of integrations. By doing so, we actively contribute to the success of our mutual clients.",
      img: Integration
    },
    {
      title: "Customer Support",
      content: "XtremeAd has been widely acknowledged as a frontrunner in providing exceptional customer support services. Numerous organizations have consistently identified XtremeAd as a leading force in the realm of customer support.",
      img: Support
    }
  ]

  return (
    <main>
      {/* ------------------------ TOP SECTION HEADER START ------------------------ */}
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
      {/* ------------------------ TOP SECTION HEADER START ------------------------ */}

      {/* --------------------------- OUR SERVICES START --------------------------- */}
      <section>
        <h1 className="text-center text-4xl py-16">OUR SERVICES</h1>
        <div className="grid grid-cols-3 gap-12 px-24 pb-16">
          {
            services.map((item,idx)=>(
              <ServiceCard title={item.title} content={item.content} img={item.img}/>
            ))
          }
        </div>
      </section>
      {/* --------------------------- OUR SERVICES END --------------------------- */}
    </main>
  )
}
