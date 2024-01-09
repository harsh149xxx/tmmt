"use client"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { menuItems } from "./NavbarComp";
import { usePathname, useRouter } from "next/navigation";
import Logo from "@/public/assets/logo.png"
import Image from "next/image";
import Link from "next/link";

const FooterComp = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className={` ${(pathname == '/advertiser' || pathname == '/affiliate') ? "bg-col5" : "bg-white"}`}>
            <footer className="grid grid-cols-1 gap-4 rounded-t-3xl bg-col3 px-7 py-12 text-black md:grid-cols-3 md:flex-row md:gap-0 md:px-16 lg:grid-cols-4 lg:px-32">

                <div className="left flex flex-col gap-5 md:order-1 lg:order-1">
                    <div className="relative aspect-square w-1/4 md:w-1/2">
                        <Image src={Logo} fill alt="company logo" />
                    </div>
                    <span className="text-4xl font-semibold">Velocity Click</span>
                </div>

                <div className="right flex flex-col gap-3 md:order-3 lg:order-2">
                    <h1 className="text-2xl font-semibold">Contact Us</h1>
                    <span>177D, Picnic Garden Road,</span>
                    <span> West Bengal, Kolkata - 700039</span>
                    <span>Email: <a href="mailto:mhvelocityclick@gmail.com" className="text-blue-700 underline">mhvelocityclick@gmail.com</a> </span>
                </div>

                <div className="middle flex flex-col gap-2 md:order-2 lg:order-3">
                    {menuItems.map((item, index) => (
                        // <button className={`w-fit font-semibold hover:text-col5` + `${(pathname == `/${item.slug}` || pathname == `${item.slug}`) ? "text-col5" : "text-black"}`} onClick={() => { router.push(item.slug, { scroll: true }) }} >
                        //     {item.title}
                        // </button>
                        <button
                            className={`w-fit font-semibold hover:text-col5 ${(pathname == `/${item.slug}` || pathname == `${item.slug}`) ? "text-col5" : "text-black"}`}
                            // className={`w-fit font-semibold hover:text-col5`} 
                            onClick={() => { router.push(item.slug, { scroll: true }) }} >
                            {item.title}
                        </button>
                    ))}
                </div>

                <div className="right flex flex-col gap-3 md:order-2 lg:order-4">
                    <h1 className="text-2xl font-semibold">Follow Us</h1>
                    <div className="socialIcon flex gap-5 text-3xl text-black">
                        <FaFacebook className="cursor-pointer hover:text-col5" />
                        <FaTwitter className="cursor-pointer hover:text-col5" />
                        <FaInstagram className="cursor-pointer hover:text-col5" />
                        <FaLinkedin className="cursor-pointer hover:text-col5" />
                    </div>
                    <div className="bttn flex flex-wrap gap-5 py-5">
                        <Link href="https://xtreameadsmediasolutions10389562.offer18.com/m/signup_self_adv?r=&am=" className="rounded-xl border-2 border-col5 bg-col5 px-8 py-2 text-base font-semibold text-black hover:bg-transparent md:text-xl">Signup</Link>
                        <Link href="https://xtreameadsmediasolutions10389562.offer18.com/m/login" className="rounded-xl border-2 border-col5 px-8 py-2 text-base font-semibold hover:bg-col5 md:text-xl">Login</Link>
                    </div>
                </div>

            </footer>
        </div>

    )
}

export default FooterComp