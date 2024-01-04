"use client"
import { FaFacebook, FaTwitter,FaInstagram,FaLinkedin } from "react-icons/fa";
import { menuItems } from "./NavbarComp";
import { usePathname, useRouter } from "next/navigation";

const FooterComp = () => {
    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="bg-white">
        <footer className="bg-col3 text-black rounded-t-3xl px-8 py-4 flex flex-col md:flex-row gap-4 md:gap-0">

            <div className="left w-full md:w-1/3 flex flex-col lg:pr-28 gap-5">
                <span className="font-semibold text-2xl">Xremead</span>
                <span>177D, Picnic Garden Road, West Bengal, Kolkata - 700039</span>
                <span>Email: <a href="mailto:support@xtremead.in">support@xtremead.in</a> </span>
            </div>
            <div className="middle w-full md:w-1/3 flex flex-col md:pl-16 lg:pl-24 gap-2">
                {menuItems.map((item, index) => (
                <button className={`w-fit font-semibold hover:text-col5 ` + `${(pathname == `/${item.slug}` || pathname == `${item.slug}`) ? "text-col5" : "text-black"}`} onClick={() => { router.push(item.slug, { scroll: true }) }} >
                    {item.title}
                </button>
                ))}
            </div>

            <div className="right w-full md:w-1/3 gap-3 flex-col flex">
                <h1 className="font-semibold text-xl">Follow Us</h1>
                <div className="socialIcon flex text-black text-3xl gap-5">
                    <FaFacebook className="cursor-pointer hover:text-col5"/>
                    <FaTwitter className="cursor-pointer hover:text-col5"/>
                    <FaInstagram className="cursor-pointer hover:text-col5"/>
                    <FaLinkedin className="cursor-pointer hover:text-col5"/>
                </div>
                <div className="bttn flex gap-5 py-5 flex-wrap">
                    <button className="border-2 rounded-xl font-semibold hover:bg-transparent border-col5 bg-col5 text-black text-base md:text-xl  px-8 py-2">Signup</button>
                    <button className="border-2 rounded-xl font-semibold border-col5 hover:bg-col5 text-base md:text-xl  px-8 py-2">Login</button>
                </div>
            </div>
        </footer>
        </div>

    )
}

export default FooterComp