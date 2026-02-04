import { sql, type ContactSubmission } from "@/lib/db"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageActions } from "@/components/admin/message-actions"
import { Mail, Calendar } from "lucide-react"

async function getMessages(): Promise<ContactSubmission[]> {
  try {
    const messages = await sql`
      SELECT * FROM contact_submissions 
      ORDER BY read ASC, created_at DESC
    `
    return messages as ContactSubmission[]
  } catch (error) {
    console.error("Error fetching messages:", error)
    return []
  }
}

export default async function MessagesPage() {
  const messages = await getMessages()

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-navy font-serif">Contact Messages</h2>
        <p className="text-muted-foreground">View and manage contact form submissions.</p>
      </div>

      {messages.length > 0 ? (
        <div className="grid gap-4">
          {messages.map((message) => (
            <Card key={message.id} className={message.read ? "opacity-75" : "border-l-4 border-l-gold"}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg text-navy font-serif flex items-center gap-2">
                      {!message.read && <span className="w-2 h-2 rounded-full bg-gold" />}
                      {message.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {message.email}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(message.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <MessageActions messageId={message.id} isRead={message.read} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-navy mb-2">{message.subject}</p>
                <p className="text-muted-foreground whitespace-pre-wrap">{message.message}</p>
                {message.phone && (
                  <p className="text-sm text-muted-foreground mt-4">
                    Phone: {message.phone}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="py-16 text-center">
            <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No messages yet.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
