"use client"

import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Arduino Mega 2560",
    category: "Components",
    price: 45.99,
    stock: 32,
    sold: 128,
    trend: "up",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Raspberry Pi 4 Model B",
    category: "Components",
    price: 75.99,
    stock: 18,
    sold: 96,
    trend: "up",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Robot Arm Kit",
    category: "Bots",
    price: 129.99,
    stock: 24,
    sold: 64,
    trend: "down",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Soldering Station",
    category: "Tools",
    price: 89.99,
    stock: 42,
    sold: 58,
    trend: "up",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "3D Printed Robot Chassis",
    category: "3D Works",
    price: 35.99,
    stock: 15,
    sold: 52,
    trend: "down",
    image: "/placeholder.svg?height=40&width=40",
  },
]

export default function TopSellingProducts() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Product</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Sold</TableHead>
          <TableHead>Trend</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-3">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="rounded-md"
                />
                <span>{product.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <Badge variant="outline">{product.category}</Badge>
            </TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
            <TableCell>{product.stock}</TableCell>
            <TableCell>{product.sold}</TableCell>
            <TableCell>
              {product.trend === "up" ? (
                <Badge variant="outline" className="text-emerald-500 border-emerald-500 flex gap-1 items-center">
                  <TrendingUp className="h-3 w-3" />
                  Up
                </Badge>
              ) : (
                <Badge variant="outline" className="text-red-500 border-red-500 flex gap-1 items-center">
                  <TrendingDown className="h-3 w-3" />
                  Down
                </Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

