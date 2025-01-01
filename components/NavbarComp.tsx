"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import logo from "@/public/logo.png"
import Image from "next/image";

export const menuItems = [
  { title: "HOME", slug: "/" },
  { title: "SERVICES", slug: "services" },
  { title: "INDUSTRY", slug: "industry" },
  { title: "ADVERTISER", slug: "advertiser" },
  { title: "CONTACT US", slug: "contact" }
];

const NavbarComp = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={pathname === "/services" || pathname === "/industry" ? "static" : "sticky top-0"}
    >
      {/* Brand Information */}
      <NavbarContent>
        <NavbarBrand>
          <Link className="logoHolder relative aspect-square w-8 cursor-pointer md:w-12 lg:w-16" href="/">
            <Image src={logo} alt="company logo" fill />
          </Link>
          <Link href="/" className="font-semobild font-Meriaweather text-xl text-black md:text-3xl lg:text-4xl">TMMT</Link>
        </NavbarBrand>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden" />
      </NavbarContent>

      {/* Desktop View */}
      <NavbarContent className="hidden gap-10 lg:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={index}>
            <button 
              className={`font-semibold ${(pathname === `/${item.slug}` || pathname === `${item.slug}`) ? "text-red-500" : "text-black"} ${item.title === "CONTACT US" ? "btn-header rounded-full px-5 py-2 text-white shadow-lg hover:shadow-xl transition-all duration-200" : ""}`}
              onClick={() => { 
                router.push(item.slug, { scroll: true }); 
              }}
            >
              {item.title}
            </button>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Mobile View */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <button 
              className={`font-semibold ${(pathname === `/${item.slug}` || pathname === `${item.slug}`) ? "text-red-500" : "text-black"} ${item.title === "CONTACT US" ? "bg-blue-500 text-white px-4 py-2 rounded-md" : ""}`} 
              onClick={() => { 
                router.push(item.slug, { scroll: true }); 
                setIsMenuOpen(!isMenuOpen); 
              }}
            >
              {item.title}
            </button>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

export default NavbarComp;
