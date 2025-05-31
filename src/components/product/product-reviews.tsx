"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Sample review data
const reviews = [
  {
    id: 1,
    author: "Sofia Harvetz",
    rating: 5,
    date: "3 weeks ago",
    content:
      'I bought it 3 weeks ago and now came back just to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    avatar: "/placeholder.svg?text=SH&height=50&width=50",
  },
  {
    id: 2,
    author: "Nicolas Jensen",
    rating: 5,
    date: "3 weeks ago",
    content:
      'I bought it 3 weeks ago and now came back just to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    avatar: "/placeholder.svg?text=NJ&height=50&width=50",
  },
  {
    id: 3,
    author: "Nicolas Jensen",
    rating: 5,
    date: "3 weeks ago",
    content:
      'I bought it 3 weeks ago and now came back just to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    avatar: "/placeholder.svg?text=NJ&height=50&width=50",
  },
  {
    id: 4,
    author: "Nicolas Jensen",
    rating: 5,
    date: "3 weeks ago",
    content:
      'I bought it 3 weeks ago and now came back just to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    avatar: "/placeholder.svg?text=NJ&height=50&width=50",
  },
  {
    id: 5,
    author: "Nicolas Jensen",
    rating: 5,
    date: "3 weeks ago",
    content:
      'I bought it 3 weeks ago and now came back just to say "Awesome Product"! I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.',
    avatar: "/placeholder.svg?text=NJ&height=50&width=50",
  },
]

export default function ProductReviews({ productName }: { productName: string }) {
  const [sortOrder, setSortOrder] = useState("newest")
  const [visibleReviews, setVisibleReviews] = useState(3)

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  const handleLoadMore = () => {
    setVisibleReviews((prev) => Math.min(prev + 3, reviews.length))
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="space-y-4">
        <h3 className="text-lg md:text-xl font-bold">Customer Reviews</h3>

        <div className="flex items-center gap-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 md:h-5 md:w-5 ${i < Math.round(averageRating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
              />
            ))}
          </div>
          <span className="text-sm md:text-base text-gray-600">{reviews.length} Reviews</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h4 className="font-medium text-sm md:text-base">{productName}</h4>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={() => alert("Review submitted!")}>
              Write Review
            </Button>
            <select
              className="border rounded-md p-2 text-xs md:text-sm"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="font-medium text-sm md:text-base">{reviews.length} Reviews</h3>

        <div className="space-y-6 md:space-y-8">
          {reviews.slice(0, visibleReviews).map((review) => (
            <div key={review.id} className="flex gap-3 md:gap-4">
              <Avatar className="h-10 w-10 md:h-12 md:w-12">
                <AvatarImage src={review.avatar} alt={review.author} />
                <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm md:text-base">{review.author}</h4>
                  <span className="text-xs md:text-sm text-gray-500">{review.date}</span>
                </div>

                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 md:h-4 md:w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  ))}
                </div>

                <p className="text-sm md:text-base text-gray-600">{review.content}</p>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="text-xs md:text-sm">
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleReviews < reviews.length && (
          <div className="flex justify-center">
            <Button variant="outline" onClick={handleLoadMore} className="px-6 md:px-8 text-sm">
              Load more
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

