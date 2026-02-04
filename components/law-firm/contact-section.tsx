"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from "@/app/actions/contact"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (020) 930 542",
    href: "tel:+1020930542",
  },
  {
    icon: Mail,
    label: "Email",
    value: "john@mehtalaw.com",
    href: "mailto:john@mehtalaw.com",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "123 Legal Street, Suite 100, New York, NY 10001",
    href: "#",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 9:00 AM - 5:00 PM",
    href: "#",
  },
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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-sm uppercase tracking-widest mb-2">--- Get In Touch ---</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy font-serif">
            Schedule a Free Consultation
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a legal question? I&apos;m here to help. Contact me today for a free initial consultation and let&apos;s discuss how I can assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-navy p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white font-serif mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                      <item.icon className="h-5 w-5 text-gold group-hover:text-navy transition-colors" />
                    </div>
                    <div>
                      <p className="text-gold text-sm font-semibold">{item.label}</p>
                      <p className="text-gray-300 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary p-8 rounded-lg">
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
                  className="w-full bg-gold hover:bg-gold-dark text-navy font-semibold py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
