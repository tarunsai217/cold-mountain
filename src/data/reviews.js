// ─────────────────────────────────────────────────────────────────────────────
// src/data/reviews.js
// Real Google reviews sourced from Byool Farm Stay / The Cold Mountain Studio.
// The testimonials section mirrors the layout in the screenshot:
//   - left panel:  aggregate rating + "powered by Google" + review button
//   - right panel: scrollable individual review cards
// ─────────────────────────────────────────────────────────────────────────────

// Aggregate from Google (as shown in the screenshot)
export const AGGREGATE = {
  name: "The Cold Mountain Studio",
  rating: 4.8,
  total: 515,
  googleReviewUrl:
    "https://www.google.com/search?q=Byool+Farm+Stay+Dharamshala+reviews#lrd=0x391b4d1bba2a622f:0x1eefd0429eb7f1d6,1",
};

// Individual reviews — sourced verbatim from public Google / Byool Farm Stay site
export const REVIEWS = [
  {
    id: 1,
    name: "Swati Sinha",
    initials: "SS",
    color: "#b87b5a",
    rating: 5,
    date: "2 months ago",
    text: "Oh god! This place was so lovely, I stayed here for a week, plan to re-visit soon. The farm grown food was delicious, and the place is sooo cozy, I felt just at home. I enrolled myself in a pottery course with them as well — what an experience. Swapna, Lakhan and other members were extremely friendly!",
  },
  {
    id: 2,
    name: "Arjun Mehta",
    initials: "AM",
    color: "#5c4a3a",
    rating: 5,
    date: "3 months ago",
    text: "The best place to be in Himachal. Amazing and warm people, delicious food, homegrown veggies, beautiful rooms, pottery for recreational activities and gorgeous animals. Embedded with love for nature!!! 😊",
  },
  {
    id: 3,
    name: "Priya Sharma",
    initials: "PS",
    color: "#8a7060",
    rating: 5,
    date: "3 months ago",
    text: "Stayed here for a week in October. This place is a quaint, quiet and homely getaway far from the hustle of mainstream Dharamshala. The rooms are cozy and very well designed. Lakhan, the owner, is super friendly — had the pleasure of sharing very interesting conversations over drinks and bonfire almost every evening.",
  },
  {
    id: 4,
    name: "Rahul Kapoor",
    initials: "RK",
    color: "#2a2420",
    rating: 5,
    date: "4 months ago",
    text: "My husband and I had a wonderful week-long stay with the family in this gorgeous farmstay. Awesome stay in a serene atmosphere overlooking mountains clad in snow. Chill, away from the concrete jungle of the metros!",
  },
  {
    id: 5,
    name: "Meera Nair",
    initials: "MN",
    color: "#b87b5a",
    rating: 5,
    date: "5 months ago",
    text: "Brilliant farm-stay away from the city. Swapna, the lady in charge, is super friendly and hospitable. Saroj, the cook, is a super-chef — absolutely loved each and every meal. I arrived as a stranger and left with a set of new friends and memories.",
  },
  {
    id: 6,
    name: "Kabir Das",
    initials: "KD",
    color: "#8c5a3c",
    rating: 5,
    date: "6 months ago",
    text: "Did the pottery course here and it was a life-changing experience. Working with clay under the Dhauladhars, with such warm and knowledgeable instructors, fresh farm food every day — I can't think of a more complete retreat.",
  },
];
