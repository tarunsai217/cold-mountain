// src/assets/images.js
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for ALL images used in the app.
// Every image lives in src/assets/images/ as a proper .jpg / .png file.
// Vite handles hashing, lazy-loading, and build optimisation automatically.
//
// NAMING CONVENTION
// ─────────────────
//   logo              — nav + footer logo (PNG, transparent background)
//   slide_*           — hero carousel slides (4 images)
//   course_*          — one image per course card (9 images)
//   room_*            — accommodation room photos
//   retreat_wide      — wide landscape: retreat banner bg + farmstay strip
//   studio_split      — studio split section image
//   footer_bg         — footer background
//   shop_*            — shop product images (teaser section)
//   work_product_*    — Our Work page: product/ceramics shots
//   work_studio_*     — Our Work page: studio process shots
//
// TO SWAP AN IMAGE: replace the .jpg/.png file in src/assets/images/
// and the change propagates everywhere automatically.
// ─────────────────────────────────────────────────────────────────────────────

// ── Brand ────────────────────────────────────────────────────────────────────
export { default as logo }          from "./images/logo.png";

// ── Hero carousel ────────────────────────────────────────────────────────────
export { default as slide_farm }     from "./images/slide_farm.jpg";
export { default as slide_wheel }    from "./images/slide_wheel.jpg";
export { default as slide_students } from "./images/slide_students.jpg";
export { default as slide_studio }   from "./images/slide_studio.jpg";

// ── Course cards ─────────────────────────────────────────────────────────────
export { default as course_retreat }   from "./images/course_retreat.jpg";
export { default as course_fortnight } from "./images/course_fortnight.jpg";
export { default as course_monthly }   from "./images/course_monthly.jpg";
export { default as course_3months }   from "./images/course_3months.jpg";
export { default as course_advanced }  from "./images/course_advanced.jpg";
export { default as course_glaze }     from "./images/course_glaze.jpg";
export { default as course_fire }      from "./images/course_fire.jpg";
export { default as course_nrd }       from "./images/course_nrd.jpg";
export { default as course_nrm }       from "./images/course_nrm.jpg";

// ── Accommodation ────────────────────────────────────────────────────────────
export { default as room_1 }       from "./images/room_1.jpg";
export { default as room_2 }       from "./images/room_2.jpg";
export { default as retreat_wide } from "./images/retreat_wide.jpg";

// ── Studio sections ──────────────────────────────────────────────────────────
export { default as studio_split } from "./images/studio_split.jpg";
export { default as footer_bg }    from "./images/footer_bg.jpg";

// ── Shop teaser (homepage) ───────────────────────────────────────────────────
export { default as shop_knobs }   from "./images/shop_knobs.jpg";
export { default as shop_mugs }    from "./images/shop_mugs.jpg";
export { default as shop_vessels } from "./images/shop_vessels.jpg";
export { default as shop_cups }    from "./images/shop_cups.jpg";
export { default as shop_custom }  from "./images/shop_custom.jpg";

// ── Our Work page — product shots ────────────────────────────────────────────
export { default as work_product_1 } from "./images/work_product_1.jpg";
export { default as work_product_2 } from "./images/work_product_2.jpg";
export { default as work_product_3 } from "./images/work_product_3.jpg";
export { default as work_product_4 } from "./images/work_product_4.jpg";
export { default as work_product_5 } from "./images/work_product_5.jpg";
export { default as work_product_6 } from "./images/work_product_6.jpg";
export { default as work_product_7 } from "./images/work_product_7.jpg";

// ── Our Work page — studio process shots ─────────────────────────────────────
export { default as work_studio_1 } from "./images/work_studio_1.jpg";
export { default as work_studio_2 } from "./images/work_studio_2.jpg";
export { default as work_studio_3 } from "./images/work_studio_3.jpg";
export { default as work_studio_4 } from "./images/work_studio_4.jpg";
export { default as work_studio_5 } from "./images/work_studio_5.jpg";
