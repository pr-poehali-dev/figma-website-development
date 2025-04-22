
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle } from 'lucide-react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description }) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-48">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-end p-4">
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      imageUrl: "/placeholder.svg",
      title: "Ангар для агротехники",
      description: "Бескаркасное сооружение для хранения сельскохозяйственной техники размером 15x30 метров."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Складской комплекс",
      description: "Серия складских помещений для хранения строительных материалов с высокими потолками."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Производственный цех",
      description: "Промышленное помещение для размещения производственного оборудования с системой вентиляции."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Навес для автотранспорта",
      description: "Просторный навес для защиты грузового автотранспорта от осадков на логистическом терминале."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Спортивный комплекс",
      description: "Крытая площадка для занятий спортом с системой отопления и кондиционирования."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Выставочный павильон",
      description: "Временное сооружение для проведения выставок сельскохозяйственной продукции."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Хранилище для зерна",
      description: "Специализированное хранилище с системой поддержания микроклимата для зерновых культур."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Автомойка",
      description: "Бескаркасное сооружение для размещения автомоечного комплекса с системой очистки воды."
    },
    {
      imageUrl: "/placeholder.svg",
      title: "Гараж для спецтехники",
      description: "Утепленный гараж для ремонта и обслуживания специальной техники с смотровой ямой."
    }
  ];

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-10">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 9).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Button className="flex items-center gap-2">
            <span>Показать еще</span>
            <PlusCircle size={16} />
          </Button>
        </div>
      </div>

      {/* Декоративная линия */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
    </section>
  );
};

export default ProjectsSection;
