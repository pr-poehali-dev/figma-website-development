
import React from 'react';
import { Card } from "@/components/ui/card";

const Certificates: React.FC = () => {
  const certificates = Array(6).fill(null).map((_, i) => ({
    id: i + 1,
    imageUrl: "/placeholder.svg"
  }));

  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-10">СЕРТИФИКАТЫ<br />И БЛАГОДАРСТВЕННЫЕ ПИСЬМА</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {certificates.map((cert) => (
            <Card key={cert.id} className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
              <div className="aspect-[3/4] w-full">
                <img 
                  src={cert.imageUrl} 
                  alt={`Сертификат ${cert.id}`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Декоративная линия */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
    </section>
  );
};

export default Certificates;
