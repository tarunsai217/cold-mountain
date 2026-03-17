// src/components/sections/StudioSplit.jsx
import { studio_split } from "../../assets/images";
import { SectionLabel, SectionTitle } from "../ui";

export default function StudioSplit() {
  return (
    <section id="work" className="grid grid-cols-1 md:grid-cols-2 min-h-[62vh]">
      <div className="overflow-hidden">
        <img
          src={studio_split}
          alt="The Cold Mountain Studio"
          className="w-full h-full object-cover saturate-[0.84] hover:scale-[1.04] transition-transform duration-[6000ms]"
        />
      </div>
      <div className="bg-cream px-10 md:px-20 py-16 md:py-24 flex flex-col justify-center">
        <SectionLabel>The Studio</SectionLabel>
        <SectionTitle className="mb-5">
          A place where<br /><em className="italic text-clay-dark">craft meets practice</em>
        </SectionTitle>
        <p className="text-[0.95rem] leading-[2] text-earth-light mb-4 max-w-[400px]">
          At The Cold Mountain Studio we strive to create an environment where one can nurture a relationship with clay as well as oneself. As a production studio, we find balance between efficient output and pursuing our own aesthetic and spiritual goals.
        </p>
        <p className="text-[0.95rem] leading-[2] text-earth-light mb-5 max-w-[400px]">
          Our aim is that every piece from our studio would be like a prayer — not of asking, but of appreciation for the beauty and simplicity of natural things.
        </p>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="self-start text-base tracking-[0.13em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors bg-transparent border-t-0 border-l-0 border-r-0 cursor-pointer font-jost"
        >
          Get in touch
        </button>
      </div>
    </section>
  );
}
