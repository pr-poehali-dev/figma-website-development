
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 bg-light overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-dark mb-6 leading-tight">
            ПРОИЗВОДСТВО<br />
            И ПРОДАЖА<br />
            БЕСКАРКАСНЫХ<br />
            МЕТАЛЛОКОНСТРУКЦИЙ
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-md">
            Проектирование, изготовление и монтаж бескаркасных арочных металлоконструкций любой сложности.
          </p>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-cover bg-right" 
           style={{backgroundImage: "url('/placeholder.svg')"}}></div>
      
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      <div className="absolute left-1/3 top-20 w-20 h-40 border border-gray-200"></div>
      <div className="absolute right-20 bottom-20 w-40 h-20 border border-gray-200"></div>
      
      {/* Блоки видов металлоконструкций */}
      <div className="container mx-auto px-4 mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-md">
            <img src="/placeholder.svg" alt="Ангары" className="w-full h-40 object-cover mb-3" />
            <h3 className="text-lg font-semibold mb-2">ВИДЫ ОБЪЕКТОВ</h3>
            <p className="text-sm text-gray-600">Склады, ангары, гаражи, навесы, укрытия техники и многое другое</p>
          </div>
          
          <div className="bg-white p-4 shadow-md">
            <img src="/placeholder.svg" alt="Длина пролетов" className="w-full h-40 object-cover mb-3" />
            <h3 className="text-lg font-semibold mb-2">ДЛИНА ПРОЛЁТОВ АНГАРОВ</h3>
            <p className="text-sm text-gray-600">От 8 до 24 метров стандартные. Нестандартные по запросу.</p>
          </div>
          
          <div className="bg-white p-4 shadow-md">
            <img src="/placeholder.svg" alt="Методы крепления" className="w-full h-40 object-cover mb-3" />
            <h3 className="text-lg font-semibold mb-2">МЕТОДЫ КРЕПЛЕНИЯ К ФУНДАМЕНТУ</h3>
            <p className="text-sm text-gray-600">Возможны различные варианты крепления к разным типам фундаментов</p>
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button className="flex items-center text-primary">
            <span className="mr-1">Подробнее</span>
            <span className="text-xl">+</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
