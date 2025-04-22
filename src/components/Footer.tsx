
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="text-lg font-semibold mb-4">О компании</h3>
            <p className="text-gray-600 text-sm">
              Наша компания специализируется на производстве и монтаже бескаркасных металлоконструкций для различных целей.
              Мы предлагаем полный спектр услуг от проектирования до сдачи объекта под ключ.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Главная</Link></li>
              <li><Link to="/#преимущества" className="text-gray-600 hover:text-primary">О технологии</Link></li>
              <li><Link to="/#проекты" className="text-gray-600 hover:text-primary">Проекты</Link></li>
              <li><Link to="/#утепление" className="text-gray-600 hover:text-primary">Утепление</Link></li>
              <li><Link to="/#фундамент" className="text-gray-600 hover:text-primary">Фундамент</Link></li>
              <li><Link to="/#контакты" className="text-gray-600 hover:text-primary">Контакты</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Производство металлоконструкций</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Монтаж бескаркасных ангаров</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Строительство фундаментов</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Утепление сооружений</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-primary">Проектирование объектов</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-gray-600" />
                <span className="text-gray-600">г. Москва, ул. Строителей, 15</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0 text-gray-600" />
                <span className="text-gray-600">+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0 text-gray-600" />
                <span className="text-gray-600">info@metalkonstruktsii.ru</span>
              </li>
              <li className="flex items-center space-x-3 mt-4">
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Twitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-primary">
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            © 2023 МеталлКонструкции. Все права защищены.
          </p>
          <div className="flex space-x-4 text-sm text-gray-600">
            <Link to="/privacy" className="hover:text-primary">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-primary">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
