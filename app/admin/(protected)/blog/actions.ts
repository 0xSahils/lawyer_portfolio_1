"use server"

import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export async function createBlogPost(formData: FormData) {
  try {
    const title = formData.get("title") as string
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    const imageUrl = formData.get("image_url") as string
    const authorId = formData.get("author_id") as string
    const published = formData.get("published") === "true"

    if (!title || !excerpt || !content) {
      return { error: "Title, excerpt, and content are required" }
    }

    const slug = generateSlug(title)
    const publishedAt = published ? new Date().toISOString() : null

    await sql`
      INSERT INTO blog_posts (title, slug, excerpt, content, image_url, author_id, published, published_at)
      VALUES (${title}, ${slug}, ${excerpt}, ${content}, ${imageUrl || null}, ${authorId ? parseInt(authorId) : null}, ${published}, ${publishedAt})
    `

    revalidatePath("/admin/blog")
    revalidatePath("/")
    revalidatePath("/blog")
    
    redirect("/admin/blog")
  } catch (error) {
    console.error("Error creating blog post:", error)
    return { error: "Failed to create blog post" }
  }
}

export async function updateBlogPost(id: number, formData: FormData) {
  try {
    const title = formData.get("title") as string
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    const imageUrl = formData.get("image_url") as string
    const authorId = formData.get("author_id") as string
    const published = formData.get("published") === "true"

    if (!title || !excerpt || !content) {
      return { error: "Title, excerpt, and content are required" }
    }

    const slug = generateSlug(title)
    
    // Get current post to check if it was previously unpublished
    const currentPost = await sql`SELECT published FROM blog_posts WHERE id = ${id}`
    const wasUnpublished = currentPost[0]?.published === false
    const publishedAt = published && wasUnpublished ? new Date().toISOString() : null

    if (publishedAt) {
      await sql`
        UPDATE blog_posts 
        SET title = ${title}, 
            slug = ${slug}, 
            excerpt = ${excerpt}, 
            content = ${content}, 
            image_url = ${imageUrl || null}, 
            author_id = ${authorId ? parseInt(authorId) : null}, 
            published = ${published},
            published_at = ${publishedAt},
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
      `
    } else {
      await sql`
        UPDATE blog_posts 
        SET title = ${title}, 
            slug = ${slug}, 
            excerpt = ${excerpt}, 
            content = ${content}, 
            image_url = ${imageUrl || null}, 
            author_id = ${authorId ? parseInt(authorId) : null}, 
            published = ${published},
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
      `
    }

    revalidatePath("/admin/blog")
    revalidatePath("/")
    revalidatePath("/blog")
    revalidatePath(`/blog/${slug}`)
    
    redirect("/admin/blog")
  } catch (error) {
    console.error("Error updating blog post:", error)
    return { error: "Failed to update blog post" }
  }
}

export async function deleteBlogPost(id: number) {
  try {
    await sql`DELETE FROM blog_posts WHERE id = ${id}`
    
    revalidatePath("/admin/blog")
    revalidatePath("/")
    revalidatePath("/blog")
    
    return { success: true }
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return { error: "Failed to delete blog post" }
  }
}

export async function togglePublishStatus(id: number, published: boolean) {
  try {
    const publishedAt = published && !published ? new Date().toISOString() : null
    
    if (published) {
      await sql`
        UPDATE blog_posts 
        SET published = ${published}, 
            published_at = COALESCE(published_at, ${new Date().toISOString()}),
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
      `
    } else {
      await sql`
        UPDATE blog_posts 
        SET published = ${published},
            updated_at = CURRENT_TIMESTAMP
        WHERE id = ${id}
      `
    }

    revalidatePath("/admin/blog")
    revalidatePath("/")
    revalidatePath("/blog")
    
    return { success: true }
  } catch (error) {
    console.error("Error toggling publish status:", error)
    return { error: "Failed to update publish status" }
  }
}
