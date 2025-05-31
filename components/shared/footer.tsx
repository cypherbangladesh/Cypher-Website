import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"
import logo from "../../../public/assets/images/ok555.png"
import Image from "next/image"



// footer bg color - #00273d

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#012d47] text-white py-12">
      <div className="container max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8 px-4 xl:px-0">
          <div className="flex flex-col">
            <Image src={logo} className="w-60 mb-4"/>
            {/* <h3 className="text-xl font-bold mb-4">CypherEdge</h3> */}
            {/* <p className="text-gray-400 mb-4 text-sm">
            Empowering innovation through robotics technology. We provide high-quality components, tools, and
            education for robotics enthusiasts.
            </p> */}
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.facebook.com/cypheredgebangladesh" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <h4 className="font-semibold mb-4 text-[#1fcfff]">QUICK NAVIGATION</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-white">
                    Store
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-gray-400 hover:text-white">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>


            {/* Account  */}
            {/* <div>
            <h4 className="font-bold mb-4">Account</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/profile" className="text-gray-400 hover:text-white">
                  My Account
                </Link>
              </li>
              <li>
                <Link href="/profile/orders" className="text-gray-400 hover:text-white">
                  Order History
                </Link>
              </li>
              <li>
                <Link href="/profile/wishlist" className="text-gray-400 hover:text-white">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link href="/profile/address" className="text-gray-400 hover:text-white">
                  Addresses
                </Link>
              </li>
            </ul>
          </div> */}

            <div>
              <h4 className="font-semibold mb-4 text-[#1fcfff]">Contact</h4>
              <address className="text-gray-400 not-italic">
                <p>IT Business Incubator, CUET</p>
                <p>Chittagong, Bangladesh, 4349</p>
                <p className="my-3">Email: cypherbangladesh@gmail.com</p>
                <p>Phone: 01878904575, 01644529856</p>
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} CypherEdge. All rights reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-[#1fcfff] hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[#1fcfff] hover:text-white text-sm">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

