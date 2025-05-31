"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  GraduationCap,
  Users,
  //CreditCard,
  //Megaphone,
  //BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface SidebarItem {
  title: string
  href: string
  icon: React.ReactNode
  submenu?: { title: string; href: string }[]
}

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  const sidebarItems: SidebarItem[] = [
    {
      title: "Dashboard",
      href: "/admin",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Products",
      href: "/admin/products",
      icon: <ShoppingBag className="h-5 w-5" />,
      submenu: [
        { title: "All Products", href: "/admin/products" },
        { title: "Add Product", href: "/admin/products/add" },
        { title: "Update Product", href: "/admin/products/update" },
      ],
    },
    {
      title: "Orders & Rentals",
      href: "/admin/orders",
      icon: <Package className="h-5 w-5" />,
      submenu: [
        { title: "Sales Orders", href: "/admin/orders/sales" },
        { title: "Rental Requests", href: "/admin/orders/rentals" },
        { title: "Invoices", href: "/admin/orders/invoices" },
      ],
    },
    {
      title: "Courses",
      href: "/admin/courses",
      icon: <GraduationCap className="h-5 w-5" />,
      submenu: [
        { title: "All Courses", href: "/admin/courses" },
        { title: "Add Course", href: "/admin/courses/add" },
        { title: "Enrollments", href: "/admin/courses/enrollments" },
      ],
    },
    {
      title: "Customers",
      href: "/admin/users",
      icon: <Users className="h-5 w-5" />,
      submenu: [
        { title: "All Customers", href: "/admin/customers" },
        { title: "Instructors", href: "/admin/customers/instructors" },
      ],
    },
    // {
    //   title: "Payments",
    //   href: "/admin/payments",
    //   icon: <CreditCard className="h-5 w-5" />,
    // },
    // {
    //   title: "Marketing",
    //   href: "/admin/marketing",
    //   icon: <Megaphone className="h-5 w-5" />,
    // },
    // {
    //   title: "Reports",
    //   href: "/admin/reports",
    //   icon: <BarChart3 className="h-5 w-5" />,
    // },
    {
      title: "Settings",
      href: "/admin/settings",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
    if (!collapsed) {
      setOpenSubmenu(null)
    }
  }

  const toggleSubmenu = (title: string) => {
    if (openSubmenu === title) {
      setOpenSubmenu(null)
    } else {
      setOpenSubmenu(title)
    }
  }

  return (
    <div
      className={cn(
        "min-h-screen bg-background border-r flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64",
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b">
        {!collapsed && (
          <Link href="/admin" className="flex items-center">
            <span className="text-xl font-bold bg-clip-text">
              CyperEdge
            </span>
            <span className="ml-2 text-xs font-medium text-muted-foreground">Admin</span>
          </Link>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className="ml-auto"
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <nav className="px-2 py-4">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.title}>
                <div className="flex flex-col">
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                    onClick={(e) => {
                      if (item.submenu && item.submenu.length > 0) {
                        e.preventDefault()
                        toggleSubmenu(item.title)
                      }
                    }}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {!collapsed && (
                      <>
                        <span className="flex-1">{item.title}</span>
                        {item.submenu && item.submenu.length > 0 && (
                          <ChevronRight
                            className={cn("h-4 w-4 transition-transform", openSubmenu === item.title && "rotate-90")}
                          />
                        )}
                      </>
                    )}
                  </Link>

                  {!collapsed && item.submenu && openSubmenu === item.title && (
                    <ul className="mt-1 ml-6 space-y-1">
                      {item.submenu.map((subitem) => (
                        <li key={subitem.title}>
                          <Link
                            href={subitem.href}
                            className={cn(
                              "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                              pathname === subitem.href
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground",
                            )}
                          >
                            {subitem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea>

      <div className="p-4 border-t">
        {!collapsed && (
          <div className="text-xs text-muted-foreground">
            <p>RoboTech Admin v1.0</p>
          </div>
        )}
      </div>
    </div>
  )
}

