"use client";
import { navLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setScrolled(scrollTop > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const DownloadBtn = () => (
    <a 
        href="/desire.pdf" 
        download="CV_Desire.pdf"
        className="bg-[#915eff] text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold cursor-pointer"
    >
        Download Resume
    </a>
);

    return (
        <nav className={`paddingX w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center gap-2" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
                    <Link href="https://github.com/omunite215">
                        <Image src="/logo.png" width={80} height={80} alt="logo" priority className="object-contain" />
                    </Link>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex">
                        Kouad &nbsp; <span className="sm:block hidden ">| Christ-Marie desire</span>
                    </p>
                </div>

                <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
                    {navLinks.map((nav) => (
                        <li key={nav.id} className={`${active === nav.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(nav.title)}>
                            <Link href={`#${nav.id}`}>{nav.title}</Link>
                        </li>
                    ))}
                    <li><DownloadBtn /></li>
                </ul>

                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <Image
                        src={toggle ? "/close.svg" : "/menu.svg"}
                        width={28} height={28} alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                    />
                    <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((nav) => (
                                <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"}`} onClick={() => { setToggle(!toggle); setActive(nav.title); }}>
                                    <Link href={`#${nav.id}`}>{nav.title}</Link>
                                </li>
                            ))}
                            <li className="pt-2"><DownloadBtn /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;