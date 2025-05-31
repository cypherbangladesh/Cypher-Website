"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  slug: string
}

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
  className?: string
}

export default function BlogCard({ post, featured = false, className }: BlogCardProps) {
  return (
    <motion.article
      className={cn(
        "group overflow-hidden rounded-lg border bg-background transition-all",
        featured ? "md:col-span-2" : "",
        className,
      )}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/blogs/${post.slug}`} className="block h-full">
        <div className={cn("relative aspect-[4/3]", featured ? "md:aspect-[16/9]" : "")}>
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-muted-foreground">{post.category}</span>
            <span className="text-xs text-muted-foreground">•</span>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>

          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
        </div>
      </Link>
    </motion.article>
  )
}
