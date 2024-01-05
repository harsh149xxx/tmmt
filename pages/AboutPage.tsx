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
            content: "XtremeAd Media SolutionsXtremeAd Media SolutionsXtremeAd Media SolutionsXtremeAd Media Solutions",
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
            content: "1,000+ active publishers and over 100+ ad campaigns running through our network.",
            imageurl: Dashboard
        },
        {
            title: "Valuable Information",
            content: "We pass on valuable information with all required parameters to our clients in a rapidly growing industry.",
            imageurl: Information
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



            <section className="flex flex-col gap-5 bg-sectionBg px-7 py-12 md:px-16 md:py-16 lg:flex-row lg:gap-6 lg:px-32">
                <div className="left flex w-full justify-center lg:w-1/2">
                    <div className="imageHolder relative aspect-video w-full transform cursor-pointer rounded-xl transition-transform duration-500 hover:scale-[1.05]">
                        <Image src={"/assets/about/inovation.jpg"} alt="image of innovation" fill={true} style={{ objectFit: 'cover' }} className="blend-image rounded-xl" />
                    </div>
                </div>
                <div className="Right flex w-full flex-col gap-5 lg:w-1/2 lg:justify-center">
                    <h1 className="w-full text-center text-4xl font-semibold lg:w-10/12 lg:text-left">A Bunch of Enthusiastic & Creative Minds</h1>
                    <p className="w-full text-center text-xl text-gray-600 lg:text-left">
                        XtremeAd Media Solutions is one of the renowned & trusted platforms for Performance Marketing. Our mission is to help our clients achieve their marketing goals by delivering peerless and result-driven solutions.
                    </p>
                </div>
            </section>

            <section className="mf:py-16 grid grid-cols-1 gap-5 bg-col3 px-7 py-12 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-32">
                {
                    data?.map((item, index) => (
                        <Card title={item.title} content={item.content} imageurl={item.imageurl} key={index} />
                    ))
                }
            </section>

            <section className="flex flex-col gap-5 bg-sectionBg px-7 py-12 md:px-16 md:py-16 lg:px-32">
                <h1 className="text-center text-2xl lg:text-3xl">Affiliate marketing follows a simple step-by-step process:</h1>
                <div className="flex flex-col gap-5">
                    {
                        steps.map((step, index) => (
                            <div className="flex cursor-pointer items-center gap-5 rounded-lg bg-col3 p-2 hover:bg-[#d8ba4b] md:p-4 lg:p-6" >
                                <div className="flex aspect-square min-w-8 items-center justify-center rounded-full bg-col5 text-lg font-semibold text-white md:min-w-12 md:text-2xl">
                                    {index + 1}
                                </div>
                                <span className="text-lg font-semibold text-col5 md:text-xl">
                                    {step.data}
                                </span>
                            </div>
                        ))
                    }
                </div>


                <h1 className="text-2xl text-col5 lg:text-3xl">Along with creating earning opportunities for affiliates, affiliate marketing also creates a win-win situation for both brands and consumers.</h1>
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
            <h1 className="translate text-2xl font-semibold transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>{title}</h1>
            <p className="translate transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>{content}</p>
        </div>
    )
}