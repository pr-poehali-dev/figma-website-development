
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface FoundationCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const FoundationCard: React.FC<FoundationCardProps> = ({ imageUrl, title, description }) => {
  return (
    <Card className="overflow-hidden">
      <div className="h-48">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const FoundationSection: React.FC = () => {
  const foundationTypes = [
    {
      imageUrl: "/placeholder.svg",
      title: "Ленточный",
      description: "Классический тип фундамента, распределяющий нагрузку по периметру здания. Подходит для большинства грунтов и конструкций."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Столбчатый",
      description: "Экономичное решение, состоящее из отдельных опор. Идеально для легких конструкций и участков с перепадами высот."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Плитный",
      description: "Монолитная железобетонная плита, равномерно распределяющая нагрузку. Оптимален для слабых и пучинистых грунтов."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Свайный",
      description: "Фундамент на опорных элементах, погруженных в грунт. Подходит для сложных грунтов и обеспечивает высокую устойчивость."
    }
  ];

  return (
    <section id="фундамент" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-10">ФУНДАМЕНТ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foundationTypes.map((type, index) => (
            <FoundationCard key={index} {...type} />
          ))}
        </div>
      </div>

      {/* Декоративная линия */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
      
      {/* Декоративные прямоугольники */}
      <div className="absolute right-1/4 top-10 w-16 h-40 bg-gray-100"></div>
      <div className="absolute left-1/3 bottom-20 w-20 h-32 bg-gray-100"></div>
    </section>
  );
};

export default FoundationSection;
