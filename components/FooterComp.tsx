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
            <footer className={`rounded-t-3xl bg-col3`}>
                <div className="grid grid-cols-1 gap-3 px-7 py-12 text-black md:grid-cols-3 md:flex-row md:gap-0 md:px-16 lg:grid-cols-4 lg:px-32">

                    <div className="left flex flex-col gap-1 md:order-1 lg:order-1">
                        <div className="relative aspect-square w-1/4 md:w-1/2">
                            <Image src={logo} fill alt="company logo" />
                        </div>
                        <span className="text-4xl font-semibold">Velocity Click</span>
                    </div>

                    <div className="right flex flex-col gap-3 md:order-3 lg:order-2">
                        <span className="text-2xl font-semibold">Contact Us</span>
                        <span>MKS, Picnic Garden Road,</span>
                        <span> West Bengal, Kolkata - 700039</span>
                        <span>Email: <a href="mailto:support@velocityclick.in" className="text-blue-700 underline">support@velocityclick.in</a> </span>
                    </div>

                    <div className="middle flex flex-col gap-2 md:order-2 md:pl-12 lg:order-3">
                        {menuItems.map((item, index) => (
                            <button
                                className={`w-fit font-semibold hover:text-col5 ${(pathname == `/${item.slug}` || pathname == `${item.slug}`) ? "text-col5" : "text-black"}`}
                                onClick={() => { router.push(item.slug, { scroll: true }) }} >
                                {item.title}
                            </button>
                        ))}
                        <button
                            className={`w-fit font-semibold hover:text-col5`}
                            onClick={() => { router.push("http://www.velocityclick.in/sitemap.xml", { scroll: true }) }} >
                            SITEMAP
                        </button>
                    </div>

                    <div className="right flex flex-col gap-3 md:order-4 md:mt-5 md:w-full lg:order-4">
                        <span className="text-2xl font-semibold">Follow Us</span>
                        <div className="socialIcon flex gap-5 text-3xl text-black">
                            <FaFacebook className="cursor-pointer hover:text-col5" onClick={() => { router.push("http://www.facebook.com", { scroll: true }) }} />
                            <FaTwitter className="cursor-pointer hover:text-col5" onClick={() => { router.push("http://www.twitter.com", { scroll: true }) }} />
                            <FaInstagram className="cursor-pointer hover:text-col5" onClick={() => { router.push("http://www.instagram.com", { scroll: true }) }} />
                            <FaLinkedin className="cursor-pointer hover:text-col5" onClick={() => { router.push("http://www.linkedin.com", { scroll: true }) }} />
                        </div>
                        <div className="bttn flex flex-wrap gap-5 py-5">
                            <Link href="https://xtreameadsmediasolutions10389562.offer18.com/m/signup_self_adv?r=&am=" className="rounded-xl border-2 border-col5 bg-col5 px-8 py-2 text-base font-semibold text-black hover:bg-transparent md:text-xl">Signup</Link>
                            <Link href="https://xtreameadsmediasolutions10389562.offer18.com/m/login" className="rounded-xl border-2 border-col5 px-8 py-2 text-base font-semibold hover:bg-col5 md:text-xl">Login</Link>
                        </div>
                    </div>

                </div>
                <h6 className="pb-5 text-center">{copyrightSign} {currentYear} Velocity Click. All rights reserved</h6>
            </footer>
        </div>

    )
}

export default FooterComp
