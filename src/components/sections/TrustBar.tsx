// Import logos 
import forbes from "@/assets/forbes.png";
import cnn from "@/assets/cnn.png";
import benzinga from "@/assets/benzinga.png";
import investopedia from "@/assets/investopedia.png";
import yahoo from "@/assets/yahoo-finance.png";

const testimonials = [
    { image: forbes, name: "Forbes" },
    { image: cnn, name: "CNN" },
    { image: benzinga, name: "Benzinga" },
    { image: investopedia, name: "Investopedia" },
    { image: yahoo, name: "Yahoo Finance" },
];

export const TrustBar = () => {
    return (
        <div className="bg-neutral-950 border-y border-neutral-900/50 py-12 relative z-20">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="shrink-0 text-center md:text-left">
                    <span className="text-neutral-500 font-medium text-sm">
                        Featured in major <br className="hidden md:block" /> financial media
                    </span>
                </div>

                <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                    <div className="flex gap-12 items-center justify-center md:justify-start opacity-40 grayscale mix-blend-screen">
                        {/* Reusing existing logic but simpler layout inline if possible, or using component with grayscale forced */}
                        {testimonials.map((brand, i) => (
                            <img key={i} src={brand.image} alt={brand.name} className="h-6 md:h-8 w-auto object-contain" />
                        ))}
                        {testimonials.map((brand, i) => (
                            <img key={i + 'dup'} src={brand.image} alt={brand.name} className="h-6 md:h-8 w-auto object-contain hidden md:block" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
