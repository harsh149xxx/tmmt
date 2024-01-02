import HeaderBox from "@/components/HeaderBox"
import Image, { StaticImageData } from "next/image"
import Top from "@/public/assets/advertiser/top.png"
import User from '@/public/assets/advertiser/user.png'
import Multi from '@/public/assets/advertiser/multi.png'
import Target from '@/public/assets/advertiser/target.png'
import Cover from '@/public/assets/advertiser/cover.png'
import RTI from '@/public/assets/advertiser/rti.png'
import Campaign from '@/public/assets/advertiser/campaign.png'

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

const AffiliatePage = () => {
    return (
        <div>
            <HeaderBox title="Affiliate" />

            <section className="py-12 md:py-16 bg-sectionBg flex flex-col lg:flex-row lg:px-16 md:px-8 px-4">
                <div className="lg:w-9/12 flex flex-col gap-10">
                    {
                        data.map((item, index) => (

                            <Card key={index} title={item.title} content={item.content} />
                        ))
                    }
                </div>
                <div className="lg:w-3/12">
                    <div className="iamgeHolder relative aspect-square w-8/12 mx-auto lg:w-full ">
                        {/* fff */}
                        <Image src={Top} alt="image" fill={true} />
                    </div>
                </div>
            </section>

            <section className="lg:px-16 md:px-8 px-4 py-12 md:py-16 bg-slate-300 ">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="font-semibold text-4xl text-center">
                        We Provide Additional Services That Will Grow Your Business
                    </h1>
                    <p className="text-center w-10/12 text-lg">
                        We maximize the potential customer reach to your Campaigns through Geo. targeting, Behavioral targeting, Contextual targeting, Campaign Optimization and Niche Verticals, based on classification and common channel sites. Through our precise Media planning and Direct Premium Affiliates on our network, we instantaneously enable you to maximize your reach across millions of audiences.
                    </p>
                    <span className="font-semibold text-2xl">Why XtremeAd?</span>
                </div>

                <div className="cardHolder grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
                    <BoxCard title="Positive ROI Driven" icon={RTI} />
                    <BoxCard title="Multi Channel Traffic" icon={Multi} />
                    <BoxCard title="Target the Right Audience" icon={Target} />
                    <BoxCard title="Dedicated Account Manager" icon={User} />
                    <BoxCard title="We Got all the verticals covered" icon={Cover} />
                    <BoxCard title="Realtime Campaign Insights" icon={Campaign} />
                </div>
            </section>

            <div className="px-5 lg:px-24 flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between py-5 items-center">
                <h1 className="text-4xl md:text-5xl w-full lg:w-10/12">Build your successful business with us. Want to know how to do this?</h1>
                <button className="w-fit h-fit bg-gray-600 text-white font-semibold px-5 py-2 rounded-full hover:bg-gray-700">Sign Up</button>
            </div>
        </div>
    )
}

export default AffiliatePage

export const Card = ({ title, content }: { title: string, content: string }) => {
    return (
        <div className="card flex gap-2">
            <div className="checkMark pt-2">
                <svg fill="#000000" className="aspect-square w-6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 490.05 490.05" >
                    <path d="M418.275,418.275c95.7-95.7,95.7-250.8,0-346.5s-250.8-95.7-346.5,0s-95.7,250.8,0,346.5S322.675,513.975,418.275,418.275 z M157.175,207.575l55.1,55.1l120.7-120.6l42.7,42.7l-120.6,120.6l-42.8,42.7l-42.7-42.7l-55.1-55.1L157.175,207.575z"></path>
                </svg>
            </div>
            <div>
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export const BoxCard = ({ title, icon }: { title: string, icon: StaticImageData }) => {
    return (
        <div className="p-5 flex flex-col items-center justify-center bg-white rounded-xl shadow-[0px_0px_5px_0px_#1a202c] cursor-pointer transform transition-transform duration-300 hover:scale-[1.02] gap-3">
            <div className="iconHodler relative aspect-square w-3/12">
                <Image src={icon} alt="user icon" fill />
            </div>
            <span className="text-xl">{title}</span>
        </div>
    )
}