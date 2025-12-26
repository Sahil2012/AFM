import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueProp } from "@/components/sections/ValueProp";
import { MentorBio } from "@/components/sections/MentorBio";
import { Footer } from "@/components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-foreground overflow-x-hidden selection:bg-gold-500/30">
      <Navbar />
      <Hero />
      <TrustBar />
      <ValueProp />
      <MentorBio />
      <Footer />
    </div>
  );
}

export default App;
