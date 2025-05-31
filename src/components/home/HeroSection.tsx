"use client";
import Link from 'next/link';
import { Button } from '../ui/button';

import React, { useEffect, useState } from 'react';
import { NumberTicker } from '../magicui/number-ticker';


// min-h-[calc(100vh-250px)]

const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <section className="relative min-h-screen bg-hero-gradient overflow-hidden px-4">
            <div className="absolute inset-0 bg-[#012d47] bg-right bg-no-repeat bg-contain animate-pulse-subtle"></div>

            <div className='max-w-7xl mx-auto'>
                <div className="container px-4 md:pr-60 lg-px-4 relative z-10 flex flex-col justify-center min-h-[calc(100vh-310px)] md:min-h-[calc(100vh-250px)]">
                    <div className={`max-w-2xl transition-all duration-1000 delay-300 px-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Empowering Your Tech Innovations
                        </h1>
                        <p className="text-lg md:text-base text-gray-300 mb-8 max-w-xl">
                            Transform your ideas into reality with our cutting-edge robotics
                            platform. Whether you{`'`}re a hobbyist, professional, or educator, we{`'`}re here to support
                            your tech journey with innovation.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button variant="outline" className="hover:text-gray-700" asChild>
                                <Link href="#products" >
                                    See Our Products
                                </Link>
                            </Button>
                            <Button variant="outline" className='border text-white bg-transparent' asChild>
                                <Link href="#courses" className="">
                                    Explore Courses
                                </Link>
                            </Button>
                            
                        </div>
                    </div>
                </div>

                <div className="container relative z-10 px-4 pb-16 md:w-7/12">
                    <div className={`transition-all text-white duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="mb-4 px-4 text-2xl">Trusted by</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pl-10">
                            <div className="text-center">
                                <NumberTicker
                                    value={200}
                                    startValue={100}
                                    className="whitespace-pre-wrap text-white text-3xl md:text-4xl font-bold tracking-tighter"
                                />
                                <span className='text-3xl md:text-4xl'>+</span>
                                {/* <h3 className="text-3xl md:text-4xl font-bold ">200+</h3> */}
                                <p className="p-2">Users</p>
                            </div>
                            <div className="text-center">
                            <NumberTicker
                                    value={500}
                                    startValue={300}
                                    className="whitespace-pre-wrap text-white text-3xl md:text-4xl font-bold tracking-tighter"
                                />
                                <span className='text-3xl md:text-4xl'>+</span>
                                {/* <h3 className="text-3xl md:text-4xl font-bold ">500+</h3> */}
                                <p className="p-2">Products</p>
                            </div>
                            <div className="text-center">
                            <NumberTicker
                                    value={50}
                                    startValue={30}
                                    className="whitespace-pre-wrap text-white text-3xl md:text-4xl font-bold tracking-tighter"
                                />
                                <span className='text-3xl md:text-4xl'>+</span>
                                {/* <h3 className="text-3xl md:text-4xl font-bold ">50+</h3> */}
                                <p className="p-2">Workshops</p>
                            </div>
                            <div className="text-center">
                            <NumberTicker
                                    value={10}
                                    startValue={0}
                                    className="whitespace-pre-wrap text-white text-3xl md:text-4xl font-bold tracking-tighter"
                                />
                                <span className='text-3xl md:text-4xl'>+</span>
                                {/* <h3 className="text-3xl md:text-4xl font-bold ">10+</h3> */}
                                <p className="p-2">Universities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
