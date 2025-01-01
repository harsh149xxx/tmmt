'use client';

import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import Marketing from '@/public/assets/services/marketing.jpg'
import Lead from '@/public/assets/services/lead.jpg'
import Branding from '@/public/assets/services/branding.jpg'
import Image from 'next/image'

const ServicesPage = () => {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            try {
                const navbarHeight = document.querySelector('header')?.clientHeight || 0; // Adjust based on your navbar's height
                const offsetPosition = section.offsetTop - navbarHeight + 20; // You can fine-tune the `+20` for extra padding

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth',
                });
            } catch (error) {
                console.error('Scroll Error:', error);
            }
        } else {
            console.warn(`Section with ID ${sectionId} not found.`);
        }
    };

    return (
        <div>
            <HeaderBox title="Services" />
            <div className="flex justify-center gap-6 mt-8 sticky top-0 bg-white z-10 mb-4">
                <button
                    className="btn-header rounded-full px-6 py-3 text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-1')} 
                >
                    PPC Ads
                </button>
                <button
                    className="btn-header rounded-full px-6 py-3 text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-2')} 
                >
                    Meta Ads
                </button>
                <button
                    className="btn-header rounded-full px-6 py-3 text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-3')} 
                >
                    Native Ads
                </button>
                <button
                    className="btn-header rounded-full px-6 py-3 text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-4')} 
                >
                    Email Marketing
                </button>
                <button
                    className="btn-header rounded-full px-6 py-3 text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-5')} 
                >
                    APP Marketing
                </button>
                <button
                    className="btn-header rounded-full px-6 py-3 text-lg bg-red-500 shadow-lg hover:shadow-xl transition-all duration-200"
                    onClick={() => handleScroll('section-6')} 
                >
                    Branding
                </button>
            </div>

            {/* Section 1 */}
            <section id="section-1" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>PPC Advertising</span>
                    <p className='text-justify text-xl'>
                        PPC is one of the most effective ways to drive targeted traffic to your website. At TMMT, we create customized PPC campaigns designed to maximize ROI and drive conversions.
                        </p>
                        <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                            <li><b style={{ fontWeight: 600 }}>Increased Conversions:</b> Clients often see a 25-30% increase in conversions after campaign optimization.</li>
                            <li><b style={{ fontWeight: 600 }}>Targeted Reach:</b> We focus on high-conversion keywords to attract the right audience.</li>
                            <li><b style={{ fontWeight: 600 }}>Optimized Budget:</b> Through continuous A/B testing, we ensure maximum efficiency in ad spend.</li>
                        </ul>
                        <p className='text-justify text-xl mt-6'>
                            With data-driven insights, we ensure your ads reach the right people at the right time for the best results.
                        
                    </p>
                </div>

                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Marketing} fill alt="branding image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            {/* Section 2 (reverse layout) */}
            <section id="section-2" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>Meta (Facebook & Instagram) Advertising</span>
                    <p className='text-justify text-xl'>
                        Meta platforms offer unparalleled reach, and we specialize in creating effective ad campaigns on Facebook and Instagram to increase brand visibility and conversions.
                        </p>
                        <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                            <li><b style={{ fontWeight: 600 }}>Improved CTR:</b> We see up to a 20% increase in click-through rates through tailored creatives.</li>
                            <li><b style={{ fontWeight: 600 }}>Engagement Growth:</b> Clients experience a 30% boost in engagement after campaign optimization.</li>
                            <li><b style={{ fontWeight: 600 }}>Targeted Reach:</b> Using advanced targeting, we reach users most likely to convert.</li>
                        </ul>
                        <p className='text-justify text-xl mt-6'>
                            We craft ads that drive measurable results while optimizing your budget for maximum impact.
                        
                    </p>

                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Marketing} fill alt="branding image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            {/* Section 3 (same layout as Section 1) */}
            <section id="section-3" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>Native Push Advertising</span>
                    <p className='text-justify text-xl'>
                        Native push ads seamlessly integrate with content, delivering personalized messages to your audience. We specialize in creating native campaigns that improve engagement and conversion rates.
                        </p>
                        <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                            <li><b style={{ fontWeight: 600 }}>Higher Engagement:</b> Our campaigns typically see a 20-25% increase in user engagement.</li>
                            <li><b style={{ fontWeight: 600 }}>Targeted Delivery:</b> We leverage behavioral data for precise ad targeting.</li>
                            <li><b style={{ fontWeight: 600 }}>Cost-effective:</b> By optimizing delivery, we increase ROI while reducing ad spend by up to 30%.</li>
                        </ul>
                        <p className='text-justify text-xl mt-6'>
                            Through effective targeting and captivating creatives, we drive results that resonate with your audience.
                        
                    </p>


                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Branding} fill alt="saas marketing image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>


            {/* Section 4 (reverse layout) */}
            <section id="section-4" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>Email Marketing</span>
                    <p className='text-justify text-xl'>
                        Email marketing remains one of the highest-converting channels. At TMMT, we create personalized email campaigns to nurture leads and drive customer retention.
                        </p>
                        <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                            <li><b style={{ fontWeight: 600 }}>Higher Open Rates:</b> Our clients experience a 15-25% increase in open rates.</li>
                            <li><b style={{ fontWeight: 600 }}>Optimized Campaigns:</b> We A/B test subject lines, content, and CTAs to ensure maximum engagement.</li>
                            <li><b style={{ fontWeight: 600 }}>Increased Retention:</b> Our campaigns boost customer retention rates by 20-30%.</li>
                        </ul>
                        <p className='text-justify text-xl mt-6'>
                            By delivering targeted, engaging emails, we help nurture relationships and drive conversions.
                        
                    </p>
                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Lead} fill alt="branding image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>
            {/* Section 5 (same layout as Section 1) */}
            <section id="section-5" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>App Marketing</span>
                    <p className='text-justify text-xl'>
                        We help businesses increase app downloads and user engagement with strategic marketing campaigns across various platforms.
                        </p>
                        <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                            <li><b style={{ fontWeight: 600 }}>Boosted Downloads:</b> Clients typically see a 35% increase in app downloads.</li>
                            <li><b style={{ fontWeight: 600 }}>Enhanced Engagement:</b> Through personalized push notifications, we improve user retention by 30%.</li>
                            <li><b style={{ fontWeight: 600 }}>Cost-Effective Campaigns:</b> We optimize ad spend to ensure high ROI on every campaign.</li>
                        </ul>
                        <p className='text-justify text-xl mt-6'>
                            By targeting the right audience and leveraging industry-leading tools, we ensure your app stands out in a crowded market.
                        
                    </p>
                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Branding} fill alt="saas marketing image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>
            {/* Section 6 (reverse layout) */}
            <section id="section-6" className="mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse">
                <div className='w-full lg:w-1/2'>
                    <span className='text-3xl font-semibold block mb-4'>Branding</span>
                    <p className='text-justify text-xl'>
                        Effective branding is essential for standing out in today’s competitive market. At TMMT, we help businesses define their unique identity and communicate it consistently across all platforms.
                        </p>
                        <ul className='list-decimal pl-5 text-xl mt-4 leading-8'>
                            <li><b style={{ fontWeight: 600 }}>Increased Brand Awareness:</b> Clients typically see up to a 40% rise in brand recognition.</li>
                            <li><b style={{ fontWeight: 600 }}>Enhanced Customer Loyalty:</b> On average, businesses experience a 30% increase in customer loyalty.</li>
                            <li><b style={{ fontWeight: 600 }}>Positioning:</b> We help position your brand as a leader in your industry through a clear and cohesive message.</li>
                        </ul>
                        <p className='text-justify text-xl mt-6'>
                            Through research, creative development, and customer insights, we ensure your brand connects with the right audience and drives long-term success.
                        
                    </p>

                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Lead} fill alt="branding image" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ServicesPage
