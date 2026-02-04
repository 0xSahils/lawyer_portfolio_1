"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createCaseResult, updateCaseResult } from "@/app/admin/(protected)/case-results/actions"
import { CaseResult, PracticeArea } from "@/lib/db"

export function CaseResultForm({ caseResult, practiceAreas }: { caseResult?: CaseResult, practiceAreas: PracticeArea[] }) {
  const isEditing = !!caseResult
  
  async function action(formData: FormData) {
    if (isEditing && caseResult) {
      await updateCaseResult(caseResult.id, formData)
    } else {
      await createCaseResult(formData)
    }
  }

  return (
    <form action={action} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Case Title *</Label>
        <Input 
          id="title" 
          name="title" 
          defaultValue={caseResult?.title} 
          placeholder="Smith vs. Insurance Co." 
          required 
        />
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="result">Result Amount/Outcome *</Label>
          <Input 
            id="result" 
            name="result" 
            defaultValue={caseResult?.result} 
            placeholder="$2.5 Million Settlement" 
            required 
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="year">Year *</Label>
          <Input 
            id="year" 
            name="year" 
            type="number"
            defaultValue={caseResult?.year || new Date().getFullYear()} 
            required 
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="practice_area_id">Practice Area</Label>
        <Select name="practice_area_id" defaultValue={caseResult?.practice_area_id?.toString()}>
          <SelectTrigger>
            <SelectValue placeholder="Select a practice area" />
          </SelectTrigger>
          <SelectContent>
            {practiceAreas.map((area) => (
              <SelectItem key={area.id} value={area.id.toString()}>
                {area.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea 
          id="description" 
          name="description" 
          defaultValue={caseResult?.description}
          placeholder="Brief details about the case..."
          rows={4}
          required 
        />
      </div>
      
      <div className="flex gap-4">
        <Button type="submit" className="bg-gold hover:bg-gold-dark text-navy">
          {isEditing ? "Update Case Result" : "Create Case Result"}
        </Button>
        <Button asChild variant="outline">
          <Link href="/admin/case-results">Cancel</Link>
        </Button>
      </div>
    </form>
  )
}
