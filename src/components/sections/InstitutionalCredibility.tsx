import dbp from "@/assets/dbp-bank.png";

export const InstitutionalCredibility = () => {
    return (
        <section className="bg-white py-24 border-b border-neutral-200">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Image / Case Study Graphic */}
                    <div className="order-2 md:order-1 relative bg-neutral-50 p-8 rounded-sm border border-neutral-100">
                        <img
                            src={dbp}
                            alt="Development Bank of the Philippines"
                            className="w-full h-auto object-contain mix-blend-multiply opacity-90 transition-all duration-700"
                        />
                        <div className="mt-4 text-xs font-bold text-neutral-400 uppercase tracking-widest text-center">
                            Official Training Partner
                        </div>
                    </div>

                    {/* Content */}
                    <div className="order-1 md:order-2 space-y-6">
                        <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-100 text-blue-800 text-[10px] font-bold tracking-widest uppercase">
                            Case Study: Institutional Training
                        </div>
                        <h2 className="font-serif text-3xl md:text-5xl text-corporate-blue leading-tight">
                            Trusted by State-Owned Banks.
                        </h2>
                        <div className="h-1 w-16 bg-blue-800" />
                        <p className="font-serif text-xl text-neutral-600 leading-relaxed italic">
                            "The 2nd largest state-owned bank in the Philippines, with assets over $13 Billion, creates its trading desk with our strategies."
                        </p>
                        <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                            We don't just teach retail traders. We build the internal trading capabilities of major financial institutions. Our "One Core Program" is the standard used by fund managers to navigate global liquidity.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
