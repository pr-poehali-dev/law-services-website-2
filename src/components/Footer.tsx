import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-gold-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col mb-6">
              <span className="font-cormorant text-2xl font-700 text-white leading-tight">Право</span>
              <span className="font-cormorant text-2xl font-600 gold-text-gradient leading-tight tracking-widest uppercase text-sm">Привилегия</span>
            </div>
            <p className="font-golos text-prose-muted text-sm leading-relaxed max-w-xs">
              Юридическая практика в Таганроге и по всей России. Формируем правовую позицию и доводим дело до результата.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-9 h-9 rounded border border-gold-muted flex items-center justify-center text-prose-muted hover:text-gold hover:border-gold transition-colors duration-200">
                <Icon name="MessageCircle" size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded border border-gold-muted flex items-center justify-center text-prose-muted hover:text-gold hover:border-gold transition-colors duration-200">
                <Icon name="Send" size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-cormorant text-gold text-lg font-600 mb-5">Разделы</h4>
            <div className="flex flex-col gap-3">
              {[
                { to: '/about', label: 'О компании' },
                { to: '/services', label: 'Услуги' },
                { to: '/cases', label: 'Кейсы' },
                { to: '/blog', label: 'Блог' },
                { to: '/contacts', label: 'Контакты' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="font-golos text-sm text-prose-muted hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-cormorant text-gold text-lg font-600 mb-5">Контакты</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:+78009999999" className="flex items-center gap-3 text-prose-muted hover:text-gold transition-colors duration-200">
                <Icon name="Phone" size={15} />
                <span className="font-golos text-sm">+7 (800) 999-99-99</span>
              </a>
              <a href="mailto:info@pravo-privilegia.ru" className="flex items-center gap-3 text-prose-muted hover:text-gold transition-colors duration-200">
                <Icon name="Mail" size={15} />
                <span className="font-golos text-sm">info@pravo-privilegia.ru</span>
              </a>
              <div className="flex items-start gap-3 text-prose-muted">
                <Icon name="MapPin" size={15} className="mt-0.5 shrink-0" />
                <span className="font-golos text-sm">Таганрог, Ростовская область</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section-divider mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-golos text-prose-muted text-xs">
            © 2024 Право Привилегия. Все права защищены.
          </p>
          <p className="font-golos text-prose-muted text-xs">
            Политика конфиденциальности
          </p>
        </div>
      </div>
    </footer>
  );
}
