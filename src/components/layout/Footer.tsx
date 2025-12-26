

export const Footer = () => {
    return (
        <footer className="bg-corporate-blue text-white pt-20 pb-12">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
                    <div className="col-span-1">
                        <span className="font-serif font-bold text-2xl">AFM.</span>
                    </div>

                    <div className="col-span-1 space-y-4">
                        <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Our Firm</h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                            <li><a href="#" className="hover:text-white hover:underline">About Us</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Leadership</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Careers</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Investor Relations</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 space-y-4">
                        <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Insights</h4>
                        <ul className="space-y-2 text-sm text-neutral-300">
                            <li><a href="#" className="hover:text-white hover:underline">Market Outlook</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Trading Strategies</a></li>
                            <li><a href="#" className="hover:text-white hover:underline">Research Papers</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 space-y-4">
                        <h4 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">Contact</h4>
                        <p className="text-sm text-neutral-300">
                            65 Chulia Street, OCBC Centre<br />
                            Singapore 049513
                        </p>
                        <p className="text-sm text-neutral-300">
                            +65 6123 4567<br />
                            ir@asiaforexmentor.com
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-neutral-500 font-medium">
                    <div className="flex gap-6 mb-4 md:mb-0">
                        <a href="#" className="hover:text-white">Privacy & Cookies</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                        <a href="#" className="hover:text-white">Risk Disclosure</a>
                        <a href="#" className="hover:text-white">Security</a>
                    </div>
                    <div>
                        &copy; 2025 Asia Forex Mentor Pte Ltd. All rights reserved.
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 text-[10px] text-neutral-600 leading-relaxed text-justify">
                    <p>
                        RISK WARNING: Trading foreign exchange and other financial instruments on margin carries a high level of risk and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange trading and seek advice from an independent financial advisor if you have any doubts.
                    </p>
                </div>
            </div>
        </footer>
    )
}
