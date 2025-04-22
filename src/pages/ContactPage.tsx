
import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import RequestForm from '@/components/RequestForm';
import Footer from '@/components/Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-10">
        <div className="container mx-auto px-4 mb-10">
          <h1 className="text-4xl font-bold mb-6">Контактная информация</h1>
          <p className="text-gray-600 max-w-2xl">
            Мы всегда рады ответить на ваши вопросы. Свяжитесь с нами любым удобным для вас способом, и мы предоставим необходимую информацию о наших услугах, сроках и стоимости работ.
          </p>
        </div>
        <ContactSection />
        <RequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
