import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">СтройТехСервис</h3>
            <p className="text-sm">
              Профессиональные строительные услуги с гарантией качества.
              Мы специализируемся на утеплении и строительстве фундаментов 
              различных типов для любых зданий и климатических условий.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-gray-300 transition-colors">Главная</Link></li>
              <li><Link to="/#утепление" className="text-sm hover:text-gray-300 transition-colors">Утепление</Link></li>
              <li><Link to="/#фундамент" className="text-sm hover:text-gray-300 transition-colors">Фундамент</Link></li>
              <li><Link to="/контакты" className="text-sm hover:text-gray-300 transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-sm">Телефон: +7 (XXX) XXX-XX-XX</li>
              <li className="text-sm">Email: info@stroytechservice.ru</li>
              <li className="text-sm">Адрес: г. Москва, ул. Строителей, д. 10</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-700">
          <p className="text-sm text-center">© 2023 СтройТехСервис. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
