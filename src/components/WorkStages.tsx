
import React from 'react';

const WorkStages: React.FC = () => {
  const stages = [
    { number: 1, title: "Заявка на расчёт", desc: "Оставляете заявку на сайте или по телефону. Наш менеджер связывается с вами для уточнения деталей." },
    { number: 2, title: "Расчёт стоимости", desc: "На основе полученных данных наши специалисты рассчитывают стоимость проекта." },
    { number: 3, title: "Подписание договора", desc: "После согласования всех деталей и стоимости подписываем договор на выполнение работ." },
    { number: 4, title: "Проектирование", desc: "Наши инженеры разрабатывают проект с учетом всех технических требований и пожеланий." },
    { number: 5, title: "Подготовка фундамента", desc: "Подготавливаем фундамент под монтаж металлоконструкций согласно проекту." },
    { number: 6, title: "Производство", desc: "Изготавливаем металлоконструкции на собственном производстве с строгим контролем качества." },
    { number: 7, title: "Доставка на объект", desc: "Осуществляем доставку готовых конструкций на объект в согласованные сроки." },
    { number: 8, title: "Монтаж", desc: "Наша бригада монтажников выполняет сборку и установку конструкций." },
    { number: 9, title: "Сдача объекта", desc: "Проводим финальную проверку качества и передаем готовый объект заказчику." },
    { number: 10, title: "Гарантийное обслуживание", desc: "Предоставляем гарантию на выполненные работы и конструкции." }
  ];

  return (
    <section id="этапы" className="py-16 bg-light relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">ЭТАПЫ РАБОТЫ</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Колонка с изображениями */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              <img 
                src="/placeholder.svg" 
                alt="Этап строительства 1" 
                className="w-full h-64 object-cover"
              />
              <img 
                src="/placeholder.svg" 
                alt="Этап строительства 2" 
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
          
          {/* Колонка с этапами */}
          <div className="w-full md:w-1/2 relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200"></div>
            
            <div className="space-y-6 pl-8">
              {stages.map((stage) => (
                <div key={stage.number} className="relative">
                  <div className="absolute left-[-32px] top-0 flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200">
                    <span className="text-sm text-gray-600">{stage.number}</span>
                  </div>
                  
                  <div className={stage.number === 10 ? "bg-primary text-white px-3 py-1 inline-block rounded-full text-sm mb-2" : "hidden"}>
                    ФИНАЛ
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-1">{stage.title}</h3>
                  <p className="text-gray-600 text-sm">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkStages;
