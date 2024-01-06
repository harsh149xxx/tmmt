import HeaderBox from '@/components/HeaderBox'
import React from 'react'
import Marketing from '@/public/assets/services/marketing.jpg'
import Lead from '@/public/assets/services/lead.jpg'
import Branding from '@/public/assets/services/branding.jpg'
import Image from 'next/image'

const ServicesPage = () => {
    return (
        <div>
            <HeaderBox title="Sevices" />

            <section className='mx-2 my-2 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-3xl font-semibold'>Mobile Marketing</h1>
                    <p className='text-justify text-xl'>
                        With the rampant use of smartphones marketers are showing a preference towards mobile marketing. We at XtremeAd Media Solutions have understood the worth of mobile marketing for a company and so our mobile marketing services are able to reach to customers via apps, SMS or graphics. We aim at creating persona of the mobile users by knowing their preferences. We also find out the particular behaviours of mobile users. It has been found that almost 65% of the people open their email on mobile phones. XtremeAd Media Solutions search for key audiences who can be targeted via mobile marketing. Generating measurable as well as realistic KPI’s is one of the prime components of our mobile marketing strategy. Our writers post user friendly content which will take your SEO to new heights.
                    </p>
                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Marketing} fill alt="branding iamge" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            <section className='mx-2 my-8 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-3xl font-semibold'>Lead Generation</h1>
                    <p className='text-justify text-xl'>
                        Lead generation is considered to be one of the most significant parts of a business. Building of a good communication network is what counts in your branding. Suppose you are on a social networking site but you hardly do any sort of activity then just get ready to lose your customers. But if you choose XtremeAd Media Solutions for your lead generation then you need not worry about it. We will post photos or attractive contents that are meant to describe your products or services. On behalf of your company we will post blogs that will make announcement regarding your newly launched products or make discussion regarding needs of your customers.
                    </p>
                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Lead} fill alt="branding iamge" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            <section className='mx-2 my-8 flex flex-col-reverse gap-12 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row'>
                <div className='w-full lg:w-1/2 lg:pr-8'>
                    <h1 className='text-3xl font-semibold'>Branding</h1>
                    <p className='text-justify text-xl'>
                        A company that has a well defined branding strategy is able to taste the fruit of success. If you have a plan to grow your business then XtremeAd Media Solutions can help you out by: Conducting research: We will first conduct a research on the needs of your target customers and based upon their needs, we will devise a strategy. Considering your business goal: Our branding strategies will be completely based upon the goals that you have predetermined for your business. Positioning your brand: After gaining a complete knowledge about your target customer’s need and your business goals XtremeAd Media Solutions tries to position your brand by defining your unique features.
                    </p>
                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Branding} fill alt="branding iamge" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>

            <section className='mx-2 my-8 flex flex-col-reverse gap-12 rounded-xl bg-gray-200 p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <h1 className='text-3xl font-semibold'>Affiliate Marketting</h1>
                    <p className='text-justify text-xl'>
                        From facts to figures, we now have the world in the palm of our hand. With promising technological advancements, transformations, and easy accessibility to the internet, businesses everywhere are growing more responsive, more agile, and more mobile. THE EVOLVING DIGITAL MARKETING LANDSCAPE has become the cradle of a multitude of avenues for entrepreneurial innovation. And of late, affiliate marketing has come out as one such lucrative innovation. Affiliate marketing follows a simple step-by-step process:
                    </p>
                    <ol className='list-decimal pl-5 text-xl'>
                        <li>An affiliate shows an ad for a product offered by a company on their website</li>
                        <li>A user clicks on the ad</li>
                        <li>The user is then redirected from the affiliate’s website to the company’s website</li>
                    </ol>
                </div>
                <div className='flex w-full items-center justify-center lg:w-1/2'>
                    <div className="imageHolder relative aspect-video w-full">
                        <Image src={Lead} fill alt="branding iamge" style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ServicesPage