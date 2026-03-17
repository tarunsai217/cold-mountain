// src/data/shop.js
// ─────────────────────────────────────────────────────────────────────────────
// Shop product data.
//
// TO ADD A PRODUCT:
//   1. Add the image to src/assets/images/ (e.g. shop_newitem.jpg)
//   2. Export it from src/assets/images.js
//   3. Add an entry below — imgKey must match the export name exactly
//
// CATEGORIES: "mugs" | "plates" | "vessels" | "decor" | "custom"
// price: used for sort-by-price only (not shown to users — set to 0 if unknown)
// ─────────────────────────────────────────────────────────────────────────────

export const SHOP_CATEGORIES = [
  { id: "all",     label: "All" },
  { id: "mugs",    label: "Mugs & Cups" },
  { id: "plates",  label: "Plates & Bowls" },
  { id: "vessels", label: "Vessels" },
  { id: "decor",   label: "Accessories" },
  { id: "custom",  label: "Custom" },
];

export const PRODUCTS = [
  {
    id: 1,
    imgKey: "work_product_1",
    name:   "Studio Mugs",
    type:   "Wheel Thrown · Production Series",
    cat:    "mugs",
    price:  950,
  },
  {
    id: 2,
    imgKey: "work_product_2",
    name:   "Studio Vessels",
    type:   "Custom Production · Functional Ware",
    cat:    "vessels",
    price:  2400,
  },
  {
    id: 3,
    imgKey: "work_product_3",
    name:   "Glazed Ceramic Knobs",
    type:   "Hand Formed · Each one distinct",
    cat:    "decor",
    price:  650,
  },
  {
    id: 4,
    imgKey: "work_product_4",
    name:   "Cups & Tumblers",
    type:   "Hand Thrown · Matte Glaze",
    cat:    "mugs",
    price:  750,
  },
  {
    id: 5,
    imgKey: "work_product_5",
    name:   "Serving Plates",
    type:   "Wheel Thrown · Glazed",
    cat:    "plates",
    price:  1200,
  },
  {
    id: 6,
    imgKey: "work_product_6",
    name:   "Nesting Bowls",
    type:   "Wheel Thrown · Set of Three",
    cat:    "plates",
    price:  1800,
  },
  {
    id: 7,
    imgKey: "work_product_7",
    name:   "Custom Commission",
    type:   "Bespoke · Made to Order",
    cat:    "custom",
    price:  9999,
  },
];
