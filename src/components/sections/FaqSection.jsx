// src/components/sections/FaqSection.jsx
import { useState } from "react";
import { SectionLabel, SectionTitle, DividerLine, BtnOutlineWhite } from "../ui";

const FAQS = [
  { q: "What is included in the course fee?",           a: "All instruction, studio time, materials, supplies, accommodation, and meals are included in residential course fees." },
  { q: "What accommodation options are available?",     a: "Two options: Byool Farm BnB — on-site, three rooms with double beds. Cold Mountain Retreat — 10 minutes away, mountain views, twin beds, shared bathroom and kitchen." },
  { q: "Is food included?",                             a: "Yes for all residential courses — all meals plus chai, herbal tea or coffee. Farm-fresh and chemical-free. We cater to vegetarian, vegan, and gluten-free diets. Non-residential day course includes lunch." },
  { q: "What are the teaching and studio hours?",       a: "Teaching is usually 11 AM – 1 PM. Studio open 10 AM – 5 PM. Students are encouraged to use the studio after hours for unsupervised practice." },
  { q: "Can I continue remote work during the course?", a: "Yes — excellent WiFi and power backup. We're open to adjusting instruction hours to suit your schedule." },
  { q: "What other activities are available?",          a: "Dairy (ghee and cheese making), earth building, natural farming, gardening, animal care. Five friendly dogs, paddy field walks, and mountain treks." },
  { q: "Who can sign up for the Pottery Retreat?",      a: "Anyone — beginners, experienced artists, or those with a flexible schedule. Minimum 3 nights, up to 13 days." },
  { q: "What is the Advanced Pottery course?",          a: "A 2-week intensive for experienced potters. Curriculum customisable per group — covering surface decoration, large forms, glaze application, and Raku." },
  { q: "How long will it take me to learn pottery?",    a: "Pottery takes time, practice, persistence, and patience. The more you practice, the faster you'll learn." },
  { q: "Can I fire everything I make?",                 a: "You can, but we encourage mindfulness of environmental impact. Fired pottery is charged at ₹800 per kg plus shipping." },
  { q: "Can I ship my pottery pieces home?",            a: "Yes — we provide shipping services. Costs based on size, weight, and destination, borne by the student." },
  { q: "Will I get to glaze and fire my pieces?",       a: "Only for month-long or longer courses, and only if pieces have been bisque fired and you're present during glazing and firing." },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(o => !o)}
      className="border-t border-white/8 py-5 cursor-pointer last:border-b last:border-white/8"
    >
      <div className="flex justify-between items-start gap-4">
        <span className="text-base text-cream font-normal leading-snug flex-1">{q}</span>
        <span className={`text-clay-light text-lg leading-none flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>+</span>
      </div>
      <div className={`overflow-hidden transition-all duration-[400ms] ${open ? "max-h-[400px] pt-3" : "max-h-0"}`}>
        <p className="text-[0.9rem] leading-[1.85] text-white/62">{a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 px-4 md:px-16 bg-charcoal">
      <DividerLine label="Courses" light />
      <SectionLabel light>FAQs</SectionLabel>
      <SectionTitle light className="mb-12">
        Common<br /><em className="italic text-clay-light">questions</em>
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
        {FAQS.map((faq, i) => <FaqItem key={i} q={faq.q} a={faq.a} />)}
      </div>
      <div className="mt-10 text-center">
        <p className="text-base text-white/50 mb-5">More questions? We'd love to hear from you.</p>
        <BtnOutlineWhite onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
          Get in Touch
        </BtnOutlineWhite>
      </div>
    </section>
  );
}
