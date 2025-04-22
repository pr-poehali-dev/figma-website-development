import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">СтройТехСервис</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300 transition-colors">Главная</Link></li>
            <li><Link to="/#утепление" className="hover:text-gray-300 transition-colors">Утепление</Link></li>
            <li><Link to="/#фундамент" className="hover:text-gray-300 transition-colors">Фундамент</Link></li>
            <li><Link to="/контакты" className="hover:text-gray-300 transition-colors">Контакты</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
