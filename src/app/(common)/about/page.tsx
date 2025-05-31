import React from 'react';
import Image from 'next/image';
import { Users, Notebook as Robot, School, Star, Award, Quote, Cpu, Cog, Brain } from 'lucide-react';
import workImg1 from '../../../../public/assets/images/about/workImg1.avif'
import workImg2 from '../../../../public/assets/images/about/workImg2.avif'
import workImg3 from '../../../../public/assets/images/about/workImg3.avif'
import { TypingAnimation } from '@/components/magicui/typing-animation';

function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <TypingAnimation className="text-5xl font-bold mb-4">Innovating the Future of Robotics</TypingAnimation>
              {/* <h1 className="text-5xl font-bold mb-4">Innovating the Future of Robotics</h1> */}
              <p className="text-lg">Pioneering robotics education and innovation through hands-on workshops, custom solutions, and cutting-edge research.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <School className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">100+</h3>
              <p className="text-gray-600">Workshop Sessions</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Robot className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Custom Robots Built</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Students Trained</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Work Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Latest Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={workImg1}
                alt="Industrial Robot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Cpu className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Industrial Automation Robot</h3>
                </div>
                <p className="text-gray-600 mb-4">Custom-built robotic arm for automotive manufacturing with advanced vision systems and precise control mechanisms.</p>
                <ul className="text-gray-500 space-y-2">
                  <li>• 6-axis precision control</li>
                  <li>• Computer vision integration</li>
                  <li>• Real-time process monitoring</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={workImg2}
                alt="Educational Robot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Educational Robot Kit</h3>
                </div>
                <p className="text-gray-600 mb-4">Modular educational robot designed for STEM learning, featuring programmable components and sensor integration.</p>
                <ul className="text-gray-500 space-y-2">
                  <li>• Block-based programming</li>
                  <li>• Multiple sensors included</li>
                  <li>• Expandable design</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image 
                src={workImg3}
                alt="Research Robot"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Cog className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">Research Assistant Robot</h3>
                </div>
                <p className="text-gray-600 mb-4">Autonomous mobile robot platform for research laboratories, featuring advanced navigation and data collection capabilities.</p>
                <ul className="text-gray-500 space-y-2">
                  <li>• Autonomous navigation</li>
                  <li>• Data collection suite</li>
                  <li>• Cloud connectivity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We{`'`}re dedicated to advancing robotics education and innovation through hands-on learning experiences. Our team of experts brings cutting-edge robotics technology to universities and institutions, fostering the next generation of robotics engineers and enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=500&h=500&fit=crop`} 
                  alt="Team member" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Jane Smith</h3>
                  <p className="text-gray-600 mb-4">Robotics Engineer</p>
                  <p className="text-gray-500">Ph.D. in Robotics Engineering with 10+ years of experience in industrial automation.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Experts Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Quote className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6">{`"`}Their innovative approach to robotics education is transforming how we teach engineering concepts to the next generation.{`"`}</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Prof. John Davis</h4>
                  <p className="text-gray-600">MIT Robotics Lab</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Quote className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-gray-600 mb-6">{`"`}The quality of their custom robotics solutions and their commitment to education is unmatched in the industry.{`"`}</p>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" 
                  alt="Testimonial" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Dr. Sarah Chen</h4>
                  <p className="text-gray-600">Stanford Robotics Institute</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Recognition & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Award className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Innovation Excellence</h3>
                <p className="text-gray-600">2024 Robotics Industry Award</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Star className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Best Educational Program</h3>
                <p className="text-gray-600">National Education Summit 2023</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Award className="w-12 h-12 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-900">Technical Achievement</h3>
                <p className="text-gray-600">International Robotics Conference</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;