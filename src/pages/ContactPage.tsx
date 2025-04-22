
import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pattern">
      <Header />
      <main className="flex-grow">
        <div className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-primary mb-6">Наши контакты</h1>
            <p className="text-lg text-gray-600 max-w-3xl">
              Мы всегда рады ответить на ваши вопросы о бескаркасных металлоконструкциях. 
              Свяжитесь с нами удобным для вас способом, и наши специалисты проконсультируют вас 
              по всем интересующим вопросам.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
