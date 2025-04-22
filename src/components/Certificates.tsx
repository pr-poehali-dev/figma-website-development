
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">
          СЕРТИФИКАТЫ<br />
          И БЛАГОДАРСТВЕННЫЕ ПИСЬМА
        </h2>
        
        <div className="relative">
          {/* Навигация слайдера */}
          <div className="flex justify-end mb-6">
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ChevronLeft size={18} />
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
          {/* Галерея сертификатов */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-white p-2 shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/placeholder.svg" 
                  alt={`Сертификат ${index + 1}`} 
                  className="w-full h-40 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
