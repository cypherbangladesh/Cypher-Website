"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductGallery({ product }: { product: any }) {
  const [mainImage, setMainImage] = useState(product.image)

  // Generate additional images for the gallery
  const gallery = [
    product.image,
    "/placeholder.svg?height=300&width=300&text=Detail+1",
    "/placeholder.svg?height=300&width=300&text=Detail+2",
  ]

  return (
    <div className="space-y-3 md:space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg border bg-gray-100">
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 500px, (min-width: 768px) 400px, 100vw"
        />

        {/* Navigation buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white w-8 h-8 md:w-10 md:h-10"
          onClick={() => {
            const currentIndex = gallery.indexOf(mainImage)
            const prevIndex = currentIndex === 0 ? gallery.length - 1 : currentIndex - 1
            setMainImage(gallery[prevIndex])
          }}
        >
          <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white w-8 h-8 md:w-10 md:h-10"
          onClick={() => {
            const currentIndex = gallery.indexOf(mainImage)
            const nextIndex = currentIndex === gallery.length - 1 ? 0 : currentIndex + 1
            setMainImage(gallery[nextIndex])
          }}
        >
          <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-auto pb-2">
        {gallery.map((image, index) => (
          <button
            key={index}
            className={`relative h-16 w-16 md:h-20 md:w-20 flex-shrink-0 overflow-hidden rounded-lg border ${
              image === mainImage ? "border-black" : "border-gray-200"
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${product.name} thumbnail ${index + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

