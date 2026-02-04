import { neon } from '@neondatabase/serverless'

export const sql = neon(process.env.DATABASE_URL!)

export type PracticeArea = {
  id: number
  title: string
  slug: string
  description: string
  icon: string
  content: string | null
  created_at: string
}

export type TeamMember = {
  id: number
  name: string
  position: string
  bio: string
  image_url: string | null
  email: string | null
  phone: string | null
  order_index: number
  created_at: string
}

export type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  image_url: string | null
  author: string
  published: boolean
  published_at: string | null
  created_at: string
}

export type CaseResult = {
  id: number
  title: string
  description: string
  result: string
  year: number
  practice_area_id: number | null
  created_at: string
}

export type Testimonial = {
  id: number
  client_name: string
  client_position: string | null
  content: string
  rating: number
  featured: boolean
  created_at: string
}

export type ContactSubmission = {
  id: number
  name: string
  email: string
  phone: string | null
  subject: string
  message: string
  read: boolean
  created_at: string
}

export type SiteSettings = {
  key: string
  value: string
}
