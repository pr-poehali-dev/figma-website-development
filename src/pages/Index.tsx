import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InsulationSection from '@/components/InsulationSection';
import FoundationSection from '@/components/FoundationSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <InsulationSection />
        <FoundationSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
