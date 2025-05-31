import Link from 'next/link';
import React from 'react';

const CommunitySection = () => {
  const communityEvents = [
    {
      title: 'Robotics Exhibition at North City Model College',
      description: 'Our annual robotics exhibition showcasing student projects and innovations from schools across the region.',
      image: 'https://img.freepik.com/free-vector/stylized-volunteers-help-charity-sharing-hope-isolated-flat-vector-illustration-cartoon-abstract-social-team-group-with-humanitarian-support_74855-11044.jpg?ga=GA1.1.1682582490.1742335952&semt=ais_hybrid',
      date: 'March 15, 2023'
    },
    {
      title: 'Hands-On Arduino Workshop at CBIT',
      description: 'An intensive weekend workshop introducing students to Arduino programming and basic electronics.',
      image: 'https://img.freepik.com/free-vector/stylized-volunteers-help-charity-sharing-hope-isolated-flat-vector-illustration-cartoon-abstract-social-team-group-with-humanitarian-support_74855-11044.jpg?ga=GA1.1.1682582490.1742335952&semt=ais_hybrid',
      date: 'April 22-23, 2023'
    }
  ];

  return (
    <section className="py-20 bg-[#ddf4ff]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-gray-900">Our Community in Action</h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-12 text-gray-700 px-4">
            Join our thriving community of makers, engineers, and enthusiasts who are pushing
            the boundaries of robotics and technology education.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <img
                    
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <div className="text-sm text-cypher-500 mb-2">{event.date}</div>
                  <h3 className="text-xl font-semibold mb-2 text-cypher-900">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <a href="#view-details" className="text-cypher-600 hover:text-cypher-800 font-medium inline-flex items-center">
                    Read more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="#community" className="inline-flex items-center justify-center rounded-md bg-cypher-700 px-6 py-2.5 text-sm font-medium text-white shadow transition-colors hover:bg-cypher-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cypher-500">
            View All Activities
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;