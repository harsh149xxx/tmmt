import HeaderBox from "@/components/HeaderBox"
import Image, { StaticImageData } from "next/image"
import Top from "@/public/assets/advertiser/top.png"
import User from '@/public/assets/advertiser/user.png'
import Multi from '@/public/assets/advertiser/multi.png'
import Target from '@/public/assets/advertiser/target.png'
import Cover from '@/public/assets/advertiser/cover.png'
import RTI from '@/public/assets/advertiser/rti.png'
import Campaign from '@/public/assets/advertiser/campaign.png'
import { BottomPart, BoxCard, Card } from "./AdvertiserPage"

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

            <BottomPart/>
        </div>
    )
}

export default AffiliatePage