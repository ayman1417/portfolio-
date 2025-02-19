import React, { useState } from 'react';
import logo from "../../assets/Alogo_orange.png";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";

export const AcmeLogo = () => {
    return (
        <img src={logo} alt="Logo"
            className="w-20 h-10 rounded-full"
        />
    );
};

export default function NavBar() {
    const [activeLink, setActiveLink] = useState("#home");

    const handleClick = (href) => {
        setActiveLink(href);
    };

    return (
        <Navbar className='bg-black bg-opacity-95 text-3xl text-main p-3 md:px-60 fixed shadow-md shadow-main ' >
            <NavbarBrand>
                <a href="#home" onClick={() => handleClick("#home")}>
                    <AcmeLogo />
                </a>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <a
                        href="#home"
                        className={`text-lg transition duration-200 ${activeLink === "#home" ? "border-main border-b-2 rounded-sm p-1" : "text-main"}`}
                        onClick={() => handleClick("#home")}
                    >
                        Home
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a
                        href="#about"
                        className={`text-lg transition duration-200 ${activeLink === "#about" ? "border-main border-b-2 rounded-sm p-1" : "text-main"}`}
                        onClick={() => handleClick("#about")}
                    >
                        About
                    </a>
                </NavbarItem>
                <NavbarItem>
                    <a
                        href="#projects"
                        className={`text-lg transition duration-200 ${activeLink === "#projects" ? "border-main border-b-2 rounded-sm p-1" : "text-main"}`}
                        onClick={() => handleClick("#projects")}
                    >
                        Projects
                    </a>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="flex">
                    <a href="#footer" className='border-main hover:bg-main p-2 border-2 rounded-xl font-medium hover:text-black text-main duration-200 cursor-pointer text-lg'>
                        Contact
                    </a>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
