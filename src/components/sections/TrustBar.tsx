import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import forbes from "@/assets/forbes.png";
import cnn from "@/assets/cnn.png";
import benzinga from "@/assets/benzinga.png";
import investopedia from "@/assets/investopedia.png";
import yahoo from "@/assets/yahoo-finance.png";
import entrepreneur from "@/assets/entrepreneur.png";
import nbc from "@/assets/nbc.png";

const testimonials = [
    { image: forbes, name: "Forbes" },
    { image: cnn, name: "CNN" },
    { image: benzinga, name: "Benzinga" },
    { image: investopedia, name: "Investopedia" },
    { image: yahoo, name: "Yahoo Finance" },
    // { image: entrepreneur, name: "Entrepreneur" },
    { image: nbc, name: "NBC" },
];

export const TrustBar = () => {
    return (
        <div className="bg-corporate-blue border-y border-white/10 py-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center gap-12">
                <div className="hidden md:block shrink-0 border-r border-white/20 pr-8">
                    <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
                        Featured In
                    </span>
                </div>

                <div className="w-5/6 relative flex h-16 items-center">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="left"
                        speed="fast"
                        className="w-full bg-transparent"
                    />
                </div>
            </div>
        </div>
    );
};
