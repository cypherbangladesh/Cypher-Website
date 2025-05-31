"use client"

import { products } from "@/lib/products"
import ProductCard from "@/components/product/product-card"

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        
        <ProductCard
          key={product.id}
          product = {product}
        />
        
      ))}
    </div>
  )
}

