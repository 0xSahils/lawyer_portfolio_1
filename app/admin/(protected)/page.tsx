import { sql } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale, Users, FileText, Mail, Trophy, MessageSquare } from "lucide-react"
import Link from "next/link"

async function getStats() {
  try {
    const [practiceAreas, teamMembers, blogPosts, caseResults, testimonials, messages] = await Promise.all([
      sql`SELECT COUNT(*) as count FROM practice_areas`,
      sql`SELECT COUNT(*) as count FROM team_members`,
      sql`SELECT COUNT(*) as count FROM blog_posts`,
      sql`SELECT COUNT(*) as count FROM case_results`,
      sql`SELECT COUNT(*) as count FROM testimonials`,
      sql`SELECT COUNT(*) as count FROM contact_submissions WHERE read = false`,
    ])
    
    return {
      practiceAreas: Number(practiceAreas[0]?.count) || 0,
      teamMembers: Number(teamMembers[0]?.count) || 0,
      blogPosts: Number(blogPosts[0]?.count) || 0,
      caseResults: Number(caseResults[0]?.count) || 0,
      testimonials: Number(testimonials[0]?.count) || 0,
      unreadMessages: Number(messages[0]?.count) || 0,
    }
  } catch (error) {
    console.error("Error fetching stats:", error)
    return {
      practiceAreas: 0,
      teamMembers: 0,
      blogPosts: 0,
      caseResults: 0,
      testimonials: 0,
      unreadMessages: 0,
    }
  }
}

async function getRecentMessages() {
  try {
    const messages = await sql`
      SELECT * FROM contact_submissions 
      ORDER BY created_at DESC 
      LIMIT 5
    `
    return messages
  } catch (error) {
    console.error("Error fetching messages:", error)
    return []
  }
}

export default async function AdminDashboard() {
  const stats = await getStats()
  const recentMessages = await getRecentMessages()

  const statCards = [
    { title: "Practice Areas", value: stats.practiceAreas, icon: Scale, href: "/admin/practice-areas", color: "bg-blue-500" },
    { title: "Team Members", value: stats.teamMembers, icon: Users, href: "/admin/team", color: "bg-green-500" },
    { title: "Blog Posts", value: stats.blogPosts, icon: FileText, href: "/admin/blog", color: "bg-purple-500" },
    { title: "Case Results", value: stats.caseResults, icon: Trophy, href: "/admin/cases", color: "bg-yellow-500" },
    { title: "Testimonials", value: stats.testimonials, icon: MessageSquare, href: "/admin/testimonials", color: "bg-pink-500" },
    { title: "Unread Messages", value: stats.unreadMessages, icon: Mail, href: "/admin/messages", color: "bg-red-500" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy font-serif">Welcome Back</h2>
        <p className="text-muted-foreground">Here's what's happening with your law firm website.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((stat) => (
          <Link key={stat.title} href={stat.href}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                <div className={`w-10 h-10 rounded-full ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-navy">{stat.value}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Recent Messages */}
      <Card>
        <CardHeader>
          <CardTitle className="text-navy font-serif">Recent Messages</CardTitle>
        </CardHeader>
        <CardContent>
          {recentMessages.length > 0 ? (
            <div className="space-y-4">
              {recentMessages.map((message: any) => (
                <div key={message.id} className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${message.read ? 'bg-gray-300' : 'bg-gold'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-semibold text-navy truncate">{message.name}</p>
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(message.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">{message.subject}</p>
                    <p className="text-sm text-muted-foreground truncate mt-1">{message.message}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">No messages yet.</p>
          )}
          <Link 
            href="/admin/messages" 
            className="block text-center text-gold hover:text-gold-dark font-semibold mt-4"
          >
            View All Messages
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
