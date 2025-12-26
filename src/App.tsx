import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { NewsGrid } from "@/components/sections/NewsGrid";
import { LeaderBio } from "@/components/sections/LeaderBio";
import { Footer } from "@/components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-corporate-blue">
      <Navbar />
      <Hero />
      <StatsBar />
      <LeaderBio />
      <NewsGrid />
      <Footer />
    </div>
  );
}

export default App;
