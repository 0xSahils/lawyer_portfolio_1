import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Reviews", href: "#google-reviews" },
  { label: "Contact", href: "#contact" },
]

const practiceAreas = [
  { label: "Corporate Security", href: "#practice-areas" },
  { label: "Bankruptcy Law", href: "#practice-areas" },
  { label: "Education Law", href: "#practice-areas" },
  { label: "Family Law", href: "#practice-areas" },
  { label: "Criminal Law", href: "#practice-areas" },
  { label: "Real Estate Law", href: "#practice-areas" },
]

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold rounded-sm flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-navy" fill="currentColor">
                  <path d="M12 2L2 7v2h20V7L12 2zm0 2.5L18 7H6l6-2.5zM4 10v9h2v-7h2v7h2v-7h2v7h2v-7h2v7h2v-9H4zm-2 11v2h20v-2H2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-wider font-serif">JOHN MEHTA</h3>
                <p className="text-gold text-[10px] tracking-widest uppercase">Attorney at Law</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Dedicated to providing exceptional legal representation with integrity, expertise, and a commitment to achieving the best outcomes for every client.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-navy-light hover:bg-gold text-white hover:text-navy rounded-full flex items-center justify-center transition-all" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-light hover:bg-gold text-white hover:text-navy rounded-full flex items-center justify-center transition-all" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-light hover:bg-gold text-white hover:text-navy rounded-full flex items-center justify-center transition-all" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-navy-light hover:bg-gold text-white hover:text-navy rounded-full flex items-center justify-center transition-all" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceAreas.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-serif">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  123 Legal Street, Suite 100<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="tel:+1020930542" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  +1 (020) 930 542
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <a href="mailto:john@mehtalaw.com" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  john@mehtalaw.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p suppressHydrationWarning>&copy; {new Date().getFullYear()} John Mehta, Attorney at Law. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
