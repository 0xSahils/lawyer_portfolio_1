import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"
import { createPracticeArea } from "../actions"

const iconOptions = [
  { value: "shield", label: "Shield (Corporate Security)" },
  { value: "file-text", label: "File Text (Bankruptcy)" },
  { value: "graduation-cap", label: "Graduation Cap (Education)" },
  { value: "scale", label: "Scale (General Law)" },
  { value: "users", label: "Users (Family Law)" },
  { value: "briefcase", label: "Briefcase (Business)" },
]

export default function NewPracticeAreaPage() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button asChild variant="ghost" size="icon">
          <Link href="/admin/practice-areas">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Add Practice Area</h2>
          <p className="text-muted-foreground">Create a new practice area for your law firm.</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Practice Area Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={createPracticeArea} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input id="title" name="title" placeholder="Corporate Security" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="slug">URL Slug *</Label>
              <Input id="slug" name="slug" placeholder="corporate-security" required />
              <p className="text-xs text-muted-foreground">Used in the URL: /practice-areas/[slug]</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="icon">Icon *</Label>
              <Select name="icon" defaultValue="scale">
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
                placeholder="Detailed content for the practice area page..."
                rows={8}
              />
            </div>
            
            <div className="flex gap-4">
              <Button type="submit" className="bg-gold hover:bg-gold-dark text-navy">
                Create Practice Area
              </Button>
              <Button asChild variant="outline">
                <Link href="/admin/practice-areas">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
