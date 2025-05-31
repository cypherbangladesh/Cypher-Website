'use client'

import Link from "next/link"
import { Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import ProductReviews from "@/components/product/product-reviews"
import ProductGallery from "@/components/product/product-gallery"
import ProductCountdown from "@/components/product/product-countdown"
import { products } from "@/lib/products"
import { notFound } from "next/navigation"
import { toast } from "react-toastify"
import { useContext, useState } from "react"
// import { CartContext } from "../../../context/CartContext"


export default function Page({ params }: { params: { id: string } }) {

  const [quantity, setQuantity] = useState(1);
  // const {addToCart} = useContext(CartContext);

    console.log(params);
  // Find the product by ID
  const product = products.find((p) => p.id.toString() === params.id);
  console.log(product);

  

  // If product not found, return 404
  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    // addToCart(product, quantity);
    console.log('product added to the cart')
    toast.success('Added to the cart successfully!', {theme: "colored"});
  }

  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
      

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-gray-600">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-gray-600">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/shop?category=${product.category.toLowerCase().replace(" ", "-")}`}
            className="hover:text-gray-600"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="font-medium">{product.name}</span>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-4 md:py-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {/* Product Gallery */}
          <div className="space-y-4">
            <div className="relative">
              {product.isNew && (
                <span className="absolute top-2 left-2 z-10 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  NEW
                </span>
              )}
              {product.discount && (
                <span className="absolute top-2 left-16 z-10 bg-green-500 text-white text-xs px-2 py-1 rounded">
                  -{product.discount}%
                </span>
              )}
              <ProductGallery product={product} />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600">11 Reviews</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

            <p className="text-sm md:text-base text-gray-600">
              Buy this and get the best value for every space where you sit now. Light and easy to move around with
              removable tray top. Perfect for serving drinks.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-xl md:text-2xl font-bold">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through text-sm md:text-base">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-sm">Offer ends in:</p>
              <ProductCountdown />
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Measurements</h3>
              <p className="text-sm">17 1/2×20 5/8 {`"`}</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-medium">Choose Color:</h3>
              <div className="flex gap-2">
                <button className="border-2 border-black p-3 md:p-4 rounded">
                  <div className="h-3 w-3 md:h-4 md:w-4 bg-black rounded" />
                </button>
                <button className="border p-3 md:p-4 rounded">
                  <div className="h-3 w-3 md:h-4 md:w-4 bg-gray-200 rounded" />
                </button>
                <button className="border p-3 md:p-4 rounded">
                  <div className="h-3 w-3 md:h-4 md:w-4 bg-red-500 rounded" />
                </button>
                <button className="border p-3 md:p-4 rounded">
                  <div className="h-3 w-3 md:h-4 md:w-4 bg-white border rounded" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border rounded">
                <button onClick={() => setQuantity(quantity > 1 ? quantity-1 : 1)} className="px-3 py-2 text-lg">-</button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button onClick={() => setQuantity(quantity+1)} className="px-3 py-2 text-lg">+</button>
              </div>

              <Button variant="outline" className="gap-2">
                <Heart className="h-4 w-4" />
                Wishlist
              </Button>
            </div>

            <Button onClick={handleAddToCart} className="w-full bg-black hover:bg-black/90 text-white py-4 md:py-6">Add to Cart</Button>

            <div className="flex gap-4 text-xs md:text-sm text-gray-500">
              <div>
                <span className="font-medium">SKU: </span>
                1987
              </div>
              <div>
                <span className="font-medium">Categories: </span>
                <Link
                  href={`/shop?category=${product.category.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-black"
                >
                  {product.category}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mt-8 md:mt-16">
          <Tabs defaultValue="reviews">
            <TabsList className="border-b w-full justify-start overflow-x-auto">
              <TabsTrigger value="info" className="text-xs md:text-sm">
                Additional Info
              </TabsTrigger>
              <TabsTrigger value="questions" className="text-xs md:text-sm">
                Questions
              </TabsTrigger>
              <TabsTrigger value="reviews" className="text-xs md:text-sm">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="info" className="pt-4 md:pt-6">
              <div className="prose max-w-none text-sm md:text-base">
                <h3 className="text-base md:text-lg font-medium">Product Specifications</h3>
                <ul className="space-y-2">
                  <li>Material: Steel with powder coating, plastic feet</li>
                  <li>Tray is removable for easy cleaning</li>
                  <li>Weight capacity: 22 lbs</li>
                  <li>Assembly required: Yes</li>
                  <li>Care instructions: Wipe clean with a damp cloth</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="questions" className="pt-4 md:pt-6">
              <p className="text-sm md:text-base text-gray-600">
                No questions yet. Be the first to ask a question about this product.
              </p>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4 md:pt-6">
              <ProductReviews productName={product.name} />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6">Sign up for deals, new products and promotions</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Email address" className="flex-1" />
              <Button className="bg-black hover:bg-black/90 text-white">Signup</Button>
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}

