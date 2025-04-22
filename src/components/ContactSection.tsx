
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="контакты" className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-10">КОНТАКТЫ</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <div className="bg-gray-100 rounded-md overflow-hidden h-[400px]">
              {/* Здесь можно заменить на реальную карту с Google Maps или Яндекс.Карт */}
              <div className="w-full h-full bg-cover bg-center flex items-center justify-center text-gray-400"
                   style={{backgroundImage: "url('/placeholder.svg')"}}>
                Карта с расположением офиса
              </div>
            </div>
          </div>
          
          <div className="md:w-1/3">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Адрес офиса:</h3>
                <p className="flex items-center">
                  <MapPin size={18} className="mr-2 text-gray-600" />
                  г. Москва, ул. Строителей, 15
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Телефоны:</h3>
                <p className="flex items-center mb-1">
                  <Phone size={18} className="mr-2 text-gray-600" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Phone size={18} className="mr-2 text-gray-600" />
                  +7 (495) 765-43-21
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Email:</h3>
                <p className="flex items-center">
                  <Mail size={18} className="mr-2 text-gray-600" />
                  info@metalkonstruktsii.ru
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Социальные сети:</h3>
                <div className="flex space-x-4">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Facebook size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Twitter size={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Instagram size={20} />
                  </Button>
                </div>
              </div>
              
              <Button className="bg-red-500 hover:bg-red-600 w-full">
                ЗАКАЗАТЬ ЗВОНОК
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративная линия */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
    </section>
  );
};

export default ContactSection;
