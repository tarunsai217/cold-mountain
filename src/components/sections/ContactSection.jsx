// src/components/sections/ContactSection.jsx
import { useState } from "react";
import { SectionLabel, SectionTitle, BtnPrimary, BtnOutlineDark } from "../ui";

const SUBJECTS = [
  "Pottery Retreat (3–13 days)", "Fortnight Course (14 days)", "Monthly Course (30 days)",
  "3 Months Residency", "Advanced Pottery (2 weeks)", "Glaze Course (10 days)",
  "Fire Festival (4 days)", "Non-Residential Day", "Non-Residential Month",
  "Byool Farm Stay", "Shop / Custom Order", "General Enquiry",
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: SUBJECTS[0], message: "" });
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleEmail = (e) => {
    e.preventDefault();
    window.location.href = `mailto:thecoldmountainstudio@gmail.com?subject=${encodeURIComponent("Enquiry: " + form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.subject}\n\n${form.message}`)}`;
  };

  const handleWA = () => {
    window.open(`https://wa.me/919805259227?text=${encodeURIComponent(`Hi! I'm ${form.name || "there"}. I visited your website and wanted to enquire about ${form.subject}. ${form.message}`)}`, "_blank");
  };

  const fieldCls = "bg-transparent border-0 border-b border-black/15 focus:border-clay focus:outline-none py-2 text-base text-charcoal font-light transition-colors w-full font-jost";
  const labelCls = "text-[0.72rem] tracking-[0.2em] uppercase text-stone";

  return (
    <section id="contact" className="py-24 px-4 md:px-16 bg-cream grid grid-cols-1 md:grid-cols-2 gap-20">
      {/* Left */}
      <div>
        <SectionLabel>Find Us</SectionLabel>
        <SectionTitle className="mb-8">
          Let's begin<br /><em className="italic text-clay-dark">a conversation</em>
        </SectionTitle>

        {[
          ["Address", <span>Byool Farm, Uprehr<br />VPO Ramehr, Dharamshala<br />Himachal Pradesh — 176052</span>],
          ["Email",   <a href="mailto:thecoldmountainstudio@gmail.com" className="text-earth no-underline hover:text-clay transition-colors">thecoldmountainstudio@gmail.com</a>],
          ["Phone",   <a href="tel:+919805259227" className="text-earth no-underline hover:text-clay transition-colors">+91 98052 59227</a>],
        ].map(([label, val]) => (
          <div key={label} className="mb-5">
            <span className="block text-[0.72rem] tracking-[0.25em] uppercase text-stone mb-1">{label}</span>
            <span className="text-[0.9rem] text-earth leading-[1.7]">{val}</span>
          </div>
        ))}

        <div className="flex flex-col gap-2.5 mt-6">
          {[
            { label: "Write us an email",   href: "mailto:thecoldmountainstudio@gmail.com", hov: "hover:border-clay hover:text-clay" },
            { label: "Chat on WhatsApp",    href: "https://wa.me/919805259227",             hov: "hover:border-[#25D366] hover:text-[#25D366]" },
            { label: "Follow on Instagram", href: "https://www.instagram.com/thecoldmountainstudio/", hov: "hover:border-[#C13584] hover:text-[#C13584]" },
          ].map(b => (
            <a key={b.label} href={b.href} target="_blank" rel="noreferrer"
              className={`flex items-center gap-3 px-4 py-3 border border-black/15 text-[0.9rem] tracking-[0.13em] uppercase text-earth no-underline transition-all duration-300 font-jost ${b.hov}`}
            >{b.label}</a>
          ))}
        </div>

        <div className="mt-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.4879!2d76.3234!3d32.2196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5fb35d8b0f5d%3A0xcaed4c4a36dae456!2sDharamshala%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1710000000000"
            className="w-full h-[240px] border-none saturate-[0.6] sepia-[0.1]"
            allowFullScreen loading="lazy" title="Cold Mountain Studio"
          />
          <a href="https://www.google.com/maps/dir/?api=1&destination=Byool%20Farm%2C%20Uprehr%2C%20VPO%20Ramehr%2C%20Dharamshala%2C%20Himachal%20Pradesh%20176052" target="_blank" rel="noreferrer"
            className="inline-block mt-2.5 text-[0.72rem] tracking-[0.1em] uppercase text-stone no-underline border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors"
          >Get Directions →</a>
        </div>
      </div>

      {/* Right — form */}
      <div>
        <span className="block text-[0.74rem] tracking-[0.3em] uppercase text-clay mb-5">Send a Message</span>
        <form onSubmit={handleEmail} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className={labelCls}>Name</label>
              <input type="text" placeholder="Your name" required value={form.name} onChange={e => set("name", e.target.value)} className={fieldCls} />
            </div>
            <div className="flex flex-col gap-1">
              <label className={labelCls}>Email</label>
              <input type="email" placeholder="your@email.com" required value={form.email} onChange={e => set("email", e.target.value)} className={fieldCls} />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className={labelCls}>I'm interested in</label>
            <select value={form.subject} onChange={e => set("subject", e.target.value)} className={`${fieldCls} cursor-pointer appearance-none`}>
              {SUBJECTS.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className={labelCls}>Message</label>
            <textarea placeholder="Tell us what you have in mind…" required rows={4} value={form.message} onChange={e => set("message", e.target.value)} className={`${fieldCls} resize-none`} />
          </div>
          <div className="flex gap-3 flex-wrap mt-1">
            <BtnPrimary type="submit">Send via Email</BtnPrimary>
            <BtnOutlineDark onClick={handleWA} type="button">Send via WhatsApp</BtnOutlineDark>
          </div>
        </form>
      </div>
    </section>
  );
}
