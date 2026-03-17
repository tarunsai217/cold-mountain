// src/pages/ShopPage.jsx  —  route: /shop
// ─────────────────────────────────────────────────────────────────────────────
// Product data lives in src/data/shop.js — edit that file to add/remove items.
// Images come from src/assets/images.js.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useMemo } from "react";
import Navbar            from "../components/Navbar";
import Footer            from "../components/Footer";
import SEO               from "../components/SEO";
import { SectionLabel }  from "../components/ui";
import { SHOP_CATEGORIES, PRODUCTS } from "../data/shop";
import * as IMGS         from "../assets/images";

// ── IG enquiry: copies message + opens Instagram ──────────────────────────────
function openEnquiry(productName) {
  const msg = `Hi @thecoldmountainstudio! I saw your ${productName} on your website and I am interested in purchasing. Could you share availability and pricing? Thank you!`;
  try { navigator.clipboard.writeText(msg); } catch (_) {}
  if (window.confirm(`Message copied!\n\n"${msg}"\n\nClick OK to open Instagram.`)) {
    window.open("https://www.instagram.com/thecoldmountainstudio/", "_blank");
  }
}

// ── Filter + sort bar ─────────────────────────────────────────────────────────
function FilterBar({ activeCategory, sort, onCategory, onSort }) {
  return (
    <div className="flex items-center flex-wrap gap-0 border-b border-black/10">
      {SHOP_CATEGORIES.map(cat => (
        <button
          key={cat.id}
          onClick={() => onCategory(cat.id)}
          className={`text-[0.72rem] tracking-[0.15em] uppercase px-5 py-3 border-none border-b-2 -mb-px bg-transparent cursor-pointer font-jost transition-colors duration-200 whitespace-nowrap flex-shrink-0
            ${activeCategory === cat.id
              ? "text-clay border-clay"
              : "text-stone border-transparent hover:text-clay"}`}
        >
          {cat.label}
        </button>
      ))}

      {/* Sort control */}
      <div className="ml-auto flex items-center gap-2 text-[0.72rem] tracking-[0.08em] uppercase text-stone px-3 py-3 flex-shrink-0">
        Sort by price
        <select
          value={sort}
          onChange={e => onSort(e.target.value)}
          className="text-[0.72rem] border-none bg-transparent text-stone font-jost cursor-pointer outline-none"
        >
          <option value="">Default</option>
          <option value="asc">Low → High</option>
          <option value="desc">High → Low</option>
        </select>
      </div>
    </div>
  );
}

// ── Product card ──────────────────────────────────────────────────────────────
function ProductCard({ product }) {
  const img = IMGS[product.imgKey];
  return (
    <div className="group">
      <div className="aspect-square overflow-hidden bg-cream mb-4">
        <img
          src={img}
          alt={product.name}
          className="w-full h-full object-cover saturate-75 group-hover:scale-[1.04] group-hover:saturate-100 transition-all duration-500 block"
        />
      </div>
      <p className="font-cormorant text-[1.1rem] text-charcoal mb-0.5">{product.name}</p>
      <p className="text-[0.72rem] tracking-[0.1em] uppercase text-stone mb-3">{product.type}</p>
      <button
        onClick={() => openEnquiry(product.name)}
        className="inline-flex items-center gap-1.5 px-4 py-2 border border-clay text-clay text-[0.72rem] tracking-[0.1em] uppercase font-jost bg-transparent cursor-pointer hover:bg-clay hover:text-white transition-all duration-300"
      >
        ✦ Enquire to Buy
      </button>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort]                     = useState("");

  // Filter + sort is derived — never stored in state
  const products = useMemo(() => {
    let list = activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter(p => p.cat === activeCategory);

    if (sort === "asc")  list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "desc") list = [...list].sort((a, b) => b.price - a.price);

    return list;
  }, [activeCategory, sort]);

  return (
    <>
      <SEO
        title="Shop"
        description="Handmade ceramics from The Cold Mountain Studio — mugs, vessels, plates, and custom commissions. Each piece made in Dharamshala."
        path="/shop"
      />
      <Navbar />

      <main className="min-h-screen bg-warm-white">
        {/* Header */}
        <div className="pt-36 pb-10 px-4 md:px-16 text-center border-b border-black/10 bg-warm-white">
          <SectionLabel>From the Kiln</SectionLabel>
          <h1 className="font-cormorant text-[clamp(1.9rem,3.5vw,2.8rem)] font-light text-charcoal">
            Our <em className="italic text-clay-dark">Works</em>
          </h1>
          <p className="text-base text-earth-light leading-relaxed max-w-[460px] mx-auto mt-3">
            Each piece is handmade in Dharamshala. Tap "Enquire to Buy" — it
            copies a message and opens Instagram so you can DM us directly.
          </p>
        </div>

        {/* Sticky filter + sort bar */}
        <div className="sticky top-[72px] z-30 bg-warm-white px-4 md:px-16">
          <FilterBar
            activeCategory={activeCategory}
            sort={sort}
            onCategory={setActiveCategory}
            onSort={setSort}
          />
        </div>

        {/* Product grid */}
        <div className="px-4 md:px-16 py-12 max-w-[1400px] mx-auto">
          {products.length === 0 ? (
            <p className="text-center text-stone py-20 text-base">
              Nothing in this category yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>

        {/* Instagram CTA */}
        <div className="text-center py-16 px-8 bg-cream mx-4 md:mx-16 mb-16">
          <SectionLabel>Follow our work</SectionLabel>
          <h3 className="font-cormorant text-[clamp(1.7rem,2.8vw,2.4rem)] font-light text-charcoal mb-3">
            See more on <em className="italic text-clay-dark">Instagram</em>
          </h3>
          <p className="text-base text-earth-light leading-relaxed max-w-[440px] mx-auto mb-6">
            New pieces, studio moments, and behind-the-scenes from
            Dharamshala — all on our feed.
          </p>
          <a
            href="https://www.instagram.com/thecoldmountainstudio/"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-7 py-3 bg-clay hover:bg-clay-dark text-white text-[0.78rem] tracking-[0.14em] uppercase no-underline transition-colors duration-300 font-jost"
          >
            @thecoldmountainstudio
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}
