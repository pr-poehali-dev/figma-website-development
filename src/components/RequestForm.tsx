
import React from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const RequestForm: React.FC = () => {
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-8">
              ОТПРАВЬТЕ НАМ<br />
              ТЕХНИЧЕСКОЕ ЗАДАНИЕ
            </h2>
            
            <div className="bg-light p-6 shadow-md">
              <p className="text-sm text-gray-700 mb-6">
                Пожалуйста, опишите, для каких целей вам нужен ангар, какие размеры конструкции вас интересуют, и наши специалисты свяжутся с вами для консультации и расчета стоимости.
              </p>
              
              <form>
                <div className="space-y-4 mb-6">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full border-gray-300 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Номер телефона" 
                      className="w-full border-gray-300 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full border-gray-300 focus:border-primary"
                    />
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Техническое задание" 
                      className="w-full min-h-[120px] border-gray-300 focus:border-primary"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" className="mt-1" />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      Я согласен с условиями обработки персональных данных
                    </label>
                  </div>
                </div>
                
                <Button type="submit" className="w-full md:w-auto bg-primary hover:bg-primary/90">
                  ОТПРАВИТЬ
                </Button>
              </form>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-8">
            <div className="h-full bg-cover bg-center" 
                 style={{backgroundImage: "url('/placeholder.svg')"}}>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
