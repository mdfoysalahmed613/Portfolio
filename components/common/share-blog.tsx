"use client"
import { Share2 } from 'lucide-react'

import { toast } from 'sonner'

const copyLink = () => {
   navigator.clipboard.writeText(window.location.href)
   toast.success('Blog link copied to clipboard!')
}
const ShareBlog = () => {
  return (
     <Share2 onClick={copyLink} />
  )
}

export default ShareBlog