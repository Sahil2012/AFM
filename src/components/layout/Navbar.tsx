"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/afm-logo.png";

const navItems = [
    { name: "One Core Program", link: "#program" },
    { name: "About Ezekiel", link: "#about" },
    { name: "Reviews", link: "#reviews" },
    { name: "Free Training", link: "#free-training" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 inset-x-0 z-50 h-20 transition-all duration-300 border-b border-transparent",
                    scrolled
                        ? "bg-neutral-950/80 backdrop-blur-md border-white/10"
                        : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer">
                        <img src={logo} alt="AFM Logo" className="h-8 w-auto" />
                        <span className="text-white font-bold text-lg tracking-tight hidden sm:block">
                            Asia Forex Mentor
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                className="text-sm font-medium text-neutral-300 hover:text-gold-400 transition-colors"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Button
                            variant="ghost"
                            className="text-neutral-300 hover:text-white hover:bg-white/10"
                        >
                            Login
                        </Button>
                        <Button className="bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-full px-6">
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-neutral-300"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 top-20 z-40 bg-neutral-950 border-t border-neutral-800 md:hidden flex flex-col p-6 space-y-6"
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.link}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg font-medium text-neutral-300 hover:text-gold-400"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="h-px bg-neutral-800 w-full" />
                        <Button
                            variant="ghost"
                            className="w-full justify-start text-neutral-300 hover:text-white"
                        >
                            Login
                        </Button>
                        <Button className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold">
                            Get Started
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
