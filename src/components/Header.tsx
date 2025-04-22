
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Верхняя панель с контактами */}
        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex items-center space-x-4">
            <a href="tel:+74951234567" className="text-sm flex items-center text-gray-600 hover:text-primary">
              <Phone size={16} className="mr-1" />
              +7 (495) 123-45-67
            </a>
            <a href="mailto:info@metalkonstruktsii.ru" className="text-sm flex items-center text-gray-600 hover:text-primary">
              <Mail size={16} className="mr-1" />
              info@metalkonstruktsii.ru
            </a>
          </div>
          <div>
            <Button variant="ghost" size="sm">RU</Button>
            <Button variant="ghost" size="sm">EN</Button>
          </div>
        </div>
        
        {/* Основная навигация */}
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            {/* Лого компании */}
            <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            <span className="font-bold text-xl">МеталлКонструкции</span>
          </Link>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-700 hover:text-primary">Главная</Link></li>
              <li><Link to="/#преимущества" className="text-gray-700 hover:text-primary">О технологии</Link></li>
              <li><Link to="/#проекты" className="text-gray-700 hover:text-primary">Проекты</Link></li>
              <li><Link to="/#утепление" className="text-gray-700 hover:text-primary">Утепление</Link></li>
              <li><Link to="/#фундамент" className="text-gray-700 hover:text-primary">Фундамент</Link></li>
              <li><Link to="/#контакты" className="text-gray-700 hover:text-primary">Контакты</Link></li>
            </ul>
          </nav>
          
          <Button className="bg-red-500 hover:bg-red-600">
            Заказать расчет
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
