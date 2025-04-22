import React from 'react';

interface InsulationCardProps {
  title: string;
  description: string;
  image: string;
}

const InsulationCard: React.FC<InsulationCardProps> = ({ title, description, image }) => {
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

const InsulationSection: React.FC = () => {
  const insulationTypes = [
    {
      title: "Утепление минеральной ватой",
      description: "Экологичный и негорючий материал, обеспечивает отличную тепло- и звукоизоляцию. Легко монтируется, позволяет стенам дышать, но требует защиты от влаги.",
      image: "/placeholder.svg"
    },
    {
      title: "Утепление пенофолом",
      description: "Тонкий отражающий материал с высокой теплоизоляцией, идеален для помещений с ограниченным пространством. Защищает от конденсата и снижает теплопотери.",
      image: "/placeholder.svg"
    },
    {
      title: "Утепление пенополиуретаном (ППУ)",
      description: "Бесшовное напыляемое утепление с высокой адгезией, заполняет все щели. Обеспечивает превосходную теплоизоляцию даже при малой толщине слоя.",
      image: "/placeholder.svg"
    },
    {
      title: "Утепление «Сэндвич»",
      description: "Многослойные панели с утеплителем между слоями, обеспечивают высокую энергоэффективность. Быстрый монтаж и долговечность конструкции.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section id="утепление" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="section-title">УТЕПЛЕНИЕ</h2>
        <div className="card-container">
          {insulationTypes.map((item, index) => (
            <InsulationCard 
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

export default InsulationSection;
