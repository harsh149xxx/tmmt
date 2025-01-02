import HeaderBox from "@/components/HeaderBox"
import Image, { StaticImageData } from "next/image"
import Top from "@/public/assets/advertiser/top.png"
import User from '@/public/assets/advertiser/user.png'
import Multi from '@/public/assets/advertiser/multi.png'
import Target from '@/public/assets/advertiser/target.png'
import Cover from '@/public/assets/advertiser/cover.png'
import RTI from '@/public/assets/advertiser/rti.png'
import Campaign from '@/public/assets/advertiser/campaign.png'
import Link from "next/link"

const data = [
    {
        title: "Most Effective Solutions",
        content: "Our priority has always been to bring the most effective creative(s) solutions to reach right audiences at right time with Optimum Campaign results."
    },
    {
        title: "Proven Market Practices & Strategies",
        content: "We implement our proven market practices and strategies in planning & buying process, that are best suited to each campaign and thereby maximizing the ROI. We support all standard and rich media formats and also, all creative sizes to meet your Ads. requirement."
    },
    {
        title: "Realtime Camapign Management",
        content: "You can always measure your Campaign Performance with Our Realtime Campaign Management and Transparent Reporting."
    },
    {
        title: "Continuous Optimization & Innovation",
        content: "We believe in constant improvement. By analyzing real-time data, we continuously optimize campaigns to ensure maximum performance."
    },
]

const gridData = [
    {

        "title": "Positive ROI Driven",
        icon: RTI
    },

    {
        "title": "Multi Channel Traffic",
        icon: Multi
    },
    {

        "title": "Target the Right Audience",
        icon: Target
    },
    {

        "title": "Dedicated Account Manager",
        icon: User
    },

    {
        "title": "We Got all the verticals covered",
        icon: Cover
    },
    {
        "title": "Realtime Campaign Insights",
        icon: Campaign
    }

]

const AdvertiserPage = () => {
    return (
        <div>
            <HeaderBox title="Advertiser" />

            <section className="mx-2 my-8 flex flex-col-reverse rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row">
                <div className="flex flex-col gap-10 lg:w-7/12">
                    {
                        data.map((item, index) => (

                            <Card key={index} title={item.title} content={item.content} />
                        ))
                    }
                </div>
                <div className="lg:w-5/12">
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
                        
We maximize your campaign's reach through precise Geo-targeting, Behavioral targeting, Contextual targeting, and Campaign Optimization. By focusing on niche verticals and common channel sites, we ensure your ads connect with the right audience. With our expert media planning and direct access to premium networks, instantly expanding reach to millions, delivering impactful results.
                    </p>
                    <span className="text-2xl font-semibold">Why <span className="text-col5">TMMT?</span></span>
                </div>

                <div className="cardHolder my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {
                        gridData?.map((item, idx) => (
                            <BoxCard title={item.title} icon={item.icon} />
                        ))
                    }
                </div>
            </section>

            <div className="flex flex-col items-center justify-between gap-5 rounded-t-xl border border-col5 bg-col5 px-5 py-5 md:px-16 lg:flex-row lg:gap-0 lg:px-32">
                <span className="w-full text-2xl text-gray-200 md:text-3xl lg:w-10/12">Take your business to the next level. Let's show you how.</span>
                <Link href="https://themadmysteryteam.com/contact" className="h-fit w-fit rounded-full bg-white px-8 py-3 font-semibold text-col5 shadow-lg hover:shadow-xl transition-all duration-200 hover:bg-gray-200">Get in Touch</Link>
            </div>

        </div>
    )
}

export default AdvertiserPage

export const Card = ({ title, content }: { title: string, content: string }) => {
    return (
        <div className="card flex gap-2">
            <div className="checkMark pt-2">
                <svg fill="#E54C44" className="aspect-square w-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" >
                    <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path>
                </svg>
            </div>
            <div>
                <span className="text-2xl font-semibold text-col5">{title}</span>
                <p>{content}</p>
            </div>
        </div>
    )
}

export const BoxCard = ({ title, icon }: { title: string, icon: StaticImageData }) => {
    return (
        <div className="flex transform cursor-pointer flex-col items-center justify-center gap-3 rounded-xl bg-white p-5 shadow-[0px_0px_5px_0px_#1a202c] transition-transform duration-300 hover:scale-[1.02]">
            <div className="iconHodler relative aspect-square w-3/12">
                <Image src={icon} alt="user icon" fill />
            </div>
            <span className="text-xl">{title}</span>
        </div>
    )
}

