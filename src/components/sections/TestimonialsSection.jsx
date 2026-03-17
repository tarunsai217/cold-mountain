// src/components/sections/TestimonialsSection.jsx
//
// Layout mirrors the screenshot exactly:
//   LEFT  — aggregate panel (rating, total, "powered by Google", review CTA)
//   RIGHT — horizontally scrollable review cards with prev/next arrows
//
// Reviews are sourced from public Google reviews for Byool Farm Stay /
// The Cold Mountain Studio (see src/data/reviews.js).
//
// NOTE: Google does not allow live embedding of their reviews widget via
// iframe without a paid Places API key. This component replicates the exact
// visual design shown in the screenshot using the static review data from
// reviews.js. To replace with live data, swap REVIEWS with a fetch from
// the Google Places API (GET /maps/api/place/details/json?place_id=...).
import { useState, useRef } from "react";
import { REVIEWS, AGGREGATE } from "../../data/reviews";
import { SectionLabel, SectionTitle, DividerLine, StarRating, GoogleIcon } from "../ui";

// ── Avatar circle with initials ───────────────────────────────────────────────
function Avatar({ name, initials, color }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[0.75rem] font-medium flex-shrink-0"
      style={{ backgroundColor: color }}
      aria-label={name}
    >
      {initials}
    </div>
  );
}

// ── Single review card ────────────────────────────────────────────────────────
function ReviewCard({ review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = review.text.length > 160;
  const displayed = !expanded && isLong ? review.text.slice(0, 160) + "…" : review.text;

  return (
    <div className="flex-shrink-0 w-[280px] bg-white rounded-sm shadow-sm border border-black/6 p-5 flex flex-col gap-3">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <Avatar name={review.name} initials={review.initials} color={review.color} />
          <div>
            <p className="text-base font-medium text-charcoal leading-tight">{review.name}</p>
            <p className="text-[0.9rem] text-stone">{review.date}</p>
          </div>
        </div>
        <GoogleIcon size={18} />
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} />

      {/* Review text */}
      <p className="text-[0.9rem] leading-[1.7] text-earth-light flex-1">
        {displayed}
        {isLong && (
          <button
            onClick={() => setExpanded(e => !e)}
            className="ml-1 text-clay text-[0.72rem] bg-transparent border-none cursor-pointer font-jost underline hover:text-clay-dark transition-colors"
          >
            {expanded ? "show less" : "read more"}
          </button>
        )}
      </p>
    </div>
  );
}

// ── Aggregate left panel ──────────────────────────────────────────────────────
function AggregatPanel() {
  return (
    <div className="flex-shrink-0 w-[220px] bg-white rounded-sm shadow-sm border border-black/6 p-6 flex flex-col items-start gap-3 self-start">
      {/* Studio name */}
      <p className="text-[0.9rem] font-medium text-charcoal leading-tight">{AGGREGATE.name}</p>

      {/* Rating row */}
      <div className="flex items-center gap-2">
        <span className="text-[1.6rem] font-cormorant font-light text-charcoal leading-none">{AGGREGATE.rating}</span>
        <StarRating rating={AGGREGATE.rating} size="md" />
      </div>

      {/* Total */}
      <p className="text-[0.7rem] text-stone">Based on {AGGREGATE.total.toLocaleString()} reviews</p>

      {/* Powered by Google */}
      <div className="flex items-center gap-1.5 text-[0.9rem] text-stone">
        powered by <GoogleIcon size={14} />
        <span className="font-medium text-[#4285F4]">Google</span>
      </div>

      {/* Review CTA */}
      <a
        href={AGGREGATE.googleReviewUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-1 flex items-center gap-1.5 bg-[#4285F4] text-white text-[0.9rem] tracking-[0.05em] px-3 py-1.5 rounded-full no-underline hover:bg-[#357ae8] transition-colors font-jost"
      >
        <GoogleIcon size={12} />
        review us on
      </a>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function TestimonialsSection() {
  const trackRef  = useRef(null);
  const CARD_W    = 280 + 16; // card width + gap

  const scrollBy = (dir) => {
    trackRef.current?.scrollBy({ left: dir * CARD_W * 2, behavior: "smooth" });
  };

  return (
    <section className="py-24 px-4 md:px-16 bg-[#f7f5f2]">
      <DividerLine label="What our guests say" />
      <div className="mb-10">
        <SectionLabel>Testimonials</SectionLabel>
        <SectionTitle>
          Words from<br /><em className="italic text-clay-dark">the community</em>
        </SectionTitle>
      </div>

      {/* Main layout: aggregate panel + scrollable cards */}
      <div className="flex gap-6 items-start">
        {/* Left: aggregate */}
        <div className="hidden md:block">
          <AggregatPanel />
        </div>

        {/* Right: scrollable cards + arrow controls */}
        <div className="flex-1 min-w-0 relative">
          {/* Arrow prev */}
          <button
            onClick={() => scrollBy(-1)}
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow border border-black/10 flex items-center justify-center hover:bg-cream transition-colors text-charcoal text-sm hidden md:flex"
            aria-label="Previous reviews"
          >‹</button>

          {/* Cards track */}
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-2"
            style={{ scrollbarWidth: "none" }}
          >
            {REVIEWS.map(r => <ReviewCard key={r.id} review={r} />)}
          </div>

          {/* Arrow next */}
          <button
            onClick={() => scrollBy(1)}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white shadow border border-black/10 flex items-center justify-center hover:bg-cream transition-colors text-charcoal text-sm hidden md:flex"
            aria-label="Next reviews"
          >›</button>
        </div>
      </div>

      {/* Mobile: show aggregate inline */}
      <div className="mt-6 md:hidden">
        <AggregatPanel />
      </div>
    </section>
  );
}
