"use client"

import { useContext, useState } from "react"
import Image from "next/image"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Minus, Plus, ShoppingBag, ShoppingCart, X } from "lucide-react"
import { CartContext } from "@/context/CartContext"
import Link from "next/link"

interface CartItem {
  id: number
  name: string
  price: number
  color: string
  quantity: number
  image: string
}

const initialItems: CartItem[] = [
  {
    id: 1,
    name: "Tray Table",
    price: 19.19,
    color: "Black",
    quantity: 2,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Tray Table",
    price: 190.19,
    color: "Red",
    quantity: 2,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Table lamp",
    price: 39.00,
    color: "gold",
    quantity: 2,
    image: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Table lamp",
    price: 39.00,
    color: "gold",
    quantity: 2,
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Table lamp",
    price: 39.00,
    color: "gold",
    quantity: 2,
    image: "/placeholder.svg"
  },
  {
    id: 6,
    name: "Table lamp",
    price: 39.00,
    color: "gold",
    quantity: 2,
    image: "/placeholder.svg"
  },
  {
    id: 7,
    name: "Table lamp",
    price: 39.00,
    color: "gold",
    quantity: 2,
    image: "/placeholder.svg"
  },
  {
    id: 8,
    name: "Table lamp",
    price: 39.00,
    color: "gold",
    quantity: 2,
    image: "/placeholder.svg"
  },
]

export default function Cart() {
  // const [items, setItems] = useState<CartItem[]>(initialItems)

  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart, totalItems, isCartOpen } = useContext(CartContext);

  // const updateQuantity = (id: number, increment: boolean) => {
  //   setItems(items.map(item => {
  //     if (item.id === id) {
  //       const newQuantity = increment ? item.quantity + 1 : Math.max(1, item.quantity - 1)
  //       return { ...item, quantity: newQuantity }
  //     }
  //     return item
  //   }))
  // }

  // const removeItem = (id: number) => {
  //   setItems(items.filter(item => item.id !== id))
  // }

  // const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const subtotal = totalPrice;
  // const total = subtotal + (subtotal * 0.1) // Adding 10% for tax/shipping
  const total = totalPrice;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5" />
          {
            totalItems !== 0 && <span className="absolute top-1 right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              {totalItems}
            </span>
          }
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Cart ({totalItems})</SheetTitle>
        </SheetHeader>
        {
          cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1 py-12">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-1">Your cart is empty</h3>
              <p className="text-muted-foreground text-center mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Button asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col h-full pb-4">
              <div className="flex-1 overflow-auto py-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4 pr-2 md:pr-4 border-b">
                    <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {/* <p className="text-sm text-gray-500">Color: {item.color}</p> */}
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-2">
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 font-medium">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <Button
                  className="w-full bg-black hover:bg-black/90 text-white mt-2"
                  onClick={() => window.location.href = '/payment'}
                >
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full mt-2"
                  onClick={() => window.location.href = '/cart'}
                >
                  View Cart
                </Button>
              </div>
            </div>
          )
        }

      </SheetContent>
    </Sheet>
  )
}