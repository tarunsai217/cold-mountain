// src/pages/about/LakhanPage.jsx  —  route: /about/lakhan
import SEO    from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { lakhan_portrait } from "../../assets/images"; // swap to your actual image import

const FACTS = [
  ["From",           "Bangalore → Dharamshala, HP"],
  ["Studio founded", "2017, The Cold Mountain Studio"],
  ["Healing work",   "Reiki Grandmaster · Hypnotherapy"],
  ["Studies",        "Kashmir Shaivism · Astrology · Alchemy · Tarot"],
  ["Home",           "Byool Farm, Dharamshala"],
];

export default function LakhanPage() {
  return (
    <>
      <SEO
        title="Lakhan Kaushik — Co-founder"
        description="Reiki Grandmaster, potter, and co-founder of The Cold Mountain Studio, Dharamshala."
        path="/about/lakhan"
      />
      <Navbar />

      <main className="min-h-screen bg-warm-white">
        <div className="max-w-[680px] mx-auto px-6 md:px-8 py-16 md:py-24">

          {/* ── Header: portrait + name inline ── */}
          <header className="flex items-center gap-5 mb-14">
            <div className="w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 border border-black/10">
              <img
                src={lakhan_portrait}
                alt="Lakhan Kaushik"
                className="w-full h-full object-cover saturate-[0.8]"
              />
            </div>
            <div>
              <span className="block text-[0.68rem] tracking-[0.28em] uppercase text-stone mb-1">
                Co-founder · The Cold Mountain Studio
              </span>
              <h1 className="font-cormorant text-[clamp(1.7rem,3.5vw,2.4rem)] font-light leading-tight text-charcoal">
                Lakhan Kaushik
              </h1>
              <p className="text-[0.78rem] text-stone mt-0.5 font-jost">
                Reiki Grandmaster · Potter · Teacher
              </p>
            </div>
          </header>

          {/* ── Pull quote ── */}
          <div className="bg-clay/[0.06] border-l-2 border-clay px-6 py-5 mb-14 rounded-sm">
            <p className="font-cormorant text-[1.15rem] italic leading-relaxed text-charcoal">
              "Art talks to those who take the time to listen. My goal is to help others
              build a sense of wonder and find a oneness with all that is beautiful around us."
            </p>
          </div>

          {/* ── Section 1: The turn ── */}
          <section className="mb-14">
            <span className="block text-[0.68rem] tracking-[0.28em] uppercase text-clay mb-4 font-jost">
              The turn
            </span>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light mb-4">
              In 2011, Lakhan Kaushik traded the predictable bustle of Bangalore for the raw,
              quiet rhythms of the mountains in Dharamshala. A Reiki Grandmaster and certified
              hypnotherapist, he founded the Maitreya Study Centre — establishing himself as a
              guide in the realms of healing and spiritual growth.
            </p>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light">
              His life is a deliberate tapestry of esoteric mastery — ranging from astrology and
              alchemy to the rigorous study of Kashmir Shaivism and Tarot. This spiritual inquiry
              eventually demanded a physical anchor, leading him to the tactile world of clay.
            </p>
          </section>

          {/* ── Fact grid ── */}
          <div className="grid grid-cols-2 gap-px border border-black/8 mb-14 rounded-sm overflow-hidden">
            {FACTS.map(([label, val]) => (
              <div key={label} className="bg-warm-white px-4 py-3.5 border-b border-black/8 last:col-span-2">
                <span className="block text-[0.68rem] tracking-[0.2em] uppercase text-stone mb-0.5 font-jost">
                  {label}
                </span>
                <span className="text-[0.82rem] text-earth">{val}</span>
              </div>
            ))}
          </div>

          {/* ── Section 2: The studio ── */}
          <section className="mb-14">
            <span className="block text-[0.68rem] tracking-[0.28em] uppercase text-clay mb-4 font-jost">
              The studio
            </span>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light mb-4">
              In 2017, Lakhan launched The Cold Mountain Studio. Choosing to bypass the traditional
              constraints of formal ceramic schooling, he instead forged a sophisticated craft through
              deep immersion and collaboration with accomplished artists.
            </p>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light">
              His work is characterised by a sophisticated and scholarly curiosity. He approaches the
              studio as a living laboratory, integrating local materials into his practice to bridge
              the gap between ancient tradition and modern expression.
            </p>
          </section>

          {/* ── Breakout quote ── */}
          <div className="border-t border-b border-black/10 py-8 mb-14 text-center">
            <p className="font-cormorant text-[1.35rem] font-light italic leading-relaxed text-clay-dark">
              Every piece that leaves the studio carries<br />
              the grounded, intentional energy<br />
              of the Himalayan foothills.
            </p>
          </div>

          {/* ── Section 3: The practice ── */}
          <section className="mb-14">
            <span className="block text-[0.68rem] tracking-[0.28em] uppercase text-clay mb-4 font-jost">
              The practice
            </span>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light mb-4">
              Far from mere experimentation, he is dedicated to the study and construction of diverse
              kiln designs from around the globe — reviving ancestral firing techniques that have
              connected humanity to earth and fire across centuries.
            </p>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light">
              Today, Lakhan resides at Byool Farm, a self-sufficient sanctuary where he balances the
              demands of natural farming with the companionship of his cows, goats, chickens, and
              four dogs. Every piece is more than a vessel; it carries the grounded, intentional
              energy of the Himalayan foothills.
            </p>
          </section>

          {/* ── Footer links ── */}
          <div className="pt-8 border-t border-black/10 flex gap-5 flex-wrap">
            <a
              href="https://www.instagram.com/thecoldmountainstudio/"
              target="_blank"
              rel="noreferrer"
              className="text-[0.68rem] tracking-[0.12em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors no-underline font-jost"
            >
              Follow on Instagram →
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
