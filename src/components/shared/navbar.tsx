"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Search, User, Menu, } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
// import Cart from "./cart-sheet"
import mainLogo from "../../../public/assets/images/ok555.png"

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import Profile from "./profile"
// import { ScrollArea } from "@radix-ui/react-scroll-area"
// import path from "path"


// navBar bg color - #012d47



export default function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  // const [isCartOpen, setIsCartOpen] = useState(false)


  const navItems = [
    { name: "Home", path: "/home" },
    { name: "Store", path: "/products" },
    // { name: "Courses", path: "/courses" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <header className=" sticky top-0 bg-[#012d47] backdrop-blur-lg z-40">
      <div className="container max-w-7xl mx-auto px-4 py-4 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Mobile menu button - only visible on mobile */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only border">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px] p-0">
                <div className="flex flex-col h-full">
                  <div className="border-b p-4 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold" onClick={() => setIsOpen(false)}>
                      CyperEdge
                    </Link>
                    {/*<Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>*/}
                  </div>
                  <nav className="flex-1 overflow-auto p-4">
                    <ul className="space-y-3">
                      {navItems.map((item) => (
                        <li key={item.name}>
                          <Link
                            href={item.path}
                            className={cn(
                              "block py-2 text-base hover:text-gray-600 transition-colors",
                              pathname === item.path && "font-medium text-black",
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-6 border-t">
                      <ul className="space-y-3">
                        <li>
                          <Link
                            href="/profile"
                            className="block py-2 text-base hover:text-gray-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            My Account
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/profile/wishlist"
                            className="block py-2 text-base hover:text-gray-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Wishlist
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/profile/orders"
                            className="block py-2 text-base hover:text-gray-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            Orders
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </nav>
                  <div className="border-t p-4">
                    <div className="flex gap-4">
                      <Link href="/signin" className="flex-1" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/signup" className="flex-1" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-black hover:bg-black/90 text-white">Sign Up</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            <Link href="/home" className="text-xl font-bold px-4 xl:px-0">
              {/* CyperEdge */}
              <Image src={mainLogo} alt="CyperEdge Logo" className="w-28"/>
            </Link>
          </div>

          {/* Desktop navigation - hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={cn("text-sm hover:text-gray-600 transition-colors", pathname === item.path && "font-semibold text-md")}
              >
                {item.name}
              </Link>
            ))}
            {/* <Link href="/signup" className="text-sm hover:text-gray-600 transition-colors">SignUp</Link> */}
          </nav>

          <div className="flex items-center space-x-2 lg:space-x-4 pr-4 xl:pr-0">

            {/* search  */}
            <Button variant="ghost" size="icon" className="relative">
              <Search className="h-5 w-5" />
            </Button>

            {/* profile  */}
            {/* <Dialog>
              <DialogTrigger asChild>
                
                  <Button variant="ghost" size="icon" className="relative">
                    <User className="h-5 w-5" />
                  </Button>
                
              </DialogTrigger>
              
              <DialogContent className="sm:max-w-[1225px]">
                <DialogHeader>
                  <DialogTitle>Edit profile</DialogTitle>
                  <DialogDescription>
                    
                  </DialogDescription>
                </DialogHeader>
                
                <Profile></Profile>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog> */}


            {/* cart-sidebar  */}
            {/* <Cart /> */}

          </div>
        </div>
      </div>
    </header>
  )
}



