
import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection: React.FC = () => {
  return (
    <section id="контакты" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10">КОНТАКТЫ</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Карта */}
          <div className="w-full md:w-2/3 h-[400px] bg-gray-200">
            {/* Здесь будет карта (например, Google Maps или Яндекс Карты) */}
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Интерактивная карта
            </div>
          </div>
          
          {/* Информация */}
          <div className="w-full md:w-1/3">
            <div className="bg-light p-6 h-full">
              <h3 className="text-xl font-semibold mb-6">Наши координаты</h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex">
                  <MapPin size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Наш адрес:</p>
                    <p className="text-gray-600">г. Москва, ул. Промышленная, 11, стр. 3</p>
                  </div>
                </li>
                
                <li className="flex">
                  <Phone size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Телефон:</p>
                    <p className="text-gray-600">+7 (495) 123-45-67</p>
                  </div>
                </li>
                
                <li className="flex">
                  <Mail size={20} className="text-primary mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-gray-600">info@metalkonstruktsii.ru</p>
                  </div>
                </li>
              </ul>
              
              <Button className="bg-primary hover:bg-primary/90 w-full mb-6">
                Построить маршрут
              </Button>
              
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                  <Facebook size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                  <Twitter size={16} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
