
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

const RequestForm: React.FC = () => {
  return (
    <section className="py-16 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-primary mb-10">ОТПРАВЬТЕ НАМ<br />ТЕХНИЧЕСКОЕ ЗАДАНИЕ</h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <p className="text-gray-600 mb-6">
                Заполните форму, и наш менеджер свяжется с вами в ближайшее время для уточнения деталей проекта.
              </p>
              
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (___) ___-__-__" />
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Введите ваш email" />
                </div>
                
                <div>
                  <Label htmlFor="message">Техническое задание</Label>
                  <Textarea id="message" placeholder="Опишите ваш проект..." className="min-h-32" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm text-gray-500">
                    Я согласен на обработку персональных данных
                  </Label>
                </div>
                
                <Button type="submit" className="w-full bg-red-500 hover:bg-red-600">
                  ОТПРАВИТЬ
                </Button>
              </form>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 hidden md:block">
            <div className="h-full bg-cover bg-center rounded-md" 
                 style={{backgroundImage: "url('/placeholder.svg')"}}></div>
          </div>
        </div>
      </div>
      
      {/* Декоративная линия */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200"></div>
    </section>
  );
};

export default RequestForm;
