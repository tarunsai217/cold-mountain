// src/pages/about/SwapnaPage.jsx  —  route: /about/swapna
import SEO    from "../../components/SEO";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { swapna_portrait } from "../../assets/images"; // swap to your actual image import

const FACTS = [
  ["From",             "Corporate world → Dharamshala, HP"],
  ["Moved to mountains", "2014"],
  ["Background",       "Journalist · Corporate career · 20+ countries"],
  ["Studio practice",  "Hand-building · Wheel throwing · Storytelling"],
  ["Also offers",      "The Listening Ear — judgment-free reflection"],
];

export default function SwapnaPage() {
  return (
    <>
      <SEO
        title="Swapna P — Co-founder"
        description="Journalist turned potter, co-founder of The Cold Mountain Studio, Dharamshala."
        path="/about/swapna"
      />
      <Navbar />

      <main className="min-h-screen bg-warm-white">
        <div className="max-w-[680px] mx-auto px-6 md:px-8 py-16 md:py-24">

          {/* ── Header: portrait + name inline ── */}
          <header className="flex items-center gap-5 mb-14">
            <div className="w-16 h-16 rounded-sm overflow-hidden flex-shrink-0 border border-black/10">
              <img
                src={swapna_portrait}
                alt="Swapna P"
                className="w-full h-full object-cover saturate-[0.8]"
              />
            </div>
            <div>
              <span className="block text-[0.68rem] tracking-[0.28em] uppercase text-stone mb-1">
                Co-founder · The Cold Mountain Studio
              </span>
              <h1 className="font-cormorant text-[clamp(1.7rem,3.5vw,2.4rem)] font-light leading-tight text-charcoal">
                Swapna P
              </h1>
              <p className="text-[0.78rem] text-stone mt-0.5 font-jost">
                Potter · Storyteller · Teacher
              </p>
            </div>
          </header>

          {/* ── Pull quote ── */}
          <div className="bg-clay/[0.06] border-l-2 border-clay px-6 py-5 mb-14 rounded-sm">
            <p className="font-cormorant text-[1.15rem] italic leading-relaxed text-charcoal">
              "Pottery is the unlearning of a structured, corporate-trained mind — each piece
              a sanctuary where the structure of the past meets the fluid freedom of the present."
            </p>
          </div>

          {/* ── Section 1: The detour ── */}
          <section className="mb-14">
            <span className="block text-[0.68rem] tracking-[0.28em] uppercase text-clay mb-4 font-jost">
              The detour
            </span>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light mb-4">
              Swapna's path to the wheel wasn't a straight line — it was a conscious detour.
              After twenty years of navigating a successful corporate career across various
              countries, she moved to the mountains of Dharamshala in 2014, choosing to trade
              a comfortable paycheck for a life of intentionality.
            </p>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light">
              At the studio, she continues her lifelong relationship with storytelling — now
              translating the narratives once captured in words as a journalist into the tactile
              language of earth and fire.
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

          {/* ── Section 2: The practice ── */}
          <section className="mb-14">
            <span className="block text-[0.68rem] tracking-[0.28em] uppercase text-clay mb-4 font-jost">
              The practice
            </span>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light mb-4">
              While she values the discipline of the wheel, Swapna finds her truest expression
              in hand-building techniques. She embraces the organic imperfections and the
              distinctively handmade look and feel these methods allow — treating each piece as
              a sanctuary for exploration.
            </p>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light">
              Her work is a testament to the beauty of a second chapter. Each piece she creates
              is part of an ongoing exploration of slow living — a journey that isn't about
              reaching a destination, but about embracing the rhythmic, messy, and beautiful
              process of starting over.
            </p>
          </section>

          {/* ── Breakout quote ── */}
          <div className="border-t border-b border-black/10 py-8 mb-14 text-center">
            <p className="font-cormorant text-[1.35rem] font-light italic leading-relaxed text-clay-dark">
              A journey that isn't about reaching<br />
              a destination — but about embracing<br />
              the beauty of starting over.
            </p>
          </div>

          {/* ── Section 3: The listening ear ── */}
          <section className="mb-14">
            <span className="block text-[0.68rem] tracking-[0.28em] uppercase text-clay mb-4 font-jost">
              The listening ear
            </span>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light mb-4">
              Outside of her studio practice, Swapna offers The Listening Ear — a space for
              judgment-free reflection. Much like working with clay, this process is about
              untangling complex thoughts and finding fresh perspectives.
            </p>
            <p className="text-[0.95rem] leading-[1.9] text-earth-light">
              It isn't about providing fixes, but about enabling others to break through thinking
              loops and find their own path forward. The same patience she brings to a piece of
              clay, she brings to a conversation.
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
