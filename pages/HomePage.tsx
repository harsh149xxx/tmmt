"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";
import Link from "next/link";
import header_mobile from "@/public/assets/home/header_mobile.png"
import ServiceCard from "@/components/ServiceCard";
import Automation from '@/public/assets/home/automation.png'
import Antifraud from '@/public/assets/home/antifraud.png'
import Analytics from '@/public/assets/home/analytics.png'
import Migration from '@/public/assets/home/migration.png'
import Integration from '@/public/assets/home/integration.png'
import Support from '@/public/assets/home/support.png'
import Girl from '@/public/assets/home/girl.png'
import AnalyticsHeader from '@/public/assets/home/header_analytics.png'
import Affiliate from '@/public/assets/home/affiliate.jpg'
import Advertiser from '@/public/assets/home/advertiser.png'
import { Fragment, useEffect, useState } from "react";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Slider from "react-slick";


export default function HomePage() {

  
  const [windowWidth, setWindowWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
  const [openTab, setOpenTab] = useState(0)


  const userReview = [
    {
      review: "They have been very impressive, they are a good team, they respond to questions promptly, and they respect your time. The ideas they provide are very practical and they provide good ideas. Consequently, they provide you with valuable insights and suggestions that you may not have otherwise considered.",
      user: "Shekh Aman - Founder & Ceo Affilienet Digital Media Private Limited"
    },
    {
      review: "Hi Team, Here is my experience so far working with you. They have been Great partner in terms of Handling the delivery. They are well aware of the campaigns requirements and ROI that every client looks up to. Treating every campaign with utmost transparency and regular hygiene check ups are number one priority for them and this quality always makes you incline towards working with them month on month. My Best wishes to the team.",
      user: "Neha Sharma - Adsflourish"
    },
    {
      review: "Velocity Click is a good company to work for. They connect with me from time to time and the performance they give is upto the mark. Specialized in every category they work on various models like CPL, CPS, CPA, CPR, CPI. The major vertical for them is Casino & Betting. Working with them is a great value for your ROI. Good work team Velocity Click Keep Rocking!",
      user: "Arpita - Mediaxpedia Technologies PVT. LTD."
    },
    {
      review: "I've been working with Velocity Click for a few months now, as for me they're the best. Our account manager is available 24x7 and suggests us with best offers to help scale our earnings. And of course, they pay right on time. I highly recommend working with them.",
      user: "Srinivas - CEO Of PrimeROI"
    },
    {
      review: "Highly recommend our affiliate for their outstanding performance in our casino campaign. Their expertise led to a remarkable 30% conversion rate, and an impressive 60% of customers made repeat deposits. Their dedication and results have been instrumental in our success.",
      user: "Navya - Head of affilates indibe"
    },
    {
      review: "They have been very impressive, they are a good team, they respond to questions promptly, and they respect your time. The ideas they provide are very practical and they provide good ideas. Consequently, they provide you with valuable insights and suggestions that you may not have otherwise considered.",
      user: "Shekh Aman - Founder & Ceo Affilienet Digital Media Private Limited"
    },
    {
      review: "Hi Team, Here is my experience so far working with you. They have been Great partner in terms of Handling the delivery. They are well aware of the campaigns requirements and ROI that every client looks up to. Treating every campaign with utmost transparency and regular hygiene check ups are number one priority for them and this quality always makes you incline towards working with them month on month. My Best wishes to the team.",
      user: "Neha Sharma - Adsflourish"
    },
    {
      review: "Velocity Click is a good company to work for. They connect with me from time to time and the performance they give is upto the mark. Specialized in every category they work on various models like CPL, CPS, CPA, CPR, CPI. The major vertical for them is Casino & Betting. Working with them is a great value for your ROI. Good work team Velocity Click Keep Rocking!",
      user: "Arpita - Mediaxpedia Technologies PVT. LTD."
    },
    {
      review: "I've been working with Velocity Click for a few months now, as for me they're the best. Our account manager is available 24x7 and suggests us with best offers to help scale our earnings. And of course, they pay right on time. I highly recommend working with them.",
      user: "Srinivas - CEO Of PrimeROI"
    },
    {
      review: "Highly recommend our affiliate for their outstanding performance in our casino campaign. Their expertise led to a remarkable 30% conversion rate, and an impressive 60% of customers made repeat deposits. Their dedication and results have been instrumental in our success.",
      user: "Navya - Head of affilates indibe"
    },

  ]

  const clientImageFileNames = [
    'client1.png',
    'client2.png',
    'client3.png',
    'client4.png',
    'client5.png',
    'client6.png',
    'client7.png',
    'client8.png',
    'client9.png',
    'client10.png',
    'client11.png',
    'client12.png',
    'client13.png',
    'client14.png',
    'client15.png',
    'client16.png',
    'client17.png',
    'client18.png',
    'client19.png',
    'client20.png',
    'client21.png',
    'client22.png',
    'client23.png',
    'client24.png',
    'client25.png',
    'client26.png',
    'client27.png',
    'client28.png',
    'client29.png',
    'client30.png',
    'client31.png',
    'client32.png',
    'client33.png',
    'client34.png',
    'client35.png',
    'client36.png',
    'client37.png',
    'client38.png',
    'client39.png',
    'client40.png',
    'client41.png',
    'client42.png',
    'client43.png',
    'client44.png',
  ];



  const serviceDetails = [
    {
      title: "Multichannel Marketing",
      content: "At TMMT, we specialize in creating integrated, cohesive campaigns that span across multiple channels, including PPC, Native Push, Meta, and Email Marketing. By reaching your audience through diverse touchpoints, we ensure consistent messaging, greater engagement, and a broader reach, ultimately driving better results for your business across all platforms.",
      img: "https://images.unsplash.com/photo-1590650046871-92c887180603"
    },
    {
      title: "Integration Assistance",
      content: "We offer seamless integration with your existing marketing platforms and tools such as CRMs, analytics, and email services. Our team ensures smooth data flow between your systems, enhancing workflow efficiency, campaign tracking, and lead management. This integration provides you with a more streamlined process and actionable insights for continued growth.",
      img: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a"
    },
    {
      title: "Scalable Solutions",
      content: "Whether you’re a startup or a well-established brand, we offer scalable marketing solutions tailored to your business’s size and goals. Our flexible approach ensures that as your business grows, your marketing strategies evolve with it. From small-scale campaigns to large-scale initiatives, we provide the tools and expertise to keep your business on the path to success.",
      img: "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d"
    },
    {
      title: "Cross-Device Optimize",
      content: "We understand the importance of delivering a seamless user experience across all devices. That’s why we ensure your campaigns are optimized for mobile, desktop, and tablet devices. By creating responsive, user-friendly ads and landing pages, we enhance engagement, boost conversions, and ensure your audience has a consistent experience, no matter where they interact with your brand.",
      img: "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d"
    },
  ]

  const services = [    
    {
      title: "PPC Advertising",
      content: "Maximize ROI with data-driven PPC strategies. Our experts create targeted campaigns on Google, Bing, and more, ensuring your ads reach the right audience. Generate quality leads, boost sales, and scale your business with precise ad placements, budget optimization, and real-time analytics",
      img: Antifraud
    },
    {
      title: "Meta Advertising",
      content: "Unlock the full potential of Meta platforms. Our tailored Facebook and Instagram ad strategies connect your brand with millions. Engage your audience through visually stunning ads, precise targeting, data-driven insights, and measurable results to grow your business effectively.",
      img: Analytics
    },
    {
      title: "Native Push Marketing",
      content: "Stand out with Native Push Advertising that captures attention. Deliver personalized, non-intrusive notifications to engage your audience, drive traffic, and increase conversions. Build brand loyalty, stay top-of-mind, and re-engage customers with tailored push campaigns.",
      img: Migration
    },
    {
      title: "Email Marketing",
      content: "Turn emails into profit with our targeted campaigns. We craft personalized email strategies that nurture leads, retain customers, and drive conversions. From welcome sequences to promotional blasts, we ensure your message resonates, builds trust, and delivers measurable results.",
      img: Integration
    },
    {
      title: "App Marketing",
      content: "Boost app installs and engagement with our tailored app marketing solutions. From App Store Optimization (ASO) to user acquisition campaigns, we help you connect with the right audience, enhance retention, and grow your app’s success story through proven marketing strategies.",
      img: Support
    },
    {
      title: "Automation",
      content: "At TMMT, we prioritize automation to transform business outcomes. By leveraging cutting-edge automated solutions, we help increase conversions, reduce costs, and streamline operations. Our commitment lies in driving innovation, optimizing lead generation, and enhancing overall efficiency for sustained growth.",
      img: Automation
    }
  ]

  const faqsData = [
    {
      question: "What services do TMMT offer?",
      answer: "At TMMT, we offer a range of digital marketing services, including PPC advertising, Native Push campaigns, Meta (Facebook & Instagram) advertising, and Email marketing. Our goal is to help businesses maximize their online presence and drive conversions through tailored, data-driven strategies across multiple platforms."
    },
    {
      question: "How do TMMT determine the right channels for my business?",
      answer: "We take a personalized approach to every client. By analyzing your target audience, goals, and industry trends, we determine the most effective marketing channels for your business. Whether it's PPC, Native Push, or Meta advertising, we select the channels that will best engage your audience and drive measurable results."
    },
    {
      question: "How do TMMT ensure my ads reach the right audience?",
      answer: "We use advanced targeting techniques to ensure your ads are shown to the right audience. This includes demographic targeting, interest-based targeting, and behavior analysis across platforms like Google Ads, Meta, and Native networks. Additionally, we continuously monitor and optimize campaigns for maximum engagement and conversion."
    },
    {
      question: "Do TMMT provide custom-tailored marketing strategies?",
      answer: "Yes, every strategy we create is unique to your business. We understand that each brand has its own needs, goals, and challenges. By analyzing your specific market, competition, and objectives, we develop personalized campaigns designed to drive results and help your business grow."
    },
  ]

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial call to set the initial window width
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Fragment>

      {/* ------------------------ TOP SECTION HEADER START ------------------------ */}
      <header className="mx-2 my-5 flex h-fit flex-col gap-16 rounded-xl bg-[#4ABDAC] p-10 md:mx-16 lg:mx-32">
        <div className="flex w-full flex-col items-center gap-8 text-white md:justify-center">
        <h1 className="text-white text-center font-serif text-6xl"
          // style={{ "textShadow": "0px 0px 5px #D9B29C" }}
          >We Manage Your Brands in Multiple Channels</h1>
          <p className="text-white text-center font-mono text-xl md:px-5">Fueling Business Growth with Precision Marketing Strategies Across PPC, Native, Meta, and Beyond.</p>
          
        </div>
        <div className='flex justify-center'>
          <div className="aspect-w-9 aspect-h-16 px-2 md:w-1/2 lg:px-16">
            <Image priority={false} src={header_mobile} alt="Header Mobile Image" className="aspect-w-9 aspect-h-16 h-full" />
          </div>
        </div>
      </header>
      {/* ------------------------ TOP SECTION HEADER START ------------------------ */}

      {/* --------------------------- OUR SERVICES START --------------------------- */}
      <section className="mx-2 my-8 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32">
        <div className="sectionTitle"><span className='text-col5'>OUR</span> SERVICES</div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {
            services.map((item, idx) => (
              <ServiceCard title={item.title} content={item.content} img={item.img} key={idx} />
            ))
          }
        </div>
      </section>
      {/* --------------------------- OUR SERVICES END --------------------------- */}

      {/* ------------------------------ OUR ADD START ----------------------------- */}
      <section className="mx-2 my-8 flex h-fit flex-col gap-12 rounded-xl bg-[#4ABDAC] p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row lg:items-center lg:gap-0">
        <div className="text-center text-base text-white lg:w-[60%] lg:pr-5 lg:text-left md:text-2xl">
        We specialize in delivering tailored advertising solutions across multiple channels to elevate your brand’s presence and performance. At TMMT, we believe every business has a unique story, and our mission is to help you tell it effectively. Through data-driven strategies, creative campaigns, and cutting-edge technology, we connect businesses with their ideal audience. Whether it’s PPC, Native Push, Meta Advertising, or Email Marketing, our goal is to drive growth, boost engagement, and deliver measurable results. With a focus on innovation and precision, we ensure your brand stands out in today’s competitive digital landscape, paving the way for lasting success.
        </div>
        <div className="flex justify-center lg:w-[40%] lg:justify-end">
          <Image priority={false} src={Girl} alt="image of a girl" className="aspect-square w-[80%] lg:w-full" />
        </div>
      </section>
      {/* ------------------------------- OUR ADD END ------------------------------ */}

      {/* ------------------------------- ADVERTISER START ------------------------------ */}
      <section className="mx-2 my-8 flex flex-col-reverse gap-5 rounded-xl bg-sectionBg p-5 md:mx-16 md:gap-0 md:p-10 lg:mx-32 lg:flex-row-reverse">
        <div className="flex flex-col justify-center gap-7 lg:w-[60%]">
          <h2 className="text-3xl font-semibold text-black">Advertiser</h2>
          <p className='text-gray-800'>
          It is often found that some of the websites hold a first position in Google due to attractive advertisements. Well, you might be thinking about the ways. At TMMT, we specialize in driving targeted traffic to your website through proven PPC, Native Push, Meta Advertising, and Email Marketing campaigns. Our strategies are designed to significantly increase your website's visibility, attract the right audience, and ultimately convert visitors into loyal customers. By leveraging cutting-edge technology and data-driven insights, we create tailored advertising solutions that resonate with your target market. With TMMT, you can trust that our approach will help bridge the gap between your business and potential customers, ensuring your brand stands out in today’s competitive digital world.
          </p>
          <div className="buttonhandler flex flex-col gap-10 md:flex-row">
            <Link href={"https://velocityclick.in/signup"} className="btn-header rounded-full px-24 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
            Advertiser
            </Link>
            <Link href={"https://velocityclick.in/contact"} className="btn-header rounded-full px-24 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Get in Touch
            </Link>
        </div>
        </div>
        <div className="left mx-auto flex w-full md:w-[60%] lg:w-[40%]">
          <Image priority={false} src={Advertiser} alt="affilate image" />
        </div>
      </section>
      {/* ------------------------------- ADVERTISER END ------------------------------ */}

      {/* ------------------------------- AFFILATE START ------------------------------ */}
      {/* ------------------------------- AFFILATE END ------------------------------ */}

      {/* ------------------------------- SERVICES START ------------------------------ */}
      <section className="px-5 pb-12 md:px-16 lg:px-32">
        <div className="sectionTitle">What More We <span className='text-col5'>Offer</span></div>
        <div className="">
          <div className="grid w-fit grid-cols-2 text-sm md:grid-cols-4 md:text-xl">
            <button className={`rounded-t-lg px-2 py-3 font-semibold md:px-5 ${openTab == 0 ? "bg-[#4ABDAC] text-white" : "text-black"}`} onClick={(e) => { e.preventDefault(); setOpenTab(0) }}>Multichannel Marketing</button>
            <button className={`rounded-t-lg px-2 py-3 font-semibold md:px-5 ${openTab == 1 ? "bg-[#4ABDAC] text-white" : "text-black"}`} onClick={(e) => { e.preventDefault(); setOpenTab(1) }}>Integration Assistance</button>
            <button className={`rounded-t-lg px-2 py-3 font-semibold md:px-5 ${openTab == 2 ? "bg-[#4ABDAC] text-white" : "text-black"}`} onClick={(e) => { e.preventDefault(); setOpenTab(2) }}>Scalable Solutions</button>
            <button className={`rounded-t-lg px-2 py-3 font-semibold md:px-5 ${openTab == 3 ? "bg-[#4ABDAC] text-white" : "text-black"}`} onClick={(e) => { e.preventDefault(); setOpenTab(3) }}>Cross-Device Optimization</button>
          </div>
          <div className="flex rounded-b-lg border-2 border-col5 bg-[#4ABDAC] lg:rounded-e-lg">
            {
              serviceDetails.map((item, index) => (
                <React.Fragment key={index}>
                  {
                    openTab == index &&
                    <ServiceDetails title={item.title} content={item.content} img={item.img} />
                  }
                </React.Fragment>
              ))
            }
          </div>
        </div>
      </section>
      {/* ------------------------------- SERVICES END ------------------------------ */}



      {/* ------------------------------- WHT TO CHOSE START ------------------------------ */}
      <section className="mx-2 my-8 flex flex-col items-center gap-5 rounded-xl bg-gray-100 p-5 md:mx-16 md:p-10 lg:mx-32">
        <span className="text-center text-4xl font-semibold">Why it's worth to choose <span className='text-col5'>TMMT?</span></span>
        <p className="w-[80%] text-center text-xl lg:w-1/2">With TMMT you will remain at a complete ease as we can take complete responsibility of your branding...</p>
        <div className="grid w-full grid-cols-1 gap-5 text-xl font-semibold md:grid-cols-2 md:text-2xl">
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-[#4ABDAC] py-8 text-white transition-transform duration-300 hover:scale-[1.05]"style={{ textShadow: "0 0 1px red, 0 0 5px red" }}>EXPERTISE</div>
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-[#4ABDAC] py-8 text-white transition-transform duration-300 hover:scale-[1.05]"style={{ textShadow: "0 0 1px red, 0 0 5px red" }}>RESULTS-DRIVEN</div>
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-[#4ABDAC] py-8 text-white transition-transform duration-300 hover:scale-[1.05]"style={{ textShadow: "0 0 1px red, 0 0 5px red" }}>INNOVATION</div>
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-[#4ABDAC] py-8 text-white transition-transform duration-300 hover:scale-[1.05]"style={{ textShadow: "0 0 1px red, 0 0 5px red" }}>GROWTH</div>
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-[#4ABDAC] py-8 text-white transition-transform duration-300 hover:scale-[1.05]"style={{ textShadow: "0 0 1px red, 0 0 5px red" }}>TRANSPARENCY</div>
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-[#4ABDAC] py-8 text-white transition-transform duration-300 hover:scale-[1.05]"style={{ textShadow: "0 0 1px red, 0 0 5px red" }}>SAFETY</div>
        </div>
      </section>
      {/* ------------------------------- WHT TO CHOSE END ------------------------------ */}


      {/* -------------------------- REVEIW SECTION START -------------------------- */}
      {/* -------------------------- REVEIW SECTION END -------------------------- */}


      {/* ------------------------------- STATISTICS START ------------------------------ */}
      <section className="mx-2 my-8 flex flex-col-reverse gap-10 rounded-xl bg-gray-100 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row lg:gap-10">
        <div className="left flex flex-col justify-center gap-5 lg:w-1/2">
          <span className='sectionTitle'>Your <span className='text-col5'>Profitability</span> is what <span className='text-amber-500'>matters</span> to us</span>
          <p className="text-lg">
            With TMMT you will remain at a complete ease as we can take complete responsibility of your branding. Nowadays, with an increased competition in the market, one needs to generate new ideas that could create long lasting impact on the customers.
          </p>
          <div className="buttonhandler flex flex-col justify-center gap-5 md:flex-row">
            <Link href={"https://velocityclick.in/signup"} className="btn-header rounded-full px-12 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
            Advertiser
            </Link>
            <Link href={"https://velocityclick.in/contact"} className="btn-header rounded-full px-12 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-200">
              Get in Touch
            </Link>

          </div>
        </div>
        <div className="right flex flex-col gap-10 lg:w-1/2">
          <div className="cardhandler flex flex-col gap-5">
            <div className="card flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-white bg-white py-10 font-medium shadow-lg hover:border-gray-400 hover:bg-slate-100">
              <span className="text-2xl font-semibold text-col5"> 150+</span>
              <span className='text-center'>Clients</span>
            </div>
            <div className="card flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-white bg-white py-10 font-medium shadow-lg hover:border-gray-400 hover:bg-slate-100">
              <span className="text-2xl font-semibold text-col5">75,000+</span>
              <span className='text-center'>Monthly Conversions</span>
            </div>
            <div className="card flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-white bg-white py-10 font-medium shadow-lg hover:border-gray-400 hover:bg-slate-100">
              <span className="text-2xl font-semibold text-col5">$6,00,000+</span>
              <span className='text-center'>Monthly Advertising Spends</span>
            </div>
          </div>

        </div>
      </section>
      {/* ------------------------------- STATISTICS END ------------------------------ */}



      {/* ------------------------------- OUR CLIENT START ------------------------------ */}
      {/* ------------------------------- OUR CLIENT END ------------------------------ */}

{/* ------------------------------- FAQS START ------------------------------ */}
      <section className="mx-2 my-8 rounded-xl bg-[#4ABDAC] p-3 md:mx-16 md:p-10 lg:mx-32">
        <div className="sectionTitle text-white">FAQS</div>
        <Accordion variant="splitted">
          {
            faqsData.map((item, idx) => (
              <AccordionItem key={idx} aria-label={`{Accordian ${idx + 1}}`} title={<span className='font-semibold text-col5'>Q. {item.question}</span>} className="accordian">
                Ans: {item.answer}
              </AccordionItem>
            ))
          }

        </Accordion>

      </section >
      {/* ------------------------------- FAQS END ------------------------------ */}

    </Fragment>

  )
}


export const ServiceDetails: React.FC<{ title: string, content: string, img: string }> = ({ title, content, img }) => {
  return (
    <div className="card flex flex-col gap-2 lg:flex-row lg:gap-0">
      <div className="left relative aspect-video w-full lg:w-1/2">
        <Image sizes='100vw' priority={false} src={`${img}`} alt="corporate image" fill={true} />
      </div>
      <div className="right flex flex-col justify-center gap-5 p-3 lg:w-1/2 lg:p-5 lg:pl-16">
        <span className="text-3xl font-semibold text-white md:text-5xl" >{title}</span>
        <p className="text-lg text-white">{content}</p>
      </div>
    </div>
  )
}
