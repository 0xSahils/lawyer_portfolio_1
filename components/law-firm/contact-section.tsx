"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, PhoneCall, MessageCircle, Send, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SectionHeader } from "@/components/law-firm/section-header"
import { submitContactForm } from "@/app/actions/contact"

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (020) 930 542", sub: "Mon–Fri, 9am–5pm", href: "tel:+1020930542" },
  { icon: Mail, label: "Email", value: "john@mehtalaw.com", sub: "Response within 24 hours", href: "mailto:john@mehtalaw.com" },
  { icon: MapPin, label: "Office", value: "123 Legal Street, Suite 100", sub: "New York, NY 10001", href: "#" },
  { icon: Clock, label: "Hours", value: "By Appointment Only", sub: "Available for urgent matters", href: "#" },
]

const ctaButtons = [
  { icon: PhoneCall, label: "Call Now", href: "tel:+1020930542", description: "Speak directly with our office" },
  { icon: MessageCircle, label: "WhatsApp", href: "#", description: "Quick response on WhatsApp" },
  { icon: Send, label: "Email Us", href: "mailto:john@mehtalaw.com", description: "Send your legal matter details" },
  { icon: Calendar, label: "Book Appointment", href: "#contact-form", description: "Schedule an in-person consultation" },
]

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      await submitContactForm(formData)
      setSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <SectionHeader
          overline="Get in Touch"
          title="Schedule Your Legal Consultation"
          subtitle="Take the first step towards resolving your legal matter. Reach out for a confidential consultation."
          className="mb-16"
        />

        {/* CTA action buttons - reference style */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 320, damping: 28 }}
        >
          {ctaButtons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className="group flex flex-col items-center text-center p-6 rounded-xl border-2 border-border bg-card hover:border-gold/50 hover:shadow-[0_0_24px_rgba(201,169,98,0.08)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold group-hover:text-navy transition-colors duration-300">
                <btn.icon className="h-6 w-6 text-gold group-hover:text-navy transition-colors" />
              </div>
              <span className="font-semibold text-navy font-serif">{btn.label}</span>
              <span className="text-sm text-muted-foreground mt-1">{btn.description}</span>
            </a>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Get in Touch / Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            <h3 className="text-2xl font-bold text-navy font-serif">Get in Touch</h3>
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border/80 hover:border-gold/30 hover:bg-secondary/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-gold transition-colors duration-300">
                    <item.icon className="h-5 w-5 text-gold group-hover:text-navy transition-colors" />
                  </div>
                  <div>
                    <p className="text-gold text-sm font-semibold">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                    {item.sub && (
                      <p className="text-muted-foreground text-sm mt-0.5">{item.sub}</p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            id="contact-form"
            className="bg-secondary p-8 lg:p-10 rounded-xl border border-border"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy font-serif mb-2">Thank You!</h3>
                <p className="text-muted-foreground">I&apos;ll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-navy mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Legal Consultation"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your legal matter..."
                    rows={5}
                    required
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-6 rounded-lg shadow-[0_0_0_rgba(201,169,98,0)] hover:shadow-[0_0_20px_rgba(201,169,98,0.25)] transition-all duration-300"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
