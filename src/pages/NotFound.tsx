import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-secondary">
        <div className="text-center max-w-xl px-4">
          <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
          <p className="text-2xl mb-8 text-gray-700">Страница не найдена</p>
          <p className="mb-8 text-gray-600">
            Извините, запрашиваемая страница не существует или была перемещена.
          </p>
          <Link to="/">
            <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded">
              Вернуться на главную
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
