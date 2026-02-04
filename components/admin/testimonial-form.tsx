"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { createTestimonial, updateTestimonial } from "@/app/admin/(protected)/testimonials/actions"
import { Testimonial } from "@/lib/db"

export function TestimonialForm({ testimonial }: { testimonial?: Testimonial }) {
  const isEditing = !!testimonial
  
  async function action(formData: FormData) {
    if (isEditing && testimonial) {
      await updateTestimonial(testimonial.id, formData)
    } else {
      await createTestimonial(formData)
    }
  }

  return (
    <form action={action} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="client_name">Client Name *</Label>
          <Input 
            id="client_name" 
            name="client_name" 
            defaultValue={testimonial?.client_name} 
            placeholder="John Doe" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="client_position">Position / Role</Label>
          <Input 
            id="client_position" 
            name="client_position" 
            defaultValue={testimonial?.client_position || ""} 
            placeholder="CEO, Tech Corp" 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="rating">Rating (1-5) *</Label>
        <Select name="rating" defaultValue={testimonial?.rating?.toString() || "5"}>
          <SelectTrigger>
            <SelectValue placeholder="Select rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="5">5 Stars</SelectItem>
            <SelectItem value="4">4 Stars</SelectItem>
            <SelectItem value="3">3 Stars</SelectItem>
            <SelectItem value="2">2 Stars</SelectItem>
            <SelectItem value="1">1 Star</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Testimonial *</Label>
        <Textarea 
          id="content" 
          name="content" 
          defaultValue={testimonial?.content}
          placeholder="What did the client say?"
          rows={4}
          required 
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="featured" name="featured" defaultChecked={testimonial?.featured} />
        <Label htmlFor="featured">Featured Testimonial</Label>
      </div>
      
      <div className="flex gap-4">
        <Button type="submit" className="bg-gold hover:bg-gold-dark text-navy">
          {isEditing ? "Update Testimonial" : "Create Testimonial"}
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/testimonials">Cancel</Link>
        </Button>
      </div>
    </form>
  )
}
