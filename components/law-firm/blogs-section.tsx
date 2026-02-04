import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Rights in Criminal Defense Cases",
    excerpt:
      "A comprehensive guide to knowing your fundamental rights when facing criminal charges and how to protect them effectively.",
    image: "/images/blog-1.jpg",
    date: "Jan 15, 2026",
    category: "Criminal Law",
  },
  {
    id: 2,
    title: "Corporate Law Changes in 2026: What Businesses Need to Know",
    excerpt:
      "Recent amendments in corporate regulations and their impact on small and medium enterprises in India.",
    image: "/images/blog-2.jpg",
    date: "Jan 10, 2026",
    category: "Corporate Law",
  },
  {
    id: 3,
    title: "Family Law: Navigating Divorce and Custody Matters",
    excerpt:
      "Expert insights on handling sensitive family matters with dignity while ensuring the best interests of all parties.",
    image: "/images/blog-3.jpg",
    date: "Jan 5, 2026",
    category: "Family Law",
  },
];

export function BlogsSection() {
  return (
    <section id="blogs" className="py-20 bg-[#f8f8f8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#c9a962] text-sm tracking-widest uppercase mb-2">
            — Legal Insights —
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-[#1a2332]">
            Latest From My Blog
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#c9a962] text-[#1a2332] px-3 py-1 text-xs font-semibold uppercase">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    John Mehta
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#1a2332] mb-3 line-clamp-2 group-hover:text-[#c9a962] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-[#c9a962] font-semibold text-sm hover:gap-3 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="#"
            className="inline-block border-2 border-[#c9a962] text-[#1a2332] px-8 py-3 font-semibold hover:bg-[#c9a962] transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
