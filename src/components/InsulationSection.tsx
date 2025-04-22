
import React from 'react';

interface InsulationCardProps {
  image: string;
  title: string;
  description: string;
}

const InsulationCard: React.FC<InsulationCardProps> = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const InsulationSection: React.FC = () => {
  const insulationTypes = [
    {
      image: "/placeholder.svg",
      title: "Утепление минеральной ватой",
      description: "Эффективный и экономичный способ теплоизоляции бескаркасных ангаров. Минеральная вата обладает высокими теплоизоляционными свойствами и пожаробезопасностью."
    },
    {
      image: "/placeholder.svg",
      title: "Утепление пенофолом",
      description: "Тонкая теплоизоляция с отражающим эффектом. Пенофол представляет собой вспененный полиэтилен, покрытый с одной или двух сторон алюминиевой фольгой."
    },
    {
      image: "/placeholder.svg",
      title: "Утепление пенополиуретаном (ППУ)",
      description: "Бесшовная напыляемая изоляция, обеспечивающая высокую теплоэффективность и герметичность. ППУ имеет низкий коэффициент теплопроводности."
    },
    {
      image: "/placeholder.svg",
      title: "Утепление «Сэндвич»",
      description: "Многослойная теплоизоляция для бескаркасных ангаров, состоящая из двух слоев профилированного металла с утеплителем между ними."
    }
  ];

  return (
    <section id="утепление" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">УТЕПЛЕНИЕ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {insulationTypes.map((type, index) => (
            <InsulationCard 
              key={index} 
              image={type.image} 
              title={type.title} 
              description={type.description} 
            />
          ))}
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute right-0 top-1/3 bottom-0 w-1/3 bg-gray-100/50"></div>
      <div className="absolute left-1/4 top-1/3 w-16 h-32 bg-gray-100/70"></div>
    </section>
  );
};

export default InsulationSection;
