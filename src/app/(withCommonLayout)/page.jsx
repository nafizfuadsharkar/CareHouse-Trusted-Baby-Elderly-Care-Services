import AboutSection from '@/components/Home/AboutSection';
import HeroBanner from '@/components/Home/HeroBanner';
import ServicesSection from '@/components/Home/ServicesSection';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import React from 'react';

export const metadata = {
  title: "CareHouse | Trusted Baby & Elderly Care Services",
  description:
    "CareHouse provides trusted baby sitting, elderly care and special home care services with easy booking and verified caregivers.",
};

const Home = () => {
  return (
    <div className="overflow-hidden ">
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
