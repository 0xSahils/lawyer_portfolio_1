"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createBlogPost, updateBlogPost } from "@/app/admin/(protected)/blog/actions"
import { Loader2 } from "lucide-react"

type Author = {
  id: number
  name: string
}

type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image_url: string | null
  author_id: number | null
  published: boolean
}

type BlogFormProps = {
  post?: BlogPost
  authors: Author[]
}

export function BlogForm({ post, authors }: BlogFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [published, setPublished] = useState(post?.published || false)

  async function handleSubmit(formData: FormData) {
    setIsLoading(true)
    setError(null)
    
    formData.set("published", published.toString())

    const result = post
      ? await updateBlogPost(post.id, formData)
      : await createBlogPost(formData)

    if (result?.error) {
      setError(result.error)
      setIsLoading(false)
    }
    // Redirect handled by server action
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          name="title"
          defaultValue={post?.title}
          placeholder="Enter blog post title"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt *</Label>
        <Textarea
          id="excerpt"
          name="excerpt"
          defaultValue={post?.excerpt}
          placeholder="Brief summary of the post"
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content *</Label>
        <Textarea
          id="content"
          name="content"
          defaultValue={post?.content}
          placeholder="Full blog post content (HTML supported)"
          rows={15}
          required
          className="font-mono text-sm"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="image_url">Image URL</Label>
        <Input
          id="image_url"
          name="image_url"
          type="url"
          defaultValue={post?.image_url || ""}
          placeholder="https://example.com/image.jpg or /images/blog-1.jpg"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="author_id">Author</Label>
        <Select name="author_id" defaultValue={post?.author_id?.toString() || "0"}>
          <SelectTrigger>
            <SelectValue placeholder="Select an author" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0">No author</SelectItem>
            {authors.map((author) => (
              <SelectItem key={author.id} value={author.id.toString()}>
                {author.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
        <div className="space-y-0.5">
          <Label htmlFor="published" className="text-base">
            Published
          </Label>
          <p className="text-sm text-muted-foreground">
            Make this post visible on the website
          </p>
        </div>
        <Switch
          id="published"
          checked={published}
          onCheckedChange={setPublished}
        />
      </div>

      <div className="flex gap-4">
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-gold hover:bg-gold/90 text-navy"
        >
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {post ? "Update Post" : "Create Post"}
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/blog")}
          disabled={isLoading}
        >
          Cancel
        </Button>
      </div>
    </form>
  )
}
