

const stats = [
    { label: "Assets Under Strategy", value: "$300M+" },
    { label: "Institutional Partners", value: "25+" },
    { label: "Years of Excellence", value: "20" },
    { label: "Students Worldwide", value: "10k+" },
];

export const StatsBar = () => {
    return (
        <div className="border-y border-neutral-200 bg-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-neutral-100">
                    {stats.map((stat, idx) => (
                        <div key={idx} className={`pl-8 ${idx === 0 ? 'pl-0' : ''}`}>
                            <h3 className="font-serif text-4xl md:text-5xl text-corporate-blue mb-2">
                                {stat.value}
                            </h3>
                            <p className="font-sans text-xs font-bold tracking-wider text-neutral-500 uppercase">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
