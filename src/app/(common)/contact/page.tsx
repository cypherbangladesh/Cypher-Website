import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Truck, RotateCcw, Shield, HeadphonesIcon } from "lucide-react"

import roboImg from "../../../../public/assets/images/roboshop.webp"
import { BlurFade } from "@/components/magicui/blur-fade"
import { TextAnimate } from "@/components/magicui/text-animate"

export default function Page() {

    const latitude = 22.4609711;
const longitude = 91.9704552;

const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4241674197276!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4670702e31%3A0xa5777fb3853e32ec!2s234%20Hai%20Ba%20Trung%2C%20District%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1629785814037!5m2!1sen!2s`;

// https://www.google.com/maps/@22.4609711,91.9704552,17z?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D


    return (
        <div className="min-h-screen max-w-7xl mx-auto flex flex-col">

            <main className="flex-1">
                {/* Hero Section */}
                <section className="py-8 md:py-16 bg-white">
                    <div className="container mx-auto px-4">

                        <TextAnimate animation="slideUp" delay={0.5} as="h1" className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                            We believe in innovation through robotics technology.
                        </TextAnimate>

                        <TextAnimate animation="slideUp" delay={1} as="p" className="text-gray-600 text-sm md:text-base max-w-3xl">
                            Our features cutting-edge robotics components, with precision engineering, advanced sensors, and
                            innovative designs, which can be incorporated into any robotics project. The products are designed for
                            their reliability, to last for generations, faithful to the principles of quality engineering with a touch
                            of the future.
                        </TextAnimate>
                    </div>
                </section>

                {/* About Section */}
                <section className="py-8 md:py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
                            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                                <Image
                                    src={roboImg}
                                    alt="Modern living room"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <BlurFade delay={0.5}>
                                <div className="bg-white p-6 md:p-8 rounded-lg">
                                    <h2 className="text-xl md:text-2xl font-bold mb-3">About Us</h2>
                                    <p className="text-gray-600 text-sm md:text-base mb-3">
                                        RoboTech is a robotics components and education store based in Silicon Valley, USA. Est since 2018.
                                    </p>
                                    <p className="text-gray-600 text-sm md:text-base mb-6">
                                        Our customer service is always prepared to support you 24/7
                                    </p>
                                    <Link href="/shop">
                                        <Button className="bg-black hover:bg-black/90 text-white w-full md:w-auto">
                                            Shop Now
                                        </Button>
                                    </Link>
                                </div>
                            </BlurFade>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-8 md:py-12">

                    <div className="container mx-auto px-4">
                        <h2 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12">Contact Us</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
                            <div className="bg-gray-50 p-4 md:p-6 text-center rounded-lg">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                    <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                                </div>
                                <h3 className="text-sm font-medium mb-2">ADDRESS</h3>
                                <p className="text-gray-600 text-sm">
                                    IT Business Incubator, CUET<br />
                                    Chittagong, Bangladesh, 4349
                                </p>
                            </div>

                            <div className="bg-gray-50 p-4 md:p-6 text-center rounded-lg">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                    <Phone className="h-5 w-5 md:h-6 md:w-6" />
                                </div>
                                <h3 className="text-sm font-medium mb-2">CONTACT US</h3>
                                <p className="text-gray-600 text-sm">01878904575, 01644529856</p>
                            </div>

                            <div className="bg-gray-50 p-4 md:p-6 text-center rounded-lg">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                                    <Mail className="h-5 w-5 md:h-6 md:w-6" />
                                </div>
                                <h3 className="text-sm font-medium mb-2">EMAIL</h3>
                                <p className="text-gray-600 text-sm">cypherbangladesh@gmail.com</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <form className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">
                                            FULL NAME
                                        </label>
                                        <Input
                                            type="text"
                                            id="name"
                                            placeholder="Your Name"
                                            className="w-full text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
                                            EMAIL ADDRESS
                                        </label>
                                        <Input
                                            type="email"
                                            id="email"
                                            placeholder="Your Email"
                                            className="w-full text-sm"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">
                                            MESSAGE
                                        </label>
                                        <Textarea
                                            id="message"
                                            placeholder="Your message"
                                            className="w-full min-h-[120px] md:min-h-[150px] text-sm"
                                        />
                                    </div>

                                    <Button className="w-full bg-black hover:bg-black/90 text-white text-sm">
                                        Send Message
                                    </Button>
                                </form>
                            </div>

                            <div className="relative h-[300px] md:h-auto">
                                <iframe
                                    src={mapSrc}
                                    className="w-full h-full rounded-lg"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                </section>

                {/* Features Section */}
                <section className="py-8 md:py-12 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            <div className="text-center">
                                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3">
                                    <Truck className="w-10 h-10" />
                                </div>
                                <h3 className="text-sm font-medium mb-1">Free Shipping</h3>
                                <p className="text-xs md:text-sm text-gray-600">Order above $200</p>
                            </div>

                            <div className="text-center">
                                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3">
                                    <RotateCcw className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-sm font-medium mb-1">Money-back</h3>
                                <p className="text-xs md:text-sm text-gray-600">30 days guarantee</p>
                            </div>

                            <div className="text-center">
                                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3">
                                    <Shield className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-sm font-medium mb-1">Secure Payments</h3>
                                <p className="text-xs md:text-sm text-gray-600">Secured by Stripe</p>
                            </div>

                            <div className="text-center">
                                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3">
                                    <HeadphonesIcon className="h-10 w-10 text-primary" />
                                </div>
                                <h3 className="text-sm font-medium mb-1">24/7 Support</h3>
                                <p className="text-xs md:text-sm text-gray-600">Phone and Email support</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}