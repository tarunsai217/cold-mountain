// src/components/SEO.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Per-page SEO meta tag manager.
// Uses react-helmet-async (add to package.json: "react-helmet-async": "^2.0.4")
//
// Usage:
//   import SEO from "../components/SEO";
//   <SEO title="Shop" description="Handmade ceramics..." />
//
// Falls back gracefully if react-helmet-async is not installed.
// ─────────────────────────────────────────────────────────────────────────────

const BASE_TITLE = "The Cold Mountain Studio";
const BASE_URL   = "https://www.thecoldmountainstudio.com";
const OG_IMAGE   = `${BASE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description = "Residential pottery courses, retreats & handmade ceramics at Byool Farm, Dharamshala, Himachal Pradesh.",
  path = "",
  image = OG_IMAGE,
}) {
  const fullTitle = title ? `${title} — ${BASE_TITLE}` : `${BASE_TITLE} — Pottery Courses, Dharamshala`;
  const canonical = `${BASE_URL}${path}`;

  // Update document head directly (works without react-helmet-async)
  if (typeof document !== "undefined") {
    document.title = fullTitle;

    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (el) el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]',         description);
    setMeta('meta[property="og:title"]',         fullTitle);
    setMeta('meta[property="og:description"]',   description);
    setMeta('meta[property="og:url"]',           canonical);
    setMeta('meta[property="og:image"]',         image);
    setMeta('meta[name="twitter:title"]',        fullTitle);
    setMeta('meta[name="twitter:description"]',  description);
    setMeta('meta[name="twitter:image"]',        image);

    let canonEl = document.querySelector('link[rel="canonical"]');
    if (canonEl) canonEl.setAttribute("href", canonical);
  }

  // Return null — this is a side-effect component only
  return null;
}
