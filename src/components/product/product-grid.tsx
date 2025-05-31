"use client"

import { products } from "@/lib/products"
import ProductCard from "@/components/product/product-card"

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {products.map((product) => (
        
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          originalPrice={product.originalPrice}
          rating={product.rating}
          image={product.image}
          isNew={product.isNew}
          discount={product.discount}
          description={product.description}
        />
        
      ))}
    </div>
  )
}

