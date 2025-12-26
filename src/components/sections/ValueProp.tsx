import { SectionWrapper } from "@/components/common/SectionWrapper";
import {
    TrendingUp,
    Landmark,
    PieChart,
    ArrowRight
} from "lucide-react";

export const ValueProp = () => {
    return (
        <SectionWrapper className="bg-neutral-950 py-32" id="why-afm">
            <div className="grid md:grid-cols-3 gap-12">
                {/* Header */}
                <div className="md:col-span-3 mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
                        Why professionals choose <br /> <span className="text-neutral-500">Asia Forex Mentor.</span>
                    </h2>
                    <div className="h-px w-24 bg-neutral-800" />
                </div>

                {/* Cards - Minimal */}
                <Card
                    icon={<Landmark className="w-6 h-6 text-white" />}
                    title="Institutional Grade"
                    description="We don't teach retail tricks. We teach the exact systems used by banks and prop trading firms to manage millions."
                />
                <Card
                    icon={<TrendingUp className="w-6 h-6 text-white" />}
                    title="ROI Obsessed"
                    description="Mathematics over guesswork. Our strategies are built on probability and consistent return on investment."
                />
                <Card
                    icon={<PieChart className="w-6 h-6 text-white" />}
                    title="One Core Program"
                    description="You don't need 100 strategies. You need one that works in every market condition. Stocks, Crypto, Forex."
                />
            </div>
        </SectionWrapper>
    );
};

const Card = ({ icon, title, description }: { icon: any, title: string, description: string }) => (
    <div className="group p-6 rounded-2xl bg-neutral-900/40 border border-neutral-900 hover:bg-neutral-900 hover:border-neutral-800 transition-all duration-300">
        <div className="h-12 w-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            {icon}
        </div>
        <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
        <p className="text-neutral-400 leading-relaxed text-sm">
            {description}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
            <span>Learn more</span>
            <ArrowRight size={16} />
        </div>
    </div>
)
