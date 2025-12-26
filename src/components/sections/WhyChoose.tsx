import { BarChart3, Target, Globe } from "lucide-react";

export const WhyChoose = () => {
    return (
        <section className="py-24 bg-white border-b border-neutral-200" id="why-us">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="mb-16 max-w-3xl">
                    <h2 className="font-serif text-3xl md:text-5xl text-corporate-blue mb-6">
                        Why Choose Asia Forex Mentor?
                    </h2>
                    <p className="font-sans text-neutral-600 text-lg leading-relaxed">
                        Our approach is built on a single objective: to achieve a higher mathematical probability of winning and 'out-edging' the market using our proprietary system.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Feature 1 */}
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm">
                            <BarChart3 className="text-corporate-blue w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-2xl text-corporate-blue">ROI Focused.</h3>
                        <p className="font-sans text-neutral-500 leading-relaxed">
                            We have a sole focus of generating profitability. We strip away the noise of "strategies" that don't scale. We teach you exactly what we do to make 6-figure trades.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm">
                            <Target className="text-corporate-blue w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-2xl text-corporate-blue">Mathematical Edge.</h3>
                        <p className="font-sans text-neutral-500 leading-relaxed">
                            It’s a bold statement, but true: We out-edge the market. Every single set. We know exactly what we need to do to make that happen. Financially. Strategically. Down to the dollar.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-6">
                        <div className="w-12 h-12 bg-blue-50 flex items-center justify-center rounded-sm">
                            <Globe className="text-corporate-blue w-6 h-6" />
                        </div>
                        <h3 className="font-serif text-2xl text-corporate-blue">Universal System.</h3>
                        <p className="font-sans text-neutral-500 leading-relaxed">
                            The way we trade is so systematic that the vehicle doesn't matter. Forex, Stocks, Crypto, Commodities, Gold, Silver. If it has a chart, our proprietary One Core Program works.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
