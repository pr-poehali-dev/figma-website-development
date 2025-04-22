import React from 'react';

interface FoundationCardProps {
  title: string;
  description: string;
  image: string;
}

const FoundationCard: React.FC<FoundationCardProps> = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} />
      <div className="service-card-content">
        <h3 className="service-card-title">{title}</h3>
        <p className="service-card-description">{description}</p>
      </div>
    </div>
  );
};

const FoundationSection: React.FC = () => {
  const foundationTypes = [
    {
      title: "Ленточный",
      description: "Традиционный тип фундамента в виде бетонной ленты по периметру и внутренним несущим стенам. Высокая надежность и равномерное распределение нагрузки.",
      image: "/placeholder.svg"
    },
    {
      title: "Столбчатый",
      description: "Экономичный вариант на основе бетонных столбов, размещенных в ключевых точках нагрузки. Идеален для легких построек на стабильных грунтах.",
      image: "/placeholder.svg"
    },
    {
      title: "Плитный",
      description: "Монолитная железобетонная плита, распределяющая нагрузку по всей площади. Лучший выбор для проблемных грунтов и зданий с высокой нагрузкой.",
      image: "/placeholder.svg"
    },
    {
      title: "Свайный",
      description: "Система бетонных или металлических свай, передающих нагрузку на глубокие слои грунта. Оптимален для слабых, проседающих и подвижных грунтов.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="фундамент" className="py-10 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="section-title">ФУНДАМЕНТ</h2>
        <div className="card-container">
          {foundationTypes.map((item, index) => (
            <FoundationCard 
              key={index} 
              title={item.title} 
              description={item.description} 
              image={item.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundationSection;
