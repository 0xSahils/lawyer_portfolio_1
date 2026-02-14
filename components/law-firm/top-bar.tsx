"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Clock, Facebook, Twitter, Linkedin } from "lucide-react"

export function TopBar() {
  return (
    <motion.div
      className="bg-navy py-2 text-sm hidden md:block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 text-gray-300">
            <a href="mailto:john@mehtalaw.com" className="flex items-center gap-2 hover:text-gold transition-colors duration-200">
              <Mail className="h-4 w-4 text-gold" />
              <span>john@mehtalaw.com</span>
            </a>
            <a href="tel:+1020930542" className="flex items-center gap-2 hover:text-gold transition-colors duration-200">
              <Phone className="h-4 w-4 text-gold" />
              <span>+1 (020) 930 542</span>
            </a>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gold" />
              <span>9:00 AM - 5:00 PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200" aria-label="Twitter">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <a
              href="#contact"
              className="bg-gold text-navy px-4 py-1.5 text-sm font-semibold hover:bg-gold-dark transition-all duration-200 rounded-sm shadow-[0_0_0_rgba(201,169,98,0)] hover:shadow-[0_0_12px_rgba(201,169,98,0.3)]"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
