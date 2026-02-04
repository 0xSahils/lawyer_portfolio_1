import { sql } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"
import { BlogTable } from "@/components/admin/blog-table"

async function getBlogPosts() {
  try {
    const posts = await sql`
      SELECT 
        bp.*,
        tm.name as author_name
      FROM blog_posts bp
      LEFT JOIN team_members tm ON bp.author_id = tm.id
      ORDER BY bp.created_at DESC
    `
    return posts
  } catch (error) {
    console.error("Error fetching blog posts:", error)
    return []
  }
}

export default async function BlogAdminPage() {
  const posts = await getBlogPosts()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-navy font-serif">Blog Posts</h2>
          <p className="text-muted-foreground">Manage your blog content</p>
        </div>
        <Link href="/admin/blog/new">
          <Button className="bg-gold hover:bg-gold/90 text-navy">
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">All Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <BlogTable posts={posts} />
        </CardContent>
      </Card>
    </div>
  )
}
