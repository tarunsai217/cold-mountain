// src/components/sections/BlogPreview.jsx
// Shows the 3 most recent posts on the landing page.
import { Link } from "react-router-dom";
import { POSTS } from "../../data/blog";
import * as IMGS from "../../assets/images";
import { SectionLabel, SectionTitle, DividerLine } from "../ui";

function BlogCard({ post }) {
  const img = IMGS[post.imgKey];
  return (
    <Link to={`/blog/${post.slug}`} className="group no-underline flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={img}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[0.70rem] tracking-[0.18em] uppercase text-clay font-jost">{post.category}</span>
          <span className="text-stone text-[0.6rem]">·</span>
          <span className="text-[0.75rem] text-stone font-jost">{post.readTime}</span>
        </div>
        <h3 className="font-cormorant text-[1.15rem] font-normal text-charcoal leading-snug mb-3 group-hover:text-clay transition-colors">
          {post.title}
        </h3>
        <p className="text-[0.9rem] leading-[1.75] text-earth-light flex-1 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <span className="text-[0.8rem] tracking-[0.1em] uppercase text-clay border-b border-clay-light pb-px self-start group-hover:text-clay-dark transition-colors font-jost">
          read more
        </span>
      </div>
    </Link>
  );
}

export default function BlogPreview() {
  const recent = POSTS.slice(0, 3);
  return (
    <section className="py-24 px-4 md:px-16 bg-warm-white">
      <DividerLine label="From the studio" />
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <SectionLabel>Journal</SectionLabel>
          <SectionTitle>
            Stories from<br /><em className="italic text-clay-dark">the kiln</em>
          </SectionTitle>
        </div>
        <Link to="/blog"
          className="text-[0.8rem] tracking-[0.14em] uppercase text-earth border-b border-black/15 pb-px hover:text-clay hover:border-clay transition-colors no-underline font-jost"
        >
          All posts →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recent.map(post => <BlogCard key={post.slug} post={post} />)}
      </div>
    </section>
  );
}
