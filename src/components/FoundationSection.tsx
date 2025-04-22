
import React from 'react';

interface FoundationCardProps {
  image: string;
  title: string;
  description: string;
}

const FoundationCard: React.FC<FoundationCardProps> = ({ image, title, description }) => {
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

const FoundationSection: React.FC = () => {
  const foundationTypes = [
    {
      image: "/placeholder.svg",
      title: "Ленточный",
      description: "Классический тип фундамента, представляющий собой железобетонную ленту по периметру сооружения. Обеспечивает равномерное распределение нагрузки."
    },
    {
      image: "/placeholder.svg",
      title: "Свайный",
      description: "Экономичный и быстровозводимый фундамент из забивных или винтовых свай. Идеально подходит для сложных грунтовых условий и заболоченных участков."
    },
    {
      image: "/placeholder.svg",
      title: "Плитный",
      description: "Монолитная железобетонная плита под всей площадью сооружения. Отличается высокой прочностью и устойчивостью к деформациям, подходит для неустойчивых грунтов."
    },
    {
      image: "/placeholder.svg",
      title: "Свайный",
      description: "Комбинированный фундамент из железобетонных балок на свайных опорах. Сочетает преимущества свайного и ленточного фундаментов."
    }
  ];

  return (
    <section id="фундамент" className="py-16 bg-light relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">ФУНДАМЕНТ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {foundationTypes.map((type, index) => (
            <FoundationCard 
              key={index} 
              image={type.image} 
              title={type.title} 
              description={type.description} 
            />
          ))}
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute left-0 top-1/3 bottom-0 w-1/3 bg-gray-100/50"></div>
      <div className="absolute right-1/4 top-1/3 w-16 h-32 bg-gray-100/70"></div>
    </section>
  );
};

export default FoundationSection;
