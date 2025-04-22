
import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, description }) => {
  return (
    <div className="relative group overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <p className="text-white/80 text-sm">{description}</p>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      image: "/placeholder.svg",
      title: "Складской ангар",
      description: "Бескаркасный склад 24х60м для хранения сельскохозяйственной продукции"
    },
    {
      image: "/placeholder.svg",
      title: "Производственное помещение",
      description: "Производственный цех 18х40м с утеплением и системой вентиляции"
    },
    {
      image: "/placeholder.svg",
      title: "Ангар для техники",
      description: "Хранилище для сельскохозяйственной техники 16х30м"
    },
    {
      image: "/placeholder.svg",
      title: "Овощехранилище",
      description: "Утепленное овощехранилище 18х45м с системой поддержания микроклимата"
    },
    {
      image: "/placeholder.svg",
      title: "Спортивный комплекс",
      description: "Крытый спортивный комплекс 20х40м для тенниса и волейбола"
    },
    {
      image: "/placeholder.svg",
      title: "Гараж для спецтехники",
      description: "Гаражный комплекс 15х35м для хранения и обслуживания спецтехники"
    },
    {
      image: "/placeholder.svg",
      title: "Зернохранилище",
      description: "Зернохранилище 21х50м с системой вентиляции"
    },
    {
      image: "/placeholder.svg",
      title: "Автомойка",
      description: "Комплекс для автомойки 12х24м с системой очистки воды"
    },
    {
      image: "/placeholder.svg",
      title: "Складской терминал",
      description: "Логистический терминал 24х80м с погрузочно-разгрузочными доками"
    }
  ];

  return (
    <section id="проекты" className="py-16 bg-light relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              image={project.image} 
              title={project.title} 
              description={project.description} 
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <button className="border border-primary text-primary px-8 py-2 hover:bg-primary/5 transition flex items-center">
            <span>Показать ещё</span>
            <span className="ml-2 text-xl">+</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
