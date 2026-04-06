import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const navLinks = [
  { to: '/about', label: 'О нас' },
  { to: '/services', label: 'Услуги' },
  { to: '/cases', label: 'Кейсы' },
  { to: '/blog', label: 'Блог' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-navy-deep/95 backdrop-blur-md shadow-[0_4px_32px_rgba(0,0,0,0.4)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="font-cormorant text-xl font-700 text-white leading-tight tracking-wide">
              Право
            </span>
            <span className="font-cormorant text-xl font-600 gold-text-gradient leading-tight tracking-widest uppercase text-sm">
              Привилегия
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-golos text-sm tracking-wide transition-colors duration-200 hover:text-gold ${
                  location.pathname === link.to ? 'text-gold' : 'text-prose-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+78009999999"
              className="font-golos text-sm text-prose-secondary hover:text-gold transition-colors duration-200"
            >
              +7 (800) 999-99-99
            </a>
            <Link
              to="/contacts"
              className="btn-gold px-5 py-2.5 rounded text-sm font-golos font-600 text-navy-deep"
            >
              Получить консультацию
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-prose-secondary hover:text-gold transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-deep/98 backdrop-blur-lg border-t border-gold-muted">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-golos text-base transition-colors duration-200 hover:text-gold ${
                  location.pathname === link.to ? 'text-gold' : 'text-prose-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="section-divider pt-4 mt-2 flex flex-col gap-3">
              <a
                href="tel:+78009999999"
                className="font-golos text-prose-secondary text-sm"
              >
                +7 (800) 999-99-99
              </a>
              <Link
                to="/contacts"
                className="btn-gold px-5 py-3 rounded text-center text-sm font-golos font-600 text-navy-deep"
              >
                Получить консультацию
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
