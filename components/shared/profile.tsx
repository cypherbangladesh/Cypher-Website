"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Package, User, Settings, CreditCard, LogOut } from "lucide-react"
import Image from "next/image"
import { toast } from "@/hooks/use-toast"
import { ScrollArea } from "@radix-ui/react-scroll-area"

export default function Profile() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showAddressForm, setShowAddressForm] = useState(false)

  // Sample addresses data
  const addresses = [
    {
      name: "Home",
      fullName: "John Doe",
      street: "123 Main St, Apt 4B",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "United States",
      phone: "+1 (555) 123-4567",
      isDefault: true,
    },
    {
      name: "Work",
      fullName: "John Doe",
      street: "456 Business Ave, Suite 200",
      city: "Workville",
      state: "CA",
      zip: "54321",
      country: "United States",
      phone: "+1 (555) 987-6543",
      isDefault: false,
    },
  ]
  

  return (
    <ScrollArea className="h-[700px] border">
    <div className="container  mx-auto px-4 py-6 sm:py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Sidebar */}
        <div className="lg:w-1/4 w-full">
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <CardTitle>John Doe</CardTitle>
                <CardDescription>john.doe@example.com</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <nav className="space-y-2">
                <Button
                  variant={activeTab === "profile" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("profile")}
                >
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button
                  variant={activeTab === "orders" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("orders")}
                >
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button
                  variant={activeTab === "rentals" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("rentals")}
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Rentals
                </Button>
                <Button
                  variant={activeTab === "payment" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("payment")}
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Button>
                <Button
                  variant={activeTab === "settings" ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </nav>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4 w-full">
          {activeTab === "profile" && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="address">Addresses</Label>
                    <Button variant="outline" size="sm" onClick={() => setShowAddressForm(!showAddressForm)}>
                      {showAddressForm ? "Cancel" : "Add New Address"}
                    </Button>
                  </div>

                  {showAddressForm && (
                    <Card className="p-4">
                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="addressName">Address Name</Label>
                            <Input id="addressName" placeholder="Home, Work, etc." />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name</Label>
                            <Input id="fullName" placeholder="Full Name" defaultValue="John Doe" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="streetAddress">Street Address</Label>
                          <Input id="streetAddress" placeholder="Street Address" />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <Input id="city" placeholder="City" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State/Province</Label>
                            <Input id="state" placeholder="State/Province" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="zipCode">ZIP/Postal Code</Label>
                            <Input id="zipCode" placeholder="ZIP/Postal Code" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Input id="country" placeholder="Country" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="Phone Number" />
                        </div>

                        <div className="flex items-center space-x-2">
                          <input type="checkbox" id="defaultAddress" className="rounded" />
                          <Label htmlFor="defaultAddress">Set as default address</Label>
                        </div>

                        <div className="flex justify-end">
                          <Button
                            onClick={() => {
                              setShowAddressForm(false)
                              toast({
                                title: "Address Added",
                                description: "Your new address has been added successfully.",
                              })
                            }}
                          >
                            Save Address
                          </Button>
                        </div>
                      </div>
                    </Card>
                  )}

                  <div className="space-y-4">
                    {addresses.map((address, index) => (
                      <Card key={index} className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-medium">{address.name}</h3>
                              {address.isDefault && <Badge>Default</Badge>}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{address.fullName}</p>
                            <p className="text-sm mt-2">{address.street}</p>
                            <p className="text-sm">
                              {address.city}, {address.state} {address.zip}
                            </p>
                            <p className="text-sm">{address.country}</p>
                            <p className="text-sm mt-2">{address.phone}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">
                              Edit
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Delete
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="avatar">Profile Picture</Label>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button variant="outline">Change Picture</Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}

          {activeTab === "orders" && (
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and track your orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div key={order} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <p className="font-semibold">Order #{1000 + order}</p>
                          <p className="text-sm text-muted-foreground">Placed on March {order + 10}, 2025</p>
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2 md:mb-0">
                            {order === 1 ? "Delivered" : order === 2 ? "Shipped" : "Processing"}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="relative h-20 w-20 rounded-md overflow-hidden">
                          <Image src="/placeholder.svg" alt="Product" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Arduino Mega 2560 + Sensor Kit</p>
                          <p className="text-sm text-muted-foreground">Quantity: 1</p>
                          <p className="font-semibold">${(99.99).toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="flex justify-end gap-2">
                        <Button variant="outline" size="sm">
                          Track Order
                        </Button>
                        <Button size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "rentals" && (
            <Card>
              <CardHeader>
                <CardTitle>Rental History</CardTitle>
                <CardDescription>View and manage your rentals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((rental) => (
                    <div key={rental} className="border rounded-lg p-4">
                      <div className="flex flex-col md:flex-row justify-between mb-4">
                        <div>
                          <p className="font-semibold">Rental #{2000 + rental}</p>
                          <p className="text-sm text-muted-foreground">
                            {rental === 1 ? "March 15 - March 20, 2025" : "February 10 - February 15, 2025"}
                          </p>
                        </div>
                        <div>
                          <Badge variant={rental === 1 ? "default" : "secondary"} className="mb-2 md:mb-0">
                            {rental === 1 ? "Active" : "Returned"}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row gap-4 mb-4">
                        <div className="relative h-20 w-20 rounded-md overflow-hidden">
                          <Image src="/placeholder.svg" alt="Product" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">
                            {rental === 1 ? "3D Printer - Creality Ender 3" : "Oscilloscope - Rigol DS1054Z"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Duration: {rental === 1 ? "5 days" : "5 days"}
                          </p>
                          <p className="font-semibold">${rental === 1 ? (125).toFixed(2) : (150).toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="flex justify-end gap-2">
                        {rental === 1 ? (
                          <Button size="sm">Extend Rental</Button>
                        ) : (
                          <Button variant="outline" size="sm">
                            Rent Again
                          </Button>
                        )}
                        <Button variant={rental === 1 ? "outline" : "secondary"} size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "payment" && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-2 rounded-md">
                          <CreditCard className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Visa ending in 4242</p>
                          <p className="text-sm text-muted-foreground">Expires 12/25</p>
                        </div>
                      </div>
                      <Badge>Default</Badge>
                    </div>
                  </div>

                  <Button>Add Payment Method</Button>
                </div>
              </CardContent>
            </Card>
          )}

          {activeTab === "settings" && (
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your account settings and preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="password">Change Password</Label>
                  <Input id="password" type="password" placeholder="New password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input id="confirmPassword" type="password" placeholder="Confirm new password" />
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <p className="font-medium">Email Notifications</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="orderUpdates" className="rounded" defaultChecked />
                      <Label htmlFor="orderUpdates">Order updates</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="promotions" className="rounded" defaultChecked />
                      <Label htmlFor="promotions">Promotions and deals</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="newsletter" className="rounded" defaultChecked />
                      <Label htmlFor="newsletter">Newsletter</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="destructive">Delete Account</Button>
                <Button>Save Changes</Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
    </ScrollArea>
  )
}

