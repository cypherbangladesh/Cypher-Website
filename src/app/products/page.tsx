"use client";

import Image from "next/image"
import Link from "next/link"
import { Grid, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ProductGrid from "@/components/product/product-grid"
import ProductFilters from "@/components/product/product-filters"
import { useState } from "react"

export default function Page() {
  
  // const categories = ["All Product", "Components", "Tools", "HandMade", "3D Works"];

  const [selected, setSelected] = useState("All products");

  const handleCategoryName = (data:string) => {
    setSelected(data);
  }


  return (
    <div className="max-w-7xl mx-auto min-h-screen flex flex-col">

      {/* Hero Section */}
      <div className="relative bg-gray-50 py-12 md:py-16">
        <div className="absolute inset-0">
          <Image
            src="/assets/images/ok555.png?height=400&width=2000"
            alt="Shop banner"
            width={2000}
            height={400}
            className="w-full h-full object-cover bg-gray-400"
          />
          <div className="absolute inset-0 bg-white/75" />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-sm mb-4">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium">Shop</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Shop Page</h1>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">Let{`'`}s design the place you always imagined</p>
        </div>
      </div>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-8 md:py-12 ">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8 ">
          <h2 className="text-xl font-medium">{selected}</h2>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Grid className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <List className="h-5 w-5" />
              </Button>
            </div>
            {/* sort by */}
            <select className="text-sm border rounded-md px-3 py-2 w-full md:w-auto">
              <option>Sort by</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-2 ">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="w-full md:hidden mb-4">
                Filters
              </Button>
            </SheetTrigger>
            {/* <SheetContent side="left" className="w-[250px] sm:w-[300px]">
              <SheetHeader className="mb-6">
                <SheetTitle>Product Filters</SheetTitle>
              </SheetHeader>
              <ProductFilters sendCategoryName={handleCategoryName} />
            </SheetContent> */}
          </Sheet>
          <div className="hidden md:block">
            <ProductFilters sendCategoryName={handleCategoryName}/>
          </div>
          <ProductGrid />
        </div>
      </div>

      {/* Newsletter */}
      <section className="bg-gray-50 py-12 md:py-16 mt-auto">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="text-gray-600 mb-6 text-sm md:text-base">Sign up for deals, new products and promotions</p>
            <form className="flex gap-2">
              <Input type="email" placeholder="Email address" className="flex-1" />
              <Button className="bg-black hover:bg-black/90 text-white whitespace-nowrap">Signup</Button>
            </form>
          </div>
        </div>
      </section>


    </div>
  )
}