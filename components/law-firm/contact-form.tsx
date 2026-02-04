"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { submitContactForm } from "@/app/actions/contact"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setMessage(null)
    
    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setMessage({ type: "success", text: "Thank you! We'll be in touch soon." })
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setMessage({ type: "error", text: result.error || "Something went wrong. Please try again." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "Something went wrong. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id="contact-form" action={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-navy">Full Name *</Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="border-border focus:border-gold focus:ring-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-navy">Email Address *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            className="border-border focus:border-gold focus:ring-gold"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-navy">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 234 567 890"
            className="border-border focus:border-gold focus:ring-gold"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="text-navy">Subject *</Label>
          <Input
            id="subject"
            name="subject"
            placeholder="Legal Consultation"
            required
            className="border-border focus:border-gold focus:ring-gold"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-navy">Your Message *</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Describe your legal needs..."
          rows={5}
          required
          className="border-border focus:border-gold focus:ring-gold resize-none"
        />
      </div>
      
      {message && (
        <div className={`p-4 rounded-lg ${message.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {message.text}
        </div>
      )}
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full md:w-auto bg-gold hover:bg-gold-dark text-navy font-semibold px-8 py-6"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
