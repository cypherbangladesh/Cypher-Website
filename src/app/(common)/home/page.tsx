import CallToAction from '@/components/home/CallToAction';
import CommunitySection from '@/components/home/CommunitySection';
import CourseSection from '@/components/home/CourseSection';
import FeatureSection from '@/components/home/FeatureSection';
import HeroSection from '@/components/home/HeroSection';
import ProductSection from '@/components/home/ProductSection';
import React from 'react';

function Page() {
    return (
        <div>
            <HeroSection/>
            <FeatureSection/>
            <ProductSection/>
            <CourseSection/>
            <CommunitySection/>
            <CallToAction/>
        </div>
    );
}

export default Page;