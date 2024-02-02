import HeaderBox from "@/components/HeaderBox"
import Image, { StaticImageData } from "next/image"
import Top from "@/public/assets/advertiser/top.png"
import User from '@/public/assets/advertiser/user.png'
import Multi from '@/public/assets/advertiser/multi.png'
import Target from '@/public/assets/advertiser/target.png'
import Cover from '@/public/assets/advertiser/cover.png'
import RTI from '@/public/assets/advertiser/rti.png'
import Campaign from '@/public/assets/advertiser/campaign.png'
import {  BoxCard, Card } from "./AdvertiserPage"
import Link from "next/link"

const data = [
    {
        title: "Smart & Innovative Solutions",
        content: "We offer smart and innovative solutions to monetize the publisher’s inventory down to the last impression."
    },
    {
        title: "Maximize Revenue Through AI",
        content: "Our AI based platform allows Publishers to maximize their Revenues through access to our wide variety of Advertisers across verticals. We are connected with Brands, running whose campaigns can enhance your portfolio."
    },
    {
        title: "Competitive Prices & eCPMs",
        content: "Our prompt expertise analysis and recommendations brings best yield for your traffic providing competitive prices and eCPMs."
    },
]

const gridData = [
    {

        "title": "Maximum Revenue",
        icon: RTI
    },

    {
        "title": "Transparent",
        icon: Multi
    },
    {

        "title": "Flexible Payment terms",
        icon: Target
    },
    {

        "title": "Dedicated Account Manager",
        icon: User
    },

    {
        "title": "Realtime Campaign Insights",
        icon: Cover
    },
    {
        "title": "Customer Support",
        icon: Campaign
    }

]

const AffiliatePage = () => {
    return (
        <div>
            <HeaderBox title="Affiliate" />

            <section className="mx-2 my-8 flex flex-col-reverse rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className="flex flex-col gap-10 lg:w-7/12">
                    {
                        data.map((item, index) => (

                            <Card key={index} title={item.title} content={item.content} />
                        ))
                    }
                </div>
                <div className="my-auto lg:w-5/12">
                    <div className="iamgeHolder relative mx-auto aspect-square w-full md:w-1/2 lg:w-full">
                        {/* fff */}
                        <Image src={Top} alt="image" fill={true} />
                    </div>
                </div>
            </section>

            <section className="bg-white px-7 py-12 md:px-16 md:py-16 lg:px-32">
                <div className="flex flex-col items-center gap-5">
                    <span className="text-center text-4xl font-semibold text-col5">
                        We Provide Additional Services That Will Grow Your Business
                    </span>
                    <p className="w-10/12 text-center text-lg text-gray-500">
                        We maximize the potential customer reach to your Campaigns through Geo. targeting, Behavioral targeting, Contextual targeting, Campaign Optimization and Niche Verticals, based on classification and common channel sites. Through our precise Media planning and Direct Premium Affiliates on our network, we instantaneously enable you to maximize your reach across millions of audiences.
                    </p>
                    <span className="text-2xl font-semibold">Why <span className="text-col5">Velocity Click?</span></span>
                </div>

                <div className="cardHolder my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        gridData?.map((item, idx) => (
                            <BoxCard title={item.title} icon={item.icon} />
                        ))
                    }
                </div>
            </section>
            <div className="flex flex-col items-center justify-between gap-5 rounded-t-xl border border-col5 bg-col5 px-7 py-5 md:px-16 lg:flex-row lg:gap-0 lg:px-32">
                <span className="w-full text-4xl text-gray-200 md:text-5xl lg:w-10/12">Build your successful business with us. Want to know how to do this?</span>
                <Link href="https://velocityclick.in/signup" className="h-fit w-fit rounded-full bg-white px-5 py-2 font-semibold text-col5 hover:bg-gray-200">Sign Up</Link>
            </div>
        </div>
    )
}

export default AffiliatePage