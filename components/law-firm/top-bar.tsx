import { Mail, Phone, Clock, Facebook, Twitter, Linkedin } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-navy py-2 text-sm hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left - Contact Info */}
          <div className="flex items-center gap-6 text-gray-300">
            <a href="mailto:john@mehtalaw.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="h-4 w-4 text-gold" />
              <span>john@mehtalaw.com</span>
            </a>
            <a href="tel:+1020930542" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Phone className="h-4 w-4 text-gold" />
              <span>+1 (020) 930 542</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              <span>9:00 AM - 5:00 PM</span>
            </div>
          </div>

          {/* Right - Social Links & CTA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <a
              href="#contact"
              className="bg-gold text-navy px-4 py-1 text-sm font-semibold hover:bg-gold-dark transition-colors"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
