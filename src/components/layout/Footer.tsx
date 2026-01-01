import { Button } from "../ui/button";

import { Instagram, Linkedin, Twitter, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative bg-corporate-blue text-white overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-6 border-b border-white/5 pb-12">
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex flex-col gap-6">
              <span className="font-serif font-bold text-3xl tracking-tight">
                AFM.
              </span>
              <p className="text-neutral-300 max-w-md leading-relaxed">
                Empowering traders with institutional-grade strategies and
                market insights. Join thousands of successful traders worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-semibold font-sans tracking-wide uppercase text-white/90">
                Stay ahead of the market
              </h4>
              <div className="flex w-full max-w-sm items-stretch space-x-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 pl-10 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-white/20 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:bg-white/10"
                  />
                </div>
                <Button
                  variant="secondary"
                  className="bg-white text-corporate-blue hover:bg-neutral-200 py-5"
                >
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-neutral-500">
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="font-serif text-lg text-white font-medium">
                Our Firm
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Leadership
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Press & Media
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="font-serif text-lg text-white font-medium">
                Insights
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Market Outlook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Trading Strategies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Research Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Webinars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors duration-200"
                  >
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-6 col-span-2 md:col-span-1">
              <h4 className="font-serif text-lg text-white font-medium">
                Contact
              </h4>
              <ul className="space-y-4 text-sm text-neutral-400">
                <li className="space-y-1">
                  <p className="text-white/60 text-xs uppercase tracking-wider font-semibold">
                    Singapore HQ
                  </p>
                  <p>
                    65 Chulia Street, OCBC Centre
                    <br />
                    Singapore 049513
                  </p>
                </li>
                <li className="space-y-1">
                  <p className="text-white/60 text-xs uppercase tracking-wider font-semibold">
                    Inquiries
                  </p>
                  <a
                    href="mailto:ir@asiaforexmentor.com"
                    className="hover:text-white transition-colors"
                  >
                    ir@asiaforexmentor.com
                  </a>
                  <br />
                  <a
                    href="tel:+6561234567"
                    className="hover:text-white transition-colors"
                  >
                    +65 6123 4567
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="text-neutral-600">
              &copy; 2025 Asia Forex Mentor. All rights reserved.
            </span>
            <div className="flex gap-6 text-xs font-medium">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Risk Disclosure
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Sitemap
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300 group"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300 group"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300 group"
            >
              <Youtube className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300 group"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Risk Warning Detailed */}
        <div className="mt-6 pt-12 border-t border-white/5 text-[10px] text-neutral-600 leading-relaxed text-justify space-y-3">
          <p>
            <strong>DISCLAIMER:</strong> Any Advice or information on this
            website is General Advice Only – It does not take into account your
            personal circumstances, please do not trade or invest based solely
            on this information. By Viewing any material or using the
            information within this site you agree that this is general
            education material and you will not hold any person or entity
            responsible for loss or damages resulting from the content or
            general advice provided here by ECG Pte Ltd, it’s employees,
            directors or fellow members. Futures, options, and spot currency
            trading have large potential rewards, but also large potential risk.
            You must be aware of the risks and be willing to accept them in
            order to invest in the futures and options markets. Don’t trade with
            money you can’t afford to lose. This website is neither a
            solicitation nor an offer to Buy/Sell futures, spot forex, cfd’s,
            options or other financial products. No representation is being made
            that any account will or is likely to achieve profits or losses
            similar to those discussed in any material on this website. The past
            performance of any trading system or methodology is not necessarily
            indicative of future results.
          </p>
          <p>
            <strong>HIGH RISK WARNING:</strong> Trading foreign exchange and
            other financial instruments on margin carries a high level of risk
            and may not be suitable for all investors. The high degree of
            leverage can work against you as well as for you. Before deciding to
            trade foreign exchange, you should carefully consider your
            investment objectives, level of experience, and risk appetite. The
            possibility exists that you could sustain a loss of some or all of
            your initial investment and therefore you should not invest money
            that you cannot afford to lose. You should be aware of all the risks
            associated with foreign exchange trading and seek advice from an
            independent financial advisor if you have any doubts.
          </p>
        </div>
      </div>
    </footer>
  );
};
