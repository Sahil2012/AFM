import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import ezekielImg from "@/assets/ezekiel-invest-newspaper.png";

export const MentorBio = () => {
    return (
        <SectionWrapper id="about" className="py-20 border-t border-neutral-900/50">
            <div className="flex flex-col md:flex-row items-center gap-16">

                <div className="w-full md:w-1/2 relative">
                    {/* Clean Image */}
                    <div className="relative rounded-2xl overflow-hidden bg-neutral-100">
                        <img
                            src={ezekielImg}
                            alt="Ezekiel Chew"
                            className="w-full h-auto mix-blend-multiply opacity-90 contrast-125"
                        />
                    </div>
                </div>

                <div className="w-full md:w-1/2 space-y-8">
                    <div>
                        <h4 className="text-neutral-500 font-medium uppercase tracking-wide text-xs mb-2">The Mentor</h4>
                        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                            Ezekiel Chew.
                        </h2>
                        <p className="text-xl text-neutral-400 font-light">
                            From $24k to $300k in one month. <br />
                            Trusted by the institutions you trust.
                        </p>
                    </div>

                    <div className="space-y-4 text-neutral-400 leading-relaxed">
                        <p>
                            Ezekiel isn't a "guru". He's a professional trader who happens to teach. His proprietary "One Core Program" is the result of 20 years of beating the market.
                        </p>
                        <p>
                            He is frequently invited to speak at major financial conferences and trains the trading desks of banks and fund management firms.
                        </p>
                    </div>

                    <div className="flex gap-4 pt-4">
                        <Button variant="outline" className="text-white border-white/10 hover:bg-white hover:text-black rounded-full px-8 h-12 transition-colors">
                            Read Full Bio
                        </Button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
