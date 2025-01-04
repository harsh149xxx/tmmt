import HeaderBox from "@/components/HeaderBox"
import inovation from '@/public/assets/about/inovation.jpg'
import Image, { StaticImageData } from "next/image"
import LoadingPana from "@/public/assets/about/Loading-pana.png"
import Team from "@/public/assets/about/team.jpg"
import Performance from "@/public/assets/about/performance.jpg"
import Dashboard from "@/public/assets/about/dashboard.jpg"
import Information from "@/public/assets/about/inf.jpg"
import Solution from "@/public/assets/about/solution.jpg"

const AboutPage = () => {

    const data = [
        {
            title: "About team",
            content: "The Mad Mystery Team LLC",
            imageurl: LoadingPana
        },
        {
            title: "Dedicated Team",
            content: "A dedicated team of technology, digital, and creative experts working in coordination to meet the desired goals of the client with an effective Performance Marketing program and strategies.",
            imageurl: Team
        },
        {
            title: "Performance Process",
            content: "Our process is designed to empower your brand with the marketing tools needed to succeed on a pay-per-performance model.",
            imageurl: Performance
        },
        {
            title: "The Numbers",
            content: "150+ Clients, 1,000+ active Ads, 75,000+ Monthly Conversion and over $6,00,000+ Monthly Ad Spends, running through our network.",
            imageurl: Information
        },
        {
            title: "Valuable Information",
            content: "We pass on valuable information with all required parameters to our clients in a rapidly growing industry.",
            imageurl: Dashboard
        },
        {
            title: "Focused Solutions",
            content: "Data- driven solutions with a focus on automation.",
            imageurl: Solution
        },
    ]

    const steps = [
        { data: "An affiliate shows an ad for a product offered by a company on their website."},
        { data: "A user clicks on the ad"},
        { data: "The user is then redirected from the affiliate’s website to the company’s website"},
        { data: "The user makes a purchase on the website"},
        { data: "Affiliate marketers record the transaction"},
        { data: "The company validates the purchase as authentic"},
        { data: "The affiliate earns a commission on the purchase made by the user"}
    ]

    return (
        <section className="">
            <HeaderBox title="About Us" />



            <section className="mx-2 my-2 flex flex-col gap-5 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32 lg:flex-row lg:gap-6">
                <div className="left flex w-full justify-center lg:w-1/2">
                    <div className="imageHolder relative aspect-video w-full transform cursor-pointer rounded-xl transition-transform duration-500 hover:scale-[1.05]">
                        <Image src={"/assets/about/inovation.jpg"} alt="image of innovation" fill={true} style={{ objectFit: 'cover' }} className="blend-image rounded-xl" />
                    </div>
                </div>
                <div className="Right flex w-full flex-col gap-5 lg:w-1/2 lg:justify-center">
                    <h1 className="w-full text-center text-4xl font-semibold lg:w-10/12 lg:text-left">A Bunch of Enthusiastic & Creative Minds</h1>
                    <p className="w-full text-center text-xl text-gray-600 lg:text-left">
                        TMMT is one of the renowned & trusted platforms for Performance Marketing. Our mission is to help our clients achieve their marketing goals by delivering peerless and result-driven solutions.
                    </p>
                </div>
            </section>

            <section className="mx-2 my-8 grid grid-cols-1 gap-5 rounded-xl bg-[#4ABDAC] p-5 md:mx-16 md:grid-cols-2 md:p-10 lg:mx-32 lg:grid-cols-3">
                {
                    data?.map((item, index) => (
                        <Card title={item.title} content={item.content} imageurl={item.imageurl} key={index} />
                    ))
                }
            </section>

            <section className="mx-2 my-8 flex flex-col gap-5 rounded-xl bg-sectionBg p-5 md:mx-16 md:p-10 lg:mx-32">
                <span className="text-center text-2xl lg:text-3xl">Affiliate marketing follows a simple step-by-step process:</span>
                <div className="flex flex-col gap-5">
                    {
                        steps.map((step, index) => (
                            <div className="flex cursor-pointer items-center gap-5 rounded-lg bg-[#4ABDAC] p-2 hover:bg-[#238373] md:p-4 lg:p-6" >
                                <div className="flex aspect-square min-w-8 items-center justify-center rounded-full bg-white text-lg font-semibold text-[#4ABDAC] md:min-w-12 md:text-2xl">
                                    {index + 1}
                                </div>
                                <span className="text-lg font-semibold text-white md:text-xl">
                                    {step.data}
                                </span>
                            </div>
                        ))
                    }
                </div>


                <span className="text-lg font-medium text-col5 md:text-xl">Along with creating earning opportunities for affiliates, affiliate marketing also creates a win-win situation for both brands and consumers.</span>
            </section>

        </section>
    )
}

export default AboutPage
export const Card = ({ title, content, imageurl }: { title: string, content: string, imageurl: StaticImageData }) => {
    return (
        <div className="translate group flex cursor-pointer flex-col items-center gap-3 rounded-lg bg-white p-5 transition-transform hover:scale-[1.05]" style={{ transitionDuration: "600ms" }}>
            <div className="iamgeholder relative aspect-video w-[90%]" >
                <Image src={imageurl} alt="icon " fill className="group-hover:scale-[1.2]" style={{ transitionDuration: "400ms", objectFit: 'cover' }} />
            </div>
            <span className="translate text-2xl font-semibold transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>{title}</span>
            <p className="translate transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>{content}</p>
        </div>
    )
}