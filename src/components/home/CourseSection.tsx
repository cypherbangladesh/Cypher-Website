"use client";


import React, { useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { BlurFade } from '../magicui/blur-fade';

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  discount?: number;
}

const CourseSection = () => {
  const [courses] = useState<Course[]>([
    {
      id: 1,
      name: 'Line Follower Robot (Crash Course)',
      description: 'Learn to build a basic line follower robot in this beginner-friendly crash course.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=400&auto=format&fit=crop',
      price: 49.99,
      discount: 40
    },
    {
      id: 2,
      name: 'Robotics Fundamentals',
      description: 'Master the basics of robotics including mechanics, electronics, and programming.',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=400&auto=format&fit=crop',
      price: 99.99
    },
    {
      id: 3,
      name: 'Introduction to Electronics',
      description: 'A comprehensive introduction to electronics fundamentals for robotics enthusiasts.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
      price: 79.99
    }
  ]);

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <BlurFade delay={0.25} inView>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">Learn & Innovate With Our Courses</h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
            <p className="px-4 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12 text-gray-700">
              Expand your knowledge and skills with our expert-led courses designed for all experience
              levels, from beginners to advanced robotics enthusiasts.
            </p>
          </BlurFade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
              <div className="h-56 overflow-hidden relative">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {course.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                    {course.discount}% OFF
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-cypher-900">{course.name}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  {/* <span className="text-lg font-bold text-cypher-800">${course.price}</span> */}
                  <span className="text-xl font-bold text-cypher-800">Coming Soon!</span>
                  {/* <div className="flex space-x-2">
                    <Button variant="outline">
                      Learn More
                    </Button>
                    <Button >
                      Enroll Now
                    </Button>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="#all-courses" className="inline-flex items-center justify-center rounded-md bg-cypher-700 px-6 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-cypher-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cypher-500">
            View More Courses
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
