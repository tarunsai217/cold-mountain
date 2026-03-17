// src/components/sections/Philosophy.jsx
export default function Philosophy() {
  return (
    <section className="py-20 px-16 bg-charcoal">
      <div className="max-w-[720px] mx-auto text-center">
        <blockquote className="font-cormorant text-[clamp(1.15rem,2vw,1.7rem)] font-light italic leading-[1.8] text-cream mb-5">
          "I reached Cold Mountain and all cares stopped.<br />
          No idle thoughts remained in my head.<br />
          Nothing to do — I make mud into pots<br />
          and trust the current like an unmoored boat."
        </blockquote>
        <cite className="text-[0.75rem] tracking-[0.25em] uppercase text-clay-light not-italic">
          — Hanshan · Tang Dynasty hermit · 9th century
        </cite>
      </div>
    </section>
  );
}
