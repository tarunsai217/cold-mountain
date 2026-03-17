// src/pages/about/SwapnaPage.jsx  —  route: /about/swapna
import SEO    from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { course_monthly, course_glaze } from "../../assets/images";

const PHILOSOPHY = [
  {
    title: "Food as craft",
    body: "Swapna runs the kitchen at Byool Farm the same way she runs the studio — with attention to season, source, and the slow accumulation of small decisions that make something nourishing. Every meal is made from scratch, mostly from the farm.",
  },
  {
    title: "The body of the pot",
    body: "Her pots are often described as quiet. Low, wide forms that feel settled. She is drawn to the moment just before a form becomes a vessel — the threshold between mass and hollow.",
  },
  {
    title: "Glazing as research",
    body: "Swapna keeps a logbook of every glaze test she has ever run. Twenty-seven notebooks so far. She believes that glaze chemistry is the most honest intersection of art and science, and teaches the studio's Glaze Course from that conviction.",
  },
];

export default function SwapnaPage() {
  return (
    <>
      <SEO title="Swapna — Co-founder" description="Meet Swapna, co-founder, glaze researcher, and farm keeper at The Cold Mountain Studio, Dharamshala." path="/about/swapna" />
      <Navbar />
      <main className="min-h-screen bg-warm-white">

        {/* Hero */}
        <div className="relative h-[55vh] overflow-hidden">
          <img src={course_monthly} alt="Swapna at the studio"
            className="w-full h-full object-cover object-top brightness-[0.6]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
          <div className="absolute bottom-0 left-0 px-8 md:px-16 pb-10 text-white">
            <span className="block text-[0.72rem] tracking-[0.3em] uppercase text-clay-light mb-2">The Co-founder</span>
            <h1 className="font-cormorant text-[clamp(2.4rem,5vw,4rem)] font-light leading-tight">Swapna</h1>
            <p className="text-base text-white/70 mt-1">Potter · Glaze Researcher · Farm Keeper</p>
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
                  ${label === "Swapna" ? "text-clay border-clay" : "text-stone border-transparent hover:text-clay"}`}
              >{label}</Link>
            ))}
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">

          {/* Left */}
          <aside>
            <div className="aspect-[3/4] overflow-hidden mb-6 rounded-sm">
              <img src={course_glaze} alt="Swapna" className="w-full h-full object-cover saturate-[0.85]" />
            </div>
            <div className="space-y-3">
              {[
                ["Based in",    "Dharamshala, HP"],
                ["Medium",      "Stoneware, experimental glazes"],
                ["Speciality",  "Glaze chemistry, reduction firing"],
                ["Teaches",     "Glaze Course · Monthly Course · Farm kitchen"],
                ["Languages",   "Kannada, Hindi, English"],
              ].map(([label, val]) => (
                <div key={label} className="border-b border-black/8 pb-2.5">
                  <span className="text-[0.76rem] tracking-[0.15em] uppercase text-stone block mb-0.5">{label}</span>
                  <span className="text-sm text-earth">{val}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Right */}
          <div>
            <span className="block text-[0.72rem] tracking-[0.25em] uppercase text-clay mb-3">About</span>
            <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.6rem)] font-light text-charcoal mb-6 leading-tight">
              Where science meets<br /><em className="italic text-clay-dark">the surface of things</em>
            </h2>

            <div className="space-y-4 mb-12">
              <p className="text-base leading-relaxed text-earth-light">
                Swapna arrived at pottery sideways — through chemistry, of all things. She had been studying material science when she first sat at a wheel, and found that everything she had been reading about atoms and bonds suddenly made tactile sense. Clay was just chemistry you could hold.
              </p>
              <p className="text-base leading-relaxed text-earth-light">
                She co-founded the studio with Lakhan in 2019, taking charge of the farm, the kitchen, and what became an obsessive research programme into local glazes made from wood ash, rice husk, and minerals sourced from the Himachal valley floor.
              </p>
              <p className="text-base leading-relaxed text-earth-light">
                Students who come for the Glaze Course often say it changed how they see pottery. Swapna's approach is to make the chemistry legible — not to simplify it, but to show that understanding it is the beginning of freedom, not the end of intuition.
              </p>
            </div>

            {/* Philosophy cards */}
            <div>
              <span className="block text-[0.72rem] tracking-[0.25em] uppercase text-clay mb-6">Philosophy</span>
              <div className="space-y-6">
                {PHILOSOPHY.map(({ title, body }) => (
                  <div key={title} className="border-l-2 border-clay-light pl-5">
                    <h3 className="font-cormorant text-lg font-normal text-charcoal mb-2">{title}</h3>
                    <p className="text-sm leading-relaxed text-earth-light">{body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 pt-8 border-t border-black/10 flex gap-4 flex-wrap">
              <Link to="/about/lakhan"
                className="text-[0.72rem] tracking-[0.12em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors no-underline font-jost"
              >Meet Lakhan →</Link>
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
