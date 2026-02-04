"use client"

import { Button } from "@/components/ui/button"
import { Check, Trash2 } from "lucide-react"
import { markMessageAsRead, deleteMessage } from "@/app/admin/(protected)/messages/actions"

export function MessageActions({ messageId, isRead }: { messageId: number; isRead: boolean }) {
  return (
    <div className="flex items-center gap-2">
      {!isRead && (
        <form action={markMessageAsRead.bind(null, messageId)}>
          <Button variant="ghost" size="sm" type="submit" className="text-green-600 hover:text-green-700 hover:bg-green-50">
            <Check className="h-4 w-4 mr-1" />
            Mark Read
          </Button>
        </form>
      )}
      <form action={deleteMessage.bind(null, messageId)}>
        <Button variant="ghost" size="sm" type="submit" className="text-red-600 hover:text-red-700 hover:bg-red-50">
          <Trash2 className="h-4 w-4 mr-1" />
          Delete
        </Button>
      </form>
    </div>
  )
}
