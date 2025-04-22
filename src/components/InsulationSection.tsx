
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface InsulationCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const InsulationCard: React.FC<InsulationCardProps> = ({ imageUrl, title, description }) => {
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

const InsulationSection: React.FC = () => {
  const insulationTypes = [
    {
      imageUrl: "/placeholder.svg",
      title: "Утепление минеральной ватой",
      description: "Эффективный материал для теплоизоляции с отличными звукоизоляционными свойствами. Не горюч, экологичен, долговечен."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Утепление пенофолом",
      description: "Фольгированный материал, отражающий тепловое излучение. Отличается легкостью монтажа и высокой эффективностью."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Утепление пенополиуретаном (ППУ)",
      description: "Бесшовный метод утепления, создающий монолитный слой. Обладает высокой адгезией и не имеет мостиков холода."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Утепление «Сэндвич»",
      description: "Двухслойные панели с утеплителем между ними. Обеспечивает высокую скорость монтажа и отличные теплоизоляционные характеристики."
    }
  ];

  return (
    <section id="утепление" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-10">УТЕПЛЕНИЕ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {insulationTypes.map((type, index) => (
            <InsulationCard key={index} {...type} />
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

export default InsulationSection;
