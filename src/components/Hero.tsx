
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-secondary/30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-primary mb-4">
            ПРОИЗВОДСТВО<br />
            И ПРОДАЖА<br />
            БЕСКАРКАСНЫХ<br />
            МЕТАЛЛОКОНСТРУКЦИЙ
          </h1>
          
          <div className="flex mt-8 space-x-4">
            <button className="bg-primary text-white px-6 py-2 rounded hover:bg-primary/90 transition">
              Заказать консультацию
            </button>
            <button className="border border-primary text-primary px-6 py-2 rounded hover:bg-primary/10 transition">
              Подробнее о технологии
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-center" 
           style={{backgroundImage: "url('/placeholder.svg')"}}></div>
      
      {/* Декоративные элементы */}
      <div className="absolute left-1/2 top-10 bottom-10 w-1 bg-gray-200"></div>
      <div className="absolute left-1/3 top-20 w-20 h-40 border border-gray-200"></div>
    </section>
  );
};

export default Hero;
