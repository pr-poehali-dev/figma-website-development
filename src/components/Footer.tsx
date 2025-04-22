
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-8 pb-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Логотип и контакты */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <Link to="/" className="block mb-4">
              <img src="/placeholder.svg" alt="Логотип" className="h-10" />
            </Link>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <span>+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <span>info@metalkonstruktsii.ru</span>
              </div>
              <p className="text-gray-600 mt-3">
                г. Москва, ул. Промышленная, 11, стр. 3
              </p>
            </div>
          </div>
          
          {/* Ссылки */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Услуги</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-600 hover:text-primary">Производство ангаров</Link></li>
                  <li><Link to="/" className="text-gray-600 hover:text-primary">Монтаж конструкций</Link></li>
                  <li><Link to="/" className="text-gray-600 hover:text-primary">Утепление</Link></li>
                  <li><Link to="/" className="text-gray-600 hover:text-primary">Устройство фундаментов</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Компания</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-600 hover:text-primary">О компании</Link></li>
                  <li><Link to="/" className="text-gray-600 hover:text-primary">Проекты</Link></li>
                  <li><Link to="/" className="text-gray-600 hover:text-primary">Отзывы</Link></li>
                  <li><Link to="/" className="text-gray-600 hover:text-primary">Контакты</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Форма подписки */}
          <div className="w-full md:w-1/4">
            <h4 className="font-semibold mb-4">Подписаться на новости</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="border border-gray-300 px-3 py-2 flex-grow focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2">
                →
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Подписываясь, вы соглашаетесь с условиями обработки персональных данных
            </p>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-600">
          <p>© 2023 МеталлКонструкции. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary">Политика конфиденциальности</Link>
            <Link to="/terms" className="hover:text-primary">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
