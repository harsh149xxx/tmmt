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
]

const AdvertiserPage = () => {
    return (
        <div>
            <HeaderBox title="Advertiser" />

            <section className="flex flex-col-reverse bg-sectionBg px-7 py-12 md:px-16 md:py-16 lg:flex-row lg:px-32">
                <div className="flex flex-col gap-10 lg:w-9/12">
                    {
                        data.map((item, index) => (

                            <Card key={index} title={item.title} content={item.content} />
                        ))
                    }
                </div>
                <div className="lg:w-3/12">
                    <div className="iamgeHolder relative mx-auto aspect-square w-full md:w-1/2 lg:w-full">
                        {/* fff */}
                        <Image src={Top} alt="image" fill={true} />
                    </div>
                </div>
            </section>
            
            <BottomPart/>
            
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
                <h1 className="text-2xl font-semibold text-col5">{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export const BoxCard = ({ title,icon }: { title: string, icon: StaticImageData }) => {
    return (
        <div className="flex transform cursor-pointer flex-col items-center justify-center gap-3 rounded-xl bg-white p-5 shadow-[0px_0px_5px_0px_#1a202c] transition-transform duration-300 hover:scale-[1.02]">
            <div className="iconHodler relative aspect-square w-3/12">
                <Image src={icon} alt="user icon" fill/>
            </div>
            <span className="text-xl">{title}</span>
        </div>
    )
}

export const BottomPart =()=>{
    return(
        <>
            <section className="bg-white px-7 py-12 md:px-16 md:py-16 lg:px-32">
                <div className="flex flex-col items-center gap-5">
                    <h1 className="text-center text-4xl font-semibold text-col5">
                        We Provide Additional Services That Will Grow Your Business
                    </h1>
                    <p className="w-10/12 text-center text-lg text-gray-500">
                        We maximize the potential customer reach to your Campaigns through Geo. targeting, Behavioral targeting, Contextual targeting, Campaign Optimization and Niche Verticals, based on classification and common channel sites. Through our precise Media planning and Direct Premium Affiliates on our network, we instantaneously enable you to maximize your reach across millions of audiences.
                    </p>
                    <span className="text-2xl font-semibold">Why <span className="text-col5">XtremeAd?</span></span>
                </div>

                <div className="cardHolder my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <BoxCard title="Positive ROI Driven" icon={RTI} />
                    <BoxCard title="Multi Channel Traffic" icon={Multi} />
                    <BoxCard title="Target the Right Audience" icon={Target} />
                    <BoxCard title="Dedicated Account Manager" icon={User} />
                    <BoxCard title="We Got all the verticals covered" icon={Cover} />
                    <BoxCard title="Realtime Campaign Insights" icon={Campaign} />
                </div>
            </section>

            <div className="flex flex-col items-center justify-between gap-5 bg-col5 px-7 py-5 md:px-16 lg:flex-row lg:gap-0 lg:px-32">
                <h1 className="w-full text-4xl text-gray-200 md:text-5xl lg:w-10/12">Build your successful business with us. Want to know how to do this?</h1>
                {process.env.NEXT_PUBLIC_SIGNUP_LINK &&
                    <Link href={process.env.NEXT_PUBLIC_SIGNUP_LINK} className="h-fit w-fit rounded-full bg-white px-5 py-2 font-semibold text-col5 hover:bg-gray-200">Sign Up</Link>}
            </div>
            </>
    )
}