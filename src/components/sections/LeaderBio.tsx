import ezekielImg from "@/assets/ezekiel-invest-newspaper.png";

export const LeaderBio = () => {
    return (
        <section className="bg-corporate-gray py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                    <h2 className="font-serif text-4xl md:text-5xl text-corporate-blue">
                        "To teach the market, you must first beat the market."
                    </h2>
                    <div className="prose prose-lg text-neutral-600 font-serif leading-relaxed">
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
                    <div>
                        <img src={ezekielImg} alt="Signature" className="h-24 opacity-80 w-auto object-cover grayscale mix-blend-multiply" />
                        <div className="mt-4">
                            <p className="font-bold text-corporate-blue text-sm uppercase tracking-wider">Ezekiel Chew</p>
                            <p className="text-neutral-500 text-xs uppercase tracking-wider">Founder & Lead Strategist</p>
                        </div>
                    </div>
                </div>

                <div className="relative border-l border-neutral-300 pl-12">
                    <span className="absolute -left-3 top-0 text-6xl text-neutral-300 font-serif">“</span>
                    <blockquote className="font-serif text-2xl text-corporate-blue italic leading-relaxed">
                        Most traders are gambling. They just don't know it. We bring the discipline, mathematics, and edge of the institution to the individual.
                    </blockquote>
                    <div className="mt-8 pt-8 border-t border-neutral-200">
                        <h4 className="font-sans text-xs font-bold tracking-widest text-neutral-500 uppercase mb-4">RECOGNITION</h4>
                        <ul className="space-y-2 text-sm text-corporate-blue font-medium">
                            <li>• Investopedia: Best Forex Course</li>
                            <li>• Benzinga: Top Trading Educator</li>
                            <li>• Keynote Speaker, Traders Fair 2024</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
