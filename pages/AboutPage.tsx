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



            <section className="py-12 md:py-16 flex flex-col lg:flex-row bg-sectionBg gap-5 lg:gap-0">
                <div className="left lg:w-1/2 flex justify-center w-full ">
                    <div className="imageHolder w-[90%] lg:w-[80%] relative aspect-video rounded-xl transform transition-transform duration-500 hover:scale-[1.05] cursor-pointer">
                        <Image src={"/assets/about/inovation.jpg"} alt="image of innovation" fill={true} style={{ objectFit: 'cover' }} className="blend-image rounded-xl" />
                    </div>
                </div>
                <div className="Right w-full lg:w-1/2 lg:pr-16 gap-5 flex lg:justify-center flex-col px-10 lg:px-0">
                    <h1 className="text-4xl font-semibold w-full lg:w-10/12 text-center lg:text-left">A Bunch of Enthusiastic & Creative Minds</h1>
                    <p className="text-xl w-full text-gray-600 text-center lg:text-left">
                        XtremeAd Media Solutions is one of the renowned & trusted platforms for Performance Marketing. Our mission is to help our clients achieve their marketing goals by delivering peerless and result-driven solutions.
                    </p>
                </div>
            </section>

            <section className="gradientBg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-12 mf:py-16 px-2 md:px-6 lg:px-16">
                {
                    data?.map((item, index) => (
                        <Card title={item.title} content={item.content} imageurl={item.imageurl} key={index} />
                    ))
                }
            </section>

            <section className="bg-sectionBg px-2 md:px-10  py-12 md:py-16 flex flex-col gap-5">
                <h1 className="text-center text-2xl lg:text-3xl">Affiliate marketing follows a simple step-by-step process:</h1>
                <div className="flex flex-col gap-5 ">
                    {
                        steps.map((step, index) => (
                            <div className="bg-white flex p-2 lg:p-6 md:p-4 gap-5 items-center rounded-lg cursor-pointer hover:bg-slate-200" >
                                <div className="flex items-center justify-center rounded-full text-white bg-gray-500 text-lg md:text-2xl font-semibold aspect-square md:min-w-12 min-w-8">
                                    {index + 1}
                                </div>
                                <span className="text-lg md:text-xl">
                                    {step.data}
                                </span>
                            </div>
                        ))
                    }
                </div>


                <h1 className="text-2xl lg:text-3xl">Along with creating earning opportunities for affiliates, affiliate marketing also creates a win-win situation for both brands and consumers.</h1>
            </section>

        </section>
    )
}

export default AboutPage
export const Card = ({ title, content, imageurl }: { title: string, content: string, imageurl: StaticImageData }) => {
    return (
        <div className="bg-white rounded-lg flex flex-col items-center p-5 gap-3 cursor-pointer group translate transition-transform hover:scale-[1.05]" style={{ transitionDuration: "600ms" }}>
            <div className="iamgeholder relative w-[90%] aspect-video" >
                <Image src={imageurl} alt="icon " fill className="group-hover:scale-[1.2]" style={{ transitionDuration: "400ms", objectFit: 'cover' }} />
            </div>
            <h1 className="font-semibold text-2xl translate transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>{title}</h1>
            <p className="translate transition-transform group-hover:scale-[1.05]" style={{ transitionDuration: "400ms" }}>{content}</p>
        </div>
    )
}