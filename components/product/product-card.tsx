

import Image from "next/image"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "react-toastify"
import { useContext } from "react"
import { CartContext } from "@/context/CartContext"

export interface ProductCardProps {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  image: string
  isNew?: boolean
  discount?: number
  description?: string
}

export default function ProductCard({product}) {

  const {
    id,
  name,
  price,
  originalPrice,
  rating,
  image,
  isNew,
  discount,
  description,
  } = product;

  const {addToCart} = useContext(CartContext);


  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to the cart successfully', { theme: "colored" });
  }



  return (

    <div className="group relative flex flex-col h-full ">
      <div className="relative aspect-square mb-2 md:mb-3">
        <Link href={`/products/${id}`}>
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover bg-gray-500 rounded-lg" />
          {isNew && (
            <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>
          )}
          {discount && (
            <span className="absolute top-2 left-16 bg-green-500 text-white text-xs px-2 py-1 rounded">
              -{discount}%
            </span>
          )}
        </Link>
        <Button variant="outline" size="icon" className="absolute top-2 right-2 bg-white">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="px-6 py-4 flex-1 flex flex-col">
        <div className="flex mb-1 md:mb-2">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-primary text-primary" />
          ))}
        </div>

        <Link href={`/products/${id}`} className="hover:underline">
          <h3 className="font-medium text-sm md:text-base line-clamp-1">{name}</h3>
        </Link>

        <div className="flex items-center gap-2 mb-2">
          <span className="font-medium text-sm md:text-base">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-gray-500 line-through text-xs md:text-sm">${originalPrice.toFixed(2)}</span>
          )}
        </div>

        {description && <p className="text-gray-600 text-sm line-clamp-2 mb-4">{description}</p>}

        <div className="mt-auto">
          <Button onClick={handleAddToCart} className="w-full bg-black hover:bg-black/90 text-white">Add to cart</Button>
        </div>
      </div>
    </div>

  )
}



