
import React from 'react';
import { Shield, Clock, Wind, Coins, PenTool, LineChart } from 'lucide-react';

const Advantages: React.FC = () => {
  return (
    <section id="преимущества" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">ПРЕИМУЩЕСТВА</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Clock size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Быстрота возведения</h3>
              <p className="text-gray-600">Монтаж бескаркасного ангара происходит в 2-3 раза быстрее, чем при использовании традиционных технологий строительства.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Shield size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Надежность и долговечность</h3>
              <p className="text-gray-600">Срок службы бескаркасных ангаров составляет не менее 25 лет без потери эксплуатационных характеристик.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Wind size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Высокая прочность и устойчивость</h3>
              <p className="text-gray-600">Конструкции выдерживают экстремальные нагрузки: снеговые до 350 кг/м², ветровые до 120 км/ч.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <Coins size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Экономическая эффективность</h3>
              <p className="text-gray-600">Оптимальная стоимость по сравнению с традиционными методами строительства и быстрая окупаемость.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <PenTool size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Гибкость проектирования</h3>
              <p className="text-gray-600">Возможность реализации индивидуальных проектов с различными размерами и конфигурациями.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-gray-100 p-3 rounded-full mr-4">
              <LineChart size={24} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Полная герметичность</h3>
              <p className="text-gray-600">Цельная конструкция без швов обеспечивает полную защиту от атмосферных осадков и ветра.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративное изображение */}
      <div className="absolute right-0 bottom-0 w-1/2 h-2/3 bg-cover opacity-20" 
           style={{backgroundImage: "url('/placeholder.svg')"}}></div>
    </section>
  );
};

export default Advantages;
