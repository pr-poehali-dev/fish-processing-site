import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Fish" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-blue-900">
                Океан Продукт
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Главная
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                О компании
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Продукция
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20"
      >
        <div className="absolute inset-0 opacity-20">
          <img
            src="/img/3b334275-e920-4382-8a45-472f86ce096e.jpg"
            alt="Ocean waves"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Свежие морепродукты
            <br />
            <span className="text-blue-200">высочайшего качества</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Современный рыбоперерабатывающий комбинат с 25-летним опытом.
            Поставляем свежую рыбу и морепродукты для ресторанов, магазинов и
            оптовых покупателей.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Каталог продукции
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Icon name="Play" size={20} className="mr-2" />О производстве
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              О нашей компании
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы — ведущий рыбоперерабатывающий комбинат, который объединяет
              традиции и современные технологии
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/img/46f7bc59-9972-4256-ad88-8c9b2a5bb1a6.jpg"
                alt="Современное производство"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="Factory" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Современное производство
                  </h3>
                  <p className="text-gray-600">
                    Высокотехнологичное оборудование европейского уровня
                    обеспечивает безупречное качество продукции
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="Shield" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Контроль качества
                  </h3>
                  <p className="text-gray-600">
                    Строгий контроль на всех этапах производства, сертификация
                    HACCP и ISO 22000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="Truck" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Быстрая доставка
                  </h3>
                  <p className="text-gray-600">
                    Собственная логистическая сеть обеспечивает доставку свежих
                    продуктов в кратчайшие сроки
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наша продукция
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Широкий ассортимент свежей рыбы и морепродуктов для любых
              потребностей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-md flex items-center justify-center mb-4">
                  <Icon name="Fish" size={64} className="text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Свежая рыба
                </CardTitle>
                <CardDescription>
                  Лосось, треска, судак, щука и другие виды свежей рыбы высшего
                  качества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-red-100 to-red-200 rounded-md flex items-center justify-center mb-4">
                  <Icon name="Waves" size={64} className="text-red-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Морепродукты
                </CardTitle>
                <CardDescription>
                  Креветки, крабы, мидии, кальмары — разнообразие морских
                  деликатесов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-md flex items-center justify-center mb-4">
                  <Icon name="Package" size={64} className="text-green-600" />
                </div>
                <CardTitle className="text-xl font-semibold">
                  Готовая продукция
                </CardTitle>
                <CardDescription>
                  Копченая рыба, консервы, полуфабрикаты — готовые к
                  употреблению продукты
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Icon name="ShoppingCart" size={16} className="mr-2" />
                  Заказать
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <img
              src="/img/765509a7-6e98-4f1f-b3ca-f653be44fbae.jpg"
              alt="Ассортимент продукции"
              className="rounded-lg shadow-lg w-full max-w-4xl mx-auto h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Готовы обсудить ваши потребности в свежих морепродуктах
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Адрес
                  </h3>
                  <p className="text-gray-600">
                    г. Мурманск, ул. Портовая, 15
                    <br />
                    Рыбный порт, причал №3
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="Phone" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Телефон
                  </h3>
                  <p className="text-gray-600">
                    +7 (8152) 555-0123
                    <br />
                    +7 (8152) 555-0124
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="Mail" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    info@oceanproduct.ru
                    <br />
                    sales@oceanproduct.ru
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Icon name="Clock" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Время работы
                  </h3>
                  <p className="text-gray-600">
                    Пн-Пт: 08:00 - 20:00
                    <br />
                    Сб-Вс: 09:00 - 18:00
                  </p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>
                  Заполните форму и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Имя
                    </label>
                    <Input placeholder="Ваше имя" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Телефон
                    </label>
                    <Input placeholder="+7 (___) ___-____" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Опишите ваши потребности..."
                    className="min-h-[100px]"
                  />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Icon name="Fish" size={28} className="text-blue-400" />
                <h3 className="text-xl font-bold">Океан Продукт</h3>
              </div>
              <p className="text-gray-400">
                Современный рыбоперерабатывающий комбинат с 25-летним опытом
                работы на рынке морепродуктов.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Свежая рыба
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Морепродукты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Консервы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Копченая рыба
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Производство
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Качество
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Новости
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (8152) 555-0123</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@oceanproduct.ru</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Мурманск, ул. Портовая, 15</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Океан Продукт. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
