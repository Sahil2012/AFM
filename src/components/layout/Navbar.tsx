"use client";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import logo from "@/assets/afm-logo.png";

const navItems = [
    { name: "The Firm", link: "#about" },
    { name: "Our Edge", link: "#why-us" },
    { name: "One Core Program", link: "#program" },
    { name: "Track Record", link: "#reviews" },
    { name: "Market Insights", link: "#insights" },
];

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        const element = document.querySelector(link);
        if (element) {
            // Offset for fixed header (approx 100px for desktop header + utility bar)
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 bg-corporate-blue border-b border-white/10">
                {/* Top Utility Bar (Goldman style) */}
                <div className="hidden md:flex justify-end items-center px-12 py-2 bg-black/20 border-b border-white/10 text-xs font-medium text-neutral-300 space-x-6">
                    <span className="cursor-pointer hover:text-blue-300 transition-colors">Global / English</span>
                    <span className="cursor-pointer hover:text-blue-300 transition-colors">Client Login</span>
                    <span className="cursor-pointer hover:text-blue-300 transition-colors">Contact Us</span>
                </div>

                {/* Main Nav */}
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img src={logo} alt="Asia Forex Mentor" className="h-12 w-auto object-contain brightness-0 invert" />
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-xl tracking-tight text-white leading-none">ASIA FOREX</span>
                            <span className="font-sans text-[10px] tracking-[0.2em] text-neutral-400 uppercase">Mentor</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={(e) => scrollToSection(e, item.link)}
                                className="text-sm font-semibold text-white hover:text-blue-300 hover:underline underline-offset-4 transition-all"
                            >
                                {item.name}
                            </a>
                        ))}
                        <Search className="w-5 h-5 text-white cursor-pointer hover:text-blue-300 ml-4 transition-colors" />
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-corporate-blue pt-32 px-6">
                    <div className="flex flex-col space-y-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={(e) => scrollToSection(e, item.link)}
                                className="text-2xl font-serif font-medium text-white border-b border-white/10 pb-4"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-8 flex flex-col space-y-4 text-sm text-neutral-400">
                            <span>Client Login</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
