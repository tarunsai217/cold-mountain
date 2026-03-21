// src/components/sections/ShopTeaser.jsx
// Shows 3 product images on the landing page with a "Browse All Works" CTA.
// Uses real work images from src/assets/images.js for better visual quality.
import { Link } from "react-router-dom";
import { about_wallpaper ,shop_dinnerware,shop_drinkware , shop_serverware } from "../../assets/images";
import { SectionLabel, SectionTitle, DividerLine, BtnPrimary } from "../ui";

const ITEMS = [
  { img: shop_dinnerware, name: "Dinnerware",     type: "" },
  { img: shop_drinkware, name: "DrinkWare",   type: "" },
  { img: shop_serverware, name: "Serverware",  type: "" },
  { img: about_wallpaper, name: "Home Decor",  type: "" },
];

export default function ShopTeaser() {
  return (
    <section className="pt-24 pb-6 px-4 md:px-16 bg-warm-white">
      <DividerLine label="From the kiln" />
      <SectionLabel>Shop</SectionLabel>
      <SectionTitle className="mb-10">
        Functional ware,<br /><em className="italic text-clay-dark">made with care</em>
      </SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        {ITEMS.map(item => (
          <Link key={item.name} to="/shop" className="group no-underline">
            <div className="aspect-square overflow-hidden bg-cream mb-3">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover saturate-75 group-hover:scale-[1.05] group-hover:saturate-100 transition-all duration-500 block"
              />
            </div>
            <p className="font-cormorant text-base text-charcoal mb-0.5">{item.name}</p>
            <p className="text-[0.72rem] tracking-[0.1em] uppercase text-stone">{item.type}</p>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link to="/shop">
          <BtnPrimary>Shop Now</BtnPrimary>
        </Link>
      </div>
    </section>
  );
}
