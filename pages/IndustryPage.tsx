'use client';

import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import Crypto from '@/public/assets/industry/Crypto Currency Industry.jpg'
import Casino from '@/public/assets/industry/Online Casinos with Abstract Background.jpg'
import Saas from '@/public/assets/industry/SAAS Industry.jpg'
import Health from '@/public/assets/industry/Health & Wellness Industry.jpg'
import Image from 'next/image'
import Link from "next/link"

const ServicesPage = () => {
    const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
        const navbarHeight = document.querySelector('header')?.clientHeight || 0; // Adjust based on your navbar's height
        const buttonContainerHeight = document.querySelector('.btn-header')?.clientHeight || 0; // Adjust based on button container height

        // If it's mobile, consider the height of the fixed button container
        const mobileOffset = window.innerWidth <= 768 ? buttonContainerHeight : 0; 

        // Adjust the scroll position to account for the navbar and buttons
        const offsetPosition = section.offsetTop - navbarHeight - mobileOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};

    
    return (
        <div>
            <HeaderBox title="Industries" />

            {/* Buttons Below HeaderBox */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 sticky top-0 bg-white z-10 mb-8 px-4 py-4">
                <button
                    className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-1')} // Scroll to Section 1
                >
                    Health & Wellness
                </button>
                <button
                    className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-2')} // Scroll to Section 2
                >
                    SAAS
                </button>
                <button
                    className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-3')} // Scroll to Section 3
                >
                    Online Casino & Betting
                </button>
                <button
                    className="btn-header rounded-full px-4 py-2 text-sm md:px-6 md:py-3 md:text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-4')} // Scroll to Section 4
                >
                    Crypto Currency
                </button>
            </div>
               

            {/* Section 1 */}
            <section id="section-1" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className='w-full lg:w-3/5'>
                    <span className='text-3xl font-semibold block mb-4'>Health & Wellness Industry</span>
                    <p className='text-justify text-xl'>
                        In the health and wellness sector, we specialize in helping brands, including those focused on weight loss, sleep improvement, and overall wellness, connect with their target audience. Our tailored digital marketing strategies include SEO, PPC, and social media advertising, ensuring that your message reaches those actively seeking solutions to improve their lives.
                    </p>
                    <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                        <li><b style={{ fontWeight: 600 }}>Targeted Campaigns:</b> Using geo-targeting, behavioral targeting, and demographic data to reach potential customers.</li>
                        <li><b style={{ fontWeight: 600 }}>Proven Results:</b> Our clients typically see a 30% increase in conversions within the first 3 months.</li>
                        <li><b style={{ fontWeight: 600 }}>Cost-effective:</b> By optimizing campaigns, we reduce ad spend waste and improve ROI by up to 40%.</li>
                        <li><b style={{ fontWeight: 600 }}>Engagement:</b> With personalized messaging and clear CTAs, our campaigns boost engagement, increasing customer acquisition.</li>
                    </ul>
                    <p className='text-justify text-xl mt-6'>
                        Whether you’re a weight loss program, a sleep solution, or another health-related service, we drive meaningful results that translate to higher customer acquisition and brand trust.

                    </p>
                </div>
                <div className='flex w-full items-center justify-center lg:w-2/5'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Health} fill alt="Health & Wellness image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            {/* Section 2 (reverse layout) */}
            <section id="section-2" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse">
                <div className='w-full lg:w-3/5'>
                    <span className='text-3xl font-semibold block mb-4'>SAAS Industry</span>
                    <p className='text-justify text-xl'>
                        We help SAAS companies enhance their digital marketing strategies to generate leads, increase trials, and boost long-term customer retention. Our approach combines inbound marketing, PPC, email automation, and analytics-driven tactics to scale your software business.
                    </p>
                    <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                        <li><b style={{ fontWeight: 600 }}>Lead Generation:</b> By targeting decision-makers and key demographics, we’ve helped SAAS clients see a 25% increase in qualified leads.</li>
                        <li><b style={{ fontWeight: 600 }}>Optimized Conversions:</b> We leverage A/B testing and landing page optimization to achieve 15-30% higher conversion rates.</li>
                        <li><b style={{ fontWeight: 600 }}>Customer Retention:</b> Our email marketing and CRM integration strategies improve customer retention by 20-40%.</li>
                        <li><b style={{ fontWeight: 600 }}>Proven ROI:</b> With a focus on high-value customers, we deliver an average ROI increase of 50% in the first 6 months.</li>
                    </ul>
                    <p className='text-justify text-xl mt-6'>
                        For SAAS businesses looking to scale, our results-driven strategies ensure that every marketing dollar spent delivers measurable returns.

                    </p>
                </div>
                <div className='flex w-full items-center justify-center lg:w-2/5'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Saas} fill alt="SAAS image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            {/* Section 3 (same layout as Section 1) */}
            <section id="section-3" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className='w-full lg:w-3/5'>
                    <span className='text-3xl font-semibold block mb-4'>Online Casinos & Betting Industry</span>
                    <p className='text-justify text-xl'>
                        We understand the competitive nature of the online casino and betting industries, and our approach focuses on driving high-quality traffic and increasing conversions. Our strategies leverage PPC, Native Push ads, and targeted social campaigns to attract both casual and serious players to your platform.
                    </p>
                    <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                        <li><b style={{ fontWeight: 600 }}>Targeting the Right Players:</b> By using psychographic and behavioral targeting, we reach players most likely to convert.</li>
                        <li><b style={{ fontWeight: 600 }}>High Conversion Rates:</b> Our campaigns generate 20% higher player retention rates, leading to repeat business.</li>
                        <li><b style={{ fontWeight: 600 }}>Maximized ROI:</b> By focusing on high-performing ad placements, we’ve increased ROI for clients by 45%.</li>
                        <li><b style={{ fontWeight: 600 }}>Data-Driven Strategy:</b> We track player behavior to continuously optimize ad creatives, improving engagement and lifetime value.</li>
                    </ul>
                    <p className='text-justify text-xl mt-6'>
                        In an industry where timing and targeting are critical, our optimized campaigns ensure your casino or betting platform stands out and attracts the right audience, leading to higher ROI.

                    </p>

                </div>
                <div className='flex w-full items-center justify-center lg:w-2/5'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Casino} fill alt="Casinos & Betting image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>


            {/* Section 4 (reverse layout) */}
            <section id="section-4" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse">
                <div className='w-full lg:w-3/5'>
                    <span className='text-3xl font-semibold block mb-4'>Crypto Currency Industry</span>
                    <p className='text-justify text-xl'>
                        In the rapidly evolving world of cryptocurrency, our team provides innovative marketing strategies designed to attract investors and enthusiasts alike. From ICOs and token sales to blockchain solutions, we help crypto businesses grow by establishing strong, data-driven digital campaigns.
                    </p>
                    <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                        <li><b style={{ fontWeight: 600 }}>Targeting the Right Audience:</b> We reach crypto enthusiasts and investors through precision targeting on social media, Google Ads, and crypto-specific platforms.</li>
                        <li><b style={{ fontWeight: 600 }}>Increased Conversions:</b> Our clients have reported up to 50% more conversions after optimizing their campaigns with us.</li>
                        <li><b style={{ fontWeight: 600 }}>Market Reach:</b> By leveraging the latest industry trends, we increase brand visibility, driving up to 70% more traffic to crypto websites.</li>
                        <li><b style={{ fontWeight: 600 }}>Cost-efficient Campaigns:</b> Through continuous optimization, we ensure the most effective ad spend allocation, improving ROI by 35%.</li>
                    </ul>
                    <p className='text-justify text-xl mt-6'>
                        By staying ahead of crypto trends and utilizing cutting-edge tools, we ensure your crypto business reaches its full potential in a crowded market.

                    </p>


                </div>
                <div className='flex w-full items-center justify-center lg:w-2/5'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Crypto} fill alt="Crypto Currency image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center justify-between gap-5 rounded-t-xl border border-col5 bg-col5 px-5 py-5 md:px-16 lg:flex-row lg:gap-0 lg:px-32">
                <span className="w-full text-2xl text-gray-200 md:text-3xl lg:w-10/12">Take your business to the next level. Let's show you how.</span>
                <Link href="https://themadmysteryteam.com/contact" className="h-fit w-fit rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200">Get in Touch</Link>
            </div>
        </div>
    )
}

export default ServicesPage
