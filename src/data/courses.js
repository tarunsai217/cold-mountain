// ─────────────────────────────────────────────────────────────────────────────
// src/data/courses.js
// All course data. Images imported in the consuming component via images.js.
// ─────────────────────────────────────────────────────────────────────────────

export const COURSES = [
  {
    num: "01", imgKey: "course_retreat",
    name: "Pottery Retreat", tag: "Residential", tagStyle: "clay",
    duration: "3 – 13 Days · Food & Stay Included",
    desc: "Try pottery without a long commitment — or explore a new craft on a relaxing Himalayan holiday.",
    features: [
      "Intro to hand building & wheel throwing",
      "Finish a cup / bowl / plate — fired & shipped to you",
      "Daily supervised & unsupervised practice",
    ],
    pricing: [
      { name: "Cold Mountain Retreat", options: [{ label: "Single", val: "₹6,500" }, { label: "Sharing", val: "₹4,500" }], note: "per person per day" },
      { name: "Byool Farm BnB",        options: [{ label: "Single", val: "₹8,100" }, { label: "Sharing", val: "₹6,600" }], note: "per person per day" },
    ],
    hasAccom: true,
  },
  {
    num: "02", imgKey: "course_fortnight",
    name: "Fortnight Course", tag: "Residential", tagStyle: "clay",
    duration: "14 Days · Food & Stay Included · 2 days off",
    desc: "For beginners or potters at any level hoping to work on skills with or without supervision.",
    features: [
      "Clay types, wheel throwing — centering, coning, pulling",
      "Throw & trim; hand-building — pinching, coiling, slab",
      "Daily supervised & unsupervised practice",
    ],
    pricing: [
      { name: "Cold Mountain Retreat", options: [{ label: "Single", val: "₹72,800" }, { label: "Sharing", val: "₹63,000" }] },
      { name: "Byool Farm BnB",        options: [{ label: "Single", val: "₹96,600" }, { label: "Sharing", val: "₹70,000" }] },
    ],
    hasAccom: true,
  },
  {
    num: "03", imgKey: "course_monthly",
    name: "Monthly Course", tag: "Residential", tagStyle: "clay",
    duration: "30 Days · Food & Stay Included · 4 days off",
    desc: "Deepen your practice with project and research work alongside daily studio sessions.",
    features: [
      "Wheel throwing & hand building",
      "Project and research work",
      "Glaze & firing access for qualifying pieces",
    ],
    pricing: [
      { name: "Cold Mountain Retreat", options: [{ label: "Single", val: "₹1,36,500" }, { label: "Sharing", val: "₹96,000" }] },
      { name: "Byool Farm BnB",        options: [{ label: "Single", val: "₹1,80,000" }, { label: "Sharing", val: "₹1,35,000" }] },
    ],
    hasAccom: true,
  },
  {
    num: "04", imgKey: "course_3months",
    name: "3 Months Residency", tag: "Residential", tagStyle: "clay",
    duration: "90 Days · Food & Stay (sharing) Included · 12 days off",
    desc: "For aspirants wanting to seriously improve or pursue pottery as a career.",
    features: [
      "Wheel throwing, hand building, sculpture & murals",
      "Glazes, clay body, different firing styles",
      "Project, research work & teacher training",
    ],
    pricing: [
      { name: "Cold Mountain Retreat", options: [{ label: "Single", val: "₹3,75,500" }, { label: "Sharing", val: "₹2,25,000" }] },
      { name: "Byool Farm BnB",        options: [{ label: "—", val: "Contact us" }] },
    ],
    hasAccom: true,
  },
  {
    num: "05", imgKey: "course_advanced",
    name: "Advanced Pottery", tag: "Specialised", tagStyle: "dark",
    duration: "2 Weeks · Customisable for Groups",
    desc: "A focused intensive for potters ready to push further. Curriculum tailored to the group.",
    features: [
      "Surface decoration & texture work",
      "Building large-scale forms",
      "Glaze application techniques & Raku firing",
    ],
    pricing: [
      { name: "Per Person", options: [{ label: "", val: "₹84,000" }], note: "Accommodation billed separately · Group rates on request" },
    ],
    hasAccom: false,
  },
  {
    num: "06", imgKey: "course_glaze",
    name: "Glaze Course", tag: "Specialised", tagStyle: "dark",
    duration: "10 Days · Residential",
    desc: "Understand the science behind glazes and take full control of your surfaces.",
    features: [
      "Basic glaze chemistry & material science",
      "Formulating & testing your own glazes",
      "Application methods & firing outcomes",
    ],
    pricing: [
      { name: "Residential", options: [{ label: "Sharing", val: "₹90,000" }, { label: "Single", val: "₹1,10,000" }] },
    ],
    hasAccom: true,
  },
  {
    num: "07", imgKey: "course_fire",
    name: "Fire Festival", tag: "Event", tagStyle: "dark",
    duration: "4 Days · Residential (Sharing)",
    desc: "A communal celebration of fire and clay. Ancient techniques brought alive over four immersive days.",
    features: [
      "Pit firing, Raku & smoke firing",
      "Communal kiln builds & firings",
      "Residential on sharing basis",
    ],
    pricing: [
      { name: "Pricing", options: [{ label: "", val: "Contact us" }] },
    ],
    hasAccom: true,
  },
  {
    num: "08", imgKey: "course_nrd",
    name: "Non-Residential Day", tag: "Non-Residential", tagStyle: "earth",
    duration: "10:30 AM – 5:00 PM · Lunch Included",
    desc: "A full studio day for those staying off-site. Work at your own pace, guidance throughout.",
    features: [
      "Full day studio access",
      "Lunch included",
      "Prior booking mandatory",
    ],
    pricing: [
      { name: "Per Day", options: [{ label: "", val: "Contact us" }] },
    ],
    hasAccom: false,
  },
  {
    num: "09", imgKey: "course_nrm",
    name: "Non-Residential Month", tag: "Non-Residential", tagStyle: "earth",
    duration: "Mon – Fri · 10:30 AM – 5:00 PM",
    desc: "A full month of studio immersion for those arranging their own accommodation locally.",
    features: [
      "Daily studio access Mon–Fri",
      "All studio materials included",
      "Guided instruction + open practice",
    ],
    pricing: [
      { name: "Per Person", options: [{ label: "", val: "₹40,000" }] },
    ],
    hasAccom: false,
  },
];
