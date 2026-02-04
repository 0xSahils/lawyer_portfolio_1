import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogForm } from "@/components/admin/blog-form"
import { sql } from "@/lib/db"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

async function getAuthors() {
  try {
    const authors = await sql`
      SELECT id, name FROM team_members ORDER BY name
    `
    return authors
  } catch (error) {
    console.error("Error fetching authors:", error)
    return []
  }
}

export default async function NewBlogPage() {
  const authors = await getAuthors()

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Create New Blog Post</h2>
          <p className="text-muted-foreground">Add a new article to your blog</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogForm authors={authors} />
        </CardContent>
      </Card>
    </div>
  )
}
