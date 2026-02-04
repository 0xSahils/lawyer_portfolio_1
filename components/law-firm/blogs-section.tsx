import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, User } from "lucide-react";
import { sql } from "@/lib/db";
import { format } from "date-fns";

async function getBlogPosts() {
  try {
    const posts = await sql`
      SELECT 
        bp.*,
        tm.name as author_name
      FROM blog_posts bp
      LEFT JOIN team_members tm ON bp.author_id = tm.id
      WHERE bp.published = true
      ORDER BY bp.published_at DESC
      LIMIT 3
    `;
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function BlogsSection() {
  const blogPosts = await getBlogPosts();
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
          {blogPosts.length === 0 ? (
            <div className="col-span-full text-center py-12 text-gray-500">
              No blog posts available yet.
            </div>
          ) : (
            blogPosts.map((post: any) => (
              <article
                key={post.id}
                className="bg-white overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image_url || "/images/blog-1.jpg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.published_at ? format(new Date(post.published_at), "MMM dd, yyyy") : ""}
                    </span>
                    {post.author_name && (
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author_name}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-[#1a2332] mb-3 line-clamp-2 group-hover:text-[#c9a962] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#c9a962] font-semibold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-block border-2 border-[#c9a962] text-[#1a2332] px-8 py-3 font-semibold hover:bg-[#c9a962] transition-colors"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
