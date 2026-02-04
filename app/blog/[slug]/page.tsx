import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { TopBar } from "@/components/law-firm/top-bar"
import { Header } from "@/components/law-firm/header"
import { Footer } from "@/components/law-firm/footer"
import { notFound } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    slug: "understanding-your-rights-criminal-defense",
    title: "Understanding Your Rights in Criminal Defense Cases",
    excerpt: "A comprehensive guide to knowing your fundamental rights when facing criminal charges and how to protect them effectively.",
    image: "/images/blog-1.jpg",
    date: "Jan 15, 2026",
    category: "Criminal Law",
    content: `
      <p>When facing criminal charges, understanding your rights is the first and most crucial step in building a strong defense. The Indian Constitution guarantees several fundamental rights that protect every citizen, and knowing these can make a significant difference in your case.</p>
      
      <h2>Right to Legal Representation</h2>
      <p>Article 22(1) of the Indian Constitution guarantees every arrested person the right to consult and be defended by a legal practitioner of their choice. This right is non-negotiable and applies from the moment of arrest. If you cannot afford a lawyer, the state is obligated to provide one free of charge under the Legal Services Authorities Act, 1987.</p>
      
      <h2>Right to Remain Silent</h2>
      <p>You are not obligated to provide any information that may incriminate you. Article 20(3) protects against self-incrimination. This means you can choose not to answer questions from the police without it being held against you in court.</p>
      
      <h2>Right to Know the Grounds of Arrest</h2>
      <p>Under Article 22(1), you must be informed of the grounds of your arrest as soon as possible. The police cannot hold you without telling you why you are being detained. This is a fundamental safeguard against arbitrary detention.</p>
      
      <h2>Right to Be Produced Before a Magistrate</h2>
      <p>Article 22(2) mandates that every arrested person must be produced before the nearest magistrate within 24 hours of arrest. This excludes the time necessary for the journey to the court. This provision prevents prolonged detention without judicial oversight.</p>
      
      <h2>Right to Bail</h2>
      <p>Bail is a right, not a privilege, especially in bailable offenses. Even in non-bailable cases, the court has discretion to grant bail based on the circumstances of the case. The principle of 'bail, not jail' has been emphasized by the Supreme Court in numerous judgments.</p>
      
      <h2>Right to a Fair Trial</h2>
      <p>Article 21 encompasses the right to a fair trial, which includes the right to an impartial judge, the right to cross-examine witnesses, and the right to present evidence in your defense. Any violation of these principles can be grounds for appeal.</p>
      
      <h2>What to Do If Arrested</h2>
      <ul>
        <li>Stay calm and do not resist arrest</li>
        <li>Ask for the arrest warrant (if applicable)</li>
        <li>Request to speak with a lawyer immediately</li>
        <li>Do not sign any documents without legal advice</li>
        <li>Inform a family member about your arrest</li>
        <li>Remember the details of your arrest for your lawyer</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Knowledge of your rights is your strongest defense. If you or someone you know is facing criminal charges, seeking immediate legal counsel is paramount. As an experienced criminal defense attorney, I am committed to protecting the rights of my clients and ensuring they receive fair treatment under the law.</p>
    `
  },
  {
    id: 2,
    slug: "corporate-law-changes-2026",
    title: "Corporate Law Changes in 2026: What Businesses Need to Know",
    excerpt: "Recent amendments in corporate regulations and their impact on small and medium enterprises in India.",
    image: "/images/blog-2.jpg",
    date: "Jan 10, 2026",
    category: "Corporate Law",
    content: `
      <p>The year 2026 has brought significant changes to corporate law in India, affecting businesses of all sizes. As a corporate lawyer, I've compiled the most important amendments that every business owner and entrepreneur should be aware of.</p>
      
      <h2>Revised Compliance Requirements</h2>
      <p>The Ministry of Corporate Affairs has introduced streamlined compliance requirements for small and medium enterprises. Companies with turnover below Rs. 5 crores now have reduced filing obligations, making it easier for smaller businesses to remain compliant without excessive administrative burden.</p>
      
      <h2>Digital Documentation Standards</h2>
      <p>All corporate documents can now be digitally signed and filed electronically. The new regulations recognize digital signatures as equivalent to physical signatures for all corporate matters, including board resolutions, shareholder agreements, and statutory filings.</p>
      
      <h2>Enhanced Director Responsibilities</h2>
      <p>Directors now face increased accountability under the amended Companies Act. The concept of 'director's duty of care' has been expanded to include cybersecurity obligations and environmental compliance. Non-compliance can result in personal liability.</p>
      
      <h2>Startup-Friendly Provisions</h2>
      <p>Recognizing the importance of startups to the economy, several provisions have been introduced:</p>
      <ul>
        <li>Simplified incorporation process with same-day registration</li>
        <li>Reduced minimum capital requirements</li>
        <li>Extended time for annual filing compliance</li>
        <li>Tax benefits for angel investors</li>
      </ul>
      
      <h2>Cross-Border Transactions</h2>
      <p>New guidelines simplify foreign direct investment procedures and outbound investments by Indian companies. The approval process has been streamlined, with most sectors now under the automatic route.</p>
      
      <h2>Corporate Social Responsibility Updates</h2>
      <p>CSR requirements have been expanded. Companies meeting the threshold must now allocate at least 2.5% of average net profits to CSR activities, up from the previous 2%. The definition of eligible CSR activities has also been broadened.</p>
      
      <h2>Recommendations for Businesses</h2>
      <p>To stay compliant with these changes, I recommend:</p>
      <ul>
        <li>Reviewing current compliance status with legal counsel</li>
        <li>Updating internal policies and procedures</li>
        <li>Training directors on new responsibilities</li>
        <li>Implementing digital documentation systems</li>
        <li>Planning for increased CSR allocations</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>These changes represent both challenges and opportunities for Indian businesses. Staying informed and proactive in compliance will help your business thrive in this evolving regulatory landscape. Feel free to reach out for a consultation to discuss how these changes affect your specific situation.</p>
    `
  },
  {
    id: 3,
    slug: "family-law-divorce-custody",
    title: "Family Law: Navigating Divorce and Custody Matters",
    excerpt: "Expert insights on handling sensitive family matters with dignity while ensuring the best interests of all parties.",
    image: "/images/blog-3.jpg",
    date: "Jan 5, 2026",
    category: "Family Law",
    content: `
      <p>Family law matters, particularly divorce and child custody, are among the most emotionally challenging legal situations anyone can face. As a family law practitioner with over 15 years of experience, I've guided numerous families through these difficult times with compassion and expertise.</p>
      
      <h2>Understanding Divorce in India</h2>
      <p>India recognizes both contested and mutual consent divorces. A mutual consent divorce, governed by Section 13B of the Hindu Marriage Act (for Hindus) and similar provisions in other personal laws, is typically faster and less adversarial. It requires both parties to agree on terms including alimony, child custody, and property division.</p>
      
      <h2>Grounds for Contested Divorce</h2>
      <p>When mutual consent is not possible, divorce can be sought on various grounds including:</p>
      <ul>
        <li>Adultery</li>
        <li>Cruelty (physical or mental)</li>
        <li>Desertion for two or more years</li>
        <li>Conversion to another religion</li>
        <li>Mental disorder of severe nature</li>
        <li>Communicable disease</li>
        <li>Renunciation of the world</li>
      </ul>
      
      <h2>Child Custody: The Best Interest Principle</h2>
      <p>In custody matters, Indian courts prioritize the 'best interest of the child' above all else. Factors considered include:</p>
      <ul>
        <li>Age of the child</li>
        <li>Emotional and educational needs</li>
        <li>Parent's ability to provide care</li>
        <li>Child's preference (if old enough)</li>
        <li>Stability of environment</li>
        <li>Any history of abuse or neglect</li>
      </ul>
      
      <h2>Types of Custody</h2>
      <p><strong>Physical Custody:</strong> Where the child lives on a day-to-day basis.</p>
      <p><strong>Legal Custody:</strong> The right to make important decisions about the child's upbringing, education, healthcare, and religion.</p>
      <p><strong>Joint Custody:</strong> Both parents share custody, though the child may primarily reside with one parent.</p>
      
      <h2>Maintenance and Alimony</h2>
      <p>Financial support is a crucial aspect of divorce proceedings. Courts consider factors such as:</p>
      <ul>
        <li>Duration of marriage</li>
        <li>Standard of living during marriage</li>
        <li>Earning capacity of both spouses</li>
        <li>Age and health of both parties</li>
        <li>Contributions to household and career</li>
      </ul>
      
      <h2>Mediation: A Better Path</h2>
      <p>I strongly advocate for mediation in family disputes. It offers several advantages:</p>
      <ul>
        <li>Less adversarial and traumatic</li>
        <li>Faster resolution</li>
        <li>More control over outcomes</li>
        <li>Better for children's well-being</li>
        <li>More cost-effective</li>
      </ul>
      
      <h2>Protecting Children During Divorce</h2>
      <p>Children should never be caught in the middle of parental disputes. I advise my clients to:</p>
      <ul>
        <li>Never speak negatively about the other parent in front of children</li>
        <li>Maintain consistent routines</li>
        <li>Consider family counseling</li>
        <li>Keep communication about the children civil and focused</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>While divorce is never easy, handling it with dignity and putting children's interests first can lead to better outcomes for everyone involved. If you're facing family law challenges, seeking experienced legal counsel early can make a significant difference in navigating this difficult journey.</p>
    `
  }
]

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

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
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block bg-[#c9a962] text-[#1a2332] px-4 py-1 text-sm font-semibold uppercase mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-white/80">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  John Mehta
                </span>
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
              href="/#blogs" 
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
            <div className="bg-[#f8f8f8] p-6 md:p-8 mt-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
              <Image
                src="/images/ceo-portrait.jpg"
                alt="John Mehta"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-serif text-[#1a2332] mb-2">About the Author</h3>
                <p className="text-[#c9a962] font-semibold mb-2">John Mehta, Attorney at Law</p>
                <p className="text-gray-600 text-sm">
                  With over 15 years of experience in legal practice, John Mehta has successfully represented 
                  clients in complex cases across criminal defense, corporate law, and family matters. 
                  He is committed to providing accessible legal education through his blog.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[#1a2332] p-8 mt-12 text-center">
              <h3 className="text-2xl font-serif text-white mb-4">Need Legal Assistance?</h3>
              <p className="text-white/70 mb-6">
                Schedule a free consultation to discuss your case with me.
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
