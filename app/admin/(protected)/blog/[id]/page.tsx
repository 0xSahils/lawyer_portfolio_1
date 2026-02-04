import { sql } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BlogForm } from "@/components/admin/blog-form"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

async function getBlogPost(id: string) {
  try {
    const posts = await sql`
      SELECT * FROM blog_posts WHERE id = ${parseInt(id)}
    `
    return posts[0] || null
  } catch (error) {
    console.error("Error fetching blog post:", error)
    return null
  }
}

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

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = await getBlogPost(id)
  const authors = await getAuthors()

  if (!post) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/blog">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Edit Blog Post</h2>
          <p className="text-muted-foreground">Update your blog article</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogForm post={post} authors={authors} />
        </CardContent>
      </Card>
    </div>
  )
}
