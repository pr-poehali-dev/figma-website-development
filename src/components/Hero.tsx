import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="bg-pattern h-[500px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold text-primary mb-6">
            Профессиональные строительные решения
          </h1>
          <p className="text-xl mb-8 text-gray-700">
            Качественные услуги по утеплению и строительству фундаментов 
            с гарантией и использованием современных технологий
          </p>
          <div className="flex space-x-4">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded">
              Заказать консультацию
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
