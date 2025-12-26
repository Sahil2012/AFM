import { motion } from "framer-motion";
import heroImg from "@/assets/New-Hero-Section.webp";

export const Hero = () => {
    return (
        <section className="relative w-full bg-corporate-gray pt-32 md:pt-40 pb-20 px-6 md:px-12">
            <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">

                {/* Text Column - Editorial Style */}
                <div className="lg:col-span-5 flex flex-col space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="block font-sans text-xs font-bold tracking-[0.2em] text-blue-800 uppercase mb-4">
                            Leadership Strategy
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl text-corporate-blue leading-[1.05] tracking-tight">
                            Relentless focus. <br />
                            <span className="italic">Exceptional results.</span>
                        </h1>
                        <div className="h-1 w-20 bg-blue-800 mt-8 mb-8" />
                        <p className="font-sans text-lg text-neutral-600 leading-relaxed max-w-md">
                            Helping institutions and individuals navigate volatile markets with a proven, bank-grade proprietary trading system.
                        </p>

                        <div className="mt-8">
                            <a href="#read-more" className="group inline-flex items-center gap-2 font-semibold text-corporate-blue text-sm border-b-2 border-transparent hover:border-corporate-blue transition-all">
                                READ THE CHAIRMAN'S LETTER
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Image Column - Sharp, Corporate */}
                <div className="lg:col-span-7 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative z-10"
                    >
                        <img
                            src={heroImg}
                            alt="Ezekiel Chew Strategic Planning"
                            className="w-full h-auto object-cover shadow-sm" // Removed rounded corners, plain shadow
                        />
                        {/* Editorial Caption */}
                        <div className="absolute bottom-0 left-0 bg-white p-6 max-w-xs shadow-lg hidden md:block">
                            <p className="font-serif text-corporate-blue text-lg italic">
                                "The market respects one thing: Probability."
                            </p>
                            <p className="font-sans text-xs font-bold text-neutral-400 mt-2 uppercase tracking-wide">
                                Ezekiel Chew, Founder
                            </p>
                        </div>
                    </motion.div>
                    {/* Simple graphic element */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 -z-0" />
                </div>

            </div>
        </section>
    );
};
