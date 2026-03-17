// src/data/work.js
// ─────────────────────────────────────────────────────────────────────────────
// Data for the Our Work page (/work).
//
// WORK_CATEGORIES — filter tabs shown at the top of the page.
//
// WORK_ITEMS — each item represents one piece/project in the gallery.
//   imgKey   : must match a named export in src/assets/images.js
//   title    : piece name shown on hover/below image
//   category : must match one of the ids in WORK_CATEGORIES
//   medium   : short material description (optional)
//   year     : production year (optional)
//   featured : true → shown in the "Featured" filter and gets a larger grid cell
//
// TO ADD A PIECE:
//   1. Save the image to src/assets/images/work_*.jpg
//   2. Export it from src/assets/images.js
//   3. Add an entry below
// ─────────────────────────────────────────────────────────────────────────────

export const WORK_CATEGORIES = [
  { id: "all",        label: "All" },
  { id: "functional", label: "Functional Ware" },
  { id: "decorative", label: "Decorative" },
  { id: "process",    label: "Process" },
  { id: "studio",     label: "Studio Life" },
];

export const WORK_ITEMS = [
  {
    id: 1,
    imgKey:   "work_product_1",
    title:    "Studio Mugs — Morning Series",
    category: "functional",
    medium:   "Stoneware, matte celadon glaze",
    year:     "2024",
    featured: true,
  },
  {
    id: 2,
    imgKey:   "work_product_2",
    title:    "Vessel Collection",
    category: "functional",
    medium:   "Stoneware, ash glaze",
    year:     "2024",
    featured: true,
  },
  {
    id: 3,
    imgKey:   "work_product_3",
    title:    "Ceramic Cabinet Knobs",
    category: "decorative",
    medium:   "Earthenware, coloured slips",
    year:     "2024",
    featured: false,
  },
  {
    id: 4,
    imgKey:   "work_product_4",
    title:    "Tumblers — Natural Series",
    category: "functional",
    medium:   "Stoneware, soda-fired",
    year:     "2023",
    featured: false,
  },
  {
    id: 5,
    imgKey:   "work_product_5",
    title:    "Dinner Plates",
    category: "functional",
    medium:   "Stoneware, tenmoku glaze",
    year:     "2024",
    featured: false,
  },
  {
    id: 6,
    imgKey:   "work_product_6",
    title:    "Nesting Bowls",
    category: "functional",
    medium:   "Stoneware, iron-oxide wash",
    year:     "2023",
    featured: true,
  },
  {
    id: 7,
    imgKey:   "work_product_7",
    title:    "Large Form — Custom Commission",
    category: "decorative",
    medium:   "Stoneware, reduction fired",
    year:     "2024",
    featured: false,
  },
  {
    id: 8,
    imgKey:   "work_studio_1",
    title:    "Glazing Day",
    category: "process",
    medium:   "Studio documentation",
    year:     "2024",
    featured: false,
  },
  {
    id: 9,
    imgKey:   "work_studio_2",
    title:    "Shelf Life",
    category: "studio",
    medium:   "Studio documentation",
    year:     "2024",
    featured: false,
  },
  {
    id: 10,
    imgKey:   "work_studio_3",
    title:    "On the Wheel",
    category: "process",
    medium:   "Studio documentation",
    year:     "2023",
    featured: true,
  },
  {
    id: 11,
    imgKey:   "work_studio_4",
    title:    "Student Work — Monthly Cohort",
    category: "studio",
    medium:   "Studio documentation",
    year:     "2024",
    featured: false,
  },
  {
    id: 12,
    imgKey:   "work_studio_5",
    title:    "Fire Festival 2024",
    category: "process",
    medium:   "Raku and pit-firing",
    year:     "2024",
    featured: true,
  },
];
