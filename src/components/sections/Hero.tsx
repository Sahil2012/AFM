import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import heroImg from "@/assets/New-Hero-Section.webp";
import heroVideo from "@/assets/hero-bg-video.mp4";

export const Hero = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.createElement('video');
        video.src = heroVideo;
        video.onloadeddata = () => setVideoLoaded(true);
    }, []);

    return (
        <section className="relative w-full min-h-screen overflow-hidden">
            {/* Video Background with Image Fallback */}
            <div className="absolute inset-0 w-full h-full">
                {/* Fallback Image - Always rendered, hidden when video loads */}
                <div 
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
                    style={{
                        backgroundImage: `url(${heroImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />
                
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
                    onLoadedData={() => setVideoLoaded(true)}
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>

                {/* Multi-layer Gradient Overlay for Better Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-corporate-blue/80 via-black/50 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
                
                {/* Subtle noise texture for premium feel */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 w-full min-h-screen flex items-center px-6 md:px-12 pt-32 md:pt-40 pb-20">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid lg:grid-cols-12 gap-12 items-stretch w-full">

                    {/* Text Column - Enhanced for visibility on video */}
                    <div className="lg:col-span-6 flex flex-col space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="block font-sans text-xs font-bold tracking-[0.2em] text-blue-300 uppercase mb-4 drop-shadow-lg">
                                Leadership Strategy
                            </span>
                            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] tracking-tight drop-shadow-2xl">
                                Relentless focus. <br />
                                <span className="italic text-blue-200">Exceptional results.</span>
                            </h1>
                            <div className="h-1 w-20 bg-blue-400 mt-8 mb-8 shadow-lg shadow-blue-400/50" />
                            <p className="font-sans text-lg text-gray-100 leading-relaxed max-w-md drop-shadow-lg">
                                Helping institutions and individuals navigate volatile markets with a proven, bank-grade proprietary trading system.
                            </p>

                            <div className="mt-8">
                                <a href="#read-more" className="group inline-flex items-center gap-2 font-semibold text-white text-sm border-b-2 border-transparent hover:border-blue-300 transition-all drop-shadow-lg">
                                    READ THE CHAIRMAN'S LETTER
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Quote Card - Floating on the right */}
                    <div className="lg:col-span-6 relative flex justify-end items-end -mb-10 md:-mb-12 lg:-mb-14">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative z-10 max-w-md"
                        >
                            {/* Editorial Quote Card with glass morphism */}
                            <div className="bg-white/10 backdrop-blur-xl p-8 border border-white/20 shadow-2xl">
                                <p className="font-serif text-white text-2xl md:text-3xl italic leading-relaxed mb-6">
                                    "The market respects one thing: Probability."
                                </p>
                                <div className="h-px w-16 bg-blue-300 mb-4" />
                                <p className="font-sans text-sm font-bold text-blue-200 uppercase tracking-wide">
                                    Ezekiel Chew, Founder
                                </p>
                            </div>
                            
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 backdrop-blur-sm -z-10" />
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Bottom fade to blend with next section */}
            <div className="absolute bottom-10 left-0 right-0 h-32 bg-gradient-to-t from-corporate-blue via-black/60 to-transparent z-[5]" />
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-corporate-blue z-[5]" />
        </section>
    );
};
