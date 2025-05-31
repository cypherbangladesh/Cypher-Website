import React from 'react';
import { ShoppingBag, Compass, BookOpen, Database, Microchip, SearchCode } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { BlurFade } from '../magicui/blur-fade';
// import { MagicCard } from '../magicui/magic-card';
// import { useTheme } from "next-themes";

const FeatureSection = () => {
  
  const features = [
    {
      icon: <Microchip className="w-8 h-8 text-cypher-600" />,
      title: 'Component Library',
      description: 'Access our extensive library of pre-tested components and integrate them seamlessly into your projects.'
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-cypher-600" />,
      title: 'Buy & Sell Components',
      description: 'Purchase quality-assured components or sell your own creations in our marketplace.'
    },
    {
      icon: <Compass className="w-8 h-8 text-cypher-600" />,
      title: 'Project Consultancy',
      description: 'Get expert guidance and support for your robotics projects from ideation to execution.'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-cypher-600" />,
      title: 'Workshops & Learning',
      description: 'Enhance your skills with our interactive workshops and comprehensive learning resources.'
    },
    {
      icon: <SearchCode className="w-8 h-8 text-cypher-600" />,
      title: 'Research & Development',
      description: 'Collaborate with us on cutting-edge research to push the boundaries of what\'s possible.'
    },
    {
      icon: <Database className="w-8 h-8 text-cypher-600" />,
      title: '3D Parts',
      description: 'Find and download high-quality 3D printable parts designed specifically for robotics applications.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">What We Offer</h2>
          </BlurFade>
          <BlurFade delay={0.25 * 2} inView>
          <p className="text-base md:text-lg max-w-3xl mx-auto mb-12 text-gray-700 px-4">
            Our comprehensive suite of services and resources designed to support your robotics journey
            at every stage, from ideation to execution.
          </p>
          </BlurFade>
        </div>
        <BlurFade delay={0.25*3} inView>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            
            <div 
              key={index} 
              className="p-6 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-cypher-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>

            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center gap-4 ">
          <Button>
          <Link href="#services" className="">
            See Our Full Offer
          </Link>
          </Button>
          <Button variant="outline">
          <Link href="#contact" className="">
            Let{`'`}s Talk
          </Link>
          </Button>
        </div>
        </BlurFade>
      </div>

      
    </section>


      
  );
};

export default FeatureSection;
