import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const allPages = [
  { to: '/about', label: 'О компании' },
  { to: '/practice', label: 'Практика' },
  { to: '/services', label: 'Услуги' },
  { to: '/cases', label: 'Кейсы' },
  { to: '/how-we-work', label: 'Как мы работаем' },
  { to: '/pricing', label: 'Стоимость' },
  { to: '/blog', label: 'Блог' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#081629', borderTop: '1px solid rgba(200,163,95,0.15)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-baseline gap-2 mb-5 inline-flex">
              <span className="font-cormorant text-2xl font-semibold text-white">Право</span>
              <span className="font-cormorant text-[13px] font-medium tracking-[0.2em] uppercase"
                style={{ background: 'linear-gradient(135deg,#C8A35F,#DDB97A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Привилегия
              </span>
            </Link>
            <p className="font-golos text-[#8A9AB5] text-sm leading-relaxed max-w-xs mt-1">
              Юридическая практика в Таганроге и по всей России. Формируем правовую позицию и доводим дело до результата.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href="#"
                className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:text-[#C8A35F]"
                style={{ border: '1px solid rgba(200,163,95,0.2)', color: '#8A9AB5' }}>
                <Icon name="MessageCircle" size={15} />
              </a>
              <a href="#"
                className="w-9 h-9 rounded flex items-center justify-center transition-all duration-200 hover:text-[#C8A35F]"
                style={{ border: '1px solid rgba(200,163,95,0.2)', color: '#8A9AB5' }}>
                <Icon name="Send" size={15} />
              </a>
            </div>
          </div>

          {/* Pages — two columns */}
          <div className="md:col-span-4">
            <h4 className="font-cormorant text-[#C8A35F] text-base font-semibold mb-5 tracking-wide">Разделы сайта</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {allPages.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-golos text-[13px] text-[#8A9AB5] hover:text-[#C8A35F] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div className="md:col-span-4">
            <h4 className="font-cormorant text-[#C8A35F] text-base font-semibold mb-5 tracking-wide">Контакты</h4>
            <div className="flex flex-col gap-3.5">
              <a href="tel:+78009999999"
                className="flex items-center gap-3 text-[#8A9AB5] hover:text-[#C8A35F] transition-colors duration-200">
                <Icon name="Phone" size={14} />
                <span className="font-golos text-sm">+7 (800) 999-99-99</span>
              </a>
              <a href="mailto:info@pravo-privilegia.ru"
                className="flex items-center gap-3 text-[#8A9AB5] hover:text-[#C8A35F] transition-colors duration-200">
                <Icon name="Mail" size={14} />
                <span className="font-golos text-sm">info@pravo-privilegia.ru</span>
              </a>
              <div className="flex items-start gap-3 text-[#8A9AB5]">
                <Icon name="MapPin" size={14} className="mt-0.5 shrink-0" />
                <span className="font-golos text-sm">Таганрог, Ростовская область</span>
              </div>
              <div className="flex items-start gap-3 text-[#8A9AB5]">
                <Icon name="Clock" size={14} className="mt-0.5 shrink-0" />
                <span className="font-golos text-sm">Пн–Пт: 9:00–19:00, Сб: 10:00–15:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: '1px solid rgba(200,163,95,0.1)' }}>
          <p className="font-golos text-[#8A9AB5] text-xs">© 2024 Право Привилегия. Все права защищены.</p>
          <p className="font-golos text-[#8A9AB5] text-xs cursor-pointer hover:text-[#C8A35F] transition-colors duration-200">
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  );
}
