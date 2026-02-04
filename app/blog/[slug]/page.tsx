import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { TopBar } from "@/components/law-firm/top-bar"
import { Header } from "@/components/law-firm/header"
import { Footer } from "@/components/law-firm/footer"
import { notFound } from "next/navigation"
import { sql } from "@/lib/db"
import { format } from "date-fns"

async function getBlogPost(slug: string) {
  try {
    const posts = await sql`
      SELECT 
        bp.*,
        tm.name as author_name
      FROM blog_posts bp
      LEFT JOIN team_members tm ON bp.author_id = tm.id
      WHERE bp.slug = ${slug} AND bp.published = true
    `
    return posts[0] || null
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Banner */}
      <section className="relative h-[300px] md:h-[400px] bg-[#1a2332]">
        <Image
          src={post.image_url || "/images/blog-1.jpg"}
          alt={post.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {post.published_at ? format(new Date(post.published_at), "MMMM dd, yyyy") : ""}
                </span>
                {post.author_name && (
                  <span className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    {post.author_name}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-[#c9a962] font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Articles
            </Link>

            <article 
              className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#1a2332] prose-p:text-gray-600 prose-a:text-[#c9a962] prose-strong:text-[#1a2332] prose-li:text-gray-600"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share */}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <p className="text-[#1a2332] font-semibold flex items-center gap-2">
                  <Share2 className="w-5 h-5" /> Share this article:
                </p>
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#1877f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#0077b5] text-white flex items-center justify-center hover:opacity-80 transition-opacity"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Author Box */}
            {post.author_name && (
              <div className="bg-[#f8f8f8] p-6 md:p-8 mt-8">
                <h3 className="text-xl font-serif text-[#1a2332] mb-2">About the Author</h3>
                <p className="text-[#c9a962] font-semibold mb-2">{post.author_name}, Attorney at Law</p>
                <p className="text-gray-600 text-sm">
                  Dedicated to providing accessible legal education and representing clients with integrity and expertise.
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="bg-[#1a2332] p-8 mt-12 text-center">
              <h3 className="text-2xl font-serif text-white mb-4">Need Legal Assistance?</h3>
              <p className="text-white/70 mb-6">
                Schedule a free consultation to discuss your case with our expert legal team.
              </p>
              <Link
                href="/#booking"
                className="inline-block bg-[#c9a962] text-[#1a2332] px-8 py-3 font-semibold hover:bg-[#d4b876] transition-colors"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
