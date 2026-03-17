// src/pages/about/LakhanPage.jsx  —  route: /about/lakhan
import SEO    from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { studio_split, course_fire } from "../../assets/images";

const TIMELINE = [
  { year: "2004", text: "Born into a family of craftspeople in Dharamshala, Lakhan grew up watching his grandfather shape clay on a hand-driven wheel in the back room of their home." },
  { year: "2012", text: "Began formal training under a master potter in Kangra. Spent three years learning centering, throwing, and the patience a spinning wheel demands." },
  { year: "2016", text: "Travelled across Rajasthan and Tamil Nadu to study regional ceramic traditions — from the blue pottery of Jaipur to the terracotta temples of Bishnupur." },
  { year: "2019", text: "Returned to the Dhauladhar foothills and co-founded The Cold Mountain Studio with Swapna, converting a barn on Byool Farm into a working studio." },
  { year: "2021", text: "Led the studio's first Fire Festival — a four-day communal pit-firing that brought together potters, artists, and curious beginners from across India." },
  { year: "Now",  text: "Lakhan teaches and makes full-time at the studio. His work is characterised by understated forms, textured surfaces, and glazes that carry the mineral memory of the Himalayas." },
];

export default function LakhanPage() {
  return (
    <>
      <SEO title="Lakhan — The Founder" description="Meet Lakhan, co-founder and lead potter at The Cold Mountain Studio, Dharamshala." path="/about/lakhan" />
      <Navbar />
      <main className="min-h-screen bg-warm-white">

        {/* Hero */}
        <div className="relative h-[55vh] overflow-hidden">
          <img src={studio_split} alt="Lakhan at the studio"
            className="w-full h-full object-cover object-center brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
          <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-10 text-white">
            <span className="block text-[0.72rem] tracking-[0.3em] uppercase text-clay-light mb-2">The Founder</span>
            <h1 className="font-cormorant text-[clamp(2.4rem,5vw,4rem)] font-light leading-tight">Lakhan</h1>
            <p className="text-base text-white/70 mt-1">Potter · Teacher · Co-founder</p>
          </div>
        </div>

        {/* About nav */}
        <div className="sticky top-[72px] z-30 bg-warm-white border-b border-black/10 px-8 md:px-16">
          <div className="flex gap-0">
            {[
              { label: "Lakhan", to: "/about/lakhan" },
              { label: "Swapna", to: "/about/swapna" },
            ].map(({ label, to }) => (
              <Link key={to} to={to}
                className={`text-[0.72rem] tracking-[0.15em] uppercase px-5 py-3 border-b-2 -mb-px no-underline transition-colors font-jost
                  ${label === "Lakhan" ? "text-clay border-clay" : "text-stone border-transparent hover:text-clay"}`}
              >{label}</Link>
            ))}
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">

          {/* Left: portrait + quick facts */}
          <aside>
            <div className="aspect-[3/4] overflow-hidden mb-6 rounded-sm">
              <img src={course_fire} alt="Lakhan" className="w-full h-full object-cover saturate-[0.85]" />
            </div>
            <div className="space-y-3">
              {[
                ["Based in",    "Dharamshala, HP"],
                ["Medium",      "Stoneware, Earthenware"],
                ["Techniques",  "Wheel throwing, Pit firing, Raku"],
                ["Teaches",     "All levels · Glaze chemistry · Fire Festival"],
                ["Languages",   "Hindi, English, Pahari"],
              ].map(([label, val]) => (
                <div key={label} className="border-b border-black/8 pb-2.5">
                  <span className="text-[0.76rem] tracking-[0.15em] uppercase text-stone block mb-0.5">{label}</span>
                  <span className="text-sm text-earth">{val}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Right: bio + timeline */}
          <div>
            <span className="block text-[0.72rem] tracking-[0.25em] uppercase text-clay mb-3">About</span>
            <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.6rem)] font-light text-charcoal mb-6 leading-tight">
              Shaped by mountains,<br /><em className="italic text-clay-dark">grounded in clay</em>
            </h2>

            <div className="space-y-4 mb-12">
              <p className="text-base leading-relaxed text-earth-light">
                Lakhan doesn't think of pottery as making objects. He thinks of it as listening. Listening to what the clay wants to become, what the fire wants to do, what the mountain air wants to deposit on a surface that spends twelve hours at 1260 degrees.
              </p>
              <p className="text-base leading-relaxed text-earth-light">
                His pots are not decorative. They are made to be held, to be drunk from, to be picked up without thinking twice and set down without care. A good pot, he says, should eventually look like it was found, not made.
              </p>
              <p className="text-base leading-relaxed text-earth-light">
                As a teacher, Lakhan is patient to a fault. He has watched hundreds of students curse their first centring attempts, and he still finds it funny. His belief is simple: the best way to teach pottery is to make pottery beside someone, not in front of them.
              </p>
            </div>

            {/* Timeline */}
            <div>
              <span className="block text-[0.72rem] tracking-[0.25em] uppercase text-clay mb-6">Journey</span>
              <div className="relative border-l border-clay-light/50 pl-8 space-y-8">
                {TIMELINE.map(({ year, text }) => (
                  <div key={year} className="relative">
                    <div className="absolute -left-[34px] top-0.5 w-3 h-3 rounded-full bg-clay border-2 border-warm-white" />
                    <span className="block text-[0.79rem] tracking-[0.2em] uppercase text-clay mb-1.5 font-jost">{year}</span>
                    <p className="text-sm leading-relaxed text-earth-light">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-black/10 flex gap-4 flex-wrap">
              <Link to="/about/swapna"
                className="text-[0.72rem] tracking-[0.12em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors no-underline font-jost"
              >Meet Swapna →</Link>
              <span className="text-stone">·</span>
              <a href="https://www.instagram.com/thecoldmountainstudio/" target="_blank" rel="noreferrer"
                className="text-[0.72rem] tracking-[0.12em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors no-underline font-jost"
              >Follow on Instagram →</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
