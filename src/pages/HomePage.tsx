import React from 'react';
import { Hero } from '../components/home/Hero';
import { BrandStrip } from '../components/home/BrandStrip';
import { CategoryGrid } from '../components/home/CategoryGrid';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { WhyTanush } from '../components/home/WhyTanush';
import { HowItWorks } from '../components/home/HowItWorks';
import { Testimonials } from '../components/home/Testimonials';
import { CallToAction } from '../components/home/CallToAction';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <BrandStrip />
      <CategoryGrid />
      <FeaturedProducts />
      <FeaturedServices />
      <WhyTanush />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </main>
  );
};
