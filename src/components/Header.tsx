
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="mr-8">
              <img src="/placeholder.svg" alt="Логотип" className="h-12" />
            </Link>
            
            <nav className="hidden lg:block">
              <ul className="flex space-x-6">
                <li><Link to="/" className="text-gray-800 hover:text-primary text-sm">Главная</Link></li>
                <li><Link to="/#преимущества" className="text-gray-800 hover:text-primary text-sm">Преимущества технологии</Link></li>
                <li>
                  <Link to="/#проекты" className="text-gray-800 hover:text-primary text-sm border border-primary px-3 py-1 rounded">
                    Реализованные проекты
                  </Link>
                </li>
                <li><Link to="/#утепление" className="text-gray-800 hover:text-primary text-sm">Утепление</Link></li>
                <li><Link to="/#фундамент" className="text-gray-800 hover:text-primary text-sm">Фундамент</Link></li>
                <li><Link to="/#контакты" className="text-gray-800 hover:text-primary text-sm">Контакты</Link></li>
                <li><Link to="/о-компании" className="text-gray-800 hover:text-primary text-sm">О компании</Link></li>
              </ul>
            </nav>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <Search size={18} className="text-gray-500 mr-2" />
            </div>
            
            <div className="flex items-center">
              <a href="tel:+74951234567" className="text-sm flex items-center hover:text-primary">
                <Phone size={18} className="mr-1" />
                <span>8 (495) 123-45-67</span>
              </a>
            </div>
            
            <Button className="bg-primary hover:bg-primary/90 text-white text-sm px-4 py-1 h-auto">
              Заказать звонок
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
