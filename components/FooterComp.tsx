"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { menuItems } from "./NavbarComp";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/public/logo.png"
import Image from "next/image";
import Link from "next/link";


const FooterComp = () => {
    const router = useRouter();
    const pathname = usePathname();

    const currentYear = new Date().getFullYear();
    const copyrightSign = '\u00A9';

    return (
        <div className={` ${(pathname == '/advertiser' || pathname == '/affiliate') ? "bg-col5" : "bg-white"}`}>
            <footer className={`rounded-t-3xl bg-[#35b3a0]`}>
                <div className="grid grid-cols-1 gap-3 px-7 py-12 text-white md:grid-cols-3 md:flex-row md:gap-0 md:px-16 lg:grid-cols-4 lg:px-32">

                    <div className="left flex flex-col gap-1 md:order-1 lg:order-1 justify-center items-center">
                        <div className="relative aspect-square w-1/4 md:w-1/2">
                            <Image src={logo} fill alt="company logo" />
                        </div>
                        <span className="text-2xl">The Mad Mystery Team LLC</span>
                    </div>

                    <div className="right flex flex-col gap-1 md:order-3 lg:order-2  items-center">
                        <span className="text-2xl font-semibold">Contact Us</span>
                        <span>The Mad Mystery Team LLC,</span>
                        <span> 30 N Gould ST STE R</span>
                        <span>Sheridan, WY 82801</span>
                        <span>Email: <a href="mailto:support@velocityclick.in" className="text-blue-700 "style={{ textShadow: "0px 0px 2px white" }}><strong>support@K.in</strong></a> </span>
                    </div>

                    <div className="middle flex flex-col gap-2 md:order-2 md:pl-12 lg:order-3  items-center">
                        {menuItems.map((item, index) => (
                            <button
                                className={`w-fit text-white hover:text-col5 ${(pathname == `/${item.slug}` || pathname == `${item.slug}`) ? "text-col5" : "text-black"}`}
                                onClick={() => { router.push(item.slug, { scroll: true }) }} >
                                {item.title}
                            </button>
                        ))}
                        <button
                            className={`w-fit hover:text-col5`}
                            onClick={() => { router.push("http://www.velocityclick.in/sitemap.xml", { scroll: true }) }} >
                            SITEMAP
                        </button>
                    </div>

                    <div className="right flex flex-col gap-3 md:order-4 md:mt-5 md:w-full lg:order-4  items-center">

                        <div className="bttn flex flex-wrap gap-5 py-5">
                            <Link href="https://velocityclick.in/signup" className="rounded-xl border-2 border-col5 bg-col5 px-8 py-2 text-base font-semibold text-white hover:bg-transparent md:text-xl">Signup</Link>
                            <Link href="https://velocityclick.in/signup" className="rounded-xl border-2 border-col5 bg-col5 px-8 py-2 text-base font-semibold  hover:bg-transparent md:text-xl">Login</Link>
                        </div>
                        {/* bottom part of footer */}
                        
                            <div className="flex flex-wrap px-5 pb-4 gap-2">
                                <Link
                                    href="/privacy-policy"
                                    className="border-r h-fit border-white text-lg hover:text-col5 pr-2"
                                >
                                    Privacy Policy
                                </Link>
                                <Link
                                    href="/cookie-policy"
                                    className=" text-lg hover:text-col5 pr-2"
                                >
                                    Cookie Policy
                                </Link>
                            
                        </div>
                    </div>

                </div>

                <h6 className="pb-5 text-center">{copyrightSign} {currentYear} The Mad Mystery Team LLC. (TMMT) All rights reserved</h6>
            </footer>
        </div>

    )
}

export default FooterComp
