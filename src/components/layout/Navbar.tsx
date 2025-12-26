"use client";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";

const navItems = [
    { name: "Our Firm", link: "#firm" },
    { name: "Insights", link: "#insights" },
    { name: "One Core Program", link: "#program" },
    { name: "Careers", link: "#careers" },
    { name: "Investor Relations", link: "#ir" },
];

export const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 inset-x-0 z-50 bg-white border-b border-neutral-200">
                {/* Top Utility Bar (Goldman style) */}
                <div className="hidden md:flex justify-end items-center px-12 py-2 bg-neutral-50 border-b border-neutral-200 text-xs font-medium text-neutral-600 space-x-6">
                    <span className="cursor-pointer hover:text-corporate-blue">Global / English</span>
                    <span className="cursor-pointer hover:text-corporate-blue">Client Login</span>
                    <span className="cursor-pointer hover:text-corporate-blue">Contact Us</span>
                </div>

                {/* Main Nav */}
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 md:h-24 flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3 cursor-pointer">
                        <div className="h-10 w-10 bg-corporate-blue flex items-center justify-center text-white font-serif font-bold text-xl rounded-sm">
                            A
                        </div>
                        <div className="flex flex-col">
                            <span className="font-serif font-bold text-xl tracking-tight text-corporate-blue leading-none">ASIA FOREX</span>
                            <span className="font-sans text-[10px] tracking-[0.2em] text-neutral-500 uppercase">Mentor</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className="text-sm font-semibold text-corporate-blue hover:text-blue-700 hover:underline underline-offset-4 transition-all"
                            >
                                {item.name}
                            </a>
                        ))}
                        <Search className="w-5 h-5 text-corporate-blue cursor-pointer hover:text-blue-700 ml-4" />
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-corporate-blue"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-white pt-32 px-6">
                    <div className="flex flex-col space-y-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-serif font-medium text-corporate-blue border-b border-neutral-100 pb-4"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-8 flex flex-col space-y-4 text-sm text-neutral-500">
                            <span>Client Login</span>
                            <span>Contact Us</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
