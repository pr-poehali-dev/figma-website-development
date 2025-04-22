
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import ProjectsSection from '@/components/ProjectsSection';
import WorkStages from '@/components/WorkStages';
import InsulationSection from '@/components/InsulationSection';
import FoundationSection from '@/components/FoundationSection';
import RequestForm from '@/components/RequestForm';
import Certificates from '@/components/Certificates';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pattern">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Advantages />
        <ProjectsSection />
        <WorkStages />
        <InsulationSection />
        <FoundationSection />
        <RequestForm />
        <Certificates />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
