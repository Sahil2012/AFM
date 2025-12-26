import ezekielImg from "@/assets/ezekiel-invest-newspaper.png";

export const LeaderBio = () => {
    return (
        <section className="bg-corporate-gray py-24" id="about">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-20 items-center">

                {/* Left Column: All Text Content */}
                <div className="space-y-10">
                    <h2 className="font-serif text-4xl md:text-6xl text-corporate-blue leading-tight">
                        "To teach the market, you must first beat the market."
                    </h2>

                    <div className="relative border-l-4 border-corporate-blue pl-8 my-8">
                        <blockquote className="font-serif text-2xl text-neutral-700 italic leading-relaxed">
                            Most traders are gambling. They just don't know it. We bring the discipline, mathematics, and edge of the institution to the individual.
                        </blockquote>
                    </div>

                    <div className="prose prose-lg text-neutral-600 font-serif leading-relaxed space-y-6">
                        <p>
                            At Asia Forex Mentor, our philosophy is grounded in one reality: Profitability.
                            For two decades, we have worked behind the scenes with the largest financial institutions,
                            helping them refine their trading desks and risk management protocols.
                        </p>
                        <p>
                            The "One Core Program" is not a course. It is the codified system of a lifetime
                            of trading. It is the same system I use to generate 6-figure trades. It is the same
                            system we teach to bank employees.
                        </p>
                    </div>

                    <div className="pt-8 border-t border-neutral-300">
                        <div className="flex items-center justify-between">
                            <div className="grid grid-cols-2 gap-x-8">
                                <h4 className="font-sans text-xs font-bold tracking-widest text-neutral-400 uppercase mb-2 col-span-2">RECOGNITION</h4>
                                <ul className="text-sm text-corporate-blue font-medium space-y-1">
                                    <li>• Top Trading Educator (Benzinga)</li>
                                    <li>• Best Forex Course (Investopedia)</li>
                                </ul>
                                <ul className="text-sm text-corporate-blue font-medium space-y-1">
                                    <li>• Keynote Speaker, Traders Fair</li>
                                    <li>• Official Partner, DBP Bank</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Just the Image (Maximized) */}
                <div className="relative h-full flex flex-col items-center justify-center">
                    {/* Decorative background element to frame the image */}
                    <div className="absolute inset-0 bg-white rounded-sm shadow-xl transform rotate-2 scale-95 opacity-50 z-0 h-4/5 top-10" />

                    <img
                        src={ezekielImg}
                        alt="Ezekiel Chew"
                        className="relative z-10 w-full max-w-lg h-auto object-cover shadow-2xl mix-blend-normal mb-6"
                    />

                    <div className="relative z-10 text-center">
                        <p className="font-bold text-corporate-blue text-lg uppercase tracking-wider">Ezekiel Chew</p>
                        <p className="text-neutral-500 text-sm uppercase tracking-wider">Founder & Lead Strategist</p>
                    </div>
                </div>

            </div>
        </section>
    )
}
