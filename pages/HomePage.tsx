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
      title: "Integration Help",
      content: "New users don’t need to wait to understand the functionality of the dashboard to launch their first campaigns, the team helps them to on-board and integrate their advertisers, affiliates and campaigns on their system without caring about privacy.",
      img: "https://images.unsplash.com/photo-1590650046871-92c887180603"
    },
    {
      title: "Campaign Migration",
      content: "The fundamental issue is offer migration, which serves as an excuse to put platform migration on hold. Fortunately, we provide an easy way to migrate campaigns directly from your existing platform.A well documented migration guide book and personal migration assistance is also available to make the migration process smooth and hectic free.Technical support team is always available to help you.",
      img: "https://images.unsplash.com/photo-1573164574472-797cdf4a583a"
    },
    {
      title: "Multi Channel",
      content: "At Velocity Click, we offer support services through multiple channels, ensuring that users can derive maximum benefit based on their convenience. We understand the importance of providing flexible options to our customers, allowing them to engage with us through various channels for assistance and support. A dedicated support team always remains available 24X7 to help you. Our support team first hears users' queries properly and then acts accordingly.",
      img: "https://images.unsplash.com/photo-1665686308827-eb62e4f6604d"
    },
  ]

  const services = [
    {
      title: "Automation",
      content: "At Velocity Click, we understand the significance of automation and continuously strive to enhance our automated capabilities.By leveraging automation, we enable businesses to increase productivity while simultaneously reducing costs.We are committed to developing innovative automated solutions that drive efficiency and optimize operations.",
      img: Automation
    },
    {
      title: "Anti-Fraud Mechanism",
      content: "At Velocity Click, our anti-fraud mechanism goes beyond merely detecting fraudulent traffic. We take proactive measures to prevent such traffic from affecting your campaigns. With our robust in-house fraud detection feature, we ensure that no malicious traffic goes unnoticed, providing you with a secure and trustworthy advertising environment.",
      img: Antifraud
    },
    {
      title: "Tracking & Analytics",
      content: "Take your tracking and analytics capabilities to the next level by expanding beyond geographical data. At Velocity Click, we enable you to delve deeper into vital metrics such as carriers, languages, and effectively delivering campaigns to the right audience.",
      img: Analytics
    },
    {
      title: "Instant Migration",
      content: "Experience seamless and stress-free migration with Velocity Click, where you gain access to a wide array of tools and features. Our goal is to make the migration process effortless, ensuring a smooth transition for your business.",
      img: Migration
    },
    {
      title: "Integration",
      content: "At Velocity Click, we foster continuous collaboration with new partners, prioritizing the development of integrations. By doing so, we actively contribute to the success of our mutual clients.",
      img: Integration
    },
    {
      title: "Customer Support",
      content: "Velocity Click has been widely acknowledged as a frontrunner in providing exceptional customer support services. Numerous organizations have consistently identified Velocity Click as a leading force in the realm of customer support.",
      img: Support
    }
  ]

  const faqsData = [
    {
      question: "What Velocity Click do?",
      answer: "Velocity Click is a highly regarded and reliable platform specializing in Performance Marketing. Our primary objective is to assist our clients in reaching their marketing objectives by providing unparalleled and outcome-focused solutions. Our mission is centered around delivering exceptional results and helping our clients succeed in their marketing endeavors."
    },
    {
      question: "What is an advertiser?",
      answer: "An advertiser is an individual, company, or organization that promotes or markets products, services, or ideas to a target audience. They typically create and execute advertising campaigns across various channels, such as television, radio, print media, online platforms, and social media. Advertisers often work with publishers to display their ads and reach their desired audience."
    },
    {
      question: "What is a publisher?",
      answer: "A publisher also known as affiliate is an entity that produces or distributes content, such as articles, books, videos, websites, or apps, for public consumption. Publishers can be individuals, companies, or organizations. They provide a platform or medium through which content is delivered to an audience. Publishers generate revenue through various means, including advertising. They often collaborate with advertisers to display ads on their platforms and monetize their content. Advertisers and publishers often collaborate to reach their respective goals. Advertisers want to promote their products or services to a specific target audience, while publishers seek to generate revenue by displaying ads on their platforms."
    },
    {
      question: "How do publisher earn money?",
      answer: "Affiliates earn money through commissions. When someone clicks on their affiliate link and makes a purchase or completes a desired action, such as signing up for a newsletter or filling out a form, the affiliate receives a percentage of the sale or a fixed commission."
    },
    {
      question: "How do advertisers track affilate sales?",
      answer: "Advertisers track affiliate sales by using tracking technologies and affiliate tracking platforms. Each affiliate is assigned a unique tracking link that contains a tracking code. This code helps the advertiser identify which affiliate generated the sale or lead, allowing accurate commission attribution."
    },
    {
      question: "Can you be both an publisher and an advertiser?",
      answer: "Yes, it is possible to be both an publisher and an advertiser. Many publisher who have built a successful platform and audience eventually create their own products or services to sell and become advertisers themselves. This allows them to leverage their existing networks and expand their revenue streams."
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
      <header className="mx-2 my-5 flex h-fit flex-col gap-16 rounded-xl bg-col3 p-10 md:mx-16 lg:mx-32">
        <div className="flex w-full flex-col items-center gap-8 text-white md:justify-center">
          <h1 className="titleColor text-center font-serif text-6xl"
          // style={{ "textShadow": "0px 0px 5px #D9B29C" }}
          >We Manage Your Brands in Multiple Channels</h1>
          <p className="titleColor text-center font-mono text-xl md:px-5">Our motto is to build a communication bridge between advertisers, customers, and affiliates.</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Link href={"https://velocityclick.in/signup"} className="btn-header">
              Advertiser
            </Link>
            <Link href={"https://velocityclick.in/signup"} className="btn-header">
              Affiliate
            </Link>
          </div>
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
      <section className="mx-2 my-8 flex h-fit flex-col gap-12 rounded-xl bg-col3 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row lg:items-center lg:gap-0">
        <div className="text-center text-2xl text-black lg:w-[60%] lg:pr-5 lg:text-left">
          We are pioneer at managing your brands in multiple channels. Our motto is to build a communication bridge between advertisers, customers and Affiliates. Branding is perhaps an USP of any business organisation and if you want to make your products popular amongst customers then just opt for our services.
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
          <p className='text-gray-700'>
            It is often found that some of the websites hold a first position in Google due to attractive advertisements. Well, you might be thinking about the ways to invite advertisers on your webpage. Mediaxpedia have gain immense success in inciting the advertisers to visit a company's webpage. We can assure you that our proven formula will create significant effect on your website. You will find that advertisers are getting attracted to your website. We are quite efficient in establishing a platform for meeting our clients with their prospective advertisers by the following:
          </p>

          <Link href={"https://velocityclick.in/signup"} className="btn-header">
            SIGNUP
          </Link>
        </div>
        <div className="left mx-auto flex w-full md:w-[60%] lg:w-[40%]">
          <Image priority={false} src={Advertiser} alt="affilate image" />
        </div>
      </section>
      {/* ------------------------------- ADVERTISER END ------------------------------ */}

      {/* ------------------------------- AFFILATE START ------------------------------ */}
      <section className="mx-2 my-8 flex flex-col-reverse gap-5 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
        <div className="left flex flex-col justify-center gap-7 lg:w-[60%]">
          <h2 className="text-3xl font-semibold text-black">Affiliate</h2>
          <p className='text-gray-700'>
            Affiliates can be regarded as one of the main catalyst behind your marketing campaign. Your online performance is largely dependent upon the delivery of your services or products at right context, place and time. In the absence of a Affiliate you are never going to reach to your advertisers. Affiliates can open avenues for your website reach to the potential advertiser. It can well be discerned that Affiliate can both give a boost to your business and at the same time degrade it too.
          </p>
          <Link href={"https://velocityclick.in/signup"} className="btn-header">
            SIGNUP
          </Link>
        </div>
        <div className="mx-auto flex w-full md:w-[60%] lg:w-[40%]">
          <Image priority={false} src={Affiliate} alt="affilate image" className="blend-image" />
        </div>
      </section>
      {/* ------------------------------- AFFILATE END ------------------------------ */}

      {/* ------------------------------- SERVICES START ------------------------------ */}
      <section className="px-5 pb-12 md:px-16 lg:px-32">
        <div className="sectionTitle"><span className='text-col5'>SER</span>VICES</div>
        <div className="">
          <div className="grid w-fit grid-cols-2 text-sm md:grid-cols-3 md:text-xl">
            <button className={`rounded-t-lg px-2 py-3 font-semibold md:px-5 ${openTab == 0 ? "bg-col3 text-col5" : "text-black"}`} onClick={(e) => { e.preventDefault(); setOpenTab(0) }}>INTEGRATION HELP</button>
            <button className={`rounded-t-lg px-2 py-3 font-semibold md:px-5 ${openTab == 1 ? "bg-col3 text-col5" : "text-black"}`} onClick={(e) => { e.preventDefault(); setOpenTab(1) }}>CAMPAIGN MIGRATION</button>
            <button className={`rounded-t-lg px-2 py-3 font-semibold md:px-5 ${openTab == 2 ? "bg-col3 text-col5" : "text-black"}`} onClick={(e) => { e.preventDefault(); setOpenTab(2) }}>MULTI CHANEL</button>
          </div>
          <div className="flex rounded-b-lg border-2 border-col3 bg-col3 lg:rounded-e-lg">
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


      {/* ------------------------------- FAQS START ------------------------------ */}
      <section className="mx-2 my-8 rounded-xl bg-col3 p-3 md:mx-16 md:p-10 lg:mx-32">
        <div className="sectionTitle text-col5">FAQS</div>
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

      {/* ------------------------------- WHT TO CHOSE START ------------------------------ */}
      <section className="mx-2 my-8 flex flex-col items-center gap-5 rounded-xl bg-gray-100 p-5 md:mx-16 md:p-10 lg:mx-32">
        <span className="text-center text-4xl font-semibold">Why it's worth to choose <span className='text-col5'>Velocity Click?</span></span>
        <p className="w-[80%] text-center text-xl lg:w-1/2">With Velocity Click you will remain at a complete ease as we can take complete responsibility of your branding...</p>
        <div className="grid w-full grid-cols-1 gap-5 text-xl font-semibold md:grid-cols-2 md:text-2xl">
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-col4 py-8 text-black transition-transform duration-300 hover:scale-[1.05]">SAFETY</div>
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-col4 py-8 text-black transition-transform duration-300 hover:scale-[1.05]">STABILITY</div>
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-col4 py-8 text-black transition-transform duration-300 hover:scale-[1.05]">TECHNICAL SUPPORT</div>
          <div className="flex w-full transform cursor-pointer justify-center rounded-xl bg-col4 py-8 text-black transition-transform duration-300 hover:scale-[1.05]">COMPLETE SOLUTIONS</div>
        </div>
      </section>
      {/* ------------------------------- WHT TO CHOSE END ------------------------------ */}


      {/* -------------------------- REVEIW SECTION START -------------------------- */}
      <section className="mx-2 my-8 rounded-xl bg-col3 p-5 md:mx-16 md:p-10 lg:mx-32">
        <div className="sectionTitle text-col5">What is everyone saying?</div>
        <div className="h-fit bg-transparent">
          <Swiper
            loop={true}
            slidesPerView={windowWidth < 641 ? 1 : (windowWidth < 770 ? 2 : 3)}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            grid={{
              rows: 1,
            }}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Grid, Pagination]}
            className="mySwiper"
          >
            {
              userReview.map((item, idx) => (
                <SwiperSlide className="reviewSlider rounded-lg border border-black" key={idx}>
                  <div
                    className="flex h-full flex-col gap-4 p-5"
                  >
                    <p>
                      {item.review}
                    </p>
                    <span
                      className="mt-auto font-semibold text-col5"
                    >{item.user}</span>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </section>
      {/* -------------------------- REVEIW SECTION END -------------------------- */}


      {/* ------------------------------- STATISTICS START ------------------------------ */}
      <section className="mx-2 my-8 flex flex-col-reverse gap-10 rounded-xl bg-gray-100 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row lg:gap-10">
        <div className="left flex flex-col justify-center gap-5 lg:w-1/2">
          <span className='sectionTitle'>Your <span className='text-col5'>Profitability</span> is what <span className='text-amber-500'>matters</span> to us</span>
          <p className="text-lg">
            With Velocity Click you will remain at a complete ease as we can take complete responsibility of your branding. Nowadays, with an increased competition in the market, one needs to generate new ideas that could create long lasting impact on the customers.
          </p>
          <div className="buttonhandler flex flex-col justify-center gap-5 md:flex-row">
            <Link href={"https://velocityclick.in/signup"} className="btn-header rounded-full px-12 py-3">
              Affiliate
            </Link>
            <Link href={"https://velocityclick.in/signup"} className="btn-header rounded-full px-12 py-3">
              Advertiser
            </Link>

          </div>
        </div>
        <div className="right flex flex-col gap-10 lg:w-1/2">
          <div className="cardhandler flex flex-col gap-5">
            <div className="card flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-white bg-white py-10 font-medium shadow-lg hover:border-gray-400 hover:bg-slate-100">
              <span className="text-2xl font-semibold text-col5"> 500+</span>
              <span className='text-center'>Affiliates</span>
            </div>
            <div className="card flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-white bg-white py-10 font-medium shadow-lg hover:border-gray-400 hover:bg-slate-100">
              <span className="text-2xl font-semibold text-col5">150+</span>
              <span className='text-center'>Clients</span>
            </div>
            <div className="card flex cursor-pointer items-center justify-center gap-3 rounded-2xl border-2 border-white bg-white py-10 font-medium shadow-lg hover:border-gray-400 hover:bg-slate-100">
              <span className="text-2xl font-semibold text-col5">300000+</span>
              <span className='text-center'>Monthly Conversion</span>
            </div>
          </div>

        </div>
      </section>
      {/* ------------------------------- STATISTICS END ------------------------------ */}



      {/* ------------------------------- OUR CLIENT START ------------------------------ */}
      <section className="mx-2 my-8 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32">
        <div className="sectionTitle"><span className='text-col5'>OUR</span> CLIENTS</div>
        <div className="imageSlider">
          <Swiper
            navigation={true}
            slidesPerView={windowWidth < 641 ? 2 : (windowWidth < 769 ? 3 : 5)}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            grid={{
              rows: 2,
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Grid, Pagination, Navigation]}
            className="mySwiper"
          >
            {
              clientImageFileNames.map((item, idx) => (
                <SwiperSlide className="">
                  <div className='relative h-full w-full border border-black'>
                    <Image src={`/clients/${item}`} alt="clients company's log" fill={true} />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>

      </section>
      {/* ------------------------------- OUR CLIENT END ------------------------------ */}

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
        <span className="text-3xl font-semibold text-col5 md:text-5xl" >{title}</span>
        <p className="text-lg text-col5">{content}</p>
      </div>
    </div>
  )
}
