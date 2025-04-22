
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Advantage: React.FC<{title: string; description: string}> = ({ title, description }) => {
  return (
    <div className="flex items-start mb-8">
      <CheckCircle className="text-primary mr-4 flex-shrink-0 mt-1" size={24} />
      <div>
        <h3 className="font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Advantages: React.FC = () => {
  const advantages = [
    {
      title: "Быстрое возведение конструкций",
      description: "Монтаж занимает минимальное количество времени благодаря отсутствию каркаса."
    },
    {
      title: "Не требует специального фундамента",
      description: "Бескаркасные сооружения можно устанавливать практически на любую ровную поверхность."
    },
    {
      title: "Высокая прочность и надежность",
      description: "Металлические конструкции выдерживают высокие нагрузки и служат долгие годы."
    },
    {
      title: "Мобильность и универсальность",
      description: "Конструкции можно при необходимости демонтировать и перенести на новое место."
    }
  ];

  return (
    <section className="py-16 relative bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-10">ПРЕИМУЩЕСТВА</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {advantages.map((advantage, index) => (
            <Advantage 
              key={index} 
              title={advantage.title} 
              description={advantage.description} 
            />
          ))}
        </div>
      </div>
      
      {/* Декоративное изображение */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-cover bg-center opacity-20" 
           style={{backgroundImage: "url('/placeholder.svg')"}}></div>
      
      {/* Декоративная линия */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
    </section>
  );
};

export default Advantages;
