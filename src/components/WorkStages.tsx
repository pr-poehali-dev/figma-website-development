
import React from 'react';

interface StageProps {
  number: number;
  title: string;
  description: string;
}

const Stage: React.FC<StageProps> = ({ number, title, description }) => {
  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold">
          {number}
        </div>
      </div>
      <div>
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

const WorkStages: React.FC = () => {
  const stages = [
    {
      number: 1,
      title: "Подготовка проекта",
      description: "Разработка технического задания и проектной документации с учетом всех требований заказчика."
    },
    {
      number: 2,
      title: "Подготовка площадки",
      description: "Расчистка территории и подготовка основания для фундамента будущего сооружения."
    },
    {
      number: 3,
      title: "Закладка фундамента",
      description: "Строительство фундамента согласно проектной документации и с учетом особенностей грунта."
    },
    {
      number: 4,
      title: "Изготовление конструкций",
      description: "Производство металлических арок и элементов сооружения на специализированном оборудовании."
    },
    {
      number: 5,
      title: "Монтаж конструкции",
      description: "Установка и сборка металлических арок на подготовленном фундаменте."
    },
    {
      number: 6,
      title: "Обшивка сооружения",
      description: "Покрытие конструкции кровельным материалом и установка торцевых элементов."
    },
    {
      number: 7,
      title: "Прокладка коммуникаций",
      description: "Монтаж систем электроснабжения, вентиляции и других необходимых коммуникаций."
    },
    {
      number: 8,
      title: "Внутренняя отделка",
      description: "Утепление конструкции и отделка внутреннего пространства согласно требованиям заказчика."
    },
    {
      number: 9,
      title: "Финальная проверка",
      description: "Контроль качества выполненных работ и проверка соответствия готового объекта проектной документации."
    },
    {
      number: 10,
      title: "Сдача объекта",
      description: "Передача готового сооружения заказчику и оформление всей необходимой документации."
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-10">ЭТАПЫ РАБОТЫ</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8">
              {stages.slice(0, 5).map((stage) => (
                <Stage key={stage.number} {...stage} />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8">
              {stages.slice(5, 10).map((stage) => (
                <Stage key={stage.number} {...stage} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
      <div className="absolute left-0 top-20 bottom-20 w-1/3 bg-cover bg-center opacity-20" 
           style={{backgroundImage: "url('/placeholder.svg')"}}></div>
    </section>
  );
};

export default WorkStages;
