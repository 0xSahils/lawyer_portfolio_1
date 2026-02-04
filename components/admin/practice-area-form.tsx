"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createPracticeArea, updatePracticeArea } from "@/app/admin/(protected)/practice-areas/actions"
import { PracticeArea } from "@/lib/db"

const iconOptions = [
  { value: "shield", label: "Shield (Corporate Security)" },
  { value: "file-text", label: "File Text (Bankruptcy)" },
  { value: "graduation-cap", label: "Graduation Cap (Education)" },
  { value: "scale", label: "Scale (General Law)" },
  { value: "users", label: "Users (Family Law)" },
  { value: "briefcase", label: "Briefcase (Business)" },
]

export function PracticeAreaForm({ practiceArea }: { practiceArea?: PracticeArea }) {
  const isEditing = !!practiceArea
  
  async function action(formData: FormData) {
    if (isEditing && practiceArea) {
      await updatePracticeArea(practiceArea.id, formData)
    } else {
      await createPracticeArea(formData)
    }
  }

  return (
    <form action={action} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Title *</Label>
        <Input 
          id="title" 
          name="title" 
          defaultValue={practiceArea?.title} 
          placeholder="Corporate Security" 
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="slug">URL Slug *</Label>
        <Input 
          id="slug" 
          name="slug" 
          defaultValue={practiceArea?.slug} 
          placeholder="corporate-security" 
          required 
        />
        <p className="text-xs text-muted-foreground">Used in the URL: /practice-areas/[slug]</p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="icon">Icon *</Label>
        <Select name="icon" defaultValue={practiceArea?.icon || "scale"}>
          <SelectTrigger>
            <SelectValue placeholder="Select an icon" />
          </SelectTrigger>
          <SelectContent>
            {iconOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Short Description *</Label>
        <Textarea 
          id="description" 
          name="description" 
          defaultValue={practiceArea?.description}
          placeholder="A brief description of this practice area..."
          rows={3}
          required 
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Full Content</Label>
        <Textarea 
          id="content" 
          name="content" 
          defaultValue={practiceArea?.content || ""}
          placeholder="Detailed content for the practice area page..."
          rows={8}
        />
      </div>
      
      <div className="flex gap-4">
        <Button type="submit" className="bg-gold hover:bg-gold-dark text-navy">
          {isEditing ? "Update Practice Area" : "Create Practice Area"}
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/practice-areas">Cancel</Link>
        </Button>
      </div>
    </form>
  )
}
