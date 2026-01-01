import { SectionWrapper } from "@/components/common/SectionWrapper";
import { ArrowRight } from "lucide-react";

const insights = [
    {
        category: "MARKET OUTLOOK",
        date: "DEC 26, 2025",
        title: "Navigating Volatility: The 2026 Forecast",
        excerpt: "Why traditional hedging strategies are failing in the current interest rate environment."
    },
    {
        category: "STRATEGY",
        date: "NOV 15, 2025",
        title: "The Mathematical Edge in Forex",
        excerpt: "How institutional desks use probability models to outlaw-edge the retail market."
    },
    {
        category: "CASE STUDY",
        date: "OCT 02, 2025",
        title: "From 24k to 300k: An Audit",
        excerpt: "A transparent look at the aggressive growth portfolio strategy executed in Q3."
    }
]

export const NewsGrid = () => {
    return (
        <SectionWrapper className="max-w-[1400px] px-6 md:px-12 py-24 bg-white" id="news">
            <div className="flex justify-between items-end mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-corporate-blue">Latest Insights</h2>
                <a href="#" className="text-sm font-bold text-blue-800 hover:underline underline-offset-4 flex items-center gap-1">
                    VIEW ALL INSIGHTS <ArrowRight size={16} />
                </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {insights.map((item, i) => (
                    <div key={i} className="group border-t border-neutral-200 pt-6 hover:bg-neutral-50 transition-colors p-4 -mx-4 rounded-sm">
                        <div className="flex justify-between items-center mb-4 mr-1">
                            <span className="text-[10px] font-bold tracking-widest text-blue-800 uppercase">{item.category}</span>
                            <span className="text-[10px] font-medium text-neutral-400">{item.date}</span>
                        </div>
                        <h3 className="font-serif text-2xl text-corporate-blue mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                            {item.title}
                        </h3>
                        <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-6">
                            {item.excerpt}
                        </p>
                        <span className="text-xs font-bold text-neutral-900 border-b border-neutral-900 pb-0.5">READ MORE</span>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};
